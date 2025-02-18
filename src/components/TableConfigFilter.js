import React, { useState } from "react";

const TableConfigFilter = ({ updateFilters }) => {
    const [selectedOption, setSelectedOption] = useState("All");
    const [selectedOption2, setSelectedOption2] = useState("Select Filter");
    const [inputs, setInputs] = useState({
        projectFilter: "",
        statusFilter: "",
        targetedFilter: "",
    });
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
    };
    const DaysFilterOptionClickHandler = (option) => {
        updateFilters(option, "daysFilter");
        setSelectedOption(option);
        setIsOpen((state) => false); // Close dropdown after selection
    };
    const tableColumnFilterHandler = (e) => {
        const { name, value } = e.target;
        updateFilters(value, name);
        setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: value,
        }));
    };

    const handleApply = () => {
        console.log("Applied filters:", inputs);
        setIsOpen(false); // Close dropdown after applying
    };

    const handleReset = () => {
        setInputs({
            input1: "",
            input2: "",
            input3: "",
            input4: "",
        });
        setIsOpen(false); // Close dropdown after resetting
    };

    function searchHandler(e) {
        updateFilters(e.target.value, "searchFilter");
    }
    let openOrClosedTask = "both";
    return (
        <>
            <div className="items-center mb-5 mt-5 justify-between block sm:flex md:divide-x md:divide-gray-100 dark:divide-gray-700">
                <div class="flex items-center mb-4 sm:mb-0">
                    <form class="sm:pr-3" action="#" method="GET">
                        <label for="products-search" class="sr-only">
                            Search
                        </label>
                        <div class="relative w-50 mt-1 sm:w-64 xl:w-96">
                            <input
                                type="text"
                                name="email"
                                id="products-search"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Search for products"
                                onChange={(e) => searchHandler(e)}
                            ></input>
                        </div>
                    </form>
                    <div className="relative ">
                        {/* Dropdown Button */}
                        <button
                            onClick={toggleDropdown}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Filters
                            <svg
                                className="w-2.5 h-2.5 ms-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 4 4 4-4"
                                />
                            </svg>
                        </button>

                        {/* Dropdown Menu */}
                        {isOpen && (
                            <div className="absolute left-0 mt-2 w-64 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 z-10">
                                <div className="grid grid-cols-2 gap-4 p-4">
                                    <div className="flex flex-col space-y-2">
                                        <input
                                            type="text"
                                            name="projectFilter"
                                            value={inputs.projectFilter}
                                            onChange={tableColumnFilterHandler}
                                            className="border p-2 rounded"
                                            placeholder="Enter Project Name"
                                        />
                                        <input
                                            type="text"
                                            name="statusFilter"
                                            value={inputs.statusFilter}
                                            onChange={tableColumnFilterHandler}
                                            className="border p-2 rounded"
                                            placeholder="Enter status"
                                        />
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <input
                                            type="text"
                                            name="targetedFilter"
                                            value={inputs.targetedFilter}
                                            onChange={tableColumnFilterHandler}
                                            className="border p-2 rounded"
                                            placeholder="Enter target"
                                        />
                                        {/* <input
                      type="text"
                      name="input4"
                      value={inputs.input4}
                      onChange={tableColumnFilterHandler}
                      className="border p-2 rounded"
                      placeholder="Input 4"
                    /> */}
                                    </div>
                                </div>

                                {/* Apply and Reset buttons */}
                                <div className="flex justify-between px-4 py-2">
                                    <button
                                        onClick={handleReset}
                                        className="bg-red-500 text-white p-2 rounded"
                                    >
                                        Reset
                                    </button>
                                    <button
                                        onClick={handleApply}
                                        className="bg-blue-500 text-white p-2 rounded"
                                    >
                                        Apply
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="relative">
                        {/* Dropdown Button */}
                        <button
                            onClick={toggleDropdown2}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
          focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
          inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            {selectedOption}
                            <svg
                                className="w-2.5 h-2.5 ms-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 4 4 4-4"
                                />
                            </svg>
                        </button>

                        {/* Dropdown Menu */}
                        {isOpen2 && (
                            <div
                                className="absolute left-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow-sm 
            dark:bg-gray-700 z-10"
                            >
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                    <li
                                        onClick={() => DaysFilterOptionClickHandler("Last 7 days")}
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Last 7 days
                                    </li>
                                    <li
                                        onClick={() => DaysFilterOptionClickHandler("1 month")}
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        1 month
                                    </li>
                                    <li
                                        onClick={() => DaysFilterOptionClickHandler("2 months")}
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        2 months
                                    </li>
                                    <li
                                        onClick={() => DaysFilterOptionClickHandler("3 months")}
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        3 months
                                    </li>
                                    <li
                                        onClick={() => DaysFilterOptionClickHandler("All")}
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        All
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/*  ICONS SETTINGS INFO ETC ETCC */}
                <div className="flex pl-2 space-x-1">
                    <div class="flex items-center w-full sm:justify-end">
                        <div class="flex pl-2 space-x-1">
                            <a
                                href="#"
                                class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                <svg
                                    class="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                            <a
                                href="#"
                                class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                <svg
                                    class="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                            <a
                                href="#"
                                class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                <svg
                                    class="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                            <a
                                href="#"
                                class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                <svg
                                    class="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default TableConfigFilter;
