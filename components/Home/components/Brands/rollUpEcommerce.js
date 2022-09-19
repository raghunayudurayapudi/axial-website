import Image from "next/image";
import { Tooltip } from "../../../Common/Tooltip";
import { UPLOADS_URL } from "utils/constants";

export default function RollUpEcommerce(props) {
  return (
    <div className="bg-white" id={"roll-up-ecom"}>
      <div className="container">
        <h2 className="text-center text-primary">{props.category.title}</h2>

        <div className={`grid grid-cols-1 md:grid-cols-2`}>
          <div className="justify-center self-center text-center">
            <Image
              src={`${UPLOADS_URL}/brands/rollup-logos/globalbees.png`}
              alt={"Global Bees"}
              width={"500"}
              height={"500"}
              className={"logoImage"}
            ></Image>
          </div>
          <div className="md:ml-12">
            <div className={`grid grid-cols-2 lg:grid-cols-3`}>
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
          </div>
        </div>
      </div>
    </div>
  );
}
