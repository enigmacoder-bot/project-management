import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  UserCheck,
  AlertTriangle,
  Award,
  ClipboardCheck,
  Star,
} from "lucide-react";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Custom Table Components
const Table = ({ children }) => (
  <div className="w-full overflow-auto rounded-xl backdrop-blur-md border border-gray-200 shadow-lg">
    <table className="w-full text-sm text-left">{children}</table>
  </div>
);

const TableHeader = ({ children }) => (
  <thead className="text-xs uppercase bg-gray-50/50 text-gray-700">
    {children}
  </thead>
);

const TableBody = ({ children }) => (
  <tbody className="divide-y divide-gray-200">{children}</tbody>
);

const TableRow = ({ children, onClick, className = "" }) => (
  <tr
    className={`hover:bg-gray-50/50 ${
      onClick ? "cursor-pointer" : ""
    } ${className}`}
    onClick={onClick}
  >
    {children}
  </tr>
);

const TableCell = ({ children, className = "" }) => (
  <td className={`px-4 py-3 ${className}`}>{children}</td>
);

const TableHeaderCell = ({ children, className = "" }) => (
  <th className={`px-4 py-3 font-medium ${className}`}>{children}</th>
);

const UsersPage = () => {
  const [selectedContractor, setSelectedContractor] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Stats data
  const contractorStats = {
    totalContractors: 156,
    activeContracts: 89,
    slaCompliance: "94.2%",
    completedTasks: 1243,
  };

  // Sample data
  const contractors = [
    {
      id: 1,
      name: "ABC Construction",
      rating: 4.5,
      slaCompliance: 92,
      activeWorkOrders: 8,
      location: "New York",
      contractDuration: "2024-2025",
    },
    {
      id: 2,
      name: "XYZ Services",
      rating: 3.8,
      slaCompliance: 85,
      activeWorkOrders: 5,
      location: "Chicago",
      contractDuration: "2024-2026",
    },
  ];

  const performanceData = [
    { month: "Jan", compliance: 95 },
    { month: "Feb", compliance: 92 },
    { month: "Mar", compliance: 88 },
    { month: "Apr", compliance: 94 },
  ];

  const renderRating = (rating) => {
    return (
      <div className="flex items-center">
        <Star className="w-4 h-4 text-yellow-400 fill-current" />
        <span className="ml-1">{rating}</span>
      </div>
    );
  };

  // Filter contractors based on searchTerm
  const filteredContractors = contractors.filter(
    (contractor) =>
      contractor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contractor.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Contractor Management" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Contractors"
            icon={UserCheck}
            value={contractorStats.totalContractors.toLocaleString()}
            color="#6363f1"
          />
          <StatCard
            name="Active Contracts"
            icon={ClipboardCheck}
            value={contractorStats.activeContracts}
            color="#6363f1"
          />
          <StatCard
            name="SLA Compliance"
            icon={Award}
            value={contractorStats.slaCompliance}
            color="#6363f1"
          />
          <StatCard
            name="Completed Tasks"
            icon={AlertTriangle}
            value={contractorStats.completedTasks}
            color="#6363f1"
          />
        </motion.div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search contractors..."
              className="w-full pl-8 pr-4 py-2 rounded-xl backdrop-blur-md border border-gray-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Contractor Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>Contractor Name</TableHeaderCell>
                <TableHeaderCell>Rating</TableHeaderCell>
                <TableHeaderCell>SLA Compliance</TableHeaderCell>
                <TableHeaderCell>Active Work Orders</TableHeaderCell>
                <TableHeaderCell>Location</TableHeaderCell>
                <TableHeaderCell>Contract Duration</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredContractors.map((contractor) => (
                <TableRow
                  key={contractor.id}
                  onClick={() => setSelectedContractor(contractor)}
                >
                  <TableCell>{contractor.name}</TableCell>
                  <TableCell>{renderRating(contractor.rating)}</TableCell>
                  <TableCell>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${contractor.slaCompliance}%` }}
                      ></div>
                    </div>
                  </TableCell>
                  <TableCell>{contractor.activeWorkOrders}</TableCell>
                  <TableCell>{contractor.location}</TableCell>
                  <TableCell>{contractor.contractDuration}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>

        {/* Performance Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <motion.div
            className="backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-200 p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4">SLA Compliance Trend</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="compliance"
                    stroke="#6363f1"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default UsersPage;
