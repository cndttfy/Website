"use client";

import React, { useState, useEffect, useRef } from "react";
import "../assets/css/Hero.css";
import Button from "./Button";

const images = ["/banner.jpg", "/banner.jpg", "/banner.jpg"];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Swipe / Drag Logic
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startX === null) return;
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (diff > 50) goToNext(); // Swipe left
    else if (diff < -50) goToPrev(); // Swipe right

    setStartX(null);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (startX === null) return;
    const endX = e.clientX;
    const diff = startX - endX;

    if (diff > 50) goToNext(); // Drag left
    else if (diff < -50) goToPrev(); // Drag right

    setStartX(null);
  };

  return (
    <main
      id="Hero"
      className="relative h-[600px] mt-20 w-full flex items-center justify-center overflow-hidden p-6"
    >
      <div
        ref={containerRef}
        className="w-full max-w-7xl h-full rounded-[24px] overflow-hidden border-[6px] border-white shadow-2xl relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`banner ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            draggable={false}
          />
        ))}

        {/* Navigation Buttons - bottom left */}
        <div className="absolute bottom-4 left-4 flex gap-3 z-10">
          <Button onClick={goToPrev}>◀</Button>
          <Button onClick={goToNext}>▶</Button>
        </div>

        {/* Dots - bottom right */}
        <div className="absolute bottom-4 right-4 flex gap-2 z-10">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
