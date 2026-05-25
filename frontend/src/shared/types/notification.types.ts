export interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'danger';
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
  link?: string;
}
