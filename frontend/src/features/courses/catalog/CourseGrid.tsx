import { CourseCard } from '@/src/features/courses/components/CourseCard';
import type { CourseCardData } from '@/src/shared/types';
import styles from './CourseGrid.module.css';

interface CourseGridProps {
  courses: CourseCardData[];
}

export function CourseGrid({ courses }: CourseGridProps) {
  return (
    <div className={styles.grid}>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
