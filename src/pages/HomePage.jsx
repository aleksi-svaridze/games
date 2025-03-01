import { useState } from "react";
import Hero from "../components/Hero";
import { Link } from "react-router";
import { CarouselCard, ProductCard } from "../components/Cards";
import MilesMorales from "../assets/images/desktop/spider-man-miles-morales.jpg";
import Remastered from "../assets/images/desktop/spider-man-remastered.jpg";
import SpiderMan2 from "../assets/images/desktop/spider-man-2.jpg";

function HomePage() {
  const [pcGames] = useState([
    { id: 1, src: MilesMorales, title: "title 1", desc: "desc 1" },
    { id: 2, src: SpiderMan2, title: "title 2", desc: "desc 2" },
    { id: 3, src: Remastered, title: "title 3", desc: "desc 3" },
  ]);
  return (
    <div className="h-full">
      <Hero />
      <div className="flex flex-col gap-y-5">
        <div className="flex items-center justify-between text-white">
          <h2 className="text-3xl">Spider-Man for PCs</h2>
          <Link
            to={"/pc"}
            className="text-xs border-[1px] py-1 px-2 rounded-md"
          >
            View All
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-x-2 md:gap-x-5 lg:gap-x-10">
          {pcGames.map((item) => (
            <CarouselCard
              src={item.src}
              title={item.title}
              desc={item.desc}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
