import { Check } from "lucide-react";
import styles from "./PricingSection.module.css"
import Link from "next/link";
import { PricingPlan } from "@/src/shared/types";

interface PricingSecitonProps {
  pricingPlans: PricingPlan[]
}

export const PricingSection = ({ pricingPlans }: PricingSecitonProps) => {
  return (
    <section className={styles.section} id="pricing">
      <div className={styles.sectionInner}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Precios simples</h2>
          <p className={styles.sectionSubtitle}>
            Elige el plan que mejor se adapte a tu aprendizaje
          </p>
        </div>
        <div className={styles.pricingGrid}>
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`${styles.pricingCard} ${plan.highlighted ? styles.pricingHighlighted : ''}`}
            >
              {plan.highlighted && (
                <span className={styles.pricingPopular}>Más popular</span>
              )}
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingName}>{plan.name}</h3>
                <p className={styles.pricingDesc}>{plan.description}</p>
              </div>
              <div className={styles.pricingPrice}>
                <span className={styles.pricingAmount}>
                  {plan.price === 0 ? 'Gratis' : `$${plan.price}`}
                </span>
                <span className={styles.pricingPeriod}>{plan.period}</span>
              </div>
              <ul className={styles.pricingFeatures}>
                {plan.features.map((feature) => (
                  <li key={feature} className={styles.pricingFeature}>
                    <Check size={16} className={styles.pricingCheck} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/registrarse"
                className={`${styles.pricingCta} ${plan.highlighted ? styles.pricingCtaPrimary : styles.pricingCtaSecondary}`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


