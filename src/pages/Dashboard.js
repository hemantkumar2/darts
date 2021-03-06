import React from "react";

import DrawerProvider from "../contexts/DrawerContext";
import Donut from "../components/Donut";
import Navbar from "../components/Navbar";
import IShare from "../components/IShares";
import DrawerComponent from "../components/drawer";

const Dashboard = () => {
  return (
    <div>
      <DrawerProvider>
        <Navbar />
        <DrawerComponent />
      </DrawerProvider>
      <div className="columns">
        <IShare />
        <Donut />
      </div>
    </div>
  );
};
export default Dashboard;
