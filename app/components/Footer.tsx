import React from "react";
import { FaBuilding } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1c3b99] text-white px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Cột 1: Logo + mô tả */}
        <div>
          <div className="flex items-center gap-2 text-orange-400 text-xl font-bold">
            <FaBuilding className="text-2xl" />
            <span>TFY</span>
          </div>
          <p className="text-sm mt-2">Cơ Khí – Inox – Nhà Xưởng</p>
          <p className="text-sm text-gray-200 mt-1">
            CKXDPHP – Giải pháp xây dựng & cơ khí chuyên nghiệp
          </p>
        </div>

        {/* Cột 2: Liên kết nhanh */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Liên kết nhanh</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="/" className="hover:text-orange-400 transition">Trang chủ</a></li>
            <li><a href="/services" className="hover:text-orange-400 transition">Dịch vụ</a></li>
            <li><a href="/about" className="hover:text-orange-400 transition">Giới thiệu</a></li>
            <li><a href="/contact" className="hover:text-orange-400 transition">Liên hệ</a></li>
          </ul>
        </div>

        {/* Cột 3: Dịch vụ */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Dịch vụ</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#" className="hover:text-orange-400 transition">Xây dựng công nghiệp</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Cơ khí chế tạo</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Nhà xưởng</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Gia công kim loại</a></li>
          </ul>
        </div>
      </div>

      {/* Đường kẻ + Bản quyền */}
      <div className="border-t border-blue-600 mt-10 pt-4 text-center text-sm text-gray-300">
        © 2024 CKXDPHP. Bảo lưu mọi quyền.
      </div>
    </footer>
  );
};

export default Footer;
