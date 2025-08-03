"use client";

import React, { useEffect, useState } from "react";
import "../assets/css/Service.css";
import Button from "./Button";

interface NewsItem {
  title: string;
  content: string;
  thumb: string;
}

const itemsPerPage = 3;

const News: React.FC = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [page, setPage] = useState(0);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/data/news.json")
      .then((res) => res.json())
      .then((data: NewsItem[]) => setNewsItems(data))
      .catch((err) => console.error("Lỗi khi tải news:", err));
  }, []);

  const totalPages = Math.ceil(newsItems.length / itemsPerPage);

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
    setPage(0);
  };

  const displayedNews = showAll
    ? newsItems
    : newsItems.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  return (
    <section id="News" className="p-4">
      <h1 className="title mb-6">TIN TỨC & SỰ KIỆN</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedNews.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <img
              src={item.thumb}
              alt={item.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{item.title}</h2>
              <p className="text-sm text-gray-600 line-clamp-3">{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      {!showAll && totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-6">
          <Button onClick={handlePrev} disabled={page === 0}>
            ←
          </Button>
          <span>
            Trang {page + 1} / {totalPages}
          </span>
          <Button onClick={handleNext} disabled={page >= totalPages - 1}>
            →
          </Button>
        </div>
      )}

      <div className="flex justify-center mt-4">
        <Button onClick={toggleShowAll}>
          {showAll ? "Ẩn bớt" : "Xem tất cả"}
        </Button>
      </div>
    </section>
  );
};

export default News;
