import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from "../components/Header";
import RecentFaultsTable from "../components/RecentFaultsTable"; // Assuming you have this component
import Dropdown from "../components/Dropdown"; // Import the Dropdown component

const FaultManagementPage = () => {
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedSeverity, setSelectedSeverity] = useState('All');

  // Placeholder data for fault status and severity options
  const statusOptions = ['All', 'Open', 'Closed'];
  const severityOptions = ['All', 'Critical', 'Major', 'Minor'];

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Fault Management" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20">
        {/* Filter Section */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8 relative" // Added relative here
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Status Filter */}
          <Dropdown
            label="Status"
            options={statusOptions}
            selectedOption={selectedStatus}
            onSelect={setSelectedStatus}
          />

          {/* Severity Filter */}
          <Dropdown
            label="Severity"
            options={severityOptions}
            selectedOption={selectedSeverity}
            onSelect={setSelectedSeverity}
          />
        </motion.div>

        {/* Fault List */}
        <div className="-z-1"> {/* Removed backdrop-blur-md */}
          <h2 className="text-lg font-medium mb-4 text-black">Recent Faults</h2>
          <div className="-z-1"> {/* Added overflow-auto and relative */}
            <RecentFaultsTable /> {/* Include your RecentFaultsTable component */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default FaultManagementPage;
