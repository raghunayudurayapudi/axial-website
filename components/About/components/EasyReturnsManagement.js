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

export default function EasyReturnsManagement() {
  return (
    <section className="bg-white" id="order-fulfillment">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center justify-evenly md:flex-row">
            <div className="w-full md:w-2/5">
              <h3>Easy Returns Management</h3>
              <p>
                {
                  "Don't worry if your customer changes their mind. We've got your back. Wholemark offers an easy and smooth return management system. With the help of our order management software, we can track and pick the package from the customer’s location and shelf it back to our warehouse the same day. "
                }
              </p>
            </div>
            <div className="mt-4">
              <Image
                alt="Express Delivery"
                height={"400px"}
                width={"400px"}
                src={`${UPLOADS_URL}/assets/about/returns-management.png`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
