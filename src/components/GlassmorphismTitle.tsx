import React from "react";
import { Container } from "./Container";
import "./Carousel.css";

const GlassmorphismTitle = () => {
  return (
    <Container>
      <div className="relative px-0 mx-0 w-full flex items-center justify-center  bg-custom-gradient-2">
        <div className="bg-white bg-opacity-10 backdrop-blur-md border border-opacity-30 border-white rounded-xl p-8 shadow-lg">
          <h1 className="text-xl md:text-3xl font-bold leading-snug tracking-tight text-center text-gray-800 lg:leading-tight lg:text-6xl xl:leading-tight bg-dark-gradient dark:bg-custom-gradient bg-clip-text text-transparent">
            Take Control of Your Social Media Time with Friends
          </h1>
        </div>
      </div>
    </Container>
  );
};

export default GlassmorphismTitle;
