import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";
import {
  CalendarMonthOutlined,
  CreditCardOutlined,
  Dashboard,
  DiamondOutlined,
  DnsOutlined,
  ExitToAppOutlined,
  InsertChartOutlinedSharp,
  LocalGroceryStoreOutlined,
  ManageAccountsOutlined,
  NotificationsActiveOutlined,
  Person3Outlined,
  SettingsOutlined,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to='/' style={{textDecoration: 'none'}}>
          <span className="logo">Shoppers</span>
        </Link>
      </div>
      <hr />
      <div className="bottom">
        <ul>
          <p className="title">Main</p>
          <li>
            <Dashboard className="icon" />
            <Link to='/' style={{textDecoration: 'none'}}>
              <span>Dashboard</span>
            </Link>
            
          </li>

          <p className="title">Lists</p>
          <Link to = '/users' style={{textDecoration: 'none'}}>
            <li>
            <Person3Outlined className="icon" />
            <span>Users</span>
          </li>
          </Link>
          
          <Link to = '/products' style={{textDecoration: 'none'}}>
            <li>
              <LocalGroceryStoreOutlined className="icon" />
              <span>Products</span>
            </li>
          </Link>
         
          <li>
            <CreditCardOutlined className="icon" />
            <span>Orders</span>
          </li>

          <p className="title">Charts</p>
          <li>
            <InsertChartOutlinedSharp className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveOutlined className="icon" />
            <span>Notifications</span>
          </li>

          <p className="title">Service</p>
          <li>
            <DnsOutlined className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <SettingsOutlined className="icon" />
            <span>Settings</span>
          </li>

          <p className="title">User Interface</p>
          <li>
            <ManageAccountsOutlined className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <CalendarMonthOutlined className="icon" />
            <span>Calendar</span>
          </li>
          <li>
            <DiamondOutlined className="icon" />
            <span>Helper</span>
          </li>
          <li>
            <ExitToAppOutlined className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
