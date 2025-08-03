"use client";

import { useState, useRef } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Dialog } from "@headlessui/react";
import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";
import { Canvas, useFrame } from "@react-three/fiber";
import { Group } from "three";
import { useGLTF } from "@react-three/drei";
import {
  FaCode,
  FaServer,
  FaCogs,
  FaPaintBrush,
  FaMobileAlt,
  FaLaptopCode,
  FaFlask,
  FaExchangeAlt,
  FaChalkboardTeacher,
  FaUserFriends,
  FaShoppingCart,
  FaTools,
  FaLaptop,
  FaBullhorn,
  FaStore,
  FaCloud,
  FaPuzzlePiece,
  FaProjectDiagram,
  FaLifeRing,
  FaGlobe,
} from "react-icons/fa";
import Button from "./Button";
import "../assets/css/Header.css";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

// Service data
const services = [
  { icon: <FaCode />, name: "Lập trình máy vi tính" },
  {
    icon: <FaServer />,
    name: "Tư vấn máy vi tính và quản trị hệ thống máy vi tính",
  },
  {
    icon: <FaCogs />,
    name: "Dịch vụ công nghệ thông tin và các dịch vụ khác liên quan",
  },
  { icon: <FaPaintBrush />, name: "Thiết kế trang web (Web design)" },
  { icon: <FaMobileAlt />, name: "Thiết kế ứng dụng di động (Mobile App)" },
  { icon: <FaLaptopCode />, name: "Phát triển phần mềm theo yêu cầu" },
  {
    icon: <FaFlask />,
    name: "Nghiên cứu và phát triển khoa học kỹ thuật và công nghệ",
  },
  { icon: <FaExchangeAlt />, name: "Chuyển giao công nghệ" },
  {
    icon: <FaChalkboardTeacher />,
    name: "Đào tạo nghề về công nghệ thông tin",
  },
  { icon: <FaUserFriends />, name: "Dạy kỹ năng mềm, kỹ năng số" },
  {
    icon: <FaShoppingCart />,
    name: "Bán buôn máy vi tính, phần mềm và thiết bị công nghệ",
  },
  {
    icon: <FaTools />,
    name: "Bảo trì, sửa chữa máy vi tính và thiết bị ngoại vi",
  },
  { icon: <FaLaptop />, name: "Cho thuê thiết bị CNTT, phần mềm" },
  { icon: <FaBullhorn />, name: "Quảng cáo kỹ thuật số" },
  { icon: <FaStore />, name: "Vận hành nền tảng thương mại điện tử" },
  { icon: <FaCloud />, name: "Dịch vụ lưu trữ và xử lý dữ liệu (Cloud, CDN)" },
  {
    icon: <FaPuzzlePiece />,
    name: "Hoạt động chuyên môn, khoa học và công nghệ khác",
  },
  {
    icon: <FaProjectDiagram />,
    name: "Phát triển và tích hợp hệ thống phần mềm doanh nghiệp",
  },
  { icon: <FaLifeRing />, name: "Dịch vụ hỗ trợ công nghệ, vận hành hệ thống" },
  { icon: <FaGlobe />, name: "Cung cấp SaaS, nền tảng dịch vụ qua Internet" },
];

// Navigation
const navigation = [
  { name: "DỊCH VỤ", href: "#", dropdown: true },
  { name: "DỰ ÁN NỔI BẬT", href: "#" },
  { name: "LIÊN HỆ", href: "#" },
  { name: "VỀ CHÚNG TÔI", href: "#" },
];

// 3D Robot model with mouse-follow rotation
function RobotModel() {
  const { scene } = useGLTF("/models/robot.glb");
  const robotRef = useRef<Group>(null);

  useFrame(({ mouse }) => {
    if (robotRef.current) {
      // Tính toán góc X (cúi/ngửa)
      let xRot = -mouse.y * Math.PI * 0.3;

      // Clamp giá trị góc X từ -0.3 đến 0.3
      xRot = Math.max(-0.5, Math.min(0.5, xRot));

      // Gán rotation
      robotRef.current.rotation.y = mouse.x * Math.PI * 0.8;
      robotRef.current.rotation.x = xRot;
    }
  });

  return (
    <group ref={robotRef} position={[0, -0.5, 0]}>
      <primitive object={scene} scale={3} />
    </group>
  );
}

// Main layout
export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div id="topWrapper" className="text-white relative">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="/" className="flex items-center">
              <img
                className="h-20 w-auto rounded-full shadow-lg"
                src="/logo.png"
                alt="TFY Logo"
              />
            </a>
          </div>

          {/* Hamburger */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation */}
          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) =>
              item.dropdown ? (
                <Popover key={item.name} className="relative">
                  <Popover.Button className="flex items-center gap-1 text-sm font-semibold hover:text-indigo-300">
                    {item.name}
                    <ChevronDownIcon className="h-4 w-4" />
                  </Popover.Button>
                  <Transition
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 mt-3 w-80 max-h-96 overflow-y-auto rounded-md bg-white shadow-lg ring-1 ring-black/5">
                      <div className="py-2">
                        {services.map((item, index) => (
                          <a
                            key={index}
                            href="#"
                            className={`flex items-center gap-2 px-4 py-2 text-sm border-gray-200 hover:bg-gray-100 ${
                              index < services.length - 1 ? "border-b" : ""
                            }`}
                            style={{
                              color: "var(--black-color)",
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.color =
                                "var(--orange-color)")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.color =
                                "var(--black-color)")
                            }
                          >
                            <span
                              className="text-base"
                              style={{ color: "var(--blue-color)" }}
                            >
                              {item.icon}
                            </span>
                            <span>{item.name}</span>
                          </a>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Popover>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold text-white hover:text-indigo-300"
                >
                  {item.name}
                </a>
              )
            )}
          </div>

          {/* Language toggle */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
            VN | EN
          </div>
        </nav>

        {/* Mobile menu */}
        <Dialog
          as="div"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50 bg-[#032d66] p-6 overflow-y-auto">
            <div className="flex items-center justify-between">
              <a
                href="#"
                className="-m-1.5 p-1.5 flex items-center gap-2 text-white"
              >
                <img className="h-8 w-auto" src="/logo.png" alt="" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-white text-base font-medium"
                >
                  {item.name}
                </a>
              ))}
              <a href="#" className="flex items-center justify-center">
                <Button iconClass="fas fa-paper-plane">
                  ĐĂNG KÍ TƯ VẤN NGAY
                </Button>
              </a>
            </div>
          </div>
        </Dialog>
      </header>

      {/* Hero Section */}
      <main className="relative isolate pt-36 pb-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <h1 className="slogan text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              TREND FOR YOU
            </h1>
            <div className="logo-wrapper mt-6 flex gap-6 text-2xl">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="facebook-link transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="tiktok-link transition"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="youtube-link transition"
              >
                <FaYoutube />
              </a>
            </div>
            <div className="mt-8">
              <Button iconClass="fas fa-paper-plane">
                ĐĂNG KÍ TƯ VẤN NGAY
              </Button>
            </div>
          </div>

          {/* 3D Robot */}
          <div className="h-[450px] lg:h-[550px] w-full flex justify-center items-center">
            <Canvas camera={{ position: [0, 0, 2.5], fov: 35 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[2, 2, 2]} />
              <RobotModel />
            </Canvas>
          </div>
        </div>
      </main>
    </div>
  );
}
