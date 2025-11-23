import React from "react";
import "../styles/Notification.css";

const Notification = ({ message, type = "success", onClose }) => {
    if (!message) return null;

    return (
        <div className={`notification notification-${type}`}>
            <p>{message}</p>
            <button className="notification-close" onClick={onClose}>
                ×
            </button>
        </div>
    );
};

export default Notification;
