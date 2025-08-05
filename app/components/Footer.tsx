"use client";

import React, { useEffect, useState } from "react";
import { FaBuilding } from "react-icons/fa";

interface Service {
  id: number;
  name: string;
}

const Footer: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetch("/data/services.json")
      .then((res) => res.json())
      .then((data: Service[]) => setServices(data))
      .catch((err) => console.error("Failed to fetch services:", err));
  }, []);

  const MAX_VISIBLE = 4;
  const visibleServices = services.slice(0, MAX_VISIBLE);
  const hasMore = services.length > MAX_VISIBLE;

  return (
    <footer className="bg-[#1c3b99] text-white px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Cột 1: Logo + mô tả */}
        <div className="flex flex-col items-center md:items-start">
          <a href="/" className="flex items-center justify-center">
            <img
              className="h-15 w-auto rounded-full"
              style={{ boxShadow: "0 4px 10px var(--blue-color)" }}
              src="/logo.png"
              alt="TFY Logo"
            />
          </a>
          <p className="text-sm text-gray-200 mt-4">
            CKXDPHP – Giải pháp công nghệ & đào tạo chuyên nghiệp
          </p>
        </div>

        {/* Cột 2: Liên kết nhanh */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Liên kết nhanh</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>
              <a href="/" className="hover:text-orange-400 transition">
                Trang chủ
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-orange-400 transition">
                Dịch vụ
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-orange-400 transition">
                Giới thiệu
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-orange-400 transition">
                Liên hệ
              </a>
            </li>
          </ul>
        </div>

        {/* Cột 3: Dịch vụ (fetch động) */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Dịch vụ</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            {visibleServices.map((service) => (
              <li key={service.id}>
                <a href="#Service" className="hover:text-orange-400 transition">
                  {service.name}
                </a>
              </li>
            ))}
            {hasMore && (
              <li>
                <a
                  href="#Service"
                  className="text-orange-400 text-sm underline hover:text-white transition"
                >
                  Xem thêm...
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Đường kẻ + Bản quyền */}
      <div className="border-t border-blue-600 mt-10 pt-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} TFY. Bảo lưu mọi quyền.
      </div>
    </footer>
  );
};

export default Footer;
