import React from "react";

const ScrollButton = ({ targetRef }: any) => {
  const scrollToRef = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToRef}
      className="scroll-button mx-auto transition-all ease-in-out hover:scale-[1.03]"
    >
      ↓ Scroll Down
    </button>
  );
};

export default ScrollButton;
