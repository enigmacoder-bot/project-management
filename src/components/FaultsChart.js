import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";
import { motion } from 'framer-motion';

const COLORS = ["#EF4444", "#F59E0B", "#10B981", "#3B82F6"]; // Red for critical, yellow for warning, green for resolved
const FAULTS_DATA = [
  { name: "Critical", value: 12 },
  { name: "Warning", value: 8 },
  { name: "Resolved", value: 24 },
  { name: "Recurring", value: 3 }
];

const FaultsChart = () => {
  return (
    <motion.div
      className='bg-black shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className='text-lg font-medium mb-4 text-gray-100'>Fault Status Overview</h2>
      <div className='h-80'>
        <ResponsiveContainer>
          <BarChart data={FAULTS_DATA}>
            <CartesianGrid strokeDasharray="3 3 " stroke="#4B5563" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke='#9CA3AF' />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "4B5563"
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Bar dataKey="value" fill='#8884D8'>
              {FAULTS_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default FaultsChart;
