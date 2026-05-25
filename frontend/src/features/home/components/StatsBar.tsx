import { Stat } from "@/src/shared/types";
import styles from "./StatsBar.module.css"

interface StasBar {
  stats: Stat[]
}

export const StatsBar = ({ stats }: StasBar) => {
  return (
    <section className={styles.stats}>
      <div className={styles.statsInner}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.statItem}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}


