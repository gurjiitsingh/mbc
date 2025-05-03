'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const servicesLeft = [
  "Roofing",
  "New kitchen",
  "Toilet and Bathroom",
  "Painting & Decorating",
  "Loft conservation",
  "Build new house",
  "New Extension",
];

const servicesRight = [
  "Heating & plumbing",
  "Electrical work",
  "New fencing",
  "Driveway paving",
  "Double glazing",
  "Silicone render",
  "Full house refurbishment",
];

export default function ServicesSection() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="services" className="w-full mt-[230px] sm:mt-[150px] mb-9">
      <div className="flex flex-col-reverse md:flex-row justify-between px-[10%] md:px-[1%] sm:py-4 sm:px-5 md:py-8 lg:px-[5%] xl:px-[15%] lg:py-[150px]">
        {/* Left image block */}
        <div className="w-full md:w-[40%] lg:w-[30%] pt-5 pl-[50px] z-10">
          <div
            className="pb-7 border-4 border-[#f77d36]"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <Image
              src="/img/services-1.webp"
              alt="Our Services"
              width={800}
              height={600}
              className="lg:w-full lg:h-full mt-[-40px] ml-[-40px] object-cover"
            />
          </div>
        </div>

        {/* Right content block */}
        <div className="w-full md:w-[50%] lg:w-[60%] z-10">
          <div className="flex flex-col justify-between gap-4">
            <h2
              className="text-[2rem] md:text-[4rem] xl:text-[5rem] text-[#F5B402] font-bold uppercase text-left"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              Our <span className="font-thin">Services</span>
            </h2>
            <p>
              With over 10 years of experience, our dedicated team of professionals is committed to
              turning your vision into reality. From concept to completion, we work closely with you
              to design and build the home of your dreams.
            </p>
            <h2
              className="text-left font-extrabold text-[30px] text-[#454545]"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              Your satisfaction is our top priority.
            </h2>

            {/* Service items */}
            <div
              className="flex flex-col lg:flex-row gap-4"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <div className="w-full lg:w-1/2 space-y-2">
                {servicesLeft.map((service, idx) => (
                  <ServiceItem key={idx} title={service} />
                ))}
              </div>
              <div className="w-full lg:w-1/2 space-y-2">
                {servicesRight.map((service, idx) => (
                  <ServiceItem key={idx} title={service} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceItem({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2">
      <svg
        className="text-[#f69733]"
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-2 14.413l-3.713-3.705L7.7 11.292l2.3 2.295 5.294-5.294 1.414 1.414-6.708 6.706z" />
      </svg>
      <h2 className="text-[1.5rem] text-[#454545] text-left">{title}</h2>
    </div>
  );
}
