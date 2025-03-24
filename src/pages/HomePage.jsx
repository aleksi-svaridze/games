import { useState } from "react";
import Hero from "../components/Hero";
import { Link } from "react-router";
import { CarouselCard, ProductCard } from "../components/Cards";
import MilesMorales from "../assets/images/desktop/spider-man-miles-morales.jpg";
import Remastered from "../assets/images/desktop/spider-man-remastered.jpg";
import SpiderMan2 from "../assets/images/desktop/spider-man-2.jpg";

function HomePage() {
  const [pcGames] = useState([
    {
      id: 1,
      src: Remastered,
      title: "Marvel's Spider-Man Remastered Standard - PC",
      desc: "desc 1",
    },
    {
      id: 2,
      src: MilesMorales,
      title: "Marvel's Spider-Man: Miles Morales Standard - PC",
      desc: "desc 2",
    },
    {
      id: 3,
      src: SpiderMan2,
      title: "Marvel's Spider-Man 2 Digital Deluxe Edition - PC",
      desc: "desc 3",
    },
  ]);
  return (
    <div className="">
      <Hero />

      <div className="flex flex-col gap-y-5 mt-20">
        <div className="flex items-center justify-between text-white">
          <h2 className="text-xl lg:text-3xl">Spider-Man for PCs</h2>
          <Link to={"pc"} className="text-xs border-[1px] py-1 px-2 rounded-md">
            View All
          </Link>
        </div>
        <div className="flex flex-col gap-y-10 md:gap-y-0 md:flex-row items-center justify-between gap-x-2 md:gap-x-5 lg:gap-x-10">
          {pcGames.map((item) => (
            <CarouselCard src={item.src} title={item.title} key={item.id} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-y-5 mt-20">
        <div className="flex items-center justify-between text-white">
          <h2 className="text-xl lg:text-3xl">Spider-Man for Xbox</h2>
          <Link
            to={"xbox"}
            className="text-xs border-[1px] py-1 px-2 rounded-md"
          >
            View All
          </Link>
        </div>
        <div className="flex flex-col gap-y-10 md:gap-y-0 md:flex-row items-center justify-between gap-x-2 md:gap-x-5 lg:gap-x-10">
          {pcGames.map((item) => (
            <CarouselCard src={item.src} title={item.title} key={item.id} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-y-5 mt-20">
        <div className="flex items-center justify-between text-white">
          <h2 className="text-xl lg:text-3xl">Spider-Man for Playstation</h2>
          <Link
            to={"playstation"}
            className="text-xs border-[1px] py-1 px-2 rounded-md"
          >
            View All
          </Link>
        </div>
        <div className="flex flex-col gap-y-10 md:gap-y-0 md:flex-row items-center justify-between gap-x-2 md:gap-x-5 lg:gap-x-10">
          {pcGames.map((item) => (
            <CarouselCard src={item.src} title={item.title} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
