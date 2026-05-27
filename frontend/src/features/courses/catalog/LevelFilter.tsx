'use client';

import type { Level } from '@/src/shared/types';
import styles from './LevelFilter.module.css';

interface LevelOption {
  value: Level | '';
  label: string;
}

interface LevelFilterProps {
  levels: LevelOption[];
  selected: Level | '';
  onChange: (level: Level | '') => void;
}

export function LevelFilter({ levels, selected, onChange }: LevelFilterProps) {
  return (
    <div className={styles.levelGroup}>
      {levels.map((lvl) => (
        <button
          key={lvl.value}
          className={`${styles.levelBtn} ${selected === lvl.value ? styles.levelBtnActive : ''}`}
          onClick={() => onChange(lvl.value as Level | '')}
        >
          {lvl.label}
        </button>
      ))}
    </div>
  );
}
