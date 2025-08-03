import React, { useState } from "react";
import { SiZalo } from "react-icons/si";
import {
  FaFacebookMessenger,
  FaTiktok,
  FaYoutube,
  FaSms,
  FaTimes,
} from "react-icons/fa";
import { Canvas } from "@react-three/fiber";
import RobotModel from "./RobotModel";

const AssistantWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-10 right-6 z-50 text-sm">
      <div className="relative w-30 h-30">
        {/* Nút kích hoạt hiển thị */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full h-full hover:scale-115 transition-transform duration-300 cursor-pointer"
        >
          <Canvas camera={{ position: [0, 0, 2.5], fov: 45 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[2, 2, 2]} />
            <RobotModel />
          </Canvas>
        </button>

        {/* Hiển thị chữ khi chưa mở */}
        {!isOpen && (
          <div className="absolute bottom-20 right-4 px-4 py-2 rounded-2xl shadow-xl backdrop-blur-md bg-white/30 border border-white/40 text-gray-800 text-sm font-medium z-50">
            Tôi có thể giúp gì cho bạn?
          </div>
        )}

        {isOpen && (
          <div
            className="absolute bottom-10 right-0 mb-4 w-72 rounded-xl shadow-xl overflow-hidden z-50 animate-fade-in border"
            style={{ borderColor: "var(--orange-color)" }}
          >
            {/* Header */}
            <div
              className="px-4 py-2 text-white font-semibold text-sm"
              style={{
                background:
                  "linear-gradient(to right, var(--blue-color), var(--red-color))",
              }}
            >
              Tư Vấn Online Miễn Phí
            </div>

            {/* Content */}
            <div className="px-4 py-3 space-y-2 bg-white">
              {/* Zalo */}
              <a
                href="https://zalo.me/0123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 bg-blue-500 hover:bg-blue-600 text-white py-1.5 text-sm rounded-md"
              >
                <SiZalo className="text-base" /> Zalo
              </a>

              {/* Messenger */}
              <a
                href="https://m.me/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white py-1.5 text-sm rounded-md"
              >
                <FaFacebookMessenger className="text-base" /> Messenger
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 bg-black hover:bg-gray-800 text-white py-1.5 text-sm rounded-md"
              >
                <FaTiktok className="text-base" /> TikTok
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@yourchannel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 bg-red-600 hover:bg-red-700 text-white py-1.5 text-sm rounded-md"
              >
                <FaYoutube className="text-base" /> YouTube
              </a>

              {/* SMS */}
              <a
                href="sms:0123456789"
                className="flex items-center justify-center gap-1 bg-green-600 hover:bg-green-700 text-white py-1.5 text-sm rounded-md"
              >
                <FaSms className="text-base" /> SMS
              </a>

              {/* Hotline */}
              <div className="text-center mt-1 text-gray-600 text-xs">
                <p>
                  <strong>Hotline:</strong> 0123.456.789
                </p>
                <p>Hỗ trợ 24/7</p>
              </div>
            </div>

            {/* Nút đóng */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-1 right-1 var(--red-color) text-white p-1 rounded-full shadow"
            >
              <FaTimes className="text-sm" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssistantWidget;
