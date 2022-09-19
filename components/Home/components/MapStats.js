import Image from "next/image";
import CountUp from "react-countup";
import DeliveringTo from "./DeliveringTo";

import { SERVICEABLE_PINCODES_COUNT, UPLOADS_URL } from "utils/constants";

const sameDayStatistics = [
  {
    title: "Warehouses and growing",
    data: 5,
    symbol: "",
  },
  {
    title: "Brands",
    data: 50,
    symbol: "+",
  },
  {
    title: "Tech Integrations",
    data: 15,
    symbol: "+",
  },
];
export default function MapStats() {
  return (
    <div className="bg-primary text-white" id={"passion"}>
      <div className="container">
        <h2 className="text-center text-4xl font-bold">
          Delivering to{" "}
          <span>
            <CountUp
              enableScrollSpy={true}
              end={SERVICEABLE_PINCODES_COUNT}
              className="text-5xl font-bold text-tulip"
            />
          </span>
          <span className="text-5xl font-bold text-tulip">+</span> pincodes
          across India
        </h2>
        <div className="mt-10 grid grid-cols-1 items-center md:grid-cols-2">
          <div className="order-first py-8 text-center md:order-none md:py-0">
            <Image
              alt="India map"
              height={"400px"}
              width={"384px"}
              src={`${UPLOADS_URL}/assets/images/india.png`}
            />
          </div>
          <div className="grid-row2 grid">
            <DeliveringTo />
            <div className="grid grid-cols-1 md:mb-8 md:grid-cols-3">
              {sameDayStatistics.map((d) => {
                return (
                  <div
                    className="mx-1 items-center rounded-lg px-8 py-4"
                    key={d.title}
                  >
                    <h2 className="min-2-[200px] text-center font-bold text-tulip">
                      <CountUp
                        enableScrollSpy={true}
                        end={d.data}
                        className="text-5xl font-bold"
                      />
                      {d.symbol}
                    </h2>
                    <p className="mt-2 text-center">{d.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
