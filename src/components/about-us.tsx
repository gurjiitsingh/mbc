// components/AboutUsSection.tsx
import Image from 'next/image';

export default function AboutUsSection() {
  return (
    <section id="about-us" className="bg-[#282828] w-full py-8">
      <div className="container mx-auto flex flex-col gap-12 px-[2%] sm:px-[4%] md:px-[5%] lg:flex-row justify-between">
        {/* Text content */}
        <div className="flex flex-col h-full w-full items-center md:items-start gap-5 lg:w-[60%]">
          <h2 className="text-[2rem] md:text-[4rem] xl:text-[5rem] text-[#F5B402] font-bold uppercase text-center md:text-left lg:w-[60%]">
            About <span className="font-thin">Us</span>
          </h2>

          <p
            className="text-white w-full text-center lg:text-left lg:w-[60%]"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            Man Brar Construction Ltd. is a leading home construction company specializing in creating
            custom homes that reflect your unique style and needs. Our mission is to deliver quality
            craftsmanship, innovative design, and exceptional customer service.
          </p>

          <p className="text-white text-center sm:text-left">
            <br />
            <strong>Our Promise</strong>
            <br />
            <strong>Quality:</strong> We use only the finest materials and employ skilled craftsmen to ensure every detail is perfect.
            <br />
            <strong>Integrity:</strong> Transparency and honesty are at the core of everything we do.
            <br />
            <strong>Sustainability:</strong> We build with the environment in mind, using eco-friendly materials and practices.
          </p>
        </div>

        {/* Image block */}
        <div className="w-full lg:w-[40%] flex justify-center bg-[#333] rounded-lg">
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <Image
              src="/img/about-us-4.webp"
              alt="About Us"
              width={800}
              height={600}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
