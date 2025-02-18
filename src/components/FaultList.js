import React, { useState } from 'react';

const FAULT_DATA = [
  { id: 'F001', equipmentId: 'EQ-001', faultType: 'Overheating', status: 'Open', severity: 'Critical', equipmentType: 'Turbine', location: 'Plant A' },
  { id: 'F002', equipmentId: 'EQ-002', faultType: 'Vibration', status: 'Resolved', severity: 'Major', equipmentType: 'Compressor', location: 'Plant B' },
  // Add more faults...
];

const FaultList = ({ filter, setFilter, setSelectedFault }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaults = FAULT_DATA.filter((fault) => {
    return (
      (filter.status === 'all' || fault.status === filter.status) &&
      (filter.severity === 'all' || fault.severity === filter.severity) &&
      (filter.equipmentType === 'all' || fault.equipmentType === filter.equipmentType) &&
      (filter.location === 'all' || fault.location === filter.location) &&
      (fault.id.includes(searchQuery) || fault.equipmentId.includes(searchQuery))
    );
  });

  return (
    <div>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by Fault ID or Equipment ID"
        className="w-full p-2 mb-4 bg-gray-800 text-gray-300 rounded"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Filters */}
      <div className="mb-4">
        <select
          className="bg-gray-800 text-gray-300 p-2 mr-2"
          onChange={(e) => setFilter({ ...filter, severity: e.target.value })}
        >
          <option value="all">All Severities</option>
          <option value="Critical">Critical</option>
          <option value="Major">Major</option>
          <option value="Minor">Minor</option>
        </select>

        <select
          className="bg-gray-800 text-gray-300 p-2"
          onChange={(e) => setFilter({ ...filter, status: e.target.value })}
        >
          <option value="all">All Statuses</option>
          <option value="Open">Open</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>

      {/* Fault List */}
      <ul className="space-y-2">
        {filteredFaults.map((fault) => (
          <li
            key={fault.id}
            className="p-4 bg-gray-800 hover:bg-gray-700 cursor-pointer rounded"
            onClick={() => setSelectedFault(fault)}
          >
            <p className="text-gray-100">{fault.equipmentId} - {fault.faultType}</p>
            <p className="text-gray-400 text-sm">{fault.status} | Severity: {fault.severity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FaultList;
