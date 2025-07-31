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
import "../../assets/css/Service.css";

const services = [
  { name: "Lập trình máy vi tính", icon: <FaLaptopCode /> },
  {
    name: "Tư vấn máy vi tính và quản trị hệ thống máy vi tính",
    icon: <FaUsers />,
  },
  {
    name: "Dịch vụ công nghệ thông tin và các dịch vụ khác liên quan",
    icon: <FaNetworkWired />,
  },
  { name: "Thiết kế trang web (Web design)", icon: <FaPaintBrush /> },
  { name: "Thiết kế ứng dụng di động (Mobile App)", icon: <FaMobileAlt /> },
  { name: "Phát triển phần mềm theo yêu cầu", icon: <FaCode /> },
  {
    name: "Nghiên cứu và phát triển khoa học kỹ thuật và công nghệ",
    icon: <FaRobot />,
  },
  { name: "Chuyển giao công nghệ", icon: <FaCog /> },
  {
    name: "Đào tạo nghề về công nghệ thông tin",
    icon: <FaChalkboardTeacher />,
  },
  { name: "Dạy kỹ năng mềm, kỹ năng số", icon: <FaBriefcase /> },
  {
    name: "Bán buôn máy vi tính, phần mềm và thiết bị công nghệ",
    icon: <FaShoppingCart />,
  },
  {
    name: "Bảo trì, sửa chữa máy vi tính và thiết bị ngoại vi",
    icon: <FaTools />,
  },
  { name: "Cho thuê thiết bị CNTT, phần mềm", icon: <FaBoxOpen /> },
  { name: "Quảng cáo kỹ thuật số", icon: <FaBullhorn /> },
  { name: "Vận hành nền tảng thương mại điện tử", icon: <FaGlobe /> },
  { name: "Dịch vụ lưu trữ và xử lý dữ liệu (Cloud, CDN)", icon: <FaCloud /> },
  {
    name: "Hoạt động chuyên môn, khoa học và công nghệ khác",
    icon: <FaChartLine />,
  },
  {
    name: "Phát triển và tích hợp hệ thống phần mềm doanh nghiệp",
    icon: <FaServer />,
  },
  { name: "Dịch vụ hỗ trợ công nghệ, vận hành hệ thống", icon: <FaTools /> },
  {
    name: "Cung cấp SaaS, nền tảng dịch vụ qua Internet",
    icon: <FaDatabase />,
  },
];

const Service: React.FC = () => {
  return (
    <>
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
      <section id="Service" className="">
        <h1 className="title">DỊCH VỤ</h1>
        {/* Khối hiển thị kiểu sóng */}
        <div className="card-normal grid grid-cols-2 lg:grid-cols-4 gap-2 p-4">
          {services.map((service, index) => (
            <div key={index} className="e-card playing">
              <div className="image" />
              <div className="wave" />
              <div className="wave" />
              <div className="wave" />
              <div className="infotop text-center">
                <div className="flex justify-center text-3xl mb-2">
                  {service.icon}
                </div>
                <p className="text-sm font-semibold p-4">{service.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Service;
