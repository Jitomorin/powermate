import React from "react";
import { TikTokLogo, InstagramLogo, SnapchatLogo, XLogo } from "./Hero";
import "./Carousel.css";
import { Container } from "./Container";

const logos = [
  <TikTokLogo key={1} />,
  <InstagramLogo key={2} />,
  <SnapchatLogo key={3} />,
  <XLogo key={4} />,
];
const CarouselContainer = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center">
        <div className="carousel">
          <div className="carousel-track">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="carousel-item text-gray-400 dark:text-gray-400"
              >
                {logo}
              </div>
            ))}
            {/* Duplicate logos for smooth infinite scrolling */}
            {logos.map((logo, index) => (
              <div
                key={index + logos.length}
                className="carousel-item text-gray-400 dark:text-gray-400"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CarouselContainer;
