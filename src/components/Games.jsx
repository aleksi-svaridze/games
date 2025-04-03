import MilesMorales from "../assets/images/desktop/spider-man-miles-morales.jpg";
import Remastered from "../assets/images/desktop/spider-man-remastered.jpg";
import SpiderMan2 from "../assets/images/desktop/spider-man-2.jpg";

function HomePage() {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl md:text-3xl text-white text-center capitalize mb-14">
        spider-man PC games
      </h2>

      <div className="grid md:grid-cols-2 gap-x-10">
        <div
          className="polygon-right-img w-full h-96 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${SpiderMan2})` }}
        ></div>
        <div className="text-white px-5 md:px-0">
          <h2 className="text-xl lg:text-4xl my-5 md:mb-10">
            Marvel's Spider-Man 2 Digital Deluxe Edition - PC
          </h2>
          <p className="text-base md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            dicta? Quas sunt iste, quos eos accusamus aliquam a dolor. Mollitia
            asperiores ad similique ratione harum in voluptatibus, vitae aperiam
            voluptate!
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-x-10 my-10">
        <div className="text-white pt-[50px] pb-5 md:pb-0 px-5 md:px-0 order-2 md:order-1">
          <h2 className="text-xl md:text-4xl mb-5 md:mb-10">
            Marvel's Spider-Man: Miles Morales Standard - PC
          </h2>
          <p className="text-base md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            dicta? Quas sunt iste, quos eos accusamus aliquam a dolor. Mollitia
            asperiores ad similique ratione harum in voluptatibus, vitae aperiam
            voluptate!
          </p>
        </div>
        <div
          className="polygon-left-img w-full h-96 bg-cover bg-center bg-no-repeat order-1 md:order-2"
          style={{
            backgroundImage: `url(${MilesMorales})`,
          }}
        ></div>
      </div>

      <div className="grid md:grid-cols-2 gap-x-10">
        <div
          className="polygon-top-img w-full h-96 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Remastered})` }}
        ></div>
        <div className="pt-[50px] text-white px-5 md:px-0">
          <h2 className="text-xl lg:text-4xl my-5 md:mb-10">
            Marvel's Spider-Man Remastered Standard - PC
          </h2>
          <p className="text-base md:text-xl">
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
