import Image from "next/future/image";
import { useState } from "react";
import { UPLOADS_URL } from "utils/constants";
import DividerLine from "../../Common/DividerLine";
import Carousel from "react-multi-carousel";
export default function Feedback() {
  const whyWholemarkList = [
    {
      description:
        "Our brand sells daily consumer goods, and the same-day delivery enabled by Wholemark has strengthened our trust with end-users. With a surge in sales, we are successful in building a strong client base. Prior to Wholemark, our shipments frequently resulted in damaged merchandise, which impacted our profit margins. We have not faced any such problems with WholeMark, a safe and secure warehouse and inventory management clubbed with under 3 hour intracity delivery has only benefited us. Our RTO has decreased to less than 1%.",
      title: "Gaurav Nainani",
      title2: "Alkalen",
      logo: `${UPLOADS_URL}/brands/client-logos/alkalen.png`,
      width: 142,
      height: 38,
    },
    {
      description:
        "We have been able to manage our orders from multiple eCommerce channels smoothly with Wholemark, They have always been prompt in responding to our requests coupled with good client support. The shelf life of our products is 2- 3 months. Their FIFO policy ensures all products are sold before expiry with minimum wastage.",
      title: "Siddhartha Deb", // replace name
      title2: "Smoodies",
      logo: `${UPLOADS_URL}/brands/client-logos/smoodies.png`,
      width: 142,
      height: 38,
    },
    {
      description:
        "We've been with WholeMark from the day 1 of their journey. Shelf life of our products is 2-3 months. Because of their FIFO policy we are able to sell all our products expiry.",
      title: "Siddhartha",
      title2: "Bloom Foods",
      logo: `${UPLOADS_URL}/assets/feedback/bloom.png`,
      width: 142,
      height: 38,
    },
    {
      description:
        "We are a Bangalore based company. WholeMark helped us to reach our customers in Hyderabad and increase our market. WholeMark is delivering our online orders to the customers very fastly within 2 hours.",
      title: "Suresh",
      title2: "Herbal Strategi",
      logo: `${UPLOADS_URL}/assets/feedback/herbal_strategi.png`,
      width: 160,
      height: 86,
    },
    {
      description:
        "The order value of our products is very less. Despite that we are able to afford the services of WholeMark. They are very much feasible and economical.",
      title: "Madhavi",
      title2: "Rigdham",
      logo: `${UPLOADS_URL}/assets/feedback/rigdam.png`,
      width: 131,
      height: 52,
    },
  ];
  const responsiveness = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 4,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 768,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 768,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };
  const [isReadMore, setIsReadMore] = useState(
    whyWholemarkList.map(() => true)
  );
  const toggleReadMore = (index) => {
    const newReadMore = [...isReadMore];
    newReadMore[index] = !newReadMore[index];
    setIsReadMore(newReadMore);
  };

  return (
    <div className="bg-primary" id={"feedback"}>
      <div className="carousel-container container flex flex-1 flex-col items-center py-12 md:pb-24">
        <h2 className="text-center text-white">
          {"What Our Customers are Saying"}
        </h2>
        <Carousel
          arrows={true}
          centerMode={false}
          className=""
          autoPlay={true}
          autoPlaySpeed={3000}
          containerClass="carousel-container"
          customTransition="all 3s linear"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsiveness}
          rewind={false}
          rtl={false}
          showDots={false}
          shouldResetAutoplay={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
          transitionDuration={2900}
        >
          {whyWholemarkList.map((d, index) => {
            return (
              <div
                className={`mx-2 mt-12 flex min-h-[400px] flex-col rounded-lg bg-white p-4 ${
                  isReadMore[index] ? "max-h-[400px]" : ""
                } `}
                key={d.title}
              >
                <div className="my-2 flex min-h-[90px] flex-col items-center justify-center">
                  <Image
                    width={d.width}
                    height={d.height}
                    // layout={"fill"}
                    alt={d.title}
                    src={d.logo}
                  />
                </div>

                <div className="mb-4 flex min-h-[180px] justify-center text-center">
                  {d.description.length > 220 ? (
                    <p className="text max-w-[300px]">
                      {isReadMore[index]
                        ? d.description.slice(0, 220)
                        : d.description}
                      <span
                        onClick={() => toggleReadMore(index)}
                        className="cursor-pointer italic"
                      >
                        {isReadMore[index] ? "...read more" : " show less"}
                      </span>
                    </p>
                  ) : (
                    <p className="max-w-[300px]">{d.description}</p>
                  )}
                </div>
                <div className="flex flex-col items-center">
                  <div>
                    <DividerLine />
                    <h5 className="font-bold">{d.title}</h5>
                  </div>
                  <span>{d.title2}</span>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
