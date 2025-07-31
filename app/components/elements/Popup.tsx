// Popup.tsx
import React, { useEffect } from "react";

type PopupProps = {
  iconClass?: string;
  title?: string;
  message?: string;
  onAccept?: () => void;
  onClose?: () => void;
  acceptText?: string;
  declineText?: string;
  showDecline?: boolean;
};

const Popup: React.FC<PopupProps> = ({
  iconClass = "fas fa-info-circle",
  title = "Thông báo",
  message = "Đây là nội dung thông báo.",
  onAccept,
  onClose,
  acceptText = "OK",
  declineText = "Hủy",
  showDecline = false,
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <style>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .card {
          width: 300px;
          background-color: var(--white-color);
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          padding: 20px 30px;
          gap: 10px;
          box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
          font-family: var(--font-sans, sans-serif);
          position: relative;
        }

        .popupHeader {
          display: flex;
          justify-content: flex-end;
        }

        .closeIconBtn {
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
          color: var(--blue-color);
          transition: 0.2s;
        }

        .closeIconBtn:hover {
          color: var(--black-color);
          transform: scale(1.2);
        }

        .popupBody {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          text-align: center;
        }

        .popupIcon {
          font-size: 30px;
          color: var(--blue-color);
        }

        .cookieHeading {
          font-size: 1.2em;
          font-weight: 800;
          color: var(--black-color);
        }

        .cookieDescription {
          font-size: 0.75em;
          color: #636363;
          font-weight: 600;
        }

        .buttonContainer {
          display: flex;
          gap: 20px;
          justify-content: center;
        }

        .acceptButton {
          width: 80px;
          height: 30px;
          background-color: var(--blue-color);
          border: none;
          color: var(--white-color);
          font-weight: 600;
          border-radius: 20px;
          cursor: pointer;
          box-shadow: 0 4px 6px -1px #2c83d4, 0 2px 4px -1px #2c83d4;
          transition: all 0.3s ease;
        }

        .acceptButton:hover {
          background-color: var(--lightblue-color);
        }

        .declineButton {
          width: 80px;
          height: 30px;
          background-color: #dadada;
          border: none;
          color: var(--black-color);
          font-weight: 600;
          border-radius: 20px;
          cursor: pointer;
          box-shadow: 0 4px 6px -1px #bebdbd, 0 2px 4px -1px #bebdbd;
          transition: all 0.3s ease;
        }

        .declineButton:hover {
          background-color: #ebebeb;
        }
      `}</style>

      <div className="popup-overlay">
        <div className="card">
          <div className="popupHeader">
            <button className="closeIconBtn" onClick={onClose}>❌</button>
          </div>

          <div className="popupBody">
            <i className={`popupIcon ${iconClass}`}></i>
            <p className="cookieHeading">{title}</p>
            <p className="cookieDescription">{message}</p>
          </div>

          <div className="buttonContainer">
            <button className="acceptButton" onClick={onAccept}>
              {acceptText}
            </button>
            {showDecline && (
              <button className="declineButton" onClick={onClose}>
                {declineText}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
