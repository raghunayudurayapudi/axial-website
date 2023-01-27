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

import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/future/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { UPLOADS_URL } from "utils/constants";

// import { ReactComponent as AxialLogo } from '/assets/images/axial.svg';

function HeaderLink(linkHref, linkText) {
  const router = useRouter();

  return (
    <Link href={linkHref}>
      <a
        className={`${
          router.pathname == linkHref
            ? "header-underline"
            : "hover-underline-animation"
        } ml-2 mb-4 font-medium uppercase text-white no-underline hover:cursor-pointer hover:text-tulip md:mb-0 md:ml-12`}
      >
        {linkText}
      </a>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(!open);
  };

  return (
    <nav className={`bg-primary`}>
      <div className={`container py-4 xl:px-0`}>
        <div
          className={`flex flex-1 items-center justify-between py-0 md:items-stretch md:py-6`}
        >
          <Link href="/home" className="hover:cursor-pointer" passHref>
            {/* <AxialLogo 
             height={"32px"}
              width={"172px"} />*/}
            <Image
              alt={"wholemark logo"}
              src={`/axial.svg`}
              priority
              height={32}
              width={172}
              className="bg-primary"
            />
          </Link>

          <div className="hidden items-center justify-center md:ml-6 md:flex">
            {HeaderLink("/home", "Home")}
            {HeaderLink("/about", "About")}
            {HeaderLink("/whyus", "Why Us")}
            {HeaderLink("/team",   "Team")}
            {HeaderLink("/blogs", "Blog")}
            {HeaderLink("/support", "Contact")}
          </div>

          <div className="block md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleDrawer}
            >
              <span className="sr-only">Open main menu</span>

              <FontAwesomeIcon icon={faBars} className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`shadow-lg drop-shadow-xl ${
          open ? "block" : "hidden"
        } transition md:hidden`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pt-2 pb-3">
          <div className="flex flex-col items-start justify-center">
            {HeaderLink("/home", "Home")}
            {HeaderLink("/about", "About")}
            {HeaderLink("/whyus", "Why Us")}
            {HeaderLink("/team", "Team")}
            {HeaderLink("/blogs", "Blog")}
            {HeaderLink("/support", "Contact")}
          </div>
        </div>
      </div>
    </nav>
  );
}
