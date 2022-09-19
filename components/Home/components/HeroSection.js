import Image from "next/future/image";
import Link from "next/link";
import React from "react";
import { UPLOADS_URL } from "utils/constants";

// import Lottie from "lottie-react";
// import deliveryGuyAnimation from "../../../lotties/deliveryAgain.json";

export default function HeroSection() {
  return (
    <div className="bg-primary text-white ">
      <div className="container">
        <div className="flex flex-col items-center justify-between pt-0 md:pt-8 md:pb-16 md:mb-8 md:flex-row">
          <div className="my-6 w-auto md:my-12 md:w-1/2">
            <p className="font-bold uppercase text-tulip">
              {"Bringing D2C brands closer to their customers"}
            </p>
            <h1 className="font-medium">
              {"D2C eCommerce Fulfillment"}
            </h1>
            <p className="my-3 font-light leading-8 tracking-wider">
              {
                "We provide seamless integration with your online sales channels and give highest accuracy and speed to your customers."
              }
            </p>
            <div className="my-2 px-2 pb-4 font-light leading-8 tracking-wider">
              <li>{`Plug n Play Integrations with eCommerce websites`}</li>
              <li>{`Guaranteed Under 3-hour Delivery`}</li>
              <li>{`Optimized Inventory Warehousing`}</li>
              <li>{`Efficient Last Mile Delivery`}</li>
              <li>{`Smooth Returns Management`}</li>
            </div>

            <div className="mt-3 flex flex-col md:flex-row">
              <Link className="" href={"/home#how-we-work"} passHref>
                <span className=" ml-0 mt-4 self-start rounded-full bg-white px-6 py-3 text-xl font-bold text-black no-underline hover:cursor-pointer hover:bg-base-dark hover:text-tulip hover:shadow-lg md:mt-0 md:ml-4">
                  {"How we work"}
                </span>
              </Link>
            </div>
          </div>

          <div className="w-full px-6 md:px-0 md:w-auto flex justify-around">
            {
              //<Lottie animationData={deliveryGuyAnimation} loop={true} />
            }
            <Image
              width={"450px"}
              height={"450px"}
              alt="Illustration of a delivery guy delivering a package to a customer"
              src={`${UPLOADS_URL}/assets/illustrations/delivery-address.png`}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
