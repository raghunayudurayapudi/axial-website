import Image from "next/future/image";
import { UPLOADS_URL } from "utils/constants";

import { faListCheck, faCheckToSlot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import brandsData from "components/Home/components/Brands/brandsData.json";
import DividerLine from "components/Common/DividerLine";
export default function Flowchart() {
  return (
    <div>
      <div className="bg-white" id={"brand"}>
        <div className="mt-2 flex justify-center">
          <div>
            <h1 className="text-primary">{"Process"}</h1>
            <DividerLine />
          </div>
        </div>
        <div className="container">
          <div className="mt-2 flex justify-center">
            <h2 className="text-center text-primary font-medium">D2C Brands</h2>
          </div>
          <div className="mt-2 flex justify-center">
            <Image
              alt="small arrow"
              height={"80px"}
              width={"80px"}
              src={`${UPLOADS_URL}/assets/whyus/small-arrow.png`}
            />
          </div>
          <div className="mt-2 flex justify-center">
            <h3 className="text-center text-primary font-medium">eCommerce Integrations</h3>
          </div>
          <div className={`grid grid-cols-5`}>
            {brandsData.integrations.list.map((company) => {
              if (!company.name) return <span />;
              return (
                <div className="flex justify-center" key={company.name}>
                  <Image
                    src={`${UPLOADS_URL}/brands/${brandsData.integrations.imagesFolder}/${company.fileName}.png`}
                    alt={company.name}
                    width={
                      brandsData.integrations.logoDimensions.width || "150"
                    }
                    height={
                      brandsData.integrations.logoDimensions.width || "150"
                    }
                    className={"logoImage"}
                  ></Image>
                </div>
              );
            })}
          </div>
          <div className="mt-2 flex justify-center">
            <Image
              alt="arrow"
              height={"400px"}
              width={"400px"}
              src={`${UPLOADS_URL}/assets/whyus/arrowhead.png`}
            />
          </div>
          <div className="mt-2 flex justify-center">
            <Image
              alt="WM Logo"
              height={"300px"}
              width={"300px"}
              src={`/assets/wholemark-logo-black.svg`}
            />
          </div>
          <div className="mt-2 flex justify-center">
            <Image
              alt="small arrow"
              height={"80px"}
              width={"80px"}
              src={`${UPLOADS_URL}/assets/whyus/small-arrow.png`}
            />
          </div>
          <div className={``}>
            <h3 className="text-center text-primary font-medium">Micro Warehouses</h3>
            <div className={`grid grid-cols-2 gap-2 py-12`}>
              <div className="flex justify-center">
                <Image
                  src={`${UPLOADS_URL}/assets/whyus/warehouse.png`}
                  alt={"warehouse"}
                  width={"120"}
                  height={"120"}
                  className={"logoImage"}
                ></Image>
              </div>
              <div className="flex justify-center">
                <Image
                  src={`${UPLOADS_URL}/assets/whyus/warehouse.png`}
                  alt={"warehouse"}
                  width={"120"}
                  height={"120"}
                  className={"logoImage"}
                ></Image>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="mt-2 flex justify-center">
              <Image
                alt="small arrow"
                height={"80px"}
                width={"80px"}
                src={`${UPLOADS_URL}/assets/whyus/small-arrow.png`}
              />
            </div>
            <div className="mt-2 flex justify-center">
              <Image
                alt="small arrow"
                height={"80px"}
                width={"80px"}
                src={`${UPLOADS_URL}/assets/whyus/small-arrow.png`}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 justify-center gap-4">
            <div className={``}>
              <h4 className="text-center text-lg text-primary font-medium md:text-2xl">
                Intra-city Delivery
              </h4>
              <p className="relative text-center text-3xl text-lime-600 md:hidden">
                <FontAwesomeIcon icon={faCheckToSlot} />
              </p>
              <p className="text-md text-center text-primary font-medium">
                <span className="relative top-1 mr-4 hidden text-3xl text-lime-600 md:inline">
                  <FontAwesomeIcon icon={faCheckToSlot} />
                </span>
                Fulfilled by WholeMark under 3 hours
              </p>
            </div>
            <div className={``}>
              <h4 className="text-center text-lg text-primary font-medium md:text-2xl">
                Inter-city Delivery
              </h4>
              <p className="relative text-center text-3xl text-lime-600 md:hidden">
                <FontAwesomeIcon icon={faListCheck} />
              </p>
              <p className="text-center text-primary font-medium">
                <span className="relative top-1 mr-4 hidden text-3xl text-lime-600 md:inline">
                  <FontAwesomeIcon icon={faListCheck} />
                </span>
                {"Fulfilled by WholeMark's Delivery Partners"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
