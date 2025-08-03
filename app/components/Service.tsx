import { useState } from "react";
import React from "react";
import {
  FaLaptopCode,
  FaChalkboardTeacher,
  FaCloud,
  FaTools,
  FaBullhorn,
  FaServer,
  FaRobot,
  FaShoppingCart,
  FaFileCode,
  FaPaintBrush,
  FaDatabase,
  FaCode,
  FaMobileAlt,
  FaCog,
  FaUsers,
  FaChartLine,
  FaGlobe,
  FaNetworkWired,
  FaBriefcase,
  FaBoxOpen,
} from "react-icons/fa";
import "../assets/css/Service.css";
import Button from "./Button";

const services = [
  { name: "Lập trình máy vi tính", icon: <FaLaptopCode /> },
  { name: "Tư vấn máy vi tính và quản trị hệ thống máy vi tính", icon: <FaUsers /> },
  { name: "Dịch vụ công nghệ thông tin và các dịch vụ khác liên quan", icon: <FaNetworkWired /> },
  { name: "Thiết kế trang web (Web design)", icon: <FaPaintBrush /> },
  { name: "Thiết kế ứng dụng di động (Mobile App)", icon: <FaMobileAlt /> },
  { name: "Phát triển phần mềm theo yêu cầu", icon: <FaCode /> },
  { name: "Nghiên cứu và phát triển khoa học kỹ thuật và công nghệ", icon: <FaRobot /> },
  { name: "Chuyển giao công nghệ", icon: <FaCog /> },
  { name: "Đào tạo nghề về công nghệ thông tin", icon: <FaChalkboardTeacher /> },
  { name: "Dạy kỹ năng mềm, kỹ năng số", icon: <FaBriefcase /> },
  { name: "Bán buôn máy vi tính, phần mềm và thiết bị công nghệ", icon: <FaShoppingCart /> },
  { name: "Bảo trì, sửa chữa máy vi tính và thiết bị ngoại vi", icon: <FaTools /> },
  { name: "Cho thuê thiết bị CNTT, phần mềm", icon: <FaBoxOpen /> },
  { name: "Quảng cáo kỹ thuật số", icon: <FaBullhorn /> },
  { name: "Vận hành nền tảng thương mại điện tử", icon: <FaGlobe /> },
  { name: "Dịch vụ lưu trữ và xử lý dữ liệu (Cloud, CDN)", icon: <FaCloud /> },
  { name: "Hoạt động chuyên môn, khoa học và công nghệ khác", icon: <FaChartLine /> },
  { name: "Phát triển và tích hợp hệ thống phần mềm doanh nghiệp", icon: <FaServer /> },
  { name: "Dịch vụ hỗ trợ công nghệ, vận hành hệ thống", icon: <FaTools /> },
  { name: "Cung cấp SaaS, nền tảng dịch vụ qua Internet", icon: <FaDatabase /> },
];

const itemsPerPage = 4;

const Service: React.FC = () => {
  const [page, setPage] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const totalPages = Math.ceil(services.length / itemsPerPage);

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

  const displayedServices = showAll
    ? services
    : services.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  return (
    <>
      {/* GIỮ NGUYÊN PHẦN 3D CARD */}
      <div className="flex justify-center mb-50 items-center bg-gray-50 h-[150px]">
        <div className="card-3d hidden sm:block">
          {services.map((service, index) => (
            <div key={index} className="card-3d-item">
              <div className="text-2xl text-blue-600 mb-2">{service.icon}</div>
              <p className="text-[10px] text-center">{service.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PHẦN DỊCH VỤ CHÍNH */}
      <section id="Service" className="">
        <h1 className="title">DỊCH VỤ</h1>

        <div className="card-normal grid grid-cols-2 lg:grid-cols-4 gap-2 p-4">
          {displayedServices.map((service, index) => (
            <div key={index} className="e-card playing">
              <div className="image" />
              <div className="wave" />
              <div className="wave" />
              <div className="wave" />
              <div className="infotop text-center">
                <div className="flex justify-center text-3xl mb-2">{service.icon}</div>
                <p className="text-sm font-semibold p-4">{service.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Điều hướng Prev / Next nếu chưa bấm "Xem tất cả" */}
        {!showAll && (
          <div className="flex justify-center items-center gap-4 mt-4">
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

        {/* Nút "Xem tất cả" hoặc "Ẩn bớt" */}
        <div className="flex justify-center mt-4">
          <Button onClick={toggleShowAll}>
            {showAll ? "Ẩn bớt" : "Xem tất cả"}
          </Button>
        </div>
      </section>
    </>
  );
};

export default Service;
