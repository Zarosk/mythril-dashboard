import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date));
}

export function formatRelative(date: string): string {
  const now = new Date();
  const then = new Date(date);
  const diff = now.getTime() - then.getTime();

  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;

  return formatDate(date);
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}

export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    pending: 'badge-warning',
    approved: 'badge-info',
    running: 'badge-info',
    completed: 'badge-success',
    failed: 'badge-error',
    paused: 'badge-warning',
    rejected: 'badge-error',
  };
  return colors[status] || 'badge-info';
}

export function getStatusIcon(status: string): string {
  const icons: Record<string, string> = {
    pending: 'clock',
    approved: 'check',
    running: 'loader',
    completed: 'check-circle',
    failed: 'x-circle',
    paused: 'pause',
    rejected: 'x',
  };
  return icons[status] || 'help-circle';
}

// Loading messages (forge themed)
export const loadingMessages = [
  'Forging your dashboard...',
  'Mining mithril from the depths...',
  'Heating the forge...',
  'Crafting components...',
  'Tempering the interface...',
];

export function getRandomLoadingMessage(): string {
  return loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
}
