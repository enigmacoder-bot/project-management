import React, { useState } from "react";

import { Users } from "lucide-react";

// IMPORTING CHILDREN COMPONENTS

import TableData from "../components/TableData";
import TableConfig from "../components/TableConfig";
import TableConfigFilter from "../components/TableConfigFilter";
const TasksPage = () => {
    const [tableData, setTableData] = useState([
        {
            createdDate: "Today",
            taskType: "Approve project creation",
            projectName: "ABC INC PROJECT",
            to: "Me",
            targeted: "Tomorrow",
            actual: "-",
            status: "Delayed",
            statusColor: "text-red-500",
            details: "Additional project details and information can go here...",
        },
        {
            createdDate: "Today",
            taskType: "Approve project creation",
            projectName: "ABC INC PROJECT",
            to: "Me",
            targeted: "Tomorrow",
            actual: "-",
            status: "Open",
            statusColor: "text-yellow-500",
            details: "More details about this specific task...",
        },
        {
            createdDate: "Today",
            taskType: "Approve project creation",
            projectName: "ABC INC PROJECT",
            to: "Me",
            targeted: "Tomorrow",
            actual: "-",
            status: "Done",
            statusColor: "text-green-500",
            details: "Completed task details and outcomes...",
        },
        {
            createdDate: "Today",
            taskType: "Approve project creation",
            projectName: "ABC INC PROJECT",
            to: "Department A",
            targeted: "Tomorrow",
            actual: "-",
            status: "Done",
            statusColor: "text-green-500",
            details: "Completed task details and outcomes...",
        },
        {
            createdDate: "Today",
            taskType: "Approve project creation",
            projectName: "ABC INC PROJECT",
            to: "Department B",
            targeted: "Tomorrow",
            actual: "-",
            status: "Done",
            statusColor: "text-green-500",
            details: "Completed task details and outcomes...",
        },
    ]);
    // Sample data - you can replace this with your actual data
    const originalTableData = [
        {
            createdDate: "Today",
            taskType: "Approve project creation",
            projectName: "ABC INC PROJECT",
            to: "Me",
            targeted: "Tomorrow",
            actual: "-",
            status: "Delayed",
            statusColor: "text-red-500",
            details: "Additional project details and information can go here...",
        },
        {
            createdDate: "Today",
            taskType: "Approve project creation",
            projectName: "ABC INC PROJECT",
            to: "Me",
            targeted: "Tomorrow",
            actual: "-",
            status: "Open",
            statusColor: "text-yellow-500",
            details: "More details about this specific task...",
        },
        {
            createdDate: "Today",
            taskType: "Approve project creation",
            projectName: "ABC INC PROJECT",
            to: "Me",
            targeted: "Tomorrow",
            actual: "-",
            status: "Done",
            statusColor: "text-green-500",
            details: "Completed task details and outcomes...",
        },
        {
            createdDate: "Today",
            taskType: "Approve project creation",
            projectName: "ABC INC PROJECT",
            to: "Department A",
            targeted: "Tomorrow",
            actual: "-",
            status: "Done",
            statusColor: "text-green-500",
            details: "Completed task details and outcomes...",
        },
        {
            createdDate: "Today",
            taskType: "Approve project creation",
            projectName: "ABC INC PROJECT",
            to: "Department B",
            targeted: "Tomorrow",
            actual: "-",
            status: "Done",
            statusColor: "text-green-500",
            details: "Completed task details and outcomes...",
        },
    ];

    let searchFilter = "";
    let showMyorAllDepartment = "";
    let daysFilter = "";
    let openOrClosedTaskFilter = "";
    let projectFilter = "";
    let statusFilter = "";
    let targetedFilter = "";

    function updateFilters(value, key) {
        switch (key) {
            case "searchFilter":
                searchFilter = value;
                break;
            case "showMyorAllDepartment":
                showMyorAllDepartment = value;
                break;
            case "daysFilter":
                daysFilter = value;
                break;
            case "openOrClosedTaskFilter":
                openOrClosedTaskFilter = value;
                break;
            case "projectFilter":
                projectFilter = value;
                break;
            case "statusFilter":
                statusFilter = value;
                break;
            case "targetedFilter":
                targetedFilter = value;
                break;
            default:
                break;
        }
        filterTableData();
    }

    function filterTableData() {
        console.log("searchFilter", searchFilter);
        console.log("showMeorAllDepartment", showMyorAllDepartment);
        console.log("daysFilter", daysFilter);
        console.log("openOrClosedTaskFilter", openOrClosedTaskFilter);
        console.log("projectFilter", projectFilter);
        console.log("statusFilter", statusFilter);
        console.log("targetedFilter", targetedFilter);
    }
    return (
        <div className="flex-1 overflow-auto relative z-10 p-5">
            <TableConfig
                updateFilters={updateFilters}
                filterTableData={filterTableData}
            >
                <TableConfigFilter
                    tableData={tableData}
                    updateFilters={updateFilters}
                    setTableData={setTableData}
                    originalTableData={originalTableData}
                ></TableConfigFilter>
            </TableConfig>
            <TableData tableData={tableData}></TableData>
        </div>
    );
};

export default TasksPage;
