/* eslint-disable @next/next/no-img-element */
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
import Link from "next/link";
import WaveDivider from "../Common/WaveDivider";
import Image from "next/future/image";
import { UPLOADS_URL } from "utils/constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function linkText(linkText, linkPath, newTab = true) {
  return (
    <Link underline="none" href={linkPath} passHref>
      <a
        target={newTab ? "_blank" : "_self"}
        className="hover:pointer mb-4 max-w-[200px] text-sm font-light text-white hover:cursor-pointer hover:text-tulip-light"
      >
        {linkText}
      </a>
    </Link>
  );
}

function linkIcon(linkIcon, linkPath, newTab = true) {
  return (
    <Link underline="none" href={linkPath} passHref>
      <a
        target={newTab ? "_blank" : "_self"}
        className="hover:pointer mb-4 mr-4 inline-block pb-2 text-white transition hover:cursor-pointer hover:text-tulip-light"
      >
        {linkIcon}
      </a>
    </Link>
  );
}

export default function index() {
  return (
    <div className="bg-primary text-white">
      <div className="container">
        <div className="flex flex-col items-start justify-between pt-12 md:flex-row">

          <div className="flex flex-col">
            <div className="mb-6">
              <Image
                alt={"wholemark logo"}
                width="200px"
                height="50%"
                src={`${UPLOADS_URL}/assets/wholemark-logo-white.svg`}
              />
            </div>

            {linkText(
              "contactus@wholemark.in",
              "mailto:contactus@wholemark.in"
            )}
            {linkText("+91 7893716883", "tel:+917893716883")}
            {linkText("+91 9000046373", "tel:+919000046373")}
            {/* {linkText("+1 9843770672", "tel:+19843770672")} */}

            <div className="flex flex-row justify-start">
              {linkIcon(
                <FontAwesomeIcon icon={faTwitter} className="text-xl" />,
                "https://twitter.com/whole_mark"
              )}
              {/* {linkIcon(<TwitterIcon />, "")} */}
              {linkIcon(
                <FontAwesomeIcon icon={faLinkedin} className="text-xl" />,
                "https://www.linkedin.com/company/wholemark/"
              )}
              {linkIcon(
                <FontAwesomeIcon icon={faYoutube} className="text-xl" />,
                "https://www.youtube.com/channel/UCgeZ1gz8e1jbkcELNQeC8cg"
              )}
              {linkIcon(
                <FontAwesomeIcon icon={faInstagram} className="text-xl" />,
                "https://www.instagram.com/wholemark.in/"
              )}
            </div>
          </div>

          <div className="mt-6 sm:mt-0">
            <div className="flex flex-col">
              <p className="mb-4 font-bold"> {"US Address"} </p>
              {linkText(
                `Wholemark, Inc.
              CORPORATION TRUST CENTER 1209 ORANGE ST
              WILMINGTON, New Castle, DE`,
                // "WholeMark, C9RG+WFM, Phase 2, HITEC City, Hyderabad, Telangana, India 500081",
                "https://goo.gl/maps/hshdNhtwDjmSWLZu9"
              )}

              <p className="mt-6 mb-2 font-bold"> {"India Address"} </p>
              {linkText(
                "WholeMark, C9RG+WFM, Phase 2, HITEC City, Hyderabad, Telangana, India 500081",
                "https://goo.gl/maps/hshdNhtwDjmSWLZu9"
              )}
            </div>
          </div>

          <div className="mt-6 sm:mt-0">
            <div className="flex flex-col">
              <p className="mb-4 font-bold"> {"About WholeMark"} </p>
              {linkText("About us", "/about", false)}
              {linkText("Team", "/team", false)}
              {linkText("Blog", "/blogs", false)}
              {linkText("Why us", "/whyus", false)}
              {linkText("Privacy Policy", "/privacy", false)}
            </div>
          </div>

          <div className="mt-6 sm:mt-0">
            <div className="flex flex-col">
              <p className="mb-4 font-bold"> {"Features"} </p>
              {linkText("Warehouse Management", "/about#warehouse-management", false)}
              {linkText("Order Management", "/about#order-management", false)}
              {linkText("Inventory Management", "/about#inventory-management", false)}
              {linkText("Order Fulfillment", "/about#order-fulfillment", false)}
            </div>
          </div>

          <div className="mt-6 sm:mt-0">
            <div className="flex flex-col">
              <p className="mb-4 font-bold"> {"Learn"} </p>
              {linkText("Careers", "https://angel.co/company/wholemark-1/jobs")}
              {linkText("FAQs", "/faq", false)}
              {linkText("Delivery Areas", "/home#delivering-to", false)}
              {linkText("Support", "/support", false)}
              {/* {linkText("Press", "/news")} */}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-primary py-3 text-center">
        <p className="text-sm">
          Copyright WholeMark Inc. @ {new Date().getFullYear()}. All Rights
          Reserved.
        </p>
        <img
        height="1"
        width="1"
        style={{ display: "none" }}
        alt=""
        src="https://px.ads.linkedin.com/collect/?pid=4712657&fmt=gif"
      />
        {/* <p className="w-full py-1 text-center text-xs opacity-30">
          Illustrations from StorySet
        </p> */}
      </div>
    </div>
  );
}
