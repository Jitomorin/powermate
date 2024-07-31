import React from "react";
import { TikTokLogo, InstagramLogo, SnapchatLogo, XLogo } from "./Icons";
import { Container } from "./Container";
import "./Carousel.css";

const logos = [
  <TikTokLogo key={1} />,
  <InstagramLogo key={2} />,
  <SnapchatLogo key={3} />,
  <XLogo key={4} />,
];

const CarouselContainer = () => {
  return (
    <Container>
      <div className="relative overflow-hidden w-full">
        <div className="flex flex-col justify-center">
          <div className="carousel relative">
            <div className="carousel-track flex animate-slide">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="carousel-item flex-0 flex justify-center items-center text-gray-400 dark:text-gray-400 px-8 box-border"
                >
                  {logo}
                </div>
              ))}
              {/* Duplicate logos for smooth infinite scrolling */}
              {logos.map((logo, index) => (
                <div
                  key={index + logos.length}
                  className="carousel-item flex-0 flex justify-center items-center text-gray-400 dark:text-gray-400 px-8 box-border"
                >
                  {logo}
                </div>
              ))}
            </div>
            <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-white dark:from-[#171717] to-transparent pointer-events-none"></div>
            <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-white dark:from-[#171717] to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CarouselContainer;
