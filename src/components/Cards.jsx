import { Link } from "react-router";

export const CarouselCard = ({ title, src }) => {
  return (
    <article className="overflow-hidden shadow-[0_0_20px_5px_rgba(0,0,0,0.5)]">
      <div
        style={{ backgroundImage: `url(${src})` }}
        className="w-full h-96 md:h-60 lg:h-80 xl:h-[400px] 2xl:h-[490px] bg-cover bg-center bg-no-repeat"
      ></div>
      <div className="py-5 px-4">
        <h2 className="font-semibold text-xl md:text-base xl:text-2xl">
          {title}
        </h2>
        <Link to={""} className="text-lg border-2 mt-5 inline-block px-3 py-1">
          Get Game
        </Link>
      </div>
    </article>
  );
};

export const ProductCard = () => {
  return <div className="h-96 w-full bg-red-800 rounded-xl"></div>;
};
