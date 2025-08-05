import { useState } from "react";
import Button from "../components/Button";
import Popup from "../components/Popup";

export default function Test() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <Button iconClass="fas fa-paper-plane" onClick={() => setOpen(true)}>
        Mở Popup
      </Button>

      {open && (
        <Popup
          iconClass="fas fa-cookie-bite"
          title="Chúng tôi sử dụng cookie"
          message="Trang web dùng cookie để cải thiện trải nghiệm."
          acceptText="Đồng ý"
          declineText="Từ chối"
          showDecline={true}
          onAccept={() => {
            alert("✅ Bạn đã đồng ý!");
            setOpen(false);
          }}
          onClose={() => {
            alert("❌ Bạn đã từ chối hoặc đóng popup.");
            setOpen(false);
          }}
        />
      )}
    </div>
  );
}
