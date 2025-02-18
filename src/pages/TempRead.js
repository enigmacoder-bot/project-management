import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const TempRead = () => {
  // Sample temperature data (replace with real IoT data)
  const [temperatureReadings, setTemperatureReadings] = useState([
    { id: 'Sensor-001', temperature: 22.5, time: '2024-10-23 10:00', status: 'Normal' },
    { id: 'Sensor-002', temperature: 30.1, time: '2024-10-23 10:05', status: 'High' },
    { id: 'Sensor-003', temperature: 18.3, time: '2024-10-23 10:10', status: 'Low' },
    { id: 'Sensor-004', temperature: 25.0, time: '2024-10-23 10:15', status: 'Normal' },
  ]);

  // Function to get status classes
  const getStatusClasses = (status) => {
    switch (status) {
      case 'High':
        return 'text-red-500 font-bold';
      case 'Low':
        return 'text-yellow-500 font-bold';
      case 'Normal':
        return 'text-green-500 font-bold';
      default:
        return '';
    }
  };

  // Extract data for the LineChart (based on temperatureReadings)
  const chartData = temperatureReadings.map((reading) => ({
    time: reading.time.split(' ')[1], // Extract just the time
    temperature: reading.temperature,
  }));

  useEffect(() => {
    // Fetch real-time temperature data from IoT cloud (replace with actual API call or WebSocket logic)
    // Example:
    // const fetchTemperatureData = async () => {
    //   const data = await getTemperatureFromIoTCloud();
    //   setTemperatureReadings(data);
    // };
    // fetchTemperatureData();
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Line Chart */}
      <motion.div
        className="bg-gray-800 shadow-lg rounded-xl p-6 border border-gray-700 inset-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-lg font-medium mb-4 text-gray-100">Temperature Overview</h2>
        <div className="h-80 inset-0">
          <ResponsiveContainer>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{ backgroundColor: 'rgba(31, 41, 55, 0.8)', borderColor: '#4B5563' }}
                itemStyle={{ color: '#E5E7EB' }}
              />
              <Line type="linear" dataKey="temperature" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.1} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Temperature Table */}
      <div className="overflow-x-auto shadow-md sm:rounded-lg z-10">
        <h2 className="text-xl font-bold mb-4">Temperature Readings</h2>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Sensor ID</th>
              <th scope="col" className="px-6 py-3">Temperature (°C)</th>
              <th scope="col" className="px-6 py-3">Time</th>
              <th scope="col" className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {temperatureReadings.map((reading) => (
              <tr
                key={reading.id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {reading.id}
                </th>
                <td className="px-6 py-4">{reading.temperature.toFixed(1)}°C</td>
                <td className="px-6 py-4">{reading.time}</td>
                <td className={`px-6 py-4 ${getStatusClasses(reading.status)}`}>{reading.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TempRead;
