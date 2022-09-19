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

import React from "react";
import Image from "next/future/image";
import { UPLOADS_URL } from "utils/constants";

export default function SameDayDelivery() {
  return (
    <section className="bg-base-light" id="inventory-management">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center justify-evenly md:flex-row-reverse">
            <div className="w-full md:w-2/5">
              <h3>Same day delivery - Deliveries under 3 hours</h3>
              <p>
                {
                  "We offer all our D2C clients deliveries under 3 hours and this is possible because of our micro warehouse network situated in supreme locations in a city. We are near to your target audience and hence offer intra-city deliveries under 3 hours. The nearer we are - the faster we reach your customers. "
                }
              </p>
            </div>
            <div className="mt-4">
              <Image
                alt="Inventory Management"
                height={"400px"}
                width={"400px"}
                src={`${UPLOADS_URL}/assets/about/delivery-under-3.png`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
