"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWrench,
} from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { UseSiteContext } from "@/SiteContext/SiteContext";
import Header from "@/components/Header";
import ServicesSection from "@/components/Services";
import CreateWebsite from "@/components/Create-your-website";
import FeaturesSection from "@/components/FeaturesSection";
import WhyChooseUs from "@/components/Why-choose-us";
import Slider from "@/components/Slider";
import HeroSection from "@/components/Hero";
import AboutUsSection from "@/components/about-us";
import WhyChooseUsSection from "@/components/Why-choose-us";
import TestimonialsSection from "@/components/TestimonialsSection";
import SliderSection from "@/components/Slider";
import Footer from "@/components/Footer";
import Footer1 from "@/components/Footer-1";
//import { usePathname } from "next/navigation";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  const { bargerMenuToggle } = UseSiteContext();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    bargerMenuToggle(false);
  }, []);



  return (
    <div className="w-full mx-auto bg-gray-100 text-gray-900 ">
      {/* Header */}
      <Header />
      <HeroSection />

      {/* Our Services */}
      <ServicesSection />

      <AboutUsSection />
     <WhyChooseUsSection />

      <TestimonialsSection />

    <SliderSection  />

    
      {/* Footer */}
 <Footer />
    </div>
  );
}
