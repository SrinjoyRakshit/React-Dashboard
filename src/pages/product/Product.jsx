import React from 'react'
import './Product.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import ProductTable from '../../components/productTable/ProductTable'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div className='product'>
      <Sidebar />
      <div className="productContainer">
        <Navbar />
        <div className="productLists">
          <div className="datatableTitle">
            <span>Add New Product</span>
            <Link to='/products/productId/new' style={{textDecoration: 'none'}}>
              <span className='link'>Add New</span>
            </Link>
          </div>
          <ProductTable />
        </div>
      </div>
    </div>
  )
}

export default Product
