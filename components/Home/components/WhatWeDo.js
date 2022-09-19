import React from "react";
import { UPLOADS_URL } from "utils/constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faObjectGroup,
} from "@fortawesome/free-regular-svg-icons";
import { faPlug, faThunderstorm, faGamepad } from "@fortawesome/free-solid-svg-icons";

const whatWeDoList = [
  {
    title: "End to end logistic solution under one roof",
    description:
      "We provide a hassle free business experience for D2C brands by providing a one stop solution for all their requirements",
    iconPath: "/assets/whywholemark/e2e.png",
    icon: <FontAwesomeIcon icon={faObjectGroup} className="text-3xl" />,
  },
  {
    title: "Loosely Coupled, Modular Solutions",
    description:
      "We understand that each business is unique and has different needs. D2C brands can customise our solutions according to their needs and requirements",
    icon: <FontAwesomeIcon icon={faGamepad} className="text-3xl" />,
    iconPath: `${UPLOADS_URL}/assets/whywholemark/modular.png`,
  },
  {
    title: "Intelligent inventory distribution & storage provider",
    description:
      "We leverage an intelligent tool to enable D2C brands to choose the best and most economical service providers integrated with us.",
    icon: <FontAwesomeIcon icon={faPlug} className="text-3xl" />,
    iconPath: `${UPLOADS_URL}/assets/whywholemark/intelligence.png`,
  },
  {
    title: "Lightening fast delivery services time",
    description:
      "Our efficient inventory and order sync leads in reducing total order management & fulfillment time",
    icon: <FontAwesomeIcon icon={faThunderstorm} className="text-3xl" />,
    iconPath: `${UPLOADS_URL}/assets/whywholemark/speed.png`,
  },
];

export default function WhatWeDo() {
  return (
    <div id={"what-we-do"} className="flex flex-1 flex-col pt-12 text-white">
      <div className="mx-auto w-auto max-w-7xl px-2" maxWidth="lg">
        <h2 className="text-center text-primary">{"What we do"}</h2>
        <p className="mt-2 text-center">
          {
            "We use our proprietary software across our fulfillment network for a cohesive experience"
          }
        </p>
        <div className="my-8 flex grow flex-row flex-wrap justify-evenly">
          {whatWeDoList.map((d) => {
            return (
              <div
                className="flex max-w-[256px] flex-col items-center rounded-md shadow-md hover:shadow-lg"
                key={d.title}
              >
                <div className="rounded-lg bg-tulip-light text-center text-tulip-dark hover:bg-tulip-dark hover:text-white">
                  {d.icon}
                </div>

                <p className="text-center">{d.title}</p>
                <p className="mt-2 text-center">{d.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
