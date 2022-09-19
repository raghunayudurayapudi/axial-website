import Image from "next/future/image";
import React from "react";
import DividerLine from "../../Common/DividerLine";
import { UPLOADS_URL } from "utils/constants";

const deliveryLocations = [
  {
    name: "Hyderabad",
    iconPath: `${UPLOADS_URL}/assets/places/hyderabad.png`,
  },
  {
    name: "Delhi NCR",
    iconPath: `${UPLOADS_URL}/assets/places/delhi.png`,
  },
  {
    name: "Mumbai",
    iconPath: `${UPLOADS_URL}/assets/places/mumbai.png`,
  },
  {
    name: "Bengaluru",
    iconPath: `${UPLOADS_URL}/assets/places/bangalore.png`,
  },
  {
    name: "Vishakapatnam",
    iconPath: `${UPLOADS_URL}/assets/places/vizag.png`,
  },
];

export default function DeliveringTo() {
  return (
    <section id="delivering-to">
      <div className="grid grid-cols-2 md:grid-cols-5">
        {deliveryLocations.map((d) => {
          return (
            <div
              className="grid grid-rows-2 justify-center md:justify-between"
              key={d.name}
            >
              <Image
                className="w-100 self-center text-center"
                alt={d.name}
                width="100px"
                height="100px"
                src={d.iconPath}
              />
              <p className="text-center">{d.name}</p>
            </div>
          );
        })}

        {/* <div sx={{
                    textAlign: 'center'
                }}>
                    <Typography variant='body2' component={'span'} sx={{
                        fontFamily: 'Work Sans'
                    }}>
                        {"Is your city missing? Don't worry, "}
                    </Typography>
                    <Link>
                        <Typography variant='body2' component={'span'} sx={{
                            textAlign: 'center',
                            fontFamily: 'Work Sans'
                        }}>
                            {"We’re coming soon!"}
                        </Typography>
                    </Link>

                </div> */}
      </div>
    </section>
  );
}
