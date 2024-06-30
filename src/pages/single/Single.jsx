import React from 'react'
import  './Single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Charts from '../../components/charts/Charts'
import List from '../../components/list/List'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <span className="editBtn">Edit</span>

            <div className="item">
              <img src="/assets/person.jpg" className='itemImg' alt="" />
            <div className="details">
              <h1 className="itemTitle">Jolyne Silva</h1>
              <div className="detailItem">
                <span className="itemKey">Email: </span>
                <span className="itemValue">jolynesilva55@gmail.com</span>
              </div>

              <div className="detailItem">
                <span className="itemKey">Phone: </span>
                <span className="itemValue">+291 88900-56432</span>
              </div>

              <div className="detailItem">
                <span className="itemKey">Address: </span>
                <span className="itemValue">Melwook Str. 24 Paris</span>
              </div>

              <div className="detailItem">
                <span className="itemKey">Country: </span>
                <span className="itemValue">France</span>
              </div>
            </div>
          </div>
          </div>
          <div className="right">
            <Charts aspect={3 / 1} title='Users Spending ( Last 6 Months )' />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Single
