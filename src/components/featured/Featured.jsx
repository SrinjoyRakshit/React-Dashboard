import React from "react";
import "./featured.scss";
import { KeyboardArrowDown, MoreVertOutlined } from "@mui/icons-material";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "./ChangingProgressProvider";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertOutlined fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <ChangingProgressProvider values={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}>
            {(percentage) => (
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  pathTransitionDuration: 0.95,
                  trailColor: '#82ca9d',
                  pathColor: '#210876',
                  textColor: '#210876',
                })}
              />
            )}
          </ChangingProgressProvider>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$2042.50k</p>
        <p className="desc">Previous Transactions</p>
        <div className="summary">
          <div className="item">
           <div className="itemTitle">Target</div>
           <div className="itemResult negative">
            <KeyboardArrowDown fontSize="small" />
            <div className="resultAmount">$17.4k</div>
           </div>
          </div>

          <div className="item">
           <div className="itemTitle">Last Week</div>
           <div className="itemResult positive">
            <KeyboardArrowDown fontSize="small" />
            <div className="resultAmount">$60.4k</div>
           </div>
          </div>

          <div className="item">
           <div className="itemTitle">Last Month</div>
           <div className="itemResult negative">
            <KeyboardArrowDown fontSize="small" />
            <div className="resultAmount">$73.4k</div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
