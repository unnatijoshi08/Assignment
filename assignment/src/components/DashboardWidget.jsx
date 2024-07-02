import React from "react";
import { UsersIcon } from "../assets/UsersIcon";
import classNames from "classnames";

const DashboardWidget = ({ users, number, bgColour, fillColour }) => {
  return (
    <div className="m-5 flex justify-between rounded-xl border p-5 shadow-lg md:w-64">
      <div className="">
        <div className="text-base">{users}</div>
        <div className="mt-3 text-2xl font-medium">{number}</div>
      </div>
      <div
       className={classNames(
        "flex h-16 w-16 items-center justify-center rounded-full",
        bgColour
      )}
      >
        <UsersIcon fillColour={fillColour} />
      </div>
    </div>
  );
};

export default DashboardWidget;
