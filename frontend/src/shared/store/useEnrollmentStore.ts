'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface EnrollmentState {
  enrolledCourseIds: string[];
  enroll: (courseId: string) => void;
  isEnrolled: (courseId: string) => boolean;
}

export const useEnrollmentStore = create<EnrollmentState>()(
  persist(
    (set, get) => ({
      enrolledCourseIds: [],

      enroll: (courseId: string) => {
        set((state) => {
          if (state.enrolledCourseIds.includes(courseId)) return state;
          return {
            enrolledCourseIds: [...state.enrolledCourseIds, courseId],
          };
        });
      },

      isEnrolled: (courseId: string) => {
        return get().enrolledCourseIds.includes(courseId);
      },
    }),
    {
      name: 'cursinet-enrollments',
    }
  )
);
