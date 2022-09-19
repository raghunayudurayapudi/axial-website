import Image from "next/future/image";
import { UPLOADS_URL } from "utils/constants";

export default function HowWeWork() {
  const howWeWorkList = [
    {
      title: "Plug in WholeMark",
      description:
        "Integrate wholemark into your custom website or popular eCommerce websites like Shopify, Amazon, Flipkart, Myntra, WooCommerce, TataCliq, and Meesho.",
    },
    {
      title: "Send us your Inventory",
      description:
        "We forecast your demand and recommend an optimal inventory size which you can send to our warehouse. We divide your inventory into neat shelves and assign a designated location.",
    },
    {
      title: "Receive order notifications",
      description:
        "When your customers place an order, receive notifications and track the complete package chain process until your customer has a smile on their face.",
    },
    {
      title: "Bury your worry and let us handle the rest",
      description:
        "You have taken a stress-free route. Now all your logistics and supply chain is our responsibility. Enjoy speedy under-3-hour deliveries and experience growth.",
    },
  ];
  return (
    <div className="bg-white" id={"how-we-work"}>
      <div className="container">
        <h2 className="text-center text-primary">{"How we operate"}</h2>
        <div className="mt-8 mb-2">
          <div
            className="mt-4 grid grid-cols-1 lg:grid-cols-2"
            key={howWeWorkList[0].title}
          >
            <div className="flex justify-center">
              <div
                className="flex max-w-[400px] flex-col items-center rounded-lg p-8 shadow-lg hover:bg-primary hover:text-white hover:shadow-2xl"
                ref={howWeWorkList[0].reference}
              >
                <h5 className="text-center font-bold">
                  {howWeWorkList[0].title}
                </h5>
                <span className="mt-2 text-center">
                  {howWeWorkList[0].description}
                </span>
              </div>
            </div>

            <div className="hidden lg:relative lg:top-12 lg:right-28 lg:block">
              <Image
                alt="plug"
                height={"450px"}
                width={"450px"}
                src={`${UPLOADS_URL}/assets/howweoperate/arrow-1-2.png`}
              />
            </div>
            <div className="flex justify-center lg:hidden">
              <Image
                alt="plug"
                height={"50px"}
                width={"50px"}
                src={`${UPLOADS_URL}/assets/howweoperate/arrow-1-2-sm.png`}
              />
            </div>
          </div>
          <div
            className="mt-4 grid grid-cols-1 lg:grid-cols-2"
            key={howWeWorkList[1].title}
          >
            <div className="hidden lg:relative lg:top-20 lg:left-[18rem] lg:block">
              <Image
                alt="forklift"
                height={"450px"}
                width={"450px"}
                src={`${UPLOADS_URL}/assets/howweoperate/arrow-2-3.png`}
              />
            </div>
            <div className="flex justify-center lg:hidden">
              <Image
                alt="forklift"
                height={"50px"}
                width={"50px"}
                src={`${UPLOADS_URL}/assets/howweoperate/arrow-2-3-sm.png`}
              />
            </div>

            <div className="order-first flex justify-center lg:order-none">
              <div className="flex max-w-[400px] flex-col items-center rounded-lg p-8 shadow-lg hover:bg-primary hover:text-white hover:shadow-2xl">
                <h5 className="text-center font-bold">
                  {howWeWorkList[1].title}
                </h5>
                <span className="mt-2 text-center">
                  {howWeWorkList[1].description}
                </span>
              </div>
            </div>
          </div>
          <div
            className="mt-4 grid grid-cols-1 lg:grid-cols-2"
            key={howWeWorkList[2].title}
          >
            <div className="flex justify-center">
              <div className="flex max-w-[400px] flex-col items-center rounded-lg p-8 shadow-lg hover:bg-primary hover:text-white hover:shadow-2xl">
                <h5 className="text-center font-bold">
                  {howWeWorkList[2].title}
                </h5>
                <span className="mt-2 text-center">
                  {howWeWorkList[2].description}
                </span>
              </div>
            </div>
            <div className="hidden lg:relative lg:top-12 lg:right-28 lg:block">
              <Image
                alt="stats"
                height={"450px"}
                width={"450px"}
                src={`${UPLOADS_URL}/assets/howweoperate/arrow-3-4.png`}
              />
            </div>
            <div className="flex justify-center lg:hidden">
              <Image
                alt="stats"
                height={"50px"}
                width={"50px"}
                src={`${UPLOADS_URL}/assets/howweoperate/arrow-3-4-sm.png`}
              />
            </div>
          </div>
          <div
            className="mt-4 grid grid-cols-1 lg:grid-cols-2"
            key={howWeWorkList[3].title}
          >
            <div />
            <div className="order-first flex justify-center lg:order-none">
              <div className="flex max-w-[400px] flex-col items-center rounded-lg p-8 shadow-lg hover:bg-primary hover:text-white hover:shadow-2xl">
                <h5 className="text-center font-bold">
                  {howWeWorkList[3].title}
                </h5>
                <span className="mt-2 text-center">
                  {howWeWorkList[3].description}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
