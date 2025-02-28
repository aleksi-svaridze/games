import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CarouselCard } from "./Cards";

function ReactMultiCarousel({ data }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1280, min: 560 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 560, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        autoPlay={false}
        // itemClass={"px-5"}
        containerClass={"rounded-xl"}
        sliderClass={"gap-x-5"}
        removeArrowOnDeviceType={[]}
      >
        {data.map((item) => (
          <CarouselCard
            src={item.src}
            title={item.title}
            desc={item.desc}
            key={item.id}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default ReactMultiCarousel;
