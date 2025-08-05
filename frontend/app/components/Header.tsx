"use client";

import { useEffect, useState } from "react";
import { Popover, Transition, Dialog, Disclosure } from "@headlessui/react";
import { Fragment } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import * as FaIcons from "react-icons/fa";
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
    fetch("http://localhost:5000/services")
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
    { name: "VỀ CHÚNG TÔI", href: "#About" },
    { name: "LIÊN HỆ", href: "#Contact" },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Logo desktop */}
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

        {/* Menu desktop */}
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
                    <Popover.Panel className="popover-panel absolute z-10 mt-3 w-90 max-h-96 overflow-y-auto rounded-md shadow-lg ring-1 ring-black/5 bg-white text-black">
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

        {/* Ngôn ngữ desktop */}
        <div className="hidden lg:flex lg:w-2/12 justify-end items-center gap-2 whitespace-nowrap language-switcher">
          VN | EN
        </div>

        {/* Logo + Mobile menu button */}
        <div className="relative flex lg:hidden items-center justify-between w-full">
          <a
            href="/"
            className="absolute left-1/2 -translate-x-1/2 flex items-center"
          >
            <img
              className="h-10 w-auto rounded-full"
              src="/logo.png"
              alt="TFY Logo"
            />
          </a>
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="ml-auto p-2 z-10"
          >
            <Bars3Icon className="h-6 w-6 text-[var(--green-color)]" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dialog */}
      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setMobileMenuOpen}>
          {/* Lớp overlay nền mờ */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              style={{ backgroundColor: "var(--black-color)", opacity: 0.6 }}
              className="fixed inset-0 bg-[var(--black-color)] bg-opacity-50"
            />
          </Transition.Child>

          {/* Panel trượt từ bên trái */}
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-300"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="fixed inset-y-0 left-0 w-3/4 max-w-md bg-gradient-to-b from-[var(--blue-color)] to-[var(--red-color)] text-[var(--green-color)] shadow-xl overflow-y-auto">
              <div className="p-6 text-left">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <a href="/" className="flex items-center">
                    <img
                      className="h-12 w-auto rounded-full"
                      style={{ boxShadow: "0 4px 10px var(--blue-color)" }}
                      src="/logo.png"
                      alt="TFY Logo"
                    />
                  </a>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2"
                  >
                    <XMarkIcon className="h-6 w-6 text-red-600" />
                  </button>
                </div>

                {/* Navigation items */}
                <div className="space-y-4">
                  {navigation.map((item) =>
                    item.dropdown ? (
                      <Disclosure key={item.name}>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="w-full flex justify-between items-center px-4 py-2 text-base font-medium border border-green-300 rounded-md">
                              <span>{item.name}</span>
                              {open ? (
                                <ChevronUpIcon className="h-5 w-5" />
                              ) : (
                                <ChevronDownIcon className="h-5 w-5" />
                              )}
                            </Disclosure.Button>
                            <Disclosure.Panel className="space-y-2 px-4 pt-2 pb-4 text-sm text-[var(--blue-color)] bg-white rounded-md">
                              {services.map((service) => (
                                <a
                                  key={service.id}
                                  href="#"
                                  className="flex items-center gap-2 border-b border-gray-200 py-2"
                                  onClick={() => setMobileMenuOpen(false)} // 👈 Thêm dòng này
                                >
                                  <span className="text-base">
                                    {renderIcon(service.icon)}
                                  </span>
                                  <span>{service.name}</span>
                                </a>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block text-base font-medium hover:underline px-4"
                        onClick={() => setMobileMenuOpen(false)} 
                      >
                        {item.name}
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  );
}
