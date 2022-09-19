import React from "react";
import { UPLOADS_URL } from "utils/constants";

const whyWholemarkList = [
  {
    title: "End to end logistic solution under one roof",
    description:
      "We provide a hassle free business experience for D2C brands by providing a one stop solution for all their requirements",
    iconPath: "/assets/whywholemark/e2e.png",
  },
  {
    title: "Loosely Coupled, Modular Solutions",
    description:
      "We understand that each business is unique and has different needs. D2C brands can customise our solutions according to their needs and requirements",
    iconPath: `${UPLOADS_URL}/assets/whywholemark/modular.png`,
  },
  {
    title: "Intelligent inventory distribution & storage provider",
    description:
      "We leverage an intelligent tool to enable D2C brands to choose the best and most economical service providers integrated with us.",
    iconPath: `${UPLOADS_URL}/assets/whywholemark/intelligence.png`,
  },
  {
    title: "Lightening fast delivery services time",
    description:
      "Our efficient inventory and order sync leads in reducing total order management & fulfillment time",
    iconPath: `${UPLOADS_URL}/assets/whywholemark/speed.png`,
  },
];

export default function WhyWholemark() {
  return (
    <div
      className="flex flex-1 flex-col bg-tulip py-8 text-white"
      id={"why-wholemark"}
    >
      <div className="container">
        <h4 className="text-center uppercase">{"Why WholeMark?"}</h4>
        <div className="my-8 flex grow flex-row flex-wrap flex-wrap justify-evenly">
          {whyWholemarkList.map((d) => {
            return (
              <div className="mb-8 flex flex-col items-center" key={d.title}>
                <h2>{d.title}</h2>
                <p>{d.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
