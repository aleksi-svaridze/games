import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CarouselCard } from "./Cards";

function ReactMultiCarousel() {
  const responsive = {
    largeDesktop: {
      breakpoint: { max: 4000, min: 1536 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 1536, min: 1280 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1280, min: 560 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 560, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={false}
      >
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
      </Carousel>
    </div>
  );
}

export default ReactMultiCarousel;
