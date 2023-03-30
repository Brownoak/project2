import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer,
  cilCart,
  cilReload,
  cilNotes
} from '@coreui/icons'

import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  {
    component: CNavTitle,
    name: 'Order Information',
  },
  {
    component: CNavItem,
    name: 'Orders',
    to: '/order',
    icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Progress',
    to: '/progress',
    icon: <CIcon icon={cilReload} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Done',
    to: '/done',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  
]

export default _nav
