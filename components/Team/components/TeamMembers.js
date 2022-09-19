import Image from "next/future/image";
import Link from "next/link";
import React from "react";

const TeamMembers = (
  { avatarAlt, avatarLink, name, designation, linkedin },
  key
) => {
  return (
    <div className="flex w-[150px] md:w-[250px] flex-col items-center py-8 md:pt-8">
      <div className="h-[100px] w-[100px] rounded-full shadow-md">
        <Image
          className="rounded-full"
          height={"100px"}
          width={"100px"}
          alt={avatarAlt}
          src={avatarLink}
          priority
        />
      </div>
      <a
        className=""
        href={linkedin}
        target="_blank"
        rel="noreferrer"
        size="small"
        key={key}
      >
        <h5 className="mt-2 mb-0 font-medium cursor-pointer">{name}</h5>
      </a>
      <p>{designation}</p>
    </div>
  );
};
export default TeamMembers;
