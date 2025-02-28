import React from "react";
import Hero from "../components/Hero";
import ReactMultiCarousel from "../components/Carousel";

function HomePage() {
  return (
    <div className="h-full">
      <Hero />
      <ReactMultiCarousel />
    </div>
  );
}

export default HomePage;
