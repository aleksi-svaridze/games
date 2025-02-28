import HeroBg from "../assets/images/desktop/Hero-big.webp";

function Hero() {
  return (
    <div className="mt-10 mb-20">
      <div
        className="h-96 rounded-xl flex items-center justify-end pr-10"
        style={{
          backgroundImage: `url(${HeroBg})`,
          boxShadow: "0 0 20px 5px rgba(0,0,0, .5)",
        }}
      >
        <div className="text-white max-w-1/2">
          <h1 className="text-4xl font-bold">
            Spider-man versions
            <br /> for all platforms
          </h1>
          <h3 className="text-xl font-medium mt-5">
            Some descrih4tion here...Some description here...Some description
            here...Some description here...
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Hero;
