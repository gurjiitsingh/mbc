"use client";

import Image from "next/image";
import { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const testimonials = [
  { name: "Blanche Pearson", role: "Sales Manager", img: "/img/img-1.jpg" },
  { name: "Joenas Brauers", role: "Web Developer", img: "/img/img-2.jpg" },
  { name: "Lariach French", role: "Online Teacher", img: "/img/img-3.jpg" },
  { name: "James Khosravi", role: "Freelancer", img: "/img/img-4.jpg" },
  { name: "Kristina Zasiadko", role: "Bank Manager", img: "/img/img-5.jpg" },
  { name: "Donald Horton", role: "App Designer", img: "/img/img-6.jpg" },
];

export default function TestimonialSlider() {
  const scrollRef = useRef<HTMLUListElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.6;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="slider">
      <div className="flex flex-col items-center justify-center px-4 py-10 lg:px-[5%] xl:px-[15%]">
        <div className="text-sm py-8 text-center max-w-3xl">
          <p className="italic mb-4">
            "Building with Man Brar Construction Ltd. was a fantastic experience.
            They listened to our ideas and made our dream home a reality."
          </p>
          <p className="italic">
            "The team at Man Brar Construction Ltd. is professional, reliable, and truly
            cares about their clients. We couldn't be happier with our new home."
          </p>
        </div>

        {/* Slider */}
        <div className="relative w-full">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white/80 text-gray-700 p-3 rounded-full shadow hover:bg-white"
            aria-label="Slide left"
          >
            <FaAngleLeft size={24} />
          </button>

          <ul
            ref={scrollRef}
            className="carousel flex gap-6 overflow-x-auto scroll-smooth py-4 px-2 no-scrollbar"
          >
            {testimonials.map((person, index) => (
              <li
                key={index}
                className="min-w-[220px] max-w-[240px] bg-white shadow-lg rounded-lg p-4 text-center flex-shrink-0"
              >
                <div className="img mb-2">
                  <Image
                    src={person.img}
                    alt={person.name}
                    width={100}
                    height={100}
                    className="rounded-full object-cover mx-auto"
                    draggable={false}
                  />
                </div>
                <h2 className="text-lg font-semibold">{person.name}</h2>
                <span className="text-sm text-gray-500">{person.role}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white/80 text-gray-700 p-3 rounded-full shadow hover:bg-white"
            aria-label="Slide right"
          >
            <FaAngleRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
