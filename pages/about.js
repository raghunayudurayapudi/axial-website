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

import { useRouter } from "next/router";
import React from "react";
import SEO from "../components/SEO";
import AboutComponent from "components/About";

export default function About() {
  const router = useRouter();

  return (
    <div>
      <SEO
        url={router.pathname}
        openGraphType="website"
        schemaType="Organization"
        title="About"
        description="About WholeMark services and how the ecommerce fulfillment platform works | eCommerce fulfillment"
      />

      <AboutComponent />
    </div>
  );
}
