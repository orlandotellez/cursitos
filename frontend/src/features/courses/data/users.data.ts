import type { User } from '@/src/shared/types';

export const mockUsers: User[] = [
  { id: 'u-1', name: 'Sofia Martínez', email: 'sofia@email.com', avatar: '', role: 'student', status: 'active', joinedAt: '2025-06-15', bio: 'Full-stack developer en formación' },
  { id: 'u-2', name: 'Diego Ramírez', email: 'diego@email.com', avatar: '', role: 'student', status: 'active', joinedAt: '2025-08-20' },
  { id: 'u-3', name: 'Valentina Torres', email: 'valentina@email.com', avatar: '', role: 'student', status: 'active', joinedAt: '2025-09-01' },
  { id: 'u-4', name: 'Martín López', email: 'martin@cursinet.com', avatar: '', role: 'instructor', status: 'active', joinedAt: '2024-03-01', bio: 'Arquitecto de software con 15+ años' },
  { id: 'u-5', name: 'Laura García', email: 'laura@cursinet.com', avatar: '', role: 'instructor', status: 'active', joinedAt: '2024-01-15', bio: 'Full-stack developer' },
  { id: 'u-6', name: 'Admin User', email: 'admin@cursinet.com', avatar: '', role: 'admin', status: 'active', joinedAt: '2024-01-01' },
  { id: 'u-7', name: 'Pedro Sánchez', email: 'pedro@email.com', avatar: '', role: 'student', status: 'suspended', joinedAt: '2025-04-10' },
  { id: 'u-8', name: 'Camila Herrera', email: 'camila@email.com', avatar: '', role: 'student', status: 'active', joinedAt: '2025-11-05' },
  { id: 'u-9', name: 'Carlos Ruiz', email: 'carlos@cursinet.com', avatar: '', role: 'instructor', status: 'active', joinedAt: '2024-06-01' },
  { id: 'u-10', name: 'Ana Jiménez', email: 'ana@cursinet.com', avatar: '', role: 'instructor', status: 'active', joinedAt: '2024-04-01' },
];
