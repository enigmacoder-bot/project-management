import { motion } from "framer-motion";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import SalesOverviewChart from "../components/SalesOverviewChart";
import CategoryDistributionChart from "../components/CategoryDistributionChart";
import SalesChannelChart from "../components/SalesChannelChart";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
const OverviewPage=()=>{
return (
    <div className="flex-1 overflow-auto relative z-10">

        <Header title="Overview"/>
        <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20">
            {/* STATS */}
            <motion.div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8 "
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{duration:1}}
            >
                <StatCard name="Total Sales" icon={Zap} value='$12,345' color='#9061F9'/>
                <StatCard name="New Contractors" icon={Users} value='2,345' color='#E74694'/>
                <StatCard name="Total Products" icon={ShoppingBag} value='567' color='#6363f1'/>
                <StatCard name="Converstion Rate" icon={BarChart2} value='12.5%' color='#6363f1'/>
            </motion.div>

            {/* CHARTS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <SalesOverviewChart/>
                <CategoryDistributionChart/>
                <SalesChannelChart/>
            </div>
        </main>

    </div>
)
}

export default OverviewPage;