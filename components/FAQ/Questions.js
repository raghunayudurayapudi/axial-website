import React from "react";
import DividerLine from "../Common/DividerLine";
import { WaveDivider, WavesDivider } from "../Home/components";

import Image from "next/future/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const whyWholemarkList = [
  {
    title: "Do you support returns?",
    description:
      "We handle the entire returns process for you seamlessly, including any reshipments that are necessary ensuring that your customers have the best possible customer experience possible.",
    icon: <FontAwesomeIcon icon="fa-solid fa-plug" />,
  },
  {
    title: "Which all eCommerce websites do you offer integrations with?",
    description:
      "Shopify, Amazon, Flipkart, Myntra, TataCliq, WooCommerce, Meesho",
    icon: <FontAwesomeIcon icon="fa-solid fa-plug" />,
  },
  {
    title: "Where are your services located?",
    description: "Hyderabad, Bangalore, Mumbai, Delhi, Visakhapatnam",
    icon: <FontAwesomeIcon icon="fa-solid fa-plug" />,
  },
  {
    title:
      "What type of order packaging options do you offer? Do you offer brand-specific packaging?",
    description:
      "We offer brand-neutral packaging at no additional cost. We offer brand-specific packaging at an additional but affordable price.",
    icon: <FontAwesomeIcon icon="fa-solid fa-plug" />,
  },
  {
    title:
      "Can I get only warehousing service from WholeMark or do I need to use all end-to-end order fulfillment services?",
    description:
      "No, you can choose to opt for only Warehousing service from WholeMark to store your products strategically close to your customers. Our Warehouse Management System can integrate to your existing systems to enable your Last Mile Delivery.",
    icon: <FontAwesomeIcon icon="fa-solid fa-plug" />,
  },
  {
    title:
      "Can I get only Last Mile Delivery service from WholeMark or do I need to use all end-to-end services of WholeMark?",
    description:
      "No, you can choose to opt for only Last Mile Delivery service from WholeMark to offer Same Day Delivery to your customers. Our Warehouse Management System can integrate to your existing systems to enable your Last Mile Delivery. ",
    icon: <FontAwesomeIcon icon="fa-solid fa-plug" />,
  },
  {
    title:
      "How is inventory tracked in WholeMark Micro Fulfillment Centers, and how is inventory discrepancy handled?",
    description:
      "Every product moving in and out of the WholeMark Fulfillment Centers are scanned and their placement in the aisle is tracked. As a D2C Brand, you will be able to track your inventory across Micro Fulfillment Centers real-time.",
    icon: <FontAwesomeIcon icon="fa-solid fa-plug" />,
  },
  {
    title: "Do you operate your own Warehousing/Micro Fulfillment Centers?",
    description:
      "Yes. We have a network of first-party warehousing facilities which we call Micro Fulfillment Centers across India, strategically located close to the end-consumer who place online orders on the eCommerce websites.",
    icon: <FontAwesomeIcon icon="fa-solid fa-plug" />,
  },
];

export default function Questions() {
  return (
    <div>
      <div className="bg-white">
        <div className="container flex flex-col items-center text-center">
          <div className="flex flex-row flex-wrap pt-8">
            {whyWholemarkList.map((d) => {
              return (
                <div
                  className="mr-6 mb-6 flex max-w-full flex-col items-center rounded-lg px-4 py-6 shadow-md hover:shadow-lg md:max-w-[350px]"
                  key={d.title}
                >
                  <h5 className="font-medium">{d.title}</h5>
                  <span className="mt-4">{d.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
