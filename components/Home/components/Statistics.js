// Copyright 2022 akash
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {
  faArrowDown,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/future/image";
import CountUp from "react-countup";
import { UPLOADS_URL } from "utils/constants";

const data = [
  // {
  //     title: 'Deliveries Per Month',
  //     data: '2,013'
  // },
  {
    title: "Average Picking Time",
    data: "35sec",
  },
  {
    title: "Average Packing Time",
    data: "68sec",
  },
  {
    title: "Average Delivery Time",
    data: "39min",
  },
];

const sameDayStatistics = [
  {
    title: "Shipments each day",
    data: 1000,
    symbol: "+",
  },
  {
    title: "Orders Delivered under 3 hours",
    data: 97,
    symbol: "%",
  },
  {
    title: "Repeat customers for brands",
    data: 25,
    symbol: "%",
    arrow: (
      <span className="text-3xl text-lime-500">
        <FontAwesomeIcon icon={faArrowUp} />
      </span>
    ),
  },
  {
    title: "Return of Goods to Warehouse",
    data: 20,
    symbol: "%",
    arrow: (
      <span className="text-3xl text-red-500">
        <FontAwesomeIcon icon={faArrowDown} />
      </span>
    ),
  },
  {
    title: "D2C Online Sales",
    data: 15,
    symbol: "%",
    arrow: (
      <span className="text-3xl text-lime-500">
        <FontAwesomeIcon icon={faArrowUp} />
      </span>
    ),
  },
];

export default function Statistics() {
  return (
    <div className="bg-primary pt-8 pb-12 text-white" id={"statistics"}>
      <div className="mx-auto w-auto max-w-7xl px-2 py-8">
        <div className="mt-4 flex flex-col items-center">
          <div className="mb-2 rounded-lg p-4 text-center text-white hover:cursor-pointer">
            <Image
              width={"48px"}
              height={"48px"}
              alt="logistics"
              src={`${UPLOADS_URL}/assets/images/bar-chart.png`}
            />
            {/* <FontAwesomeIcon icon={faArrowUpRightDots} /> */}
          </div>
        </div>
        <h2 className="my-4 text-center font-bold">{"Fulfillment Stats"}</h2>

        <div className="mt-12 grid grid-cols-1 md:mb-8 md:grid-cols-5">
          {sameDayStatistics.map((d) => {
            return (
              <div
                className="mx-1 items-center rounded-lg px-8 py-4"
                key={d.title}
              >
                <div className="min-2-[200px] text-center font-bold ">
                  {d.arrow}
                  <CountUp
                    enableScrollSpy={true}
                    end={d.data}
                    className="text-5xl font-bold text-tulip"
                  />
                  <span className="text-4xl text-tulip font-bold">{d.symbol}</span>
                </div>
                <p className="mt-2 text-center">{d.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
