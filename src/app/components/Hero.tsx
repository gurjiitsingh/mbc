"use client";

import Image from "next/image";
import AOS from "aos";
import { useEffect } from "react";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section id="hero">
      <div className="relative w-full h-screen z-40">
        {/* Background Images */}
        <div className="absolute top-0 left-0 -z-10">
          <Image 
            src="/img/10l.webp"
            alt="Hero background large"
            className="slide-responsive-xl bg-cover bg-no-repeat bg-center w-screen h-full sm:h-screen hidden lg:block"
            width={1920}
            height={1080}
          />
          <Image
            src="/img/10m.webp"
            alt="Hero background medium"
            className="slide-responsive-lg bg-cover bg-no-repeat bg-center w-screen h-screen hidden md:block lg:hidden"
            width={1920}
            height={1080}
          />
          <Image
            src="/img/10fs.webp"
            alt="Hero background small"
            className="slide-responsive-sm bg-cover bg-no-repeat bg-center w-screen h-screen block md:hidden"
            width={1920}
            height={1080}
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center items-center pt-[10%] md:pt-[15%] lg:pt-[9%] w-full md:h-screen md:px-[10%]">
          <div className="flex flex-col md:flex-row md:gap-3 justify-between px-2">
            <div className="w-full flex flex-col items-center justify-center">
              <h1
                className="text-center text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] xl:text-[4rem] text-white font-bold uppercase"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                Man Brar Construction Ltd. UK
              </h1>
              <h2
                className="text-center text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] xl:text-[4rem] text-white font-bold uppercase"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <span className="font-light">WE BUILD DREAM HOMES</span>
              </h2>
              <p
                className="text-white w-full md:w-[60%] text-center"
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                We understand that a home is more than just a place to live. It's where you create memories, build your future, and find comfort.
              </p>
              <div
                className="flex flex-row items-center sm:items-start mt-3 gap-4"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <a href="#services">
                  <button
                    className="w-[150px] text-[18px] leading-6 bg-yellow-600 text-white px-[30px] py-[10px]"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                  >
                    SERVICES
                  </button>
                </a>
                <a href="#footer">
                  <button className="flex gap-2 w-[150px] items-center justify-center text-[18px] leading-6 text-white px-[30px] py-[10px]">
                    CONTACT
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Feature Images */}
          <div
            className="relative shadow-lg p-4 sm:border-2 sm:rounded-lg border-[#222] sm:w-full flex flex-col gap-2 mt-[20px] mb-8 justify-start items-center sm:flex-row sm:mt-[80px] md:w-full md:pt-[100px] md:mt-[60px] lg:items-start lg:justify-between"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <div className="w-full flex flex-col gap-1 justify-center items-center">
              <Image
                src="/img/house-3e.webp"
                alt="External Construction"
                width={300}
                height={200}
                className="w-[300px] h-[200px]"
              />
            </div>
            <div className="w-full flex flex-col gap-1 justify-center items-center">
              <Image
                src="/img/inside-house.webp"
                alt="Internal Construction"
                width={300}
                height={200}
                className="w-[300px] h-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
