import Link from 'next/link';
import type { Instructor } from '@/src/shared/types';
import styles from './InstructorCard.module.css';

interface InstructorCardProps {
  instructor: Instructor;
}

export function InstructorCard({ instructor }: InstructorCardProps) {
  return (
    <div className={styles.instructorCard}>
      <div className={styles.instructorLeft}>
        <div className={styles.instructorAvatar}>{instructor.name.charAt(0)}</div>
        <div>
          <Link
            href={`/instructores/${instructor.username}`}
            className={styles.instructorName}
          >
            {instructor.name}
          </Link>
          <p className={styles.instructorRole}>{instructor.role}</p>
        </div>
      </div>
      <div className={styles.instructorStats}>
        <div className={styles.instructorStat}>
          <span className={styles.instructorStatValue}>
            {instructor.studentsCount.toLocaleString()}
          </span>
          <span className={styles.instructorStatLabel}>estudiantes</span>
        </div>
        <div className={styles.instructorStat}>
          <span className={styles.instructorStatValue}>{instructor.coursesCount}</span>
          <span className={styles.instructorStatLabel}>cursos</span>
        </div>
        <div className={styles.instructorStat}>
          <span className={styles.instructorStatValue}>{instructor.rating}</span>
          <span className={styles.instructorStatLabel}>rating</span>
        </div>
      </div>
      <p className={styles.instructorBio}>{instructor.bio}</p>
    </div>
  );
}
