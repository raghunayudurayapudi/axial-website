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

export default function OrderManagement() {
  return (
    <section className="bg-white" id="order-management">
      <div className="container">
        <div className="flex flex-col items-center py-6">
          <div className="flex flex-col items-center justify-evenly md:flex-row">
            <div className="w-full md:w-2/5">
              <h3>Order management</h3>
              <p>
                {
                  "WholeMark offers a dual management system where our clients also can access and manage their orders at the same time. This structure paves way for a smoother handling of logistics and supply chain. Our order management software aids D2C brands to map their online eCommerce platform shipping options to WholeMark and automatically share tracking information with customers. We streamline the most important part of your business and make sure there are no leaks of any sort."
                }
                </p>
            <br></br>
              <p>
                {
                  "Once the order notification reaches our warehouse, the order is picked and packed according to the assigned brand guidelines. A delivery executive is then assigned through our automated Delivery Management System which allows smart task allocations based on distance algorithms with highest accuracy. Once this process is done, the product is delivered the same day to your customers."
                }
              </p>
            </div>
            <div className="mt-6">
              <Image
                alt="Order Management"
                height={"300px"}
                width={"400px"}
                src={`${UPLOADS_URL}/assets/about/order-management.png`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
