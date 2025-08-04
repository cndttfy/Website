"use client";

import React, { useEffect, useState } from "react";
import "../assets/css/News.css";
import Button from "./Button";

interface NewsItem {
  id: string;
  title: string;
  content: string;
  thumb: string;
  created_at: string;
  category_id?: string;
  category?: string;
}

interface CategoryItem {
  id: string;
  name: string;
  description: string;
  created_at: string;
}

const News: React.FC = () => {
  const [visibleNewsCount, setVisibleNewsCount] = useState(4);
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    fetch("/data/news.json")
      .then((res) => res.json())
      .then((data: NewsItem[]) => {
        const normalized = data.map((item) => ({
          ...item,
          category_id: item.category_id || item.category || "khac",
        }));
        const sorted = normalized.sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
        setNewsItems(sorted);
      })
      .catch((err) => console.error("Lỗi khi tải news:", err));

    fetch("/data/news-category.json")
      .then((res) => res.json())
      .then((data: CategoryItem[]) => setCategories(data))
      .catch((err) => console.error("Lỗi khi tải danh mục:", err));
  }, []);

  const filteredNews = selectedCategory
    ? newsItems.filter((item) => item.category_id === selectedCategory)
    : [];

  const recentNews = newsItems.slice(0, 5);

  const getCategoryName = (id: string) =>
    categories.find((cat) => cat.id === id)?.name || id;

  return (
    <section id="News" className="p-4">
      <h1 className="title mb-6">TIN TỨC & SỰ KIỆN</h1>
      <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
        {/* LEFT: News */}
        <div className="md:col-span-7">
          {/* Tabs */}
          <div
            className="overflow-x-auto scrollbar-hide -mx-2 px-2"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div className="flex flex-nowrap gap-2 mb-4 w-max min-w-full touch-pan-x">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.name}
                </Button>
              ))}
              <Button onClick={() => setSelectedCategory(null)}>TẤT CẢ</Button>
            </div>
          </div>

          {/* List News */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(selectedCategory ? filteredNews : newsItems)
              .slice(0, visibleNewsCount)
              .map((item) => (
                <a
                  key={item.id}
                  href={`/id/${item.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
                >
                  <img
                    src={item.thumb}
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {item.content}
                    </p>
                  </div>
                </a>
              ))}
          </div>

          {/* Xem thêm / Ẩn bớt */}
          <div className="flex justify-center mt-4">
            {(selectedCategory ? filteredNews : newsItems).length >
              visibleNewsCount && (
              <Button onClick={() => setVisibleNewsCount((prev) => prev + 4)}>
                XEM THÊM
              </Button>
            )}
            {visibleNewsCount > 4 &&
              visibleNewsCount >=
                (selectedCategory ? filteredNews : newsItems).length && (
                <Button onClick={() => setVisibleNewsCount(4)}>ẨN BỚT</Button>
              )}
          </div>
        </div>

        {/* RIGHT: Recent News */}
        <div className="md:col-span-3">
          <h2 className="text-center lg:text-left text-lg text-[var(--red-color)] font-bold mb-4">
            BÀI VIẾT MỚI NHẤT
          </h2>
          <ul className="space-y-4">
            {recentNews.map((item, index) => (
              <a
                key={item.id}
                href={`/id/${item.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 relative hover:opacity-90"
              >
                {index === 0 && (
                  <span className="absolute -top-2 -left-2 bg-[var(--red-color)] text-white text-xs px-2 py-0.5 rounded-full shadow-md">
                    HOT
                  </span>
                )}
                <img
                  src={item.thumb}
                  alt={item.title}
                  className="w-20 h-14 object-cover rounded-md"
                />
                <div className="flex-1">
                  <p className="font-medium text-[var(--black-color)] text-sm">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(item.created_at).toLocaleDateString("vi-VN")}
                  </p>
                  <p className="text-xs italic text-gray-400">
                    {getCategoryName(item.category_id!)}
                  </p>
                </div>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default News;
