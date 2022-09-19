import React from "react";
import Link from "next/link";
import Image from "next/future/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faLinkedinIn, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

const socialMediaLinkMapper = {
  LinkedIn: (
    <FontAwesomeIcon
      icon={faLinkedinIn}
      className="align-text-top"
      fontSize="inherit"
    />
  ),
  TwitterIcon: (
    <FontAwesomeIcon
      iconn={faTwitterSquare}
      className="align-text-top"
      fontSize="inherit"
    />
  ),
};
const CoFounder = ({
  name,
  designation,
  socialMediaLinks,
  avatarLink,
  avatarAlt,
  introduction,
}) => {
  return (
    <div className="m-8 flex w-[300px] flex-col items-center overflow-visible rounded-lg bg-base shadow-md">
      <Image
        className="rounded-t-lg shadow-inner"
        height="300px"
        width="300px"
        alt={avatarAlt}
        src={avatarLink}
        priority
      />
      <div className="mt-2 flex  flex-col items-center p-4">
        <h4>{name}</h4>
        <div className="flex items-center">
          <p className="text-center">{designation}</p>
          <div className="flex items-center">
            {socialMediaLinks.map(({ mediaType, link }, index) => (
              <Link
                className=""
                href={link}
                target="_blank"
                rel="noopener"
                size="small"
                passHref
                key={index}
              >
                <a className="ml-4 text-xl text-tulip">
                  {socialMediaLinkMapper[mediaType]}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* <p className="mt-8 text-center">{introduction}</p> */}
    </div>
  );
};

export default CoFounder;
