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
import css from './styles.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons";

const links = [
  {
    name: 'CALL',
    icon: faPhone
  },
  {
    name: 'EMAIL',
    icon: faAt
  },
  {
    name: 'LINKEDIN',
    icon: faLinkedin
  },
  {
    name: 'FACEBOOK',
    icon: faFacebook
  }
]

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
        className="inline-block pb-2 mb-4 mr-4 text-white transition hover:pointer hover:cursor-pointer hover:text-tulip-light"
      >
        {linkIcon}
      </a>
    </Link>
  );
}

export default function index() {
  return (
    <div>
      <div className={`text-[#E4C6BE] px-[20px] md:px-[35px] xl:px-[80px] pb-[50px] lg:pb-[100px] relative font-[700] after:absolute 
      after:content-[''] after:top-0 after:left-0 after:w-full after:h-full ${css.background} bg-[url('/footerBg.png')] bg-cover bg-no-repeat  `}>
        <div className="text-[22px] lg:text-[28px] pt-[60px] lg:pt-[100px] xl:pt-[120px] text-[#D7B0A8] font-[600] relative z-10 ">AXIAL IT SOLUTIONS</div>
        <div className="text-[30px] lg:text-[48px] tracking-[2.5px] mt-[30px] lg:mt-[80px] relative z-10 ">Get consultancy</div>
        <div className="text-[30px] lg:text-[48px] tracking-[2.5px] mt-[20px] lg:mt-[42px] relative z-10 ">contact@axial.com</div>
        <div className="text-[30px] lg:text-[48px] tracking-[2.5px] mt-[20px] lg:mt-[42px] relative z-10 ">555 (33) 738 738</div>
      </div>

      <div className="bg-[#161616] px-[20px] md:px-[35px] xl:px-[80px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {links.map(link => (
            <div key={link.name} className="text-[24px] text-[#E4C6BE] flex justify-center items-center font-[700] gap-[10px] border
             border-[#CBAAA3] py-[18px] lg:py-[30px] cursor-pointer">
              {link.name}
              <FontAwesomeIcon icon={link.icon} />
            </div>
          ))}
        </div>

        <div className="mt-[40px] lg:mt-[80px] flex flex-col-reverse lg:flex-row text-[16px] md:text-[18px] lg:text-[21px] text-[#EFC6BE] 
        items-center md:justify-between font-[400] pb-[20px] gap-[20px_0px] ">
          <div className="">© Copyright 2022 Sage IT. All rights reserved</div>
          <div className="flex gap-[15px] md:gap-[20px] lg:gap-[50px]">
            <div>Privacy Policy</div>
            <div>Terms Of Usage</div>
            <div>Cookies Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
}
