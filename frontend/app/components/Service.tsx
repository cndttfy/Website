import { useEffect, useState } from "react";
import React from "react";
import * as FaIcons from "react-icons/fa";
import "../assets/css/Service.css";
import Button from "./Button";

const itemsPerPage = 4;

interface ServiceItem {
  id: number;
  name: string;
  icon: string;
}

const Service: React.FC = () => {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [page, setPage] = useState(0);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/data/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Lỗi khi fetch services.json:", error));
  }, []);

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

  const renderIcon = (iconName: string) => {
    const IconComponent = (FaIcons as any)[iconName];
    return IconComponent ? <IconComponent /> : null;
  };

  return (
    <>
      {/* 3D CARD */}
      <div className="hidden md:flex justify-center mb-50 items-center h-[100px]">
        <div className="card-3d hidden sm:block">
          {services.map((service) => (
            <div key={service.id} className="card-3d-item">
              <div className="text-2xl text-blue-600 mb-2 select-none">
                {renderIcon(service.icon)}
              </div>
              <p className="text-[10px] text-center select-none">
                {service.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* DỊCH VỤ */}
      <section id="Service" className="mt-10">
        <h1 className="title">DỊCH VỤ</h1>

        <div className="card-normal grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {displayedServices.map((service) => (
            <div key={service.id} className="e-card playing w-full">
              <div className="image aspect-square bg-gray-200 w-full" />
              <div className="wave" />
              <div className="wave" />
              <div className="wave" />
              <div className="infotop text-center p-2">
                <div className="flex justify-center text-3xl mb-2">
                  {renderIcon(service.icon)}
                </div>
                <p className="text-sm font-semibold">{service.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Điều hướng Prev / Next */}
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

        {/* Nút "Xem tất cả" */}
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
