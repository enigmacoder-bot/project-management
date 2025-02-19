// App.js
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import TopHeader from './components/TopHeader';
import SidebarPage from './pages/SidebarPage';
import TasksPage from './pages/TasksPage';
import ProductsPage from './pages/ProductsPage';
import TasksAccordion from './components/TasksAccordion'
import ProductTable from './components/ProductTable';
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const Component1 = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Component 1</h3>
      <p className="text-gray-600">This is a complete React component embedded in an accordion.</p>
      <div className="flex space-x-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Action Button
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
          Cancel
        </button>
      </div>
    </div>
  );

  const accordionItems = [
    {
      title: 'Tasks',
      content: <TasksPage />
    },
  ];

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
      <TopHeader />
      <div className="flex flex-1 overflow-hidden">
        <SidebarPage isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className={`flex-1 overflow-auto p-4 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
          <Routes>
            <Route path="/tasks" element={<TasksAccordion items={accordionItems} />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/dashboard" element={<ProductTable />} />
          </Routes>
        </main>
      </div>

    </div>
  );
}

export default App;