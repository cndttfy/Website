import React from "react";
import "../assets/css/Partner.css"

const partners = [
  { name: "Đối tác A", logo: "/images/partner-a.png", link: "#" },
  { name: "Đối tác B", logo: "/images/partner-b.png", link: "#" },
  { name: "Đối tác C", logo: "/images/partner-c.png", link: "#" },
  { name: "Đối tác D", logo: "/images/partner-d.png", link: "#" },
  { name: "Đối tác E", logo: "/images/partner-e.png", link: "#" },
  { name: "Đối tác F", logo: "/images/partner-f.png", link: "#" },
  { name: "Đối tác G", logo: "/images/partner-g.png", link: "#" },
];

const Partner: React.FC = () => {
  // Nhân đôi mảng để tạo hiệu ứng vòng lặp
  const extendedPartners = [...partners, ...partners];

  return (
    <section id="Partner" className="py-10 overflow-hidden">
      <div className="relative w-full">
        <div className="partner-marquee hover:paused">
          <div className="flex gap-6">
            {extendedPartners.map((partner, index) => (
              <a
                key={index}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center min-w-[160px] h-[80px] border p-4 bg-white hover:shadow transition"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
