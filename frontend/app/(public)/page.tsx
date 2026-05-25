import { categories, featuredCourses, pricingPlans, stats } from "@/src/features/courses/data";
import { CategoriesGrid } from "@/src/features/home/components/CategoriesGrid";
import { FeaturedCourses } from "@/src/features/home/components/FeaturedCourses";
import { FinalCta } from "@/src/features/home/components/FinalCta";
import { HeroSection } from "@/src/features/home/components/Hero";
import { PricingSection } from "@/src/features/home/components/PricingSection";
import { StatsBar } from "@/src/features/home/components/StatsBar";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar stats={stats} />
      <FeaturedCourses featuredCourses={featuredCourses} />
      <CategoriesGrid categories={categories} />
      <PricingSection pricingPlans={pricingPlans} />
      <FinalCta />
    </>
  );
}
