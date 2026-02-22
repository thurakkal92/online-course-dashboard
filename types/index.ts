export interface ActiveCourse {
  id: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  title: string;
  subtitle: string;
  status: string;
  statusVariant: "default" | "success" | "warning" | "error";
  rating: number;
  reviewCount: number;
  progress: number;
  progressVariant: "success" | "info" | "error" | "warning";
  totalLessons: number;
  completedLessons: number;
  hoursLeft: number;
}

export type CourseCategory =
  | "Frontend"
  | "Backend"
  | "Mobile"
  | "AI & ML"
  | "Banking"
  | "Business";

export interface RecommendedCourse {
  id: string;
  imageSrc: string;
  imageAlt: string;
  category: CourseCategory;
  title: string;
  subtitle: string;
  rating: number;
  reviewCount: number;
  price: number;
  isTrending: boolean;
  isLimitedOffer: boolean;
}

export interface SearchCourse {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  category: string;
  rating: number;
}
