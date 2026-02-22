import {
  ActiveCourse,
  CourseCategory,
  RecommendedCourse,
  SearchCourse,
} from "@/types";

export const HEADER_NAV_ITEMS = ["Dashboard", "My courses"] as const;
export const ACTIVE_COURSES: ActiveCourse[] = [
  {
    id: "course-1",
    imageSrc:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop&crop=entropy",
    imageAlt: "React development course",
    category: "Frontend",
    title: "React 18 & Next.js 14 — The Complete Guide",
    subtitle: "Build production-ready apps with modern React patterns",
    status: "In Progress",
    statusVariant: "warning",
    rating: 4.8,
    reviewCount: 3421,
    progress: 38,
    progressVariant: "warning",
    totalLessons: 52,
    completedLessons: 20,
    hoursLeft: 18,
  },
  {
    id: "course-2",
    imageSrc:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=450&fit=crop&crop=entropy",
    imageAlt: "Node.js backend course",
    category: "Backend",
    title: "Node.js Microservices with Docker & Kubernetes",
    subtitle: "Design scalable APIs and deploy with container orchestration",
    status: "In Progress",
    statusVariant: "warning",
    rating: 4.6,
    reviewCount: 1874,
    progress: 12,
    progressVariant: "warning",
    totalLessons: 68,
    completedLessons: 8,
    hoursLeft: 34,
  },
  {
    id: "course-4",
    imageSrc:
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=450&fit=crop&crop=entropy",
    imageAlt: "Flutter mobile development",
    category: "Mobile",
    title: "Flutter & Dart — Build iOS & Android Apps",
    subtitle: "Cross-platform mobile development from scratch to store",
    status: "In Progress",
    statusVariant: "success",
    rating: 4.5,
    reviewCount: 2103,
    progress: 65,
    progressVariant: "success",
    totalLessons: 44,
    completedLessons: 29,
    hoursLeft: 11,
  },
  {
    id: "course-5",
    imageSrc:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=450&fit=crop&crop=entropy",
    imageAlt: "Machine learning course",
    category: "AI & ML",
    title: "Machine Learning A–Z with Python & TensorFlow",
    subtitle: "Master supervised, unsupervised learning and neural networks",
    status: "In Progress",
    statusVariant: "warning",
    rating: 4.9,
    reviewCount: 5670,
    progress: 22,
    progressVariant: "warning",
    totalLessons: 85,
    completedLessons: 19,
    hoursLeft: 47,
  },
  {
    id: "course-6",
    imageSrc:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=450&fit=crop&crop=entropy",
    imageAlt: "Banking and fintech course",
    category: "Banking",
    title: "FinTech Fundamentals: Digital Banking & Payments",
    subtitle: "Understand open banking, blockchain, and payment infrastructure",
    status: "In Progress",
    statusVariant: "warning",
    rating: 4.4,
    reviewCount: 741,
    progress: 55,
    progressVariant: "warning",
    totalLessons: 36,
    completedLessons: 20,
    hoursLeft: 9,
  },
];

