'use client';

import { useParams, useRouter } from 'next/navigation';
import { getCourseBySlug } from '@/src/features/courses/data';
import { ErrorState } from '@/src/shared/components/ErrorState';
import { useEnrollmentStore } from '@/src/shared/store/useEnrollmentStore';
import { CourseHero } from '@/src/features/courses/detail/CourseHero';
import { CourseDescription } from '@/src/features/courses/detail/CourseDescription';
import { WhatYouLearn } from '@/src/features/courses/detail/WhatYouLearn';
import { CurriculumAccordion } from '@/src/features/courses/detail/CurriculumAccordion';
import { InstructorCard } from '@/src/features/courses/detail/InstructorCard';
import { ReviewSection } from '@/src/features/courses/detail/ReviewSection';
import styles from './page.module.css';

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const course = getCourseBySlug(slug);
  const { enroll, isEnrolled } = useEnrollmentStore();
  const enrolled = course ? isEnrolled(course.id) : false;

  if (!course) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <ErrorState error="Curso no encontrado" />
        </div>
      </div>
    );
  }

  const firstLessonId = course.modules[0]?.lessons[0]?.id;
  const firstLessonHref = `/aprender/${course.id}/${firstLessonId}`;

  const handleEnroll = () => {
    enroll(course.id);
    router.push(firstLessonHref);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <CourseHero
          course={course}
          enrolled={enrolled}
          firstLessonHref={firstLessonHref}
          onEnroll={handleEnroll}
        />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Descripción</h2>
          <CourseDescription description={course.description} />
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Lo que aprenderás</h2>
          <WhatYouLearn />
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contenido del curso</h2>
          <CurriculumAccordion course={course} enrolled={enrolled} />
          {!enrolled && (
            <p className={styles.curriculumHint}>
              Inscribite para acceder a todas las lecciones
            </p>
          )}
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Tu instructor</h2>
          <InstructorCard instructor={course.instructor} />
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Reseñas</h2>
          <ReviewSection />
        </section>
      </div>
    </div>
  );
}
