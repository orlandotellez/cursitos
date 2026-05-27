'use client';

import { Search, X } from 'lucide-react';
import type { RefObject } from 'react';
import styles from './SearchInput.module.css';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  inputRef: RefObject<HTMLInputElement | null>;
}

export function SearchInput({ value, onChange, inputRef }: SearchInputProps) {
  return (
    <div className={styles.searchWrapper}>
      <Search size={18} className={styles.searchIcon} />
      <input
        ref={inputRef}
        type="text"
        placeholder="Buscar cursos..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.searchInput}
      />
      {value && (
        <button className={styles.clearBtn} onClick={() => onChange('')}>
          <X size={16} />
        </button>
      )}
    </div>
  );
}
