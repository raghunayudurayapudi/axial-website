import Image from "next/future/image";
import React from "react";

export default function FAQ() {
  return (
    <section className="bg-primary">
      <div className="container flex flex-1 flex-col items-center justify-between py-10 md:flex-row">
        <div className="w-full text-tulip md:w-1/2">
          <h2 className="text-7xl">{"FAQ"}</h2>
        </div>
      </div>
    </section>
  );
}
