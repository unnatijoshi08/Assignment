import "./tailwind.css";
import React, { useState } from "react";
import UserListComponent from "./UserListComponent";
import EditUserComponent from "./EditUserComponent";
import Sidebar from "./Sidebar";
import { initialUsers } from "../store";
import Header from "./Header";
import ListViewIcon from "../assets/ListViewIcon";
import GridViewIcon from "../assets/GridViewIcon";
import UserGridView from "./UserGridView";
import { useNavigate } from "react-router-dom";
import AddUserComponent from "./AddUserComponent";
import { SearchIcon } from "../assets/SearchIcon";
import { SortByIcon } from "../assets/SortByIcon";
import { FilterByIcon } from "../assets/FilterByIcon";
import classNames from "classnames";
import { RightArrowIcon } from "../assets/RightArrowIcon";
import { LeftArrowIcon } from "../assets/LeftArrowIcon";
import Pagination from "./Pagination";
import qs from "qs";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TestPage = ({
  addUser,
  users,
  setIsGridView,
  isGridView,
  deleteUser,
}) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const navigate = useNavigate();

  const totalRecords = users.length;
  const totalPages = Math.ceil(totalRecords / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedUsers = users.slice(startIndex, endIndex);
  const [sortCriteria, setSortCriteria] = useState("alphabetical-az");
  const [filterRole, setFilterRole] = useState("");

  
  const location = useLocation();

  useEffect(() => {
    const params = qs.parse(location.search, { ignoreQueryPrefix: true });
    if (params.role) {
      setFilterRole(params.role);
    }
  }, [location.search]);

  useEffect(() => {
    const queryParams = qs.stringify({ role: filterRole });
    navigate(`?${queryParams}`, { replace: true });
  }, [filterRole, navigate]);

  const sortedUsers = [...paginatedUsers].sort((a, b) => {
    switch (sortCriteria) {
      case "A-Z":
        return a.firstName.localeCompare(b.firstName);
      case "Z-A":
        return b.firstName.localeCompare(a.firstName);
      case "Created Date":
        return new Date(b.createdDate) - new Date(a.createdDate);
      case "Last Updated":
        return new Date(b.lastLogin) - new Date(a.lastLogin);
      default:
        return 0;
    }
  });

  const filteredUsers = sortedUsers.filter(
    (user) =>
      ((filterRole === "" || user.role === filterRole) &&
        (user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  return (
    <div className="w-screen h-screen border flex lg:flex-row">
      <Sidebar />
      <div className="flex flex-col w-full h-screen">
        <Header />
        <div className="bg-[#F9F9F9] p-4 mt-4">
          <div className="w-full flex justify-between items-center  font-semibold">
            <div className="ml-6 text-xl">Users</div>
            <div className="flex items-center">
              <button
                className={`border-[4px] p-2 shadow-lg flex items-center rounded-md ${
                  isGridView
                    ? "bg-white border-white "
                    : "bg-[#641CC0] border-[#641CC0]"
                }`}
                onClick={() => setIsGridView(false)}
              >
                <ListViewIcon
                  className={`${isGridView ? "text-[#641CC0]" : "text-white"}`}
                />
              </button>
              <button
                className={`border-[4px] p-2 shadow-lg flex items-center rounded-md ${
                  isGridView
                    ? "bg-[#641CC0] border-[#641CC0]"
                    : "bg-white border-white"
                }`}
                onClick={() => setIsGridView(true)}
              >
                <GridViewIcon
                  className={`${isGridView ? "text-white" : "text-[#641CC0]"}`}
                />
              </button>
              <div className="mx-4">
                <button
                  className="border-[4px] p-2 border-[#641CC0] bg-[#641CC0] shadow-lg text-white rounded-md text-[14px]"
                  onClick={() => navigate("/add-user")}
                >
                  <span className="md:hidden mx-2">+ Add</span>
                  <span className="hidden md:inline">+ Add User</span>
                </button>
              </div>
            </div>
          </div>
          <div className="border shadow-lg m-9 rounded-md">
            <div className="flex justify-between items-center px-6 py-4">
              <div className="flex space-x-4">
                <button className="flex items-center p-2 bg-[#fafafa] border border-[#E0E0E2] text-[#63666b] rounded">
                  <SortByIcon className={"mr-2"} />

                  <select
                    className="bg-transparent border-none "
                    value={sortCriteria}
                    onChange={(e) => setSortCriteria(e.target.value)}
                  >
                    <option value="A-Z" className="hover:bg-purple-700">
                      A-Z
                    </option>
                    <option value="Z-A"> Z-A</option>
                    <option value="Created Date">Created Date</option>
                    <option value="Last Updated">Last Updated</option>
                  </select>
                </button>
                <button className="flex items-center p-2 bg-[#fafafa] border border-[#E0E0E2] text-[#63666b] rounded">
                  <FilterByIcon className={"mr-2"} />

                  <select
                    className="bg-transparent border-none"
                    value={filterRole}
                    onChange={(e) => setFilterRole(e.target.value)}
                  >
                    <option value="">All Roles</option>
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                  </select>
                </button>
              </div>
              <div className="flex items-center mr-5 md:mr-7">
                <div
                  className={classNames(
                    "flex items-center gap-1 bg-white py-2 pl-2 pr-[4.5px] md:p-2 rounded-lg border border-[#777a81] ml-4",
                    { "border-purple-800": isInputFocused }
                  )}
                >
                  <button
                    type="button"
                    className="h-6 aspect-square"
                    onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                  >
                    <SearchIcon className="w-5 h-5" />
                  </button>
                  <input
                    type="text"
                    placeholder="Search here"
                    className={classNames(
                      "bg-transparent outline-none text-black",
                      { "hidden md:block": !isSearchExpanded },
                      {
                        "w-20 md:w-48": !isSearchExpanded,
                        "w-full": isSearchExpanded,
                      }
                    )}
                    onBlur={() => {
                      setIsInputFocused(false);
                      setIsSearchExpanded(false);
                    }}
                    onFocus={() => setIsInputFocused(true)}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {isGridView ? (
              <UserGridView users={filteredUsers} deleteUser={deleteUser} />
            ) : (
              <UserListComponent
                users={filteredUsers}
                deleteUser={deleteUser}
              />
            )}

            <Pagination
              currentPage={currentPage}
              totalRecords={totalRecords}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              itemsPerPage={itemsPerPage}
              onItemsPerPageChange={setItemsPerPage}
              LeftArrowIcon={LeftArrowIcon}
              RightArrowIcon={RightArrowIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
