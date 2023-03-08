import React from "react";
import { createPopper } from "@popperjs/core";

export const Tooltip = ({ message, children, skidding = 0, distance = 0 }) => {
  const [tooltipShow, setTooltipShow] = React.useState(false);
  const btnRef = React.createRef();
  const tooltipRef = React.createRef();
  const openLeftTooltip = () => {
    createPopper(btnRef.current, tooltipRef.current, {
      placement: "bottom",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [skidding || -50, distance || -20],
          },
        },
      ],
    });
    setTooltipShow(true);
  };
  const closeLeftTooltip = () => {
    setTooltipShow(false);
  };
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full text-center">
          <div
            onMouseEnter={openLeftTooltip}
            onMouseLeave={closeLeftTooltip}
            ref={btnRef}
          >
            {children}
          </div>
          <div
            className={
              (tooltipShow ? "" : "hidden ") +
              "z-50 mt-0 block break-words rounded-lg border-0 bg-black text-sm font-normal no-underline"
            }
            ref={tooltipRef}
          >
            <div>
              <div
                className={
                  "mb-0 rounded-lg border-b border-solid border-slate-100 bg-black p-3 font-semibold text-white opacity-75"
                }
              >
                {message}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
