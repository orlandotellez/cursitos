'use client';

import { useState } from 'react';
import {
  BookOpen,
  ChevronDown,
  Play,
  FileText,
  Code2,
  FileQuestion,
  FileType,
  ArrowRight,
  Lock,
} from 'lucide-react';
import Link from 'next/link';
import type { Course, Lesson } from '@/src/shared/types';
import styles from './CurriculumAccordion.module.css';

interface CurriculumAccordionProps {
  course: Course;
  enrolled: boolean;
}

function lessonIcon(type: Lesson['type']) {
  switch (type) {
    case 'video':
      return <Play size={14} />;
    case 'text':
      return <FileText size={14} />;
    case 'code':
      return <Code2 size={14} />;
    case 'quiz':
      return <FileQuestion size={14} />;
    case 'resource':
      return <FileType size={14} />;
  }
}

function formatDuration(minutes: number) {
  if (minutes >= 60) {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return m ? `${h}h ${m}min` : `${h}h`;
  }
  return `${minutes}min`;
}

export function CurriculumAccordion({ course, enrolled }: CurriculumAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const firstLessonId = course.modules[0]?.lessons[0]?.id;

  return (
    <div className={styles.accordion}>
      {course.modules.map((mod) => {
        const isOpen = openId === mod.id;
        return (
          <div
            key={mod.id}
            className={`${styles.accordionItem} ${isOpen ? styles.accordionItemOpen : ''}`}
          >
            <button
              className={styles.accordionTrigger}
              onClick={() => setOpenId(isOpen ? null : mod.id)}
            >
              <div className={styles.accordionTriggerLeft}>
                <BookOpen size={16} />
                <span className={styles.accordionTitle}>{mod.title}</span>
              </div>
              <div className={styles.accordionTriggerRight}>
                <span className={styles.accordionLessons}>
                  {mod.lessons.length} lecciones
                </span>
                <ChevronDown
                  size={16}
                  className={`${styles.accordionChevron} ${isOpen ? styles.accordionChevronOpen : ''}`}
                />
              </div>
            </button>
            {isOpen && (
              <div className={styles.accordionContent}>
                {mod.lessons.map((lesson) => {
                  const isFirst = lesson.id === firstLessonId;
                  const href = enrolled
                    ? `/aprender/${course.id}/${lesson.id}`
                    : isFirst
                      ? '#'
                      : undefined;

                  const content = (
                    <div className={styles.lessonRow}>
                      <div className={styles.lessonLeft}>
                        {lessonIcon(lesson.type)}
                        <span className={styles.lessonTitle}>{lesson.title}</span>
                      </div>
                      <div className={styles.lessonRight}>
                        <span className={styles.lessonDuration}>
                          {formatDuration(lesson.duration)}
                        </span>
                        {!enrolled ? (
                          <Lock size={12} className={styles.lessonLock} />
                        ) : (
                          <ArrowRight size={12} className={styles.lessonPlayIcon} />
                        )}
                      </div>
                    </div>
                  );

                  if (enrolled) {
                    return (
                      <Link
                        key={lesson.id}
                        href={`/aprender/${course.id}/${lesson.id}`}
                        className={styles.lessonRowLink}
                      >
                        {content}
                      </Link>
                    );
                  }

                  return (
                    <div key={lesson.id} className={styles.lessonRowDisabled}>
                      {content}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
