// components/Toast.js
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Toast = ({ open, message, duration = 3000, onClose }: any) => {
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    if (open) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        if (onClose) onClose();
      }, duration);

      return () => clearTimeout(timer); // Clear timeout if component unmounts or open changes
    } else {
      setVisible(false);
    }
  }, [open, duration, onClose]);

  if (!visible) return null;

  return (
    <div style={styles.toast}>
      <div style={styles.message}>{message}</div>
    </div>
  );
};

Toast.propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  duration: PropTypes.number,
  onClose: PropTypes.func,
};

const styles: any = {
  toast: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    zIndex: 9999,
  },
  message: {
    fontSize: "14px",
  },
};

export default Toast;
