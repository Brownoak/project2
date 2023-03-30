import React from 'react'
import {  AppHeader, AppFooter, AppSidebar, AppContent } from '../components/index'
// import "../App.scss"
const AppLayout = () => {
  return (
    <div className=''>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light ">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default AppLayout
