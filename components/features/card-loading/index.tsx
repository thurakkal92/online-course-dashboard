import Shimmer from "@/components/ui/shimmer";

function ActiveCourseCardSkeleton() {
  return (
    <div className="flex flex-col rounded-2xl border border-border-medium  bg-white overflow-hidden shadow-sm">
      <Shimmer className="w-full aspect-[16/9] rounded-none" />

      <div className="flex flex-col gap-3 p-4">
        <div className="flex items-center justify-between">
          <Shimmer className="h-5 w-20 rounded-full" />
          <Shimmer className="h-4 w-16" />
        </div>

        <div className="flex flex-col gap-1.5">
          <Shimmer className="h-4 w-full" />
          <Shimmer className="h-4 w-3/4" />
        </div>

        <Shimmer className="h-3 w-5/6" />

        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between">
            <Shimmer className="h-3 w-16" />
            <Shimmer className="h-3 w-20" />
          </div>
          <Shimmer className="h-2.5 w-full rounded-full" />
        </div>

        <div className="flex items-center justify-between pt-1">
          <Shimmer className="h-4 w-24" />
          <Shimmer className="h-4 w-20" />
        </div>
      </div>
    </div>
  );
}

function RecommendedCourseCardSkeleton() {
  return (
    <div className="flex flex-col rounded-2xl border border-border-medium bg-white overflow-hidden shadow-sm">
      {/* Image */}
      <Shimmer className="w-full aspect-[16/9] rounded-none" />

      <div className="flex flex-col gap-3 p-4">
        {/* Title */}
        <div className="flex flex-col gap-1.5">
          <Shimmer className="h-4 w-full" />
          <Shimmer className="h-4 w-4/5" />
        </div>

        {/* Subtitle */}
        <Shimmer className="h-3 w-full" />
        <Shimmer className="h-3 w-3/4" />

        {/* Footer: rating + button */}
        <div className="flex items-center justify-between pt-1">
          <Shimmer className="h-4 w-24" />
          <Shimmer className="h-9 w-32 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

function SectionHeaderSkeleton({
  hasViewAll = false,
}: {
  hasViewAll?: boolean;
}) {
  return (
    <div className="flex items-start justify-between mb-5">
      <div className="flex flex-col gap-1.5">
        <Shimmer className="h-6 w-66" />
        <Shimmer className="h-4 w-56" />
      </div>
      {hasViewAll && <Shimmer className="h-4 w-16" />}
    </div>
  );
}

function FilterTabsSkeleton() {
  return (
    <div className="flex items-center gap-2">
      {[60, 80, 72, 64, 72].map((w, i) => (
        <Shimmer key={i} className={`h-8 w-${w} rounded-full`} />
      ))}
    </div>
  );
}

export default function DashboardSkeleton() {
  return (
    <div className="flex flex-col gap-14 w-full pt-4 lg:pt-7">
      {/* Continue Learning */}
      <section>
        <SectionHeaderSkeleton hasViewAll />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <ActiveCourseCardSkeleton key={i} />
          ))}
        </div>
      </section>

      {/* Recommended Courses */}
      <section>
        <div className="flex items-start justify-between mb-5">
          <div className="flex flex-col gap-1.5">
            <Shimmer className="h-6 w-52" />
            <Shimmer className="h-4 w-64" />
          </div>
          <FilterTabsSkeleton />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <RecommendedCourseCardSkeleton key={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
