import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widgets from "../../components/widgets/Widgets";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import Charts from "../../components/charts/Charts";
import List from "../../components/list/List";

const Home = () => {
  return (
    <div className="home">
      <>
        <Sidebar />
        <div className="home-container">
          <Navbar />
          <div className="widgets">
            <Widgets type="customers" />
            <Widgets type="orders" />
            <Widgets type="earnings" />
            <Widgets type="balance" />
          </div>
          <div className="charts">
            <Featured />
            <Charts title="Last 6 months ( Revenue )" aspect={2 / 1} />
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <List />
          </div>
        </div>
      </>
    </div>
  );
};

export default Home;
