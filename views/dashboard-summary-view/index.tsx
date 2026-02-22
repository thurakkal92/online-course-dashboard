import SummaryCard from "@/components/features/summary-card";
import { Award, BookOpenText, Clock, TrendingDown } from "lucide-react";

export default function DashboardSummaryView() {
  return (
    <section className="w-full mt-4 lg:mt-7 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
      <SummaryCard
        title="12"
        description="Courses pending"
        shortDescription="Pending"
        icon={<TrendingDown className="w-6 h-6 m-auto" />}
        variant="error"
      />

      <SummaryCard
        title="6"
        description="Courses completed"
        icon={<Award className="w-6 h-6 m-auto" />}
        variant="success"
        shortDescription="Completed"
      />

      <SummaryCard
        title="3"
        description="Courses in progress"
        icon={<BookOpenText className="w-6 h-6 m-auto" />}
        variant="warning"
        shortDescription="In progress"
      />

      <SummaryCard
        title="124"
        description="Hours learned"
        icon={<Clock className="w-6 h-6 m-auto" />}
        variant="info"
        shortDescription="Hours"
      />
    </section>
  );
}
