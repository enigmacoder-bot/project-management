import React from 'react';

const FaultDetailsPanel = ({ fault }) => {
  return (
    <div className="mt-6 bg-gray-900 p-4 rounded-lg border border-gray-700">
      <h3 className="text-gray-100 text-lg mb-4">Fault Details: {fault.equipmentId}</h3>
      <p className="text-gray-300">Fault Type: {fault.faultType}</p>
      <p className="text-gray-300">Status: {fault.status}</p>
      <p className="text-gray-300">Severity: {fault.severity}</p>
      <p className="text-gray-300">Detected Time: {fault.detectionTime || 'N/A'}</p>
      <p className="text-gray-300">Assigned Contractor: {fault.contractor || 'Unassigned'}</p>
      <p className="text-gray-300">Resolution Progress: {fault.progress || 'N/A'}</p>
      
      {/* Action Buttons */}
      <div className="mt-4">
        <button className="bg-blue-500 p-2 mr-2 rounded">Assign Contractor</button>
        <button className="bg-red-500 p-2 mr-2 rounded">Raise Penalty</button>
        <button className="bg-yellow-500 p-2 rounded">Issue Warning</button>
      </div>
    </div>
  );
};

export default FaultDetailsPanel;
