import {
  BarChart2,
  ShoppingBag,
  Users,
  ShoppingCart,
  TrendingUp,
  Settings,
  Menu,
  Tally4Icon,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SIDEBAR_ITEMS = [
  {
    name: "Overview",
    icon: BarChart2,
    color: "#6366f1",
    href: "/",
  },
  { name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
  { name: "Contractors", icon: Users, color: "#EC4899", href: "/users" },
  { name: "Fault", icon: Tally4Icon, color: "#10B981", href: "/fault" },
  {
    name: "Performance",
    icon: TrendingUp,
    color: "#3B82F6",
    href: "/performance",
  },
  { name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div
      className={`relative z-10 transition-all duration-400 ease-in-out flex-shrink-0 ${isSidebarOpen ? "w-64" : "w-20"
        }`}
    >
      <div className="h-full p-4 flex flex-col border-r border-gray-700">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-black hover:text-white transition-colors max-w-fit"
        >
          <Menu size={24} />
        </button>
        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.href} to={item.href}>
              <div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-black hover:text-white transition-colors mb-2">
                <item.icon
                  size={20}
                  style={{ color: item.color, minWidth: "20px" }}
                />
                {isSidebarOpen && (
                  <span className="ml-4 whitespace-nowrap">
                    {item.name}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
