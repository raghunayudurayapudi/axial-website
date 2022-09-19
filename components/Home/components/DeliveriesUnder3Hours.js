import Image from "next/future/image";
import { UPLOADS_URL } from "utils/constants";

export default function DeliveriesUnder3Hours() {
  return (
    <div id={"video"} className="bg-white">
      <div className="container flex flex-col-reverse items-center justify-between md:flex-row">
        <div className="w-auto px-0 py-4 md:px-5 md:py-0">
          <Image
            height={"500px"}
            width={"500px"}
            alt="logistics"
            src={`${UPLOADS_URL}/assets/wm-boxes.png`}
            priority
          />
        </div>
        <div className="mb-6 w-auto md:mt-0 md:w-1/2">
          <h2 className="mb-2 text-center text-3xl text-primary md:mb-4 md:text-left">
            Experience deliveries under just <br />
            <span className="font-sans text-6xl md:text-8xl font-bold ">3 hours!</span>
          </h2>
          <p className="mb-4 text-center text-2xl text-primary md:mb-8 md:text-left">
            Get your customers smiling. <br/>Provide an experience that exceeds expectations!
          </p>
          <p className="text-lg text-center md:text-left">
            {
              "With WholeMark offering the complete process of order fulfillment, your customers will enjoy speedy deliveries and an unparalleled post-purchase experience that translates to increased sales and customer loyalty."
            }
          </p>
        </div>
      </div>
    </div>
  );
}
