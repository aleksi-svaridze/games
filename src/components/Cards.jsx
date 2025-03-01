import { Link } from "react-router";

export const CarouselCard = ({ title, desc, src }) => {
  return (
    <article className="rounded-xl overflow-hidden shadow-[0_0_20px_5px_rgba(0,0,0,0.5)]">
      <img className="w-full" src={src} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
        <Link to={""}>View</Link>
      </div>
    </article>
  );
};

export const ProductCard = () => {
  return <div className="h-96 w-full bg-red-800 rounded-xl"></div>;
};
