import plans from "./plansData.json";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { INVISIBLE_CHARACTER } from "utils/constants";
export default function PlansTable() {
  const fetchCellValue = (plan, type) => {
    if (plan.dataType === "boolean") {
      return plan[type] === "true" ? (
        <FontAwesomeIcon
          style={{ color: "green", fontSize: "large" }}
          icon={faCircleCheck}
        />
      ) : (
        <FontAwesomeIcon
          style={{ color: "red", fontSize: "large" }}
          icon={faCircleXmark}
        />
      );
    }
    return plan[type];
  };
  const features = plans.data.filter(
    (plan) => plan.title && plan.plan1 && plan.plan2 && plan.plan3
  );
  return (
    <div className="container">
      <h2 className="text-center text-primary">Our Plans</h2>
      <div className="grid grid-cols-9 text-[11px] md:text-base">
        <div className="grid-rows-11 col-span-3 grid">
          <div
            className="
              flex h-[3.5vh] 
              items-center border border-t-0 border-l-0 border-dashed 
              border-gray-300 py-1 pl-4 pt-[1.75rem] md:py-6 "
          >
            {INVISIBLE_CHARACTER}
          </div>
          {features.map((plan) => (
            <div
              className="
                flex h-[11vh] items-center 
                border border-t-0 border-l-0 border-dashed border-gray-300 
                py-6 pl-1 pr-1 pt-[1.3rem] text-primary last:border-b-0 md:pr-0 md:pl-4"
              key={plan.title}
            >
              {plan.title}
            </div>
          ))}
        </div>
        <div className="grid-rows-11 col-span-2 grid">
          <div
            className="
              flex h-[3.5vh] items-center
              justify-center border border-t-0 border-l-0 border-dashed
              border-gray-300 bg-teal-100 py-4 md:bg-inherit md:py-6 md:px-8 md:pl-4"
          >
            <p className="rounded py-[0.1rem] font-normal text-teal-500 md:bg-teal-100 md:px-4">
              {plans.titles.plan1}
            </p>
          </div>
          {features.map((plan) => (
            <div
              className="
                flex h-[11vh] items-center
                justify-center border border-t-0 border-l-0 border-dashed
                border-gray-300 py-6 text-primary last:border-b-0 md:px-8 md:pl-4"
              key={plan.title}
            >
              {fetchCellValue(plan, "plan1")}
            </div>
          ))}
        </div>
        <div className="grid-rows-11 col-span-2 grid">
          <div
            className="
              flex h-[3.5vh] items-center
              justify-center border border-t-0 border-l-0 border-dashed
              border-gray-300 bg-violet-100 py-4 md:bg-inherit md:py-6 md:px-8 md:pl-4"
          >
            <p className="rounded py-[0.1rem] font-normal text-violet-500 md:bg-violet-100 md:px-4">
              {plans.titles.plan2}
            </p>
          </div>
          {features.map((plan) => (
            <div
              className="
                flex h-[11vh] items-center
                justify-center border border-t-0 border-l-0 border-dashed
                border-gray-300 py-6 text-primary last:border-b-0 md:px-8 md:pl-4"
              key={plan.title}
            >
              {fetchCellValue(plan, "plan2")}
            </div>
          ))}
        </div>
        <div className="grid-rows-11 col-span-2 grid">
          <div
            className="
              flex h-[3.5vh] items-center 
              justify-center border border-t-0 border-l-0 border-r-0 border-dashed
              border-gray-300 bg-amber-100 py-4 md:bg-inherit md:py-6 md:px-8 md:pl-4"
          >
            <p className="rounded py-[0.1rem] font-normal text-amber-500 md:bg-amber-100 md:px-4">
              {plans.titles.plan3}
            </p>
          </div>
          {features.map((plan) => (
            <div
              className="
                flex h-[11vh] items-center 
                justify-center border border-t-0 border-l-0 border-r-0 border-dashed
                border-gray-300 py-6 text-primary last:border-b-0 md:px-8 md:pl-4"
              key={plan.title}
            >
              {fetchCellValue(plan, "plan3")}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
