"use client";
import Image from "next/image";
import { useState, useEffect, useMemo, useRef } from "react";

interface Card {
  image: string;
  quote: string;
  source: string;
  label: string;
}

interface RecommendationsGalleryProps {
  cards: Card[];
}

export default function RecommendationsGallery({
  cards,
}: RecommendationsGalleryProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(
    new Set([0, 1, 2, 3, 4])
  );
  const containerRef = useRef<HTMLDivElement>(null);

  // Memoize card calculations to prevent recalculation on every render
  const cardPositions = useMemo(() => {
    return cards.map((_, idx) => {
      const total = cards.length;
      const spread = 30;
      const offset = idx;
      const rotate = (offset * spread) / (total - 1) - spread / 2;
      const translateY = Math.abs(offset - (total - 1) / 2) * 10;
      return { rotate, translateY, zIndex: total - idx };
    });
  }, [cards]);

  // Detect mobile device - moved to useEffect to avoid hydration issues
  useEffect(() => {
    const checkMobile = () => {
      const isSmallScreen = window.innerWidth <= 768;
      setIsMobile(isSmallScreen);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Progressive loading - load more cards as user interacts
  useEffect(() => {
    const loadMoreCards = () => {
      setVisibleCards((prev) => {
        const newSet = new Set(prev);
        // Load next 2 cards progressively
        for (let i = 0; i < cards.length; i++) {
          if (!newSet.has(i) && i <= Math.max(...Array.from(newSet)) + 2) {
            newSet.add(i);
          }
        }
        return newSet;
      });
    };

    // Load more cards when current card changes
    if (currentCardIndex > 0) {
      const timer = setTimeout(loadMoreCards, 100);
      return () => clearTimeout(timer);
    }
  }, [currentCardIndex, cards.length]);

  // Simple touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMobile) return;
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isMobile || touchStartX === null || touchEndX === null) return;

    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentCardIndex((prev) => (prev + 1) % cards.length);
    } else if (isRightSwipe) {
      setCurrentCardIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  const goPrev = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) e.stopPropagation();
    if (openIdx !== null && openIdx > 0) setOpenIdx(openIdx - 1);
  };

  const goNext = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) e.stopPropagation();
    if (openIdx !== null && openIdx < cards.length - 1) setOpenIdx(openIdx + 1);
  };

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-col items-center"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Preload critical image */}
      <link rel="preload" as="image" href={cards[0].image} />

      <div className="relative w-full max-w-3xl flex items-center justify-center h-[420px]">
        {cards.map((card, idx) => {
          const { rotate, translateY, zIndex } = cardPositions[idx];
          const isHighlighted = idx === currentCardIndex;
          const isVisible = visibleCards.has(idx);
          const shouldLoad = idx === 0 || isVisible;

          return (
            <div
              key={idx}
              className="absolute left-1/2 top-1/2 cursor-pointer transition-all duration-500 ease-out"
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg) translateY(${translateY}px)`,
                zIndex: zIndex + (isHighlighted ? 10 : 0),
                filter: isHighlighted ? "brightness(1.1)" : "brightness(1)",
                scale: isHighlighted ? "1.05" : "1",
                opacity: isVisible ? 1 : 0,
              }}
              onClick={() => setOpenIdx(idx)}
            >
              <div className="relative w-64 h-96 rounded-2xl shadow-2xl bg-white overflow-hidden border border-gray-200">
                {shouldLoad && (
                  <Image
                    src={card.image}
                    alt={card.quote}
                    fill
                    className="object-cover w-full h-full"
                    style={{ filter: "brightness(0.85)" }}
                    sizes="(max-width: 768px) 256px, 256px"
                    priority={idx === 0}
                    quality={idx === 0 ? 90 : 75}
                  />
                )}
                {/* Label ribbon */}
                <div className="absolute top-0 -right-2 z-10">
                  <div className="relative">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold px-4 py-2 shadow-lg rounded-l-full rounded-r-md">
                      {card.label}
                    </div>
                    <div className="absolute -top-1 right-0 w-2 h-2 bg-orange-600 rounded-full"></div>
                  </div>
                </div>

                {/* Overlay quote */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end h-2/3">
                  <span className="text-lg font-bold text-white drop-shadow-lg leading-snug pr-16">
                    {card.quote}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal for full image view */}
      {openIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setOpenIdx(null)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl p-0 max-w-[95vw] md:max-w-4xl lg:max-w-5xl w-full max-h-[95vh] flex flex-col items-center animate-in slide-in-from-bottom-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Arrow */}
            {openIdx > 0 && (
              <button
                className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 md:p-4 z-20 transition-all duration-200 hover:scale-110"
                onClick={goPrev}
                aria-label="Previous"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 md:w-8 md:h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}
            {/* Right Arrow */}
            {openIdx < cards.length - 1 && (
              <button
                className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 md:p-4 z-20 transition-all duration-200 hover:scale-110"
                onClick={goNext}
                aria-label="Next"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 md:w-8 md:h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}
            <button
              className="absolute top-4 md:top-6 left-4 md:left-6 text-white bg-black/60 hover:bg-black/80 rounded-full p-2 md:p-3 z-30 transition-all duration-200 hover:scale-110"
              onClick={() => setOpenIdx(null)}
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 md:w-6 md:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="relative w-full h-[80vh] md:h-[75vh] lg:h-[80vh] max-h-[85vw] md:max-h-[80vw] lg:max-h-[75vw] rounded-2xl overflow-hidden">
              <Image
                src={cards[openIdx].image}
                alt={cards[openIdx].quote}
                fill
                className="object-contain w-full h-full bg-black"
                sizes="(max-width: 768px) 95vw, (max-width: 1024px) 80vw, 75vw"
                priority={false}
                quality={85}
              />

              {/* Label ribbon in modal */}
              <div className="absolute top-0 -right-3 z-10">
                <div className="relative">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold px-6 py-3 shadow-lg rounded-l-full rounded-r-lg">
                    {cards[openIdx].label}
                  </div>
                  <div className="absolute -top-1 right-0 w-3 h-3 bg-orange-600 rounded-full"></div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8 flex flex-col justify-end">
                <span className="text-lg md:text-xl lg:text-2xl font-bold text-white drop-shadow-lg leading-snug">
                  {cards[openIdx].quote}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
