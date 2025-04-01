import MilesMorales from "../assets/images/desktop/spider-man-miles-morales.jpg";
import Remastered from "../assets/images/desktop/spider-man-remastered.jpg";
import SpiderMan2 from "../assets/images/desktop/spider-man-2.jpg";

function HomePage() {
  return (
    <div className="container mx-auto">
      <h2 className="text-xl lg:text-4xl capitalize text-center text-white mb-16">
        Spider-Man for PC
      </h2>

      <div className="grid grid-cols-2 gap-x-10">
        <div
          className="polygon-right-img w-full h-96 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${SpiderMan2})` }}
        ></div>
        <div className="text-white">
          <h2 className="text-4xl mb-10">
            Marvel's Spider-Man 2 Digital Deluxe Edition - PC
          </h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            dicta? Quas sunt iste, quos eos accusamus aliquam a dolor. Mollitia
            asperiores ad similique ratione harum in voluptatibus, vitae aperiam
            voluptate!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-10 my-10">
        <div className="text-white pt-[50px]">
          <h2 className="text-4xl mb-10">
            Marvel's Spider-Man: Miles Morales Standard - PC
          </h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            dicta? Quas sunt iste, quos eos accusamus aliquam a dolor. Mollitia
            asperiores ad similique ratione harum in voluptatibus, vitae aperiam
            voluptate!
          </p>
        </div>
        <div
          className="polygon-left-img w-full h-96 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${MilesMorales})` }}
        ></div>
      </div>

      <div className="grid grid-cols-2 gap-x-10">
        <div
          className="polygon-top-img w-full h-96 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Remastered})` }}
        ></div>
        <div className="text-white pt-[50px]">
          <h2 className="text-4xl mb-10">
            Marvel's Spider-Man Remastered Standard - PC
          </h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            dicta? Quas sunt iste, quos eos accusamus aliquam a dolor. Mollitia
            asperiores ad similique ratione harum in voluptatibus, vitae aperiam
            voluptate!
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
