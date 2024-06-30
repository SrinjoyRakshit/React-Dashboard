import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './Customers.scss'
import Datatable from '../../components/datatable/Datatable'

const Customers = () => {
  return (
    <div className='customers'>
      <Sidebar />

      <div className="customerContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  )
}

export default Customers
