"use client";

import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.png";
import SlideOver from "./SlideOver";
import RobotImage from "../../public/img/robot.png";
import { useRef, useState } from "react";
import FloatingBalls from "./FloatingBall";
import CarouselSlider from "./CarouselSlider";
import Toast from "./Toast";
import GlassmorphismTitle from "./GlassmorphismTitle";
import BackgroundArea from "./BackgroundArea";
import "./Hero.css";
import { InstagramLogo, SnapchatLogo, TikTokLogo, XLogo } from "./Icons";
import ScrollButton from "./ScrollButton";

export const Hero = ({ open, setOpen }: any) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState("");
  const inputEl: any = useRef(null);
  const targetRef = useRef(null);

  const subscribe = async (e: any) => {
    console.log(`Data: ${email} ${name}`);
    e.preventDefault();
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email,
        name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const { error } = await res.json();
    if (error) {
      setMessage(error);
      return;
    }
    inputEl.current.value = "";
    setMessage("You are now added to the waitlist.");
  };

  const subscribeUser = async (e: any) => {
    e.preventDefault();

    // this is where your mailchimp request is made
    setLoading(true);
    await fetch("/api/subscribe", {
      body: JSON.stringify({
        email,
        name,
      }),

      headers: {
        "Content-Type": "application/json",
      },

      method: "POST",
    })
      .then((res) => {
        console.log("placeee", res);

        // console.log("should have worked");
        setMessage("Submitted successfully");
        setShowToast(true);
        setLoading(false);
        setEmail("");
        setName("");
      })
      .catch((e: any) => {
        setMessage(e.message);
        setShowToast(true);
        setLoading(false);
      });
  };
  const logos = [
    <TikTokLogo key={1} />,
    <InstagramLogo key={2} />,
    <SnapchatLogo key={3} />,
    <XLogo key={4} />,
  ];

  return (
    <div className="relative">
      {/* <BackgroundArea /> */}
      <Container className="flex flex-col p-0 m-0">
        {/* <SlideOver open={open} setOpen={setOpen} /> */}
        {/* <FloatingBalls /> */}
        <div className="flex xl:items-start 2xl:mt-72 justify-start w-full min-h-[70vh] lg:h-screen mt-0 ">
          <div className=" mx-auto flex flex-col ">
            <h1 className="text-2xl font-bold leading-snug tracking-tight text-center text-[#1f2937] dark:text-white  lg:leading-tight lg:text-5xl xl:leading-tight md:px-10 xl:px-96">
              Take Control of Your Social Media Time with Friends
            </h1>
            <p className="py-5 lg:px-24 xl:px-96 px-0 md:px-24 text-center text-[17px] leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              An app that helps you limit your social media use to 1 hour (or 2)
              per day with the support of your friends!
            </p>
            <div className="flex items-center flex-col lg:flex-row justify-center lg:justify-between w-full ">
              <div className="w-full px-0 sm:px-10 md:px-52 xl:px-96">
                <div className="mt-6   sm:flex sm:items-end lg:px-20">
                  <form onSubmit={subscribeUser} className="sm:flex-1">
                    <div>
                      <div className="flex flex-col space-y-2">
                        <div className="flex flex-col space-y-2">
                          <label className="font-semibold">Name</label>
                          <input
                            value={name}
                            onChange={(e: any) => {
                              setName(e.target.value);
                            }}
                            className="rounded-lg border border-gray-400 p-2 focus:border-gray-400 focus:outline-none focus:ring-0"
                            placeholder="eg. John doe"
                          />
                        </div>
                        <div className="flex flex-col space-y-2">
                          <label className="font-semibold">Email</label>
                          <div className="relative">
                            <input
                              ref={inputEl}
                              value={email}
                              onChange={(e: any) => setEmail(e.target.value)}
                              className="w-full rounded-lg border border-gray-400 p-2 pr-16 focus:border-gray-400 focus:outline-none focus:ring-0"
                              placeholder="eg. johndoe@gmail.com"
                            />
                            <button
                              type="submit"
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-md bg-transparent hover:bg-[#5dc8793a] px-3 py-2 text-sm font-semibold text-[#5dc87a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0"
                            >
                              {loading ? "Loading..." : "Submit"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="mt-5 flex flex-wrap space-y-3 sm:space-x-3 sm:space-y-0">
                    <button
                      type="submit"
                      className="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md bg-transparent hover:bg-[#5dc8793a] px-3 py-2 text-sm font-semibold text-[#5dc87a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 sm:flex-1"
                    >
                      {loading ? "Loading..." : "Submit"}
                    </button>
                  </div> */}
                  </form>
                </div>
              </div>
              {/* <div className="w-full ">
                <Image
                  src={RobotImage}
                  width="316"
                  height="317"
                  className={"object-cover mx-auto"}
                  alt="Hero Illustration"
                  loading="eager"
                  // placeholder="blur"
                />
              </div> */}
            </div>

            {/* <ScrollButton targetRef={targetRef} /> */}
          </div>
        </div>

        <Toast
          open={showToast}
          message={message}
          duration={3000} // Duration in milliseconds
          onClose={() => {
            setShowToast(false);
          }}
        />
      </Container>
    </div>
  );
};
