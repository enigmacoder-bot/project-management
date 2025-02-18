import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ListChecks, ChartPie, Database, Clock5 } from 'lucide-react';

const SIDEBAR_ITEMS = [
    {
        name: "Tasks",
        icon: ListChecks,
        href: "/tasks",
    },
    { name: "Dashboard", icon: ChartPie, href: "/dashboard" },
    { name: "Data Management", icon: Database, href: "/data-management" },
    { name: "Activities", icon: Clock5, href: "/activities" },
];

const SidebarPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleToggleSidebar = () => {
        console.log('Toggle clicked')
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="fixed top-15 left-0 z-40 h-screen">
            <div className="absolute top-4 left-2 p- rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                <button
                    onClick={handleToggleSidebar}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                    <Menu className="w-6 h-6" />
                </button>
            </div>
            <div className={`h-full pt-16 overflow-y-auto transition-transform ${isSidebarOpen ? "w-64" : "w-20"} bg-white dark:bg-gray-800`}>
                <div className="h-full flex flex-col">
                    <nav className="mt-8 flex-grow">
                        <ul className="space-y-2 font-medium">
                            {SIDEBAR_ITEMS.map((item) => (
                                <li key={item.href}>
                                    <Link to={item.href} className="flex items-center p-2 pl-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <item.icon className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                        {isSidebarOpen && (
                                            <span className="ml-3">{item.name}</span>
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default SidebarPage;