import type { CourseCardData } from './course.types';

export interface Enrollment {
  id: string;
  courseId: string;
  course: CourseCardData;
  progress: number;
  enrolledAt: string;
  lastAccessedAt: string;
  completedLessons: number;
  totalLessons: number;
}
