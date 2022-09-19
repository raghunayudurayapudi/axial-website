import Image from "next/image";
import { Tooltip } from "../../../Common/Tooltip";
import { UPLOADS_URL } from "utils/constants";

export default function IntegrationsWeOffer(props) {
  return (
    <div className="bg-white" id={"brand"}>
      <div className="container">
        <h2 className="text-center text-primary">Integrations we offer</h2>
        <div className={`mt-8 grid grid-cols-1 md:grid-cols-2 gap-20 md:divide-x md:divide-double`}>
          <div>
            <h3 className="text-center text-primary">eCommerce</h3>
            <div className={`grid grid-cols-2 md:grid-cols-5`}>
              {props.categories.ecomIntegrations.list.map((company) => {
                if (!company.name) return <span />;
                return (
                  <div className="flex justify-center" key={company.name}>
                    <Tooltip
                      message={company.name}
                      skidding={company.skidding}
                      distance={company.distance}
                    >
                      <Image
                        src={`${UPLOADS_URL}/brands/${props.categories.ecomIntegrations.imagesFolder}/${company.fileName}.png`}
                        alt={company.name}
                        width={
                          props.categories.ecomIntegrations.logoDimensions
                            .width || "150"
                        }
                        height={
                          props.categories.ecomIntegrations.logoDimensions
                            .width || "150"
                        }
                        className={"logoImage"}
                      ></Image>
                    </Tooltip>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="text-center text-primary">Shipping</h3>
            <div className={`flex flex-row flex-wrap justify-center`}>
              {props.categories.deliveryIntegrations.list.map((company) => {
                if (!company.name) return <span />;
                return (
                  <div className="flex justify-center mx-6" key={company.name}>
                    <Tooltip
                      message={company.name}
                      skidding={company.skidding}
                      distance={company.distance}
                    >
                      <Image
                        src={`${UPLOADS_URL}/brands/${props.categories.deliveryIntegrations.imagesFolder}/${company.fileName}.png`}
                        alt={company.name}
                        width={
                          props.categories.deliveryIntegrations.logoDimensions
                            .width || "150"
                        }
                        height={
                          props.categories.deliveryIntegrations.logoDimensions
                            .width || "150"
                        }
                        className={"logoImage"}
                      ></Image>
                    </Tooltip>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {props.categories.deliveryIntegrations.footerText && (
          <div className="mt-4 flex flex-row-reverse">
            <div>{props.categories.deliveryIntegrations.footerText}</div>
          </div>
        )}
      </div>
    </div>
  );
}
