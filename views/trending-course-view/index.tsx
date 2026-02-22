"use client";

import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Carousel from "@/components/ui/carousel";
import StarRating from "@/components/ui/star-rating";
import { useBreakpoint } from "@/hooks/use-break-point";
import { COURSE_CATEGORIES, RECOMMENDED_COURSES } from "@/lib/constants";
import { CourseCategory, RecommendedCourse } from "@/types";
import { ArrowRight } from "lucide-react";

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
  const slidesPerView = useBreakpoint({ default: 1, sm: 2, md: 2, xl: 4 });

  return (
    <section className="w-full mt-6 md:mt-8 lg:mt-14">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-subtitle-2 lg:text-h3 text-text-default">
            Trending courses
          </h2>
        </div>
        <Button
          variant="text"
          size="sm"
          rightIcon={<ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />}
        >
          View all
        </Button>
      </div>
      <div className="pt-3 lg:pt-5">
        <Carousel
          slidesPerView={slidesPerView}
          showArrows
          gap={24}
          cards={RECOMMENDED_COURSES.map(buildRecommendedCard)}
        />
      </div>
    </section>
  );
}
