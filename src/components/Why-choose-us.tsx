// components/WhyChooseUsSection.tsx
export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="relative bg-white px-[1%] md:px-[2%] lg:px-[5%] xl:px-[15%]">
      <div className="relative flex lg:justify-end">

        {/* Left-side image */}
        <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="500"  className="absolute top-0 left-0 h-[500px] hidden lg:block">
          <img
            src="/img/arrow-bg.jpg"
            alt="Why Choose Us"
            className="h-full w-auto object-cover"
          />
        </div>

        {/* Text content */}
        <div className="flex flex-col h-full w-full sm:w-[60%] lg:w-[50%] justify-between lg:py-[10%] gap-5 z-10 relative  bg-opacity-90">
          <h2 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500" className="text-center lg:text-left font-extrabold text-[40px] md:text-[60px] text-[#454545]">
            Renovations and Additions
          </h2>
          <p data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" className="text-center lg:text-left py-2">
            Whether you're looking to update your kitchen, add a new room, or completely renovate your home, 
            we have the expertise to handle projects of all sizes. We have the knowledge and skills to tackle 
            any construction challenge.
          </p>
        </div>

      </div>
    </section>
  );
}
