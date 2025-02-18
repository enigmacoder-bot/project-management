import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";
import { motion } from 'framer-motion';

const COLORS = ["#10B981", "#3B82F6", "#F59E0B", "#EF4444"]; // Green for best, blue for good, yellow for warning, red for poor
const CONTRACTOR_PERFORMANCE_DATA = [
  { name: "Contractor A", responseTime: 2, taskCompletion: 95, faultResolution: 90 },
  { name: "Contractor B", responseTime: 3, taskCompletion: 85, faultResolution: 80 },
  { name: "Contractor C", responseTime: 4, taskCompletion: 75, faultResolution: 70 },
  { name: "Contractor D", responseTime: 5, taskCompletion: 65, faultResolution: 60 }
];

const ContractorPerformanceChart = () => {
  return (
    <motion.div
      className='bg-black bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className='text-lg font-medium mb-4 text-gray-100'>Contractor Performance Overview</h2>
      <div className='h-80'>
        <ResponsiveContainer>
          <BarChart data={CONTRACTOR_PERFORMANCE_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
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
            <Bar dataKey="responseTime" name="Response Time (hrs)" fill={COLORS[0]}>
              {CONTRACTOR_PERFORMANCE_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
            <Bar dataKey="taskCompletion" name="Task Completion (%)" fill={COLORS[1]} />
            <Bar dataKey="faultResolution" name="Fault Resolution (%)" fill={COLORS[2]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default ContractorPerformanceChart;
