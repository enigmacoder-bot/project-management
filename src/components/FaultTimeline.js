import React from 'react';

const FaultTimeline = ({ fault }) => {
  const events = fault.timeline || [
    { time: '08:00', event: 'Fault Detected' },
    { time: '08:30', event: 'Contractor Assigned' },
    { time: '09:00', event: 'Work Started' },
  ];

  return (
    <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
      <h3 className="text-gray-100 text-lg mb-4">Fault Timeline</h3>
      <ul className="space-y-2">
        {events.map((event, index) => (
          <li key={index} className="text-gray-300">
            <span className="text-gray-400">{event.time}</span> - {event.event}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FaultTimeline;
