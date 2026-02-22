"use client";

import { ReactNode, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import IconButton from "./icon-button";

type CarouselProps = {
  cards: ReactNode[];
  slidesPerView?: number;
  gap?: number;
  showArrows?: boolean;
  loop?: boolean;
  className?: string;
};

export default function Carousel({
  cards,
  slidesPerView = 1,
  gap = 24,
  showArrows = true,
  loop = false,
  className = "",
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop, align: "start" });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateArrows = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", updateArrows).on("reInit", updateArrows);
    return () => {
      emblaApi.off("select", updateArrows).off("reInit", updateArrows);
    };
  }, [emblaApi, updateArrows]);

  useEffect(() => {
    emblaApi?.reInit();
  }, [emblaApi, slidesPerView]);

  const slideBasis = `calc(${100 / slidesPerView}% - ${
    (gap * (slidesPerView - 1)) / slidesPerView
  }px)`;

  return (
    <div className={`relative w-full ${className}`}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex" style={{ gap }}>
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex-shrink-0 min-w-0 py-1"
              style={{ flexBasis: slideBasis }}
            >
              {card}
            </div>
          ))}
        </div>
      </div>

      {showArrows && (
        <>
          {canScrollPrev && (
            <IconButton
              aria-label="carousel left arrow"
              variant="outline"
              onClick={() => emblaApi?.scrollPrev()}
              className="absolute top-1/4 left-2 lg:-left-5  -translate-y-1/2"
            >
              <ArrowLeft className="w-6 h-6" />
            </IconButton>
          )}
          {canScrollNext && (
            <IconButton
              aria-label="carousel right arrow"
              variant="outline"
              onClick={() => emblaApi?.scrollNext()}
              className="absolute top-1/4 right-2 lg:-right-5 -translate-y-1/2"
            >
              <ArrowRight className="w-6 h-6" />
            </IconButton>
          )}
        </>
      )}
    </div>
  );
}
