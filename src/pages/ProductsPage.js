import React from 'react'
import Header from '../components/Header';
import { motion } from 'framer-motion';
import StatCard from '../components/StatCard';
import { Zap,Users,ShoppingBag,BarChart2 } from 'lucide-react';
import ProductTable from '../components/ProductTable';
import CategoryDistributionChart from '../components/CategoryDistributionChart';
import SalesTrendChart from '../components/SalesTrendChart';
const ProductsPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Products"/>

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        {/* STATS */}
        <motion.div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8 "
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{duration:1}}
            >
                <StatCard name="Total Sales" icon={Zap} value='$12,345' color='#6363f1'/>
                <StatCard name="New Contractors" icon={Users} value='2,345' color='#6363f1'/>
                <StatCard name="Total Products" icon={ShoppingBag} value='567' color='#6363f1'/>
                <StatCard name="Converstion Rate" icon={BarChart2} value='12.5%' color='#6363f1'/>
            </motion.div>
            <ProductTable/>
            {/* Charts */}
            <div className='grid grid-col-1 lg:grid-cols-2 gap-8'>
              <SalesTrendChart/>
              <CategoryDistributionChart/>
            </div>
      </main>
    </div>
  )
}

export default ProductsPage