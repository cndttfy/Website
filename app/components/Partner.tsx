"use client";

import React, { useEffect, useState } from "react";
import "../assets/css/Partner.css";

interface PartnerType {
  name: string;
  logo_url: string;
  website: string;
}

const Partner: React.FC = () => {
  const [partners, setPartners] = useState<PartnerType[]>([]);

  useEffect(() => {
    fetch("/data/partners.json")
      .then((res) => res.json())
      .then((data: PartnerType[]) => {
        setPartners([...data, ...data]);
      })
      .catch((error) => console.error("Error loading partners:", error));
  }, []);

  return (
    <section id="Partner" className="py-10 overflow-hidden">
      <h1 className="title mb-6">ĐỐI TÁC</h1>
      <div className="relative w-full">
        <div className="partner-marquee hover:paused">
          <div className="flex gap-6">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center min-w-[160px] h-[80px] p-4 hover:shadow transition"
              >
                <img
                  src={partner.logo_url}
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
