import React, { useState } from "react";
import Button from "./Button";

const projects = [
  {
    name: "Website mỹ phẩm",
    description: "Trang web bán mỹ phẩm đẹp, hiện đại.",
    image: "/images/mypham.jpg",
  },
  {
    name: "Game Lắc Chuông Vàng",
    description: "Trò chơi tương tác cho học sinh.",
    image: "/images/game.jpg",
  },
  {
    name: "Ứng dụng quản lý kho",
    description: "Phần mềm quản lý hàng hóa, tồn kho.",
    image: "/images/kho.jpg",
  },
  {
    name: "Landing page giới thiệu dịch vụ",
    description: "Trang giới thiệu sản phẩm/dịch vụ đẹp mắt.",
    image: "/images/landing.jpg",
  },
  {
    name: "Hệ thống khảo sát trực tuyến",
    description: "Tạo và quản lý khảo sát nhanh chóng.",
    image: "/images/khaosat.jpg",
  },
  {
    name: "App lịch học sinh viên",
    description: "Quản lý lịch học, đăng ký học phần.",
    image: "/images/schedule.jpg",
  },
];

const itemsPerPage = 3;

const Project: React.FC = () => {
  const [page, setPage] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

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

  const displayedProjects = showAll
    ? projects
    : projects.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  return (
    <section id="Project" className="py-10">
      <h1 className="title text-center mb-6">DỰ ÁN</h1>

      {/* VIDEO */}
      <div className="flex justify-center mb-6">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/FcblTrtvRJ8"
          title="Giới thiệu dự án"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-xl w-full max-w-2xl"
        ></iframe>
      </div>

      {/* 3 CỘT DỰ ÁN */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {displayedProjects.map((project, index) => (
          <div key={index} className="border rounded-xl shadow-md overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Nút chuyển trang */}
      {!showAll && (
        <div className="flex justify-center items-center gap-4 mt-6">
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

      {/* Xem tất cả hoặc ẩn bớt */}
      <div className="flex justify-center mt-4">
        <Button onClick={toggleShowAll}>
          {showAll ? "Ẩn bớt" : "Xem tất cả"}
        </Button>
      </div>
    </section>
  );
};

export default Project;
