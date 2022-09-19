import Image from "next/image";
import { UPLOADS_URL } from "utils/constants";
import { Tooltip } from "../../../Common/Tooltip";

export default function Brands(props) {
  return (
    <div className="bg-white" id={"brand"}>
      <div className="container">
        <h2 className="text-center text-primary">{props.category.title}</h2>
        <div
          // added the classnames separately as prettier rearranges them
          // NOTE: for string interpolation to work in tailwind,
          // add possible classnames to safe-list in tailwind config
          className={
            `grid grid-cols-2 ` + `md:grid-cols-` + props.category.itemsPerRow
          }
        >
          {props.category.list.map((company) => {
            if (!company.name) return <span />;
            return (
              <div className="flex justify-center" key={company.name}>
                <Tooltip
                  message={company.name}
                  skidding={company.skidding}
                  distance={company.distance}
                >
                  <Image
                    src={`${UPLOADS_URL}/brands/${props.category.imagesFolder}/${company.fileName}.png`}
                    alt={company.name}
                    width={props.category.logoDimensions.width || "150"}
                    height={props.category.logoDimensions.width || "150"}
                    className={"logoImage"}
                  ></Image>
                </Tooltip>
              </div>
            );
          })}
        </div>
        {props.category.footerText && (
          <div className="mt-4 flex flex-row-reverse">
            <div>{props.category.footerText}</div>
          </div>
        )}
      </div>
    </div>
  );
}
