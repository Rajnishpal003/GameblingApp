import React, { useState } from 'react';
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Ledger from "./components/Ledger"; // Import the Ledger component
import "./Allcss/Home.css"; // Ensure correct import
import GameGrid from "./components/Gamegrid";
const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (

    <div>
        <Header toggleSidebar={toggleSidebar} />
        <div className="main-wrapper">
            <Sidebar isSidebarOpen={isSidebarOpen} />
            <GameGrid />
        </div>
    </div>
  );
};

export default Home;
