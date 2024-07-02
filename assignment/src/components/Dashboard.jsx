import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { initialUsers } from "../store";
import ActiveUsersChart from "./ActiveUsersChart";
import DashboardWidget from "./DashboardWidget";

const Dashboard = () => {
  const users = initialUsers;
  const totalUsers = users.length;
  const activeUsers = users.filter((user) => user.status === "Active").length;
  const inactiveUsers = users.filter(
    (user) => user.status === "Inactive"
  ).length;

  const data = [
    { month: "Jun20", activeUsers: 1000 },
    { month: "Jul20", activeUsers: 1200 },
    { month: "Aug20", activeUsers: 800 },
    { month: "Sep20", activeUsers: 1100 },
    { month: "Oct20", activeUsers: 1300 },
    { month: "Nov20", activeUsers: 900 },
    { month: "Dec20", activeUsers: 1500 },
    { month: "Jan21", activeUsers: 1700 },
    { month: "Feb21", activeUsers: 800 },
    { month: "Mar21", activeUsers: 1000 },
    { month: "Apr21", activeUsers: 1200 },
    { month: "May21", activeUsers: 1400 },
  ];

  return (
    <div className="w-screen h-screen border flex lg:flex-row">
      <Sidebar />
      <div className="flex flex-col w-full h-screen">
        <Header />
        <div className="bg-[#F9F9F9] ">
          <div className="w-full flex justify-center items-center  font-semibold md:justify-between">
            <div className="md:ml-2">
              <div className="ml-4 mt-4 text-2xl font-semibold text">Dashboard</div>

              <div className="md:flex">
                <DashboardWidget
                  users="Total Users"
                  number={totalUsers}
                  bgColour="bg-[#FFF8E7]"
                  fillColour="#FF9900"
                />

                <DashboardWidget
                  users="Active Users"
                  number={activeUsers}
                  bgColour="bg-[#33E0641A]"
                  fillColour="#33E064"
                />

                <DashboardWidget
                  users="Inactive Users"
                  number={inactiveUsers}
                  bgColour="bg-pink-100"
                  fillColour="#FF0000"
                />
              </div>

              <div className="ml-9 mt-14 hidden h-[400px] w-[551px] md:block">
                <ActiveUsersChart data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