export const RECOMMENDED_COURSES: RecommendedCourse[] = [
  {
    id: "rec-1",
    imageSrc:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop&crop=entropy",
    imageAlt: "React and Next.js course",
    category: "Frontend",
    title: "React 18 & Next.js 14 — The Complete Guide",
    subtitle: "Build production-ready apps with modern React patterns",
    rating: 4.8,
    reviewCount: 3421,
    price: 45,
    isTrending: true,
    isLimitedOffer: true,
  },
  {
    id: "rec-2",
    imageSrc:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=450&fit=crop&crop=entropy",
    imageAlt: "TypeScript advanced course",
    category: "Frontend",
    title: "TypeScript Advanced Patterns for Professionals",
    subtitle: "Generics, decorators, utility types and real-world architecture",
    rating: 4.7,
    reviewCount: 2108,
    price: 39,
    isTrending: true,
    isLimitedOffer: true,
  },
  {
    id: "rec-3",

    imageSrc:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop&crop=entropy",
    imageAlt: "Node.js and Kubernetes course",
    category: "Backend",
    title: "Node.js Microservices with Docker & Kubernetes",
    subtitle: "Design scalable APIs and deploy with container orchestration",
    rating: 4.6,
    reviewCount: 1874,
    price: 55,
    isTrending: true,
    isLimitedOffer: true,
  },
  {
    id: "rec-4",
    imageSrc:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop&crop=entropy",
    imageAlt: "Flutter mobile development course",
    category: "Mobile",
    title: "Flutter & Dart — Build iOS & Android Apps",
    subtitle: "Cross-platform mobile development from scratch to store",
    rating: 4.5,
    reviewCount: 2103,
    price: 45,
    isTrending: false,
    isLimitedOffer: true,
  },
  {
    id: "rec-5",
    imageSrc:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=450&fit=crop&crop=entropy",
    imageAlt: "Machine learning with Python course",
    category: "AI & ML",
    title: "Machine Learning A–Z with Python & TensorFlow",
    subtitle: "Master supervised, unsupervised learning and neural networks",
    rating: 4.9,
    reviewCount: 5670,
    price: 65,
    isTrending: true,
    isLimitedOffer: false,
  },
  {
    id: "rec-6",
    imageSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop&crop=entropy",
    imageAlt: "Business analytics course",
    category: "Business",
    title: "Business Analytics with Excel & Power BI",
    subtitle: "Turn raw data into executive-level insights and dashboards",
    rating: 4.4,
    reviewCount: 988,
    price: 35,
    isTrending: false,
    isLimitedOffer: true,
  },
  {
    id: "rec-7",
    imageSrc:
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&h=450&fit=crop&crop=entropy",
    imageAlt: "FinTech and digital banking course",
    category: "Banking",
    title: "FinTech Fundamentals: Digital Banking & Payments",
    subtitle: "Understand open banking, blockchain, and payment infrastructure",
    rating: 4.4,
    reviewCount: 741,
    price: 49,
    isTrending: false,
    isLimitedOffer: true,
  },
  {
    id: "rec-8",
    imageSrc:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=450&fit=crop&crop=entropy",
    imageAlt: "Python for data science course",
    category: "AI & ML",
    title: "Python for Data Science & Visualization",
    subtitle: "Pandas, NumPy, Matplotlib and real-world data projects",
    rating: 4.7,
    reviewCount: 4312,
    price: 42,
    isTrending: true,
    isLimitedOffer: false,
  },
];

export const COURSE_CATEGORIES: ("All" | CourseCategory)[] = [
  "All",
  "Frontend",
  "Backend",
  "Mobile",
  "AI & ML",
];

export const RECENT_SEARCHES: SearchCourse[] = [
  {
    id: "recent-1",
    imageSrc:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=80&h=80&fit=crop&crop=entropy",
    imageAlt: "Advanced React patterns course",
    title: "Advanced React Patterns",
    category: "Frontend development",
    rating: 4.8,
  },
  {
    id: "recent-2",
    imageSrc:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=80&h=80&fit=crop&crop=entropy",
    imageAlt: "Machine learning course",
    title: "Machine Learning A–Z with Python",
    category: "AI & ML",
    rating: 4.9,
  },
  {
    id: "recent-3",
    imageSrc:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=80&h=80&fit=crop&crop=entropy",
    imageAlt: "Node.js microservices course",
    title: "Node.js Microservices & Docker",
    category: "Backend development",
    rating: 4.6,
  },
];

export const POPULAR_SEARCHES: SearchCourse[] = [
  {
    id: "popular-1",
    imageSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop&crop=entropy",
    imageAlt: "System design course",
    title: "System Design for Senior Engineers",
    category: "Backend development",
    rating: 4.9,
  },
  {
    id: "popular-2",
    imageSrc:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=80&h=80&fit=crop&crop=entropy",
    imageAlt: "Python for beginners course",
    title: "Python for Beginners — Zero to Hero",
    category: "AI & ML",
    rating: 4.7,
  },
  {
    id: "popular-3",
    imageSrc:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=80&h=80&fit=crop&crop=entropy",
    imageAlt: "AWS certification course",
    title: "AWS Solutions Architect Certification",
    category: "Cloud & DevOps",
    rating: 4.8,
  },
];
