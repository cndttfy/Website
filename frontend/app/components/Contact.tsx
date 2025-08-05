"use client";

import React, { useEffect, useState } from "react";
import Button from "./Button";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

interface Service {
  id: number;
  name: string;
}

const Contact: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [selectedService, setSelectedService] = useState<string>("");

  useEffect(() => {
    fetch("/data/services.json")
      .then((res) => res.json())
      .then((data: Service[]) => setServices(data))
      .catch((err) => console.error("Failed to fetch services:", err));
  }, []);

  return (
    <section id="Contact" className="py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Liên hệ với chúng tôi</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left - Info */}
        <div className="space-y-4">
          <div className="border border-[var(--green-color)] rounded-md p-4 flex items-start gap-4">
            <FaMapMarkerAlt className="text-[var(--green-color)] text-xl mt-1" />
            <div>
              <h4 className="font-bold text-[var(--green-color)]">Địa chỉ</h4>
              <p>2/85 Đường 120, Phường Tân Phú, Tp. Thủ Đức, Tp. HCM</p>
            </div>
          </div>
          <div className="border border-[var(--red-color)] rounded-md p-4 flex items-start gap-4">
            <FaPhoneAlt className="text-[var(--red-color)] text-xl mt-1" />
            <div>
              <h4 className="font-bold text-[var(--red-color)]">Điện thoại</h4>
              <p>096 968 6467</p>
            </div>
          </div>
          <div className="border border-[var(--orange-color)] rounded-md p-4 flex items-start gap-4">
            <FaEnvelope className="text-[var(--orange-color)] text-xl mt-1" />
            <div>
              <h4 className="font-bold text-[var(--orange-color)]">Email</h4>
              <p>cndttfy@gmail.com</p>
            </div>
          </div>
          <div className="border border-[var(--blue-color)] rounded-md p-4 flex items-start gap-4">
            <FaClock className="text-[var(--blue-color)] text-xl mt-1" />
            <div>
              <h4 className="font-bold text-[var(--blue-color)]">Giờ làm việc</h4>
              <p>T2-T6: 8:00-17:00, T7: 8:00-12:00</p>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="border border-orange-500 rounded-md p-6">
          <h3 className="text-xl font-bold text-[var(--blue-color)] mb-4">Đăng ký tư vấn miễn phí</h3>
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
            <select
              className="w-full border border-gray-300 rounded-md p-2"
              defaultValue=""
              onChange={(e) => setSelectedService(e.target.value)}
            >
              <option value="" disabled>
                Dịch vụ quan tâm
              </option>
              {services.map((service) => (
                <option key={service.id} value={service.name}>
                  {service.name}
                </option>
              ))}
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
