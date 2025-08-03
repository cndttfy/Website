import React from "react";
import Button from "./elements/Button";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section id="Contact" className="py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Liên hệ với chúng tôi</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left - Info */}
        <div className="space-y-4">
          <div className="border border-orange-500 rounded-md p-4 flex items-start gap-4">
            <FaMapMarkerAlt className="text-[#1c3b99] text-xl mt-1" />
            <div>
              <h4 className="font-bold text-[#1c3b99]">Địa chỉ</h4>
              <p>123 Đường ABC, Quận XYZ, TP.HCM</p>
            </div>
          </div>

          <div className="border border-red-500 rounded-md p-4 flex items-start gap-4">
            <FaPhoneAlt className="text-red-600 text-xl mt-1" />
            <div>
              <h4 className="font-bold text-red-600">Điện thoại</h4>
              <p>0123 456 789</p>
            </div>
          </div>

          <div className="border border-orange-500 rounded-md p-4 flex items-start gap-4">
            <FaEnvelope className="text-orange-500 text-xl mt-1" />
            <div>
              <h4 className="font-bold text-orange-500">Email</h4>
              <p>info@ckxdphp.com</p>
            </div>
          </div>

          <div className="border border-[#1c3b99] rounded-md p-4 flex items-start gap-4">
            <FaClock className="text-[#1c3b99] text-xl mt-1" />
            <div>
              <h4 className="font-bold text-[#1c3b99]">Giờ làm việc</h4>
              <p>T2-T6: 8:00-17:00, T7: 8:00-12:00</p>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="border border-orange-500 rounded-md p-6">
          <h3 className="text-xl font-bold text-[#1c3b99] mb-4">Đăng ký tư vấn miễn phí</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Họ và tên"
              className="w-full border border-gray-300 rounded-md p-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md p-2"
            />
            <input
              type="text"
              placeholder="Số điện thoại"
              className="w-full border border-gray-300 rounded-md p-2"
            />
            <select className="w-full border border-gray-300 rounded-md p-2">
              <option>Dịch vụ quan tâm</option>
              <option>Xây dựng</option>
              <option>Cơ khí</option>
              <option>Tư vấn thiết kế</option>
            </select>
            <textarea
              placeholder="Nội dung tư vấn"
              rows={4}
              className="w-full border border-gray-300 rounded-md p-2"
            />
            <Button iconClass="fas fa-paper-plane">Gửi yêu cầu</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
