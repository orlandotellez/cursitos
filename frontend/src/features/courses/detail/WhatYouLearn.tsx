import { CheckCircle2 } from 'lucide-react';
import styles from './WhatYouLearn.module.css';

const LEARN_ITEMS = [
  'Diseñar sistemas mantenibles con arquitectura limpia',
  'Aplicar patrones de diseño en proyectos reales',
  'Implementar pruebas automatizadas',
  'Optimizar el rendimiento de aplicaciones',
  'Trabajar con bases de datos y caché',
  'Desplegar aplicaciones en producción',
];

export function WhatYouLearn() {
  return (
    <div className={styles.learnGrid}>
      {LEARN_ITEMS.map((item, i) => (
        <div key={i} className={styles.learnItem}>
          <CheckCircle2 size={18} className={styles.learnIcon} />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}
