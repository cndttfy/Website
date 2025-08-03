"use client";

import { useEffect, useState } from "react";
import { Popover, Transition, Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import * as FaIcons from "react-icons/fa"; // <- Dùng chung như bên Service.tsx
import Button from "./Button";
import "../assets/css/Header.css";

interface ServiceItem {
  id: number;
  name: string;
  icon: string;
}

export default function Header() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    fetch("/data/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) =>
        console.error("Lỗi khi fetch dữ liệu dịch vụ trong Header:", err)
      );
  }, []);

  const renderIcon = (iconName: string) => {
    const IconComponent = (FaIcons as any)[iconName];
    return IconComponent ? <IconComponent /> : null;
  };

  const navigation = [
    { name: "DỊCH VỤ", href: "#", dropdown: true },
    { name: "TIN TỨC", href: "#News" },
    { name: "DỰ ÁN NỔI BẬT", href: "#Project" },
    { name: "LIÊN HỆ", href: "#Contact" },
    { name: "VỀ CHÚNG TÔI", href: "#About" },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <div className="hidden lg:flex lg:w-2/12">
          <a href="/" className="flex items-center">
            <img
              className="h-15 w-auto rounded-full"
              style={{ boxShadow: "0 4px 10px var(--blue-color)" }}
              src="/logo.png"
              alt="TFY Logo"
            />
          </a>
        </div>

        {/* Menu giữa */}
        <div className="menu hidden lg:flex lg:w-8/12 justify-center">
          <div className="flex gap-x-10">
            {navigation.map((item) =>
              item.dropdown ? (
                <Popover key={item.name} className="relative">
                  <Popover.Button className="nav-link flex items-center gap-1 text-sm font-semibold">
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
                    <Popover.Panel className="popover-panel absolute z-10 mt-3 w-90 max-h-96 overflow-y-auto rounded-md shadow-lg ring-1 ring-black/5">
                      <div className="py-2">
                        {services.map((service) => (
                          <a
                            key={service.id}
                            href="#"
                            className="service-item flex items-center gap-2 px-4 py-2 text-sm border-b border-gray-200"
                          >
                            <span className="icon text-base">
                              {renderIcon(service.icon)}
                            </span>
                            <span>{service.name}</span>
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
                  className="nav-link text-sm font-semibold"
                >
                  {item.name}
                </a>
              )
            )}
          </div>
        </div>

        {/* VN | EN */}
        <div className="hidden lg:flex lg:w-2/12 justify-end gap-4 language-switcher">
          VN | EN
        </div>

        {/* Logo + Menu mobile */}
        <div className="flex lg:hidden items-center justify-between w-full">
          <a href="/" className="flex items-center">
            <img
              className="h-10 w-auto rounded-full"
              src="/logo.png"
              alt="TFY Logo"
            />
          </a>
          <button onClick={() => setMobileMenuOpen(true)} className="p-2">
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-[#032d66] p-6 overflow-y-auto">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <img className="h-8 w-auto" src="/logo.png" alt="TFY Logo" />
            </a>
            <button onClick={() => setMobileMenuOpen(false)}>
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="mobile-link block text-base font-medium"
              >
                {item.name}
              </a>
            ))}
            <a href="#" className="flex justify-center">
              <Button iconClass="fas fa-paper-plane">ĐĂNG KÍ TƯ VẤN NGAY</Button>
            </a>
          </div>
        </div>
      </Dialog>
    </header>
  );
}
