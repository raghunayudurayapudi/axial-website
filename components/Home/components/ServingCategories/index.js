import Image from "next/image";
import { UPLOADS_URL } from "utils/constants";

export default function ServingCategories(props) {
  return (
    <div className="bg-base-light" id={"brand"}>
      <div className="container">
        <h2 className="text-center text-primary">{props.category.title}</h2>
        <div className={`mt-8 grid grid-cols-2 md:grid-cols-6`}>
          {props.category.list.map((company) => {
            if (!company.name) return <span />;
            return (
              <div className="flex justify-center" key={company.name}>
                <div className="grid grid-rows-2">
                  <Image
                    src={`${UPLOADS_URL}/assets/${props.category.imagesFolder}/${company.fileName}.png`}
                    alt={company.name}
                    width={props.category.logoDimensions.width || "150"}
                    height={props.category.logoDimensions.width || "150"}
                    className={"logoImage"}
                  ></Image>
                  <p className="mt-6 font-400 text-center">{company.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
