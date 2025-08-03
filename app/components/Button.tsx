import React from "react";

type ButtonProps = {
  text?: string;
  iconClass?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties | string;
};

const Button: React.FC<ButtonProps> = ({
  text = "Send",
  iconClass,
  onClick,
  children,
  disabled = false,
}) => {
  return (
    <>
      <style>{`
        .custom-button {
          font-family: inherit;
          font-size: 18px;
          background: linear-gradient(to bottom, var(--lightblue-color), var(--blue-color));
          color: var(--white-color);
          padding: 0.8em 1.2em;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 25px;
          box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .custom-button:hover {
          transform: translateY(-3px);
          box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
        }

        .custom-button:active {
          transform: scale(0.95);
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
        }

        .custom-button span {
          margin-left: 0.4em;
          transition: all 0.3s;
        }

        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.2);
          margin-right: 0.5em;
          transition: all 0.3s;
        }

        .custom-button:hover .icon-wrapper {
          background-color: rgba(255, 255, 255, 0.5);
        }

        .custom-button:hover i {
          transform: rotate(45deg);
        }

        .icon-wrapper i {
          font-size: 16px;
          transition: transform 0.3s;
        }
      `}</style>

      <button className="custom-button" onClick={onClick}>
        {iconClass && (
          <div className="icon-wrapper">
            <i className={iconClass}></i>
          </div>
        )}
        <span>{children ?? text}</span>
      </button>
    </>
  );
};

export default Button;
