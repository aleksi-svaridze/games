import HeroBg from "../assets/images/desktop/hero-big.webp";

function Hero() {
  return (
    <div className="mb-20">
      <div
        className="polygon-hero h-[500px] md:h-[580px] flex items-center justify-center md:justify-end bg-left md:bg-top bg-no-repeat bg-cover md:pr-10"
        style={{
          backgroundImage: `url(${HeroBg})`,
        }}
      >
        <div className="text-white max-w-1/2 text-center md:text-left hidden md:block">
          <h1 className="text-xl md:text-4xl font-light tracking-widest">
            Spider-Man PC Versions
          </h1>
          <h3 className="text-base md:text-xl font-light tracking-wider mt-5">
            Some descrih4tion here...Some description here...Some description
            here...Some description here...
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Hero;
