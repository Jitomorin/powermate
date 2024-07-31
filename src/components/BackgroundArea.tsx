import React from "react";

const BackgroundArea: React.FC = ({ children }: any) => {
  return (
    <div className="absolute inset-0 z-[-1] w-full md:h-[68vh] h-[100vh] lg:h-[70vh] dark:bg-dark_bg bg-light_bg overflow-hidden">
      <ul className="circles relative w-full h-full">
        <li className="absolute w-20 h-20 bg-lightenedGreen   bg-opacity-20 rounded-full animate-animate bottom-[-150px] left-[25%]"></li>
        <li className="absolute w-5 h-5 bg-lightenedGreen   bg-opacity-20 rounded-full animate-[animate_12s_linear_infinite_2s] bottom-[-150px] left-[10%]"></li>
        <li className="absolute w-5 h-5 bg-lightenedGreen   bg-opacity-20 rounded-full animate-animate bottom-[-150px] left-[70%] animate-[animate_25s_linear_infinite_4s]"></li>
        <li className="absolute w-15 h-15 bg-lightenedGreen   bg-opacity-20 rounded-full animate-[animate_18s_linear_infinite_0s] bottom-[-150px] left-[40%]"></li>
        <li className="absolute w-5 h-5 bg-lightenedGreen   bg-opacity-20 rounded-full animate-animate bottom-[-150px] left-[65%]"></li>
        <li className="absolute w-28 h-28 bg-lightenedGreen   bg-opacity-20 rounded-full animate-[animate_25s_linear_infinite_3s] bottom-[-150px] left-[75%]"></li>
        <li className="absolute w-36 h-36 bg-lightenedGreen   bg-opacity-20 rounded-full animate-[animate_25s_linear_infinite_7s] bottom-[-150px] left-[35%]"></li>
        <li className="absolute w-6 h-6 bg-lightenedGreen   bg-opacity-20 rounded-full animate-[animate_45s_linear_infinite_15s] bottom-[-150px] left-[50%]"></li>
        <li className="absolute w-3.5 h-3.5 bg-lightenedGreen   bg-opacity-20 rounded-full animate-[animate_35s_linear_infinite_2s] bottom-[-150px] left-[20%]"></li>
        <li className="absolute w-36 h-36 bg-lightenedGreen   bg-opacity-20 rounded-full animate-[animate_11s_linear_infinite_0s] bottom-[-150px] left-[85%]"></li>
        {children}
      </ul>
    </div>
  );
};

export default BackgroundArea;
