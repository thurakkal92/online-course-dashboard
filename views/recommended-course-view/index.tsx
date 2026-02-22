"use client";

import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Carousel from "@/components/ui/carousel";
import Chip from "@/components/ui/chip";
import StarRating from "@/components/ui/star-rating";
import { useBreakpoint } from "@/hooks/use-break-point";
import { COURSE_CATEGORIES, RECOMMENDED_COURSES } from "@/lib/constants";
import { CourseCategory, RecommendedCourse } from "@/types";
import { useState } from "react";

function buildRecommendedCard(course: RecommendedCourse) {
  return (
    <Card
      key={course.id}
      imageSrc={course.imageSrc}
      imageAlt={course.imageAlt}
      badge={course.isTrending ? <Badge text="Trending" /> : undefined}
      imageFooterLabel={course.isLimitedOffer ? "Limited offer" : undefined}
      title={course.title}
      subtitle={course.subtitle}
      footerContent={
        <>
          <StarRating rating={course.rating} reviewCount={course.reviewCount} />
          <div className="hidden lg:block">
            <Button variant="primary" size="md">
              Enroll for <span className="font-bold">${course.price}</span>
            </Button>
          </div>
          <div className="block lg:hidden">
            <Button variant="primary" size="sm">
              Enroll for <span className="font-bold">${course.price}</span>
            </Button>
          </div>
        </>
      }
    />
  );
}

export default function RecommendedCourseView() {
  const [activeCategory, setActiveCategory] = useState<"All" | CourseCategory>(
    "All",
  );
  const slidesPerView = useBreakpoint({
    default: 1,
    sm: 2,
    md: 2,
    lg: 3,
    xl: 4,
  });

  const filtered =
    activeCategory === "All"
      ? RECOMMENDED_COURSES
      : RECOMMENDED_COURSES.filter((c) => c.category === activeCategory);

  return (
    <section className="w-full mt-6 md:mt-8 lg:mt-14">
      <div className="flex items-center flex-wrap justify-between">
        <div>
          <h2 className="text-subtitle-2 lg:text-h3 text-text-default">
            Recommended courses
          </h2>
          <p className="text-body-2 lg:text-body-1 text-text-default">
            Based on your interest and learning history
          </p>
        </div>
        <div className="flex items-center gap-1 lg:gap-2 pt-4 flex-wrap">
          {COURSE_CATEGORIES.map((category) => (
            <Chip
              key={category}
              text={category}
              selected={category === activeCategory}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </div>
      </div>
      <div className="pt-3 lg:pt-5">
        <Carousel
          slidesPerView={slidesPerView}
          showArrows
          gap={24}
          cards={filtered.map(buildRecommendedCard)}
        />
      </div>
    </section>
  );
}
