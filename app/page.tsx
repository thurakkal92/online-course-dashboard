import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import LoadingGate from "@/components/common/loading-gate";
import PersonalizeFeedBanner from "@/components/features/personalize-feed-banner";

import { getTimeGreeting } from "@/lib/utils";
import ContinueCourseView from "@/views/continue-course-view";
import DashboardSummaryView from "@/views/dashboard-summary-view";
import RecommendedCourseView from "@/views/recommended-course-view";
import TrendingCourseView from "@/views/trending-course-view";

export default function Home() {
  const { greeting } = getTimeGreeting("Nabeel Thurakkal");

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-bg-default font-sans">
      <Header />
      <main className="container max-auto min-h-screen w-full items-center justify-between sm:items-start px-4">
        <section>
          <h1 className="lg:text-h2 text-subtitle-2 text-text-bold pt-5 lg:pt-10">
            {greeting}
          </h1>
          <p className="text-body-2 lg:text-body-1 text-text-default">
            Continue where you left off
          </p>
        </section>
        <DashboardSummaryView />
        <section className="w-full mt-4 lg:mt-7">
          <PersonalizeFeedBanner />
        </section>
        <LoadingGate>
          <ContinueCourseView />
          <RecommendedCourseView />
          <TrendingCourseView />
        </LoadingGate>
        <div className="h-20" />
      </main>
      <Footer />
    </div>
  );
}
