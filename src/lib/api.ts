import axios from 'axios';
import type { User, Build, BrainNote, Settings, Stats } from '../types';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1';

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('mythril_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('mythril_token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth
export const auth = {
  login: (code: string) => api.post<{ token: string; user: User }>('/auth/discord', { code }),
  me: () => api.get<User>('/auth/me'),
  logout: () => api.post('/auth/logout'),
};

// Builds
export const builds = {
  list: (page = 1, limit = 10) =>
    api.get<{ builds: Build[]; total: number }>('/builds', { params: { page, limit } }),
  get: (id: string) => api.get<Build>(`/builds/${id}`),
  approve: (id: string) => api.post(`/builds/${id}/approve`),
  reject: (id: string) => api.post(`/builds/${id}/reject`),
  download: (id: string) => api.get(`/builds/${id}/download`, { responseType: 'blob' }),
};

// Brain
export const brain = {
  list: (page = 1, limit = 20) =>
    api.get<{ notes: BrainNote[]; total: number }>('/brain', { params: { page, limit } }),
  search: (query: string) =>
    api.get<{ notes: BrainNote[] }>('/brain/search', { params: { q: query } }),
  add: (content: string, category?: string) =>
    api.post<BrainNote>('/brain', { content, category }),
  delete: (id: string) => api.delete(`/brain/${id}`),
};

// Settings
export const settings = {
  get: () => api.get<Settings>('/settings'),
  update: (data: Partial<Settings>) => api.patch<Settings>('/settings', data),
  setApiKey: (key: string) => api.post('/settings/api-key', { key }),
  connectGithub: () => api.get<{ url: string }>('/settings/github/connect'),
  disconnectGithub: () => api.delete('/settings/github'),
};

// Stats
export const stats = {
  get: () => api.get<Stats>('/stats'),
};

export default api;
