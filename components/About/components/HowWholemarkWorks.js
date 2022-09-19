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

import DividerLine from "../../Common/DividerLine";
import { UPLOADS_URL } from "utils/constants";

export default function HowWholemarkWorks() {
  return (
    <section className={`bg-primary text-white`}>
      <div className="container">
        <div className="flex flex-col items-center justify-between md:flex-row md:py-16">
          <div className="w-full md:w-2/5">
            <div>
              <h1 className="font-medium">How does WholeMark work?</h1>
              <DividerLine />
            </div>
            <div className="my-6">
              <p className="mb-3">
                {
                  "D2C companies can send WholeMark their bulk inventory which will be distributed to various micro-warehouse centers across. WholeMark's high-end technology allows the nano warehouse centre to carry out an order dispatch as and when it is received in the ecommerce platform."
                }
              </p>
              <p>
                {
                  "The key feature of our warehouse network is that they are located in the heart of the city and this is why we offer same day delivery service to our clients."
                }
              </p>
            </div>
          </div>
          <div className="py-6 md:pt-0">
            <Image
              alt="How it works"
              height={"450px"}
              width={"450px"}
              src={`${UPLOADS_URL}/assets/illustrations/data-extraction.png`}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
