import React from "react";
import DividerLine from "../../Common/DividerLine";

export default function SupportCard(props) {
  return (
    <div className="mx-6 rounded-md border border-white p-4">
      <div className="mb-2 flex items-center">
        {props.data?.icon}
        <h3>{props.data?.title}</h3>
      </div>
      <DividerLine />
      <div>
        <p>{props.data?.descriptionn}</p>
      </div>
    </div>
  );
}
