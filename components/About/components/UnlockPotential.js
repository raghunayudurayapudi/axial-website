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
import Link from "next/link";

export default function UnlockPotential() {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="flex justify-center">
          <Link href={"/support"} passHref>
            <a className="self-start rounded-full bg-tulip px-6 py-3 text-xl font-bold text-white no-underline hover:cursor-pointer hover:bg-tulip-dark">
              {"Get Started"}
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
