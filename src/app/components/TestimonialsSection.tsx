// components/TestimonialsSection.tsx
export default function TestimonialsSection() {
    return (
      <section
      id="testimonials"
      className="bg-[url('/images/building-1.webp')] bg-cover bg-center bg-fixed"
    >
      <div
        className="flex justify-center items-center px-4 py-20"
        style={{ minHeight: '400px' }}
      >
        <div className="w-full max-w-6xl">
          <div className="flex flex-col h-full w-[70%] lg:w-[50%] gap-5 bg-[#837e7e76] px-6 py-[10%] mx-auto">
            <h2
              className="text-center lg:text-left font-extrabold text-[40px] md:text-[60px] text-[#eee]"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              What People Say About Us
            </h2>
            <h3
              className="text-center lg:text-left font-bold text-[2rem] text-orange-500"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              With over 10 years in the industry
            </h3>
          </div>
        </div>
      </div>
    </section>
    );
  }
  