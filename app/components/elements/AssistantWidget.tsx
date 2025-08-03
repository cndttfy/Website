import React, { useState } from "react";
import { FaTimes, FaPhoneAlt, FaFacebookMessenger } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { PiRobotDuotone } from "react-icons/pi";

const AssistantWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 text-sm">
      {isOpen ? (
        <div className="bg-white rounded-xl shadow-lg border border-orange-300 w-72 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-800 to-orange-500 px-4 py-3 text-white font-bold">
            Tư Vấn Online Miễn Phí
          </div>

          <div className="px-4 py-3 space-y-2">
            <a
              href="https://zalo.me/0123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
            >
              <SiZalo className="text-lg" /> Chat qua Zalo
            </a>

            <a
              href="https://m.me/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
            >
              <FaFacebookMessenger className="text-lg" /> Chat qua Messenger
            </a>

            <a
              href="/chatbot"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 rounded"
            >
              <PiRobotDuotone className="text-lg" /> Chatbot tự động
            </a>

            <div className="text-center mt-2 text-gray-600 text-sm">
              <p>
                <strong>Hotline:</strong> 0123.456.789
              </p>
              <p>Hỗ trợ 24/7</p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="absolute -top-3 -right-3 bg-orange-500 text-white p-1 rounded-full shadow"
          >
            <FaTimes />
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg flex items-center justify-center"
        >
          💬
        </button>
      )}
    </div>
  );
};

export default AssistantWidget;
