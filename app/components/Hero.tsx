"use client";

import React, { useState, useEffect, useRef } from "react";
import "../assets/css/Hero.css";
import Button from "./Button";

interface Banner {
  id: string;
  img: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  url: string;
  event: string;
}

export default function Hero() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Cập nhật kích thước màn hình
  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Lấy dữ liệu banner
  useEffect(() => {
    fetch("/data/banners.json")
      .then((res) => res.json())
      .then((data) => setBanners(data))
      .catch((err) => console.error("Lỗi khi tải banner:", err));
  }, []);

  // Tự động chuyển banner
  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [banners]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startX === null) return;
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (diff > 50) goToNext();
    else if (diff < -50) goToPrev();
    setStartX(null);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (startX === null) return;
    const endX = e.clientX;
    const diff = startX - endX;
    if (diff > 50) goToNext();
    else if (diff < -50) goToPrev();
    setStartX(null);
  };

  const getResponsiveImage = (banner: Banner): string => {
    if (windowWidth < 640) return banner.img.mobile; // mobile
    if (windowWidth < 1024) return banner.img.tablet; // tablet
    return banner.img.desktop; // desktop
  };

  return (
    <main
      id="Hero"
      className="relative w-full aspect-square sm:aspect-square lg:aspect-[16/9] mt-20 flex items-center justify-center overflow-auto p-6"
    >
      <div
        ref={containerRef}
        className="w-full max-w-7xl h-full rounded-[24px] overflow-hidden border-[6px] border-white shadow-2xl relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {banners.map((banner, index) => (
          <a
            key={banner.id}
            href={banner.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={getResponsiveImage(banner)}
              alt={banner.event}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              draggable={false}
            />
          </a>
        ))}

        {/* Navigation Buttons */}
        <div className="absolute bottom-4 left-4 flex gap-3 z-10">
          <Button onClick={goToPrev}>◀</Button>
          <Button onClick={goToNext}>▶</Button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 right-4 flex gap-2 z-10">
          {banners.map((_, index) => (
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
