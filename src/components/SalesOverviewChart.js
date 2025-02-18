import React from 'react'
import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer} from 'recharts';
import { motion } from 'framer-motion';

const salesData = [
	{ month: "Jan", sales: 4000 },
	{ month: "Feb", sales: 3000 },
	{ month: "Mar", sales: 5000 },
	{ month: "Apr", sales: 4500 },
	{ month: "May", sales: 6000 },
	{ month: "Jun", sales: 5500 },
	{ month: "Jul", sales: 7000 },
];

const SalesOverviewChart = () => {
  return (
    <motion.div className='bg-black shadow-lg rounded-xl p-6 border border-gray-700'
    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.2}}
    >
        <h2 className='text-lg font-medium mb-4 text-white'>Overview</h2>
        <div className='h-80'>
        <ResponsiveContainer>
					<LineChart data={salesData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#767a82' />
						<XAxis dataKey='month' stroke='#bfcade' />
						<YAxis stroke='#bfcade' />
						<Tooltip
							contentStyle={{ backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#4B5563" }}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Line type='monotone' dataKey='sales' stroke='#8B5CF6' fill='#8B5CF6' fillOpacity={0.1} />
					</LineChart>
				</ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default SalesOverviewChart