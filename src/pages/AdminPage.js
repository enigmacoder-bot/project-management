import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const StatusTag = ({ status }) => {
  const getStatusStyles = () => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'inactive':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusStyles()}`}>
      {status}
    </span>
  );
};

const AdminPage = () => {
  const [organizations, setOrganizations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual API call
    fetchOrganizations();
  }, []);

  const fetchOrganizations = async () => {
    try {
      // Mock data - replace with actual API call
      const mockData = [
        {
          id: 1,
          name: 'Organization A',
          totalLicenses: 100,
          usedLicenses: 85,
          subscriptionStatus: 'Active',
          lastBillingDate: '2024-03-01',
        },
        {
          id: 2,
          name: 'Organization B',
          totalLicenses: 50,
          usedLicenses: 42,
          subscriptionStatus: 'Active',
          lastBillingDate: '2024-02-28',
        },
      ];
      setOrganizations(mockData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching organizations:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Organization Management" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>Organization Name</TableHeaderCell>
                <TableHeaderCell>Total Licenses</TableHeaderCell>
                <TableHeaderCell>Used Licenses</TableHeaderCell>
                <TableHeaderCell>Available Licenses</TableHeaderCell>
                <TableHeaderCell>Subscription Status</TableHeaderCell>
                <TableHeaderCell>Last Billing Date</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {organizations.map((org) => (
                <TableRow key={org.id}>
                  <TableCell>{org.name}</TableCell>
                  <TableCell>{org.totalLicenses}</TableCell>
                  <TableCell>{org.usedLicenses}</TableCell>
                  <TableCell>{org.totalLicenses - org.usedLicenses}</TableCell>
                  <TableCell>
                    <StatusTag status={org.subscriptionStatus} />
                  </TableCell>
                  <TableCell>{org.lastBillingDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </main>
    </div>
  );
};

export default AdminPage;
