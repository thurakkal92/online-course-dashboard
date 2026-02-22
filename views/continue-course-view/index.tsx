"use client";

import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Carousel from "@/components/ui/carousel";
import ProgressBar from "@/components/ui/progress-bar";
import StarRating from "@/components/ui/star-rating";
import { useBreakpoint } from "@/hooks/use-break-point";
import { ACTIVE_COURSES } from "@/lib/constants";
import { ActiveCourse } from "@/types";
import { ArrowRight, Clock, PlayCircle } from "lucide-react";

function buildCourseCard(course: ActiveCourse) {
  return (
    <Card
      key={course.id}
      imageSrc={course.imageSrc}
      imageAlt={course.imageAlt}
      badge={<Badge text={course.category} />}
      title={course.title}
      subtitle={course.subtitle}
      headerContent={
        <div className="flex justify-between items-center">
          <Badge text={course.status} variant={course.statusVariant} />
          <StarRating rating={course.rating} reviewCount={course.reviewCount} />
        </div>
      }
      cardContent={
        <ProgressBar
          variant={course.progressVariant}
          progress={course.progress}
          label={`${course.progress}% progress`}
          sublabel={`${course.completedLessons}/${course.totalLessons} Lessons`}
        />
      }
      footerContent={
        <>
          <div className="flex items-center gap-1">
            <Clock className="w-5 h-5 text-text-default" />
            <span className="lg:text-body2 text-caption-1 text-text-default">
              {course.hoursLeft > 0
                ? `${course.hoursLeft} hours left`
                : "Completed"}
            </span>
          </div>
          <div className="hidden lg:block">
            <Button
              variant="text"
              size="md"
              rightIcon={<PlayCircle className="w-6 h-6" />}
            >
              {course.progress === 100 ? "Review" : "Continue"}
            </Button>
          </div>
          <div className="block lg:hidden">
            <Button
              variant="text"
              size="sm"
              rightIcon={<PlayCircle className="w-5 h-5" />}
            >
              {course.progress === 100 ? "Review" : "Continue"}
            </Button>
          </div>
        </>
      }
    />
  );
}

export default function ContinueCourseView() {
  const slidesPerView = useBreakpoint({
    default: 1,
    sm: 2,
    md: 2,
    lg: 3,
    xl: 4,
  });

  return (
    <section className="w-full mt-6 md:8 lg:mt-14">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-subtitle-2 lg:text-h3 text-text-default">
            Continue learning
          </h2>
          <p className="text-body-2 lg:text-body-1 text-text-default">
            Pickup where you left off
          </p>
        </div>
        <Button
          variant="text"
          size="sm"
          rightIcon={<ArrowRight className="lg:w-5 lg:h-5 w-4 h-4" />}
        >
          View all
        </Button>
      </div>
      <div className="pt-3 lg:pt-5">
        <Carousel
          slidesPerView={slidesPerView}
          showArrows
          gap={24}
          cards={ACTIVE_COURSES.map(buildCourseCard)}
        />
      </div>
    </section>
  );
}
