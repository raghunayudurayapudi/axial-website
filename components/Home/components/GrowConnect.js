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

export default function GrowConnect() {
  return (
    <div className="bg-white py-10" id={"grow-connect"}>
      <div className="container">
        <div
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: {
                xs: "center",
                md: "flex-start",
              },
            }}
          >
            <h2 className="w-full text-center md:w-3/5 md:text-left">
              {"Let's Connect & "}
              {"Grow Together"}
            </h2>
            <button className="bg-waring flex self-center text-white md:self-start">
              <p>{"Schedule a Call"}</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
