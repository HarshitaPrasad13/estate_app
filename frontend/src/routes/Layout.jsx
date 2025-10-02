import React from 'react'
import Navbar from '../components/Navbar';
import HomePage from './HomePage';
import { Outlet } from 'react-router-dom';
import "./Layout.scss"

const Layout = () => {
  return (
    <div>
     <div className="layout">
       <div className="naviation">
         <Navbar />
       </div>
       <div className="page-contents">
         <Outlet/>
       </div>
     </div>
      
    </div>
  )
}

export default Layout
