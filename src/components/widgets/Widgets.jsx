import React from "react";
import "./widgets.scss";
import { AccountBalanceWalletOutlined, KeyboardArrowUpOutlined, MonetizationOnOutlined, Person2Outlined, ShoppingCartOutlined } from "@mui/icons-material";

const Widgets = ({ type }) => {
  let data;
  const amount = 500
  const diff =  30

  switch (type) {
    case "customers":
      data = {
        title: "Customers",
        isMoney: false,
        link: "See details",
        icon: <Person2Outlined className="icon" style={{color: "crimson"}} />
      };
      break;
    case "orders":
      data = {
        title: "Orders",
        isMoney: false,
        link: "View all orders",
        icon: <ShoppingCartOutlined className="icon" style={{color: "goldenrod"}} />
      };
      break;
    case "earnings":
      data = {
        title: "Total Earnings",
        isMoney: true,
        link: "View net earning",
        icon: <MonetizationOnOutlined className="icon" style={{color: "green"}} />
      };
      break;
    case "balance":
      data = {
        title: "My Balance",
        isMoney: true,
        link: "Withdraw money",
        icon: <AccountBalanceWalletOutlined className="icon" style={{color: "blue"}} />
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"} {amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlined />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widgets;
