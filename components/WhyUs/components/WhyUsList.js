import Image from "next/future/image";
import { UPLOADS_URL } from "utils/constants";
import DividerLine from "../../Common/DividerLine";

const whyWholemarkList = [
  {
    title: "Plug n Play Integrations",
    description:
      "Our cloud based software will seamlessly integrate with all the places you sell online from your brand website to popular eCommerce websites like Shopify, WooCommerce, TataCliq, Amazon, Flipkart, Myntra, Meesho, etc., and popular online marketplaces like Facebook Shops, Instagram Shops, Google Shopping, etc.",
    icon: `${UPLOADS_URL}/assets/whyus/Plugnplay.png`,
    iconSize: {
      width: "132px",
      height: "148px",
    },
  },
  {
    title: "Data Powered Inventory Distribution",
    description:
      "We analyze your online order traffic and generate a data-driven optimal inventory management strategy to distribute your stock across our Micro Fulfillment Centers, reducing your warehousing and fulfillment costs.",
    icon: `${UPLOADS_URL}/assets/whyus/id.png`,
    iconSize: {
      width: "32px",
      height: "48px",
    },
  },
  {
    title: "Scalability",
    description:
      "As your business expands, we make sure it is very well able to accommodate any surge in online purchases, whether that is adding more pin codes or dynamically rerouting inventory to fulfill the requirement.",
    icon: `${UPLOADS_URL}/assets/whyus/scalability.png`,
    iconSize: {
      width: "48px",
      height: "48px",
    },
  },
  {
    title: "Personalization",
    description:
      "We are flexible and tailor the fulfillment service towards your brand’s specific needs to allow  a stress-free order fulfillment, leaving you with more time and space to grow your online sales.",
    icon: `${UPLOADS_URL}/assets/whyus/Personalization.png`,
    iconSize: {
      width: "48px",
      height: "48px",
    },
  },
  {
    title: "Quality Check Assurance",
    description:
      "Our team members are trained specifically for each D2C brand to ensure we pack orders exactly the same way you would. Furthermore, each order goes through multiple quality checks before shipment to ensure unmatched accuracy, neatness, and timing.",
    icon: `${UPLOADS_URL}/assets/whyus/Qualitycheck.png`,
    iconSize: {
      width: "38px",
      height: "48px",
    },
  },
  {
    title: "No Hidden Fee",
    description:
      "Pricing at WholeMark is Simple, Transparent, & Affordable. You just pay for the warehousing per unit and last mile delivery per order.",
    icon: `${UPLOADS_URL}/assets/whyus/nhf.png`,
    iconSize: {
      width: "48px",
      height: "48px",
    },
  },
  {
    title: "Returns Management",
    description:
      "We handle the entire returns process for you seamlessly, including any reshipments that are necessary ensuring that your customers have the best possible customer experience possible.",
    icon: `${UPLOADS_URL}/assets/whyus/RM.png`,
    iconSize: {
      width: "48px",
      height: "48px",
    },
  },
  {
    title: "Dedicated Customer Support",
    description:
      "Our dedicated customer success team will always support you by being available to answer any questions and resolve any issues 24*7*365.",
    icon: `${UPLOADS_URL}/assets/whyus/DCS.png`,
    iconSize: {
      width: "48px",
      height: "48px",
    },
  },
];
export default function WhyUsList() {
  return (
    <div className="bg-white">
      <div className="container flex flex-col items-center pt-8 text-center">
        <div>
          <h3>{"Why Us"}</h3>
          <DividerLine />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4">
          {whyWholemarkList.map((d) => {
            return (
              <div
                className="mx-4 my-6 max-w-full items-center rounded-md p-6 shadow-md hover:cursor-pointer hover:shadow-xl"
                key={d.title}
              >
                <div className="m-4 flex justify-center text-center md:min-h-[60px]">
                  <Image
                    width={'50px'}
                    height={'50px'}
                    alt={d.title}
                    src={d.icon}
                  />
                </div>

                <h6 className="text-center font-medium">{d.title}</h6>
                <p
                  textAlign={"center"}
                  variant="body2"
                  sx={{
                    mt: 2,
                  }}
                >
                  {d.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
