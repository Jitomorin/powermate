import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import benefitOneImg from "../../public/img/unnamed.png";
import {
  ClockIcon,
  DevicePhoneMobileIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

interface BenefitsProps {
  imgPos?: "left" | "right";
  // data: {
  //   imgPos?: "left" | "right";
  //   title: string;
  //   desc: string;
  //   image: any;
  //   bullets: {
  //     title: string;
  //     desc: string;
  //     icon: React.ReactNode;
  //   }[];
  // };
}
export const Benefits = (props: Readonly<BenefitsProps>) => {
  // const { data } = props;

  const data: any = {
    title: "How it works?",
    desc: "Simple – really! When you hit the time limit that you set for yourself, the selected apps will become blocked. Need more time? Gotta send a time request to your friends or family (aka your Powermates!) for approval. No passwords or codes to remember. No extra gadgets or devices to carry. Just one simple, interactive interface!",
    image: benefitOneImg,
    bullets: [
      {
        title: "Step 1",
        desc: "Install the app and register",
        icon: <DevicePhoneMobileIcon />,
      },
      {
        title: "Step 2",
        desc: "Set time limits for the apps you want to manage",
        icon: <ClockIcon />,
      },
      {
        title: "Step 3",
        desc: "Invite friends and family (aka your Powermates!) to join and help you claim back your time!",
        icon: <UsersIcon />,
      },
    ],
  };
  return (
    <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
      <div
        className={`flex items-center justify-center w-full lg:w-1/2 ${
          props.imgPos === "right" ? "lg:order-1" : ""
        }`}
      >
        <div>
          <Image
            src={data.image}
            width={521}
            height={521}
            alt="Benefits"
            className={"object-cover"}
            placeholder="blur"
            blurDataURL={data.image.src}
          />
        </div>
      </div>

      <div
        className={`flex flex-wrap items-center w-full lg:w-1/2 ${
          data.imgPos === "right" ? "lg:justify-end" : ""
        }`}
      >
        <div>
          <div className="flex flex-col w-full mt-4">
            <h3 className="max-w-2xl text-center lg:text-left mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
              {data.title}
            </h3>

            <p className="max-w-2xl text-center lg:text-left py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
              {data.desc}
            </p>
          </div>

          <div className="w-full mt-5">
            {data.bullets.map((item: any, index: any) => (
              <Benefit key={index} title={item.title} icon={item.icon}>
                {item.desc}
              </Benefit>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

function Benefit(props: any) {
  return (
    <div className="flex items-start mt-8 space-x-3">
      <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-[#367446] rounded-md w-11 h-11 ">
        {React.cloneElement(props.icon, {
          className: "w-7 h-7 text-indigo-50",
        })}
      </div>
      <div>
        <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
          {props.title}
        </h4>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          {props.children}
        </p>
      </div>
    </div>
  );
}
