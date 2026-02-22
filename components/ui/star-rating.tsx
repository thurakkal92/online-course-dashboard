import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
}

export default function StarRating({ rating, reviewCount }: StarRatingProps) {
  return (
    <div className="flex items-center gap-1">
      <Star className="w-4 h-4 fill-warning text-warning" />
      <span className="text-caption-1 text-text-default">
        {rating.toFixed(1)}
      </span>
      {reviewCount !== undefined && (
        <span className="text-sm text-text-default">({reviewCount})</span>
      )}
    </div>
  );
}
