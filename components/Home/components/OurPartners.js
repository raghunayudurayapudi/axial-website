import React from "react";

const partnersList = [
  {
    title: "Smoodies",
    iconPath: "/assets/partners/1.png",
  },
  {
    title: "Bloom",
    iconPath: "/assets/partners/2.png",
  },
  {
    title: "Cocnut people",
    iconPath: "/assets/partners/3.png",
  },
  {
    title: "K-foods",
    iconPath: "/assets/partners/4.png",
  },
  {
    title: "alkalen",
    iconPath: "/assets/partners/5.png",
  },
];

export default function OurPartners() {
  return (
    <div
      className="flex flex-1 flex-col bg-primary py-12 text-white"
      id={"partners"}
    >
      <div className="container">
        <h2 className="text-white">{"Our Clients"}</h2>

        <div
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexGrow: 1,
            justifyContent: "space-evenly",
            alignItems: "center",
            my: 4,
          }}
        >
          {partnersList.map((partner) => {
            return (
              <div
                key={partner.title}
                component={"img"}
                src={partner.iconPath}
                alt={""}
                height={"64px"}
                sx={{
                  mt: 2,
                  mx: 4,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
