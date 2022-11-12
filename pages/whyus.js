// Copyright 2021 akash
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
import { useRouter } from "next/router";
import SEO from "../components/SEO";

export default function Whyus() {
  const router = useRouter();

  return (
    <div>
      <SEO
        url={router.pathname}
        openGraphType="website"
        schemaType="Organization"
        title="Why us"
        description="Why choose wholemark over other ecommerce fulfillment sevices | eCommerce fulfillment"
      />

      <div>
        <h1>Why Us</h1>
      </div>
    </div>
  );
}
