import SpiderMan2 from "../assets/images/desktop/spider-man-2.jpg";

function News() {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl md:text-3xl text-white text-center capitalize mb-14">
        latest news
      </h2>
      <div className="grid grid-cols-1 gap-y-10 lg:gap-y-0 md:grid-cols-3 md:gap-x-5 lg:gap-x-5">
        <div className="text-white">
          <img src={SpiderMan2} className="mb-3" alt="" />
          <div className="px-2 md:px-0">
            <h3 className="text-2xl md:text-lg xl:text-2xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </h3>
            <p className="text-base mt-5 md:mt-3 mb-7 md:mb-5 md:text-sm xl:text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
              laboriosam asperiores saepe nisi? Ad, eveniet quas eius deserunt
              quidem illum soluta veniam aspernatur ipsum aliquid corrupti
              numquam. Recusandae, modi non?
            </p>
            <a href="#" className="py-1 px-2 bg-red-500">
              View more
            </a>
          </div>
        </div>
        <div className="text-white">
          <img src={SpiderMan2} className="mb-3" alt="" />
          <div className="px-2 md:px-0">
            <h3 className="text-2xl md:text-lg xl:text-2xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </h3>
            <p className="text-base mt-5 md:mt-3 mb-7 md:mb-5 md:text-sm xl:text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
              laboriosam asperiores saepe nisi? Ad, eveniet quas eius deserunt
              quidem illum soluta veniam aspernatur ipsum aliquid corrupti
              numquam. Recusandae, modi non?
            </p>
            <a href="#" className="py-1 px-2 bg-red-500">
              View more
            </a>
          </div>
        </div>
        <div className="text-white">
          <img src={SpiderMan2} className="mb-3" alt="" />
          <div className="px-2 md:px-0">
            <h3 className="text-2xl md:text-lg xl:text-2xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </h3>
            <p className="text-base mt-5 md:mt-3 mb-7 md:mb-5 md:text-sm xl:text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
              laboriosam asperiores saepe nisi? Ad, eveniet quas eius deserunt
              quidem illum soluta veniam aspernatur ipsum aliquid corrupti
              numquam. Recusandae, modi non?
            </p>
            <a href="#" className="py-1 px-2 bg-red-500">
              View more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
