import { useState } from "react";
import { CarouselCard } from "../components/Cards";

// Card images
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
    <div className="container mx-auto">
      <h2 className="text-xl lg:text-4xl capitalize text-center text-white mb-16">
        Spider-Man for PC
      </h2>

      <div className="flex flex-col gap-y-10 md:gap-y-0 md:flex-row items-center justify-between gap-x-2 md:gap-x-5 lg:gap-x-10">
        {pcGames.map((item) => (
          <CarouselCard src={item.src} title={item.title} key={item.id} />
        ))}
      </div>

      <section className="mt-24 mb-16">
        <h2 className="text-xl lg:text-4xl capitalize text-center text-white mb-16">
          requirements
        </h2>

        <div className="flex">
          <div className="flex w-full lg:w-2/3 gap-x-4 bg-[#0d0d0e]">
            <div
              className="bg-cover bg-center bg-no-repeat w-1/2 h-80"
              style={{ backgroundImage: `url(${MilesMorales})` }}
            ></div>
            <div className="flex flex-col justify-center text-white gap-y-5">
              <h3 className="text-2xl">Spider-Man: Miles Morales</h3>
              <p className="text-lg">requirements: mmvmv</p>
              <a
                href="/"
                className="text-base text-white border-white border-2 inline-flex px-3 py-1"
              >
                Get game
              </a>
            </div>
          </div>
        </div>

        <div className="flex lg:justify-end my-10 lg:my-0">
          <div className="flex w-full lg:w-2/3 gap-x-4 bg-[#0d0d0e]">
            <div
              className="bg-cover bg-center bg-no-repeat w-1/2 h-80"
              style={{ backgroundImage: `url(${Remastered})` }}
            ></div>
            <div className="flex flex-col justify-center text-white gap-y-5">
              <h3 className="text-2xl">Spider-Man Remastered</h3>
              <p className="text-lg">requirements: mmvmv</p>
              <a
                href="/"
                className="text-base text-white border-white border-2 inline-flex px-3 py-1"
              >
                Get game
              </a>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex w-full lg:w-2/3 gap-x-4 bg-[#0d0d0e]">
            <div
              className="bg-cover bg-center bg-no-repeat w-1/2 h-80"
              style={{ backgroundImage: `url(${SpiderMan2})` }}
            ></div>
            <div className="flex flex-col justify-center text-white gap-y-5">
              <h3 className="text-2xl">Spider-Man 2 Digital Deluxe Edition</h3>
              <p className="text-lg">requirements: mmvmv</p>
              <a
                href="/"
                className="text-base text-white border-white border-2 inline-flex px-3 py-1"
              >
                Get game
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
