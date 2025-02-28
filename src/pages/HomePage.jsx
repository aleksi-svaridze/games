import { useState } from "react";
import Hero from "../components/Hero";
import ReactMultiCarousel from "../components/Carousel";
import { Link } from "react-router";
// import { ProductCard } from "../components/Cards";
import MilesMoralesBig from "../assets/images/desktop/miles-morales-big.jpg";
import RemasteredBig from "../assets/images/desktop/remastered-big.jpg";
import Sp2Bib from "../assets/images/desktop/sp-2-big.jpg";
import Responsive from "../components/Carousel";

function HomePage() {
  const [pcGames] = useState([
    { id: 1, src: MilesMoralesBig, title: "title 1", desc: "desc 1" },
    { id: 2, src: Sp2Bib, title: "title 2", desc: "desc 2" },
    { id: 3, src: RemasteredBig, title: "title 3", desc: "desc 3" },
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
        <ReactMultiCarousel data={pcGames} />
      </div>
    </div>
  );
}

export default HomePage;
