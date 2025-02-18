import React from 'react';

const RecentFaultsTable = () => {
  // Sample data
  const faults = [
    { id: 'EQ-001', type: 'Overheating', time: '2024-10-20 12:00', status: 'Open' },
    { id: 'EQ-002', type: 'Vibration', time: '2024-10-21 08:30', status: 'Closed' },
    { id: 'EQ-003', type: 'Power Failure', time: '2024-10-22 14:00', status: 'In Progress' },
    { id: 'EQ-004', type: 'Sensor Failure', time: '2024-10-23 09:00', status: 'Open' },
  ];

  // Function to get status classes
  const getStatusClasses = (status) => {
    switch (status) {
      case 'Open':
        return 'text-red-500 font-bold';
      case 'Closed':
        return 'text-green-500 font-bold';
      case 'In Progress':
        return 'text-yellow-500 font-bold';
      default:
        return '';
    }
  };

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Equipment ID
            </th>
            <th scope="col" className="px-6 py-3">
              Fault Type
            </th>
            <th scope="col" className="px-6 py-3">
              Detection Time
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Assigned Contractor
            </th>
          </tr>
        </thead>
        <tbody>
          {faults.map((fault) => (
            <tr key={fault.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {fault.id}
              </th>
              <td className="px-6 py-4">{fault.type}</td>
              <td className="px-6 py-4">{fault.time}</td>
              <td className={`px-6 py-4 ${getStatusClasses(fault.status)}`}>{fault.status}</td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentFaultsTable;
