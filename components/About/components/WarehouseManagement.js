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

export default function WarehouseManagement() {
  return (
    <>
      <section id="warehouse-management">
        <div className="container py-8">
          <div className="flex flex-col items-center">
            <div>
              <h2>{"Features"}</h2>
              <DividerLine />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-base-light">
        <div className="container">
          <div className="flex flex-col items-center justify-evenly md:flex-row-reverse">
            <div className="w-full md:w-2/5">
              <h3>Warehouse management</h3>
              <p>
                {
                  "D2C ecommerce platforms can send their bulk orders to WholeMark's network of warehouses where we have facilities to handle your complete logistics and supply chain. WholeMark's efficient inventory management helps us and our clients understand how much stock is available in our warehouse network at any particular time."
                }
              </p>
              <br/>
              <p>
                {
                  "This ensures there is enough stock for us to roll out orders to your customers, and a proper warning system is integrated to keep our D2C clients informed through the entire purchase cycle. The strong combination of warehouse, inventory and order management benefits our clients to fulfill their end-to-end logistics and supply chain needs. This systematic network allows us to deliver products to your customers the same day. With WholeMark, the complexity is reduced and you gain speed, control and visibility."
                }
              </p>
            </div>
            <div className="mt-4">
              <Image
                alt="Warehouse Management"
                height={"360px"}
                width={"360px"}
                src={`${UPLOADS_URL}/assets/about/warehouse-management.png`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
