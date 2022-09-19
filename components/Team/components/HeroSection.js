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

import Image from "next/future/image";
import React from "react";
import DividerLine from "../../Common/DividerLine";
import { UPLOADS_URL } from "utils/constants";

export default function HeroSection() {
  return (
    <div className="bg-primary text-white">
      <div className="container">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="w-full md:w-2/5">
            <div>
              <h3>{"Our Team"}</h3>
              <DividerLine />
            </div>
            <p className="mt-4">
              {
                "Our team members all have one thing in common: A passion for building technology and operations that can change the world."
              }
            </p>
          </div>
          <div className="mt-2 px-6 md:mt-0">
            <Image
              alt="Our team illustration"
              height={"350px"}
              width={"400px"}
              src={`${UPLOADS_URL}/assets/images/team_success.svg`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
