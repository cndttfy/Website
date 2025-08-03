import { FaRibbon, FaSuitcase, FaUsers, FaCheckCircle } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <section id="About" className="py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Cột trái - Giới thiệu */}
        <div>
          <h1 className="text-3xl font-bold mb-4">Về CKXDPHP</h1>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            TFY cam kết cung cấp giải pháp công nghệ sáng tạo, linh hoạt và hiệu
            quả, giúp cá nhân và doanh nghiệp nâng cao hiệu suất và năng lực
            cạnh tranh. Đồng thời, chúng tôi đào tạo nguồn nhân lực chất lượng
            cao thông qua các khóa học lập trình, kỹ năng số và chuyển đổi số.
          </p>

          {/* Thống kê */}
          <div className="grid grid-cols-3 gap-4 mt-6 text-center">
            <div>
              <div className="flex justify-center text-orange-500 text-4xl mb-2">
                <FaRibbon />
              </div>
              <p className="text-xl font-bold">15+</p>
              <p className="text-sm text-gray-600">Năm kinh nghiệm</p>
            </div>
            <div>
              <div className="flex justify-center text-red-600 text-4xl mb-2">
                <FaSuitcase />
              </div>
              <p className="text-xl font-bold">500+</p>
              <p className="text-sm text-gray-600">Dự án hoàn thành</p>
            </div>
            <div>
              <div className="flex justify-center text-blue-700 text-4xl mb-2">
                <FaUsers />
              </div>
              <p className="text-xl font-bold">200+</p>
              <p className="text-sm text-gray-600">Khách hàng tin tưởng</p>
            </div>
          </div>
        </div>

        {/* Cột phải - Cam kết */}
        <div className="rounded-2xl bg-gradient-to-br from-[var(--blue-color)] to-[var(--red-color)] text-white p-8 shadow-lg">
          <h3 className="text-xl font-bold mb-6">Cam kết chất lượng</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <FaCheckCircle
                style={{ color: "var(--green-color)" }}
                className="mt-1"
              />
              Thiết kế theo tiêu chuẩn quốc tế
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle
                style={{ color: "var(--green-color)" }}
                className="mt-1"
              />
              Thi công đúng tiến độ cam kết
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle
                style={{ color: "var(--green-color)" }}
                className="mt-1"
              />
              Bảo hành dài hạn
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle
                style={{ color: "var(--green-color)" }}
                className="mt-1"
              />
              Hỗ trợ kỹ thuật 24/7
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
