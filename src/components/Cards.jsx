export const CarouselCard = ({ title, desc, src }) => {
  return (
    <article
      className="h-80 p-5 rounded-xl bg-no-repeat bg-cover bg-top"
      style={{ backgroundImage: `url(${src})` }}
    >
      <h2>{title}</h2>
      <p>{desc}</p>
    </article>
  );
};

export const ProductCard = () => {
  return <div className="h-96 w-full bg-red-800 rounded-xl"></div>;
};
