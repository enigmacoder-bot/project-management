import { motion } from "framer-motion";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import FaultsChart from "../components/FaultsChart"; // You can replace this with your actual chart
import ContractorPerformanceChart from "../components/ContractorPerformanceChart"; // Replace with actual chart
import RecentFaultsTable from "../components/RecentFaultsTable"; // A table component
import { AlertTriangle, Clock, Repeat, Users } from "lucide-react";

const PerformancePage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Performance Overview" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Open Faults"
            icon={AlertTriangle}
            value="12"
            color="#f56565"
          />
          <StatCard
            name="MTTR (Mean Time to Repair)"
            icon={Clock}
            value="2 hrs"
            color="#48bb78"
          />
          <StatCard
            name="Downtime"
            icon={Clock}
            value="4 hrs"
            color="#f6ad55"
          />
          <StatCard
            name="Fault Recurrence"
            icon={Repeat}
            value="10%"
            color="#ed8936"
          />
        </motion.div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FaultsChart /> {/* Replace with your fault summary chart */}
          <ContractorPerformanceChart /> {/* Replace with contractor performance chart */}
        </div>

        {/* RECENT FAULTS TABLE */}
        <div className="mt-8">
          <RecentFaultsTable /> {/* Replace with your table component */}
        </div>
      </main>
    </div>
  );
};

export default PerformancePage;
