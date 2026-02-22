"use client";

import { ReactNode } from "react";
import { Star } from "lucide-react";
import Image from "next/image";

type CardProps = {
  /** Main heading of the card */
  title: ReactNode;
  /** Subheading below the title */
  subtitle: ReactNode;
  /** Slot between the image and the divider — replaces title+subtitle if fully custom */
  cardContent?: ReactNode;
  /** Slot below the divider (left + right) */
  footerContent?: ReactNode;
  /** Slot above the title */
  headerContent?: ReactNode;

  // Image area
  imageSrc?: string;
  imageAlt?: string;
  /** Badge overlaid top-left of the image */
  badge?: ReactNode;
  /** Label overlaid bottom-right of the image */
  imageFooterLabel?: ReactNode;

  onClick?: () => void;
  className?: string;
};

const Card = ({
  title,
  subtitle,
  cardContent,
  footerContent,
  headerContent,
  imageSrc,
  imageAlt = "",
  badge,
  imageFooterLabel,
  onClick,
  className = "",
}: CardProps) => {
  return (
    <div
      onClick={onClick}
      className={[
        "bg-white rounded-2xl cursor-pointer border border-border-default overflow-hidden flex flex-col",
        "shadow-sm hover:shadow-md transition-shadow duration-200",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {imageSrc && (
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
            placeholder="blur"
            loading="lazy"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyNSIgdmlld0JveD0iMCAwIDQwMCAyMjUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyMjUiIGZpbGw9IiNlMWUxZTEiLz48L3N2Zz4="
          />

          {badge && <div className="absolute top-3 left-3">{badge}</div>}

          {imageFooterLabel && (
            <div className="absolute bottom-0 right-0 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-tl-xl">
              <span className="text-caption-2 lg:text-body2 text-default">
                {imageFooterLabel}
              </span>
            </div>
          )}
        </div>
      )}

      <div className="flex flex-col flex-1 px-4 pt-4 pb-4 gap-3">
        <div className="flex flex-col">
          {headerContent ? <div className="pb-3">{headerContent}</div> : null}
          <h3 className="text-body-1 font-medium text-text-bold line-clamp-1 lg:line-clamp-2">
            {title}
          </h3>
          <p className="text-caption-1 lg:text-body2 text-text-default line-clamp-1 lg:line-clamp-2">
            {subtitle}
          </p>
          {cardContent ? <div className="py-3">{cardContent}</div> : null}
        </div>

        <hr className="border-border-default" />

        {footerContent && (
          <div className="flex items-center justify-between gap-2">
            {footerContent}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
