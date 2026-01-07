export interface User {
  id: string;
  discordId: string;
  username: string;
  avatar: string;
  plan: 'free' | 'lite' | 'pro' | 'team';
  createdAt: string;
}

export interface Build {
  id: string;
  taskId: string;
  project: string;
  description: string;
  status: BuildStatus;
  progress: number;
  createdAt: string;
  completedAt?: string;
  files?: BuildFile[];
  error?: string;
}

export type BuildStatus =
  | 'pending'
  | 'approved'
  | 'running'
  | 'completed'
  | 'failed'
  | 'paused'
  | 'rejected';

export interface BuildFile {
  name: string;
  path: string;
  size: number;
}

export interface BrainNote {
  id: string;
  content: string;
  category?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Settings {
  apiKeyConfigured: boolean;
  apiKeyLastFour?: string;
  githubConnected: boolean;
  githubRepo?: string;
  notifications: NotificationSettings;
  autoApprove: boolean;
}

export interface NotificationSettings {
  buildComplete: boolean;
  buildFailed: boolean;
  approvalNeeded: boolean;
}

export interface Stats {
  totalBuilds: number;
  buildsThisMonth: number;
  brainNotes: number;
  successRate: number;
}
