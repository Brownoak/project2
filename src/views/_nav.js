import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilSpeedometer,
  cilCart,
  cilReload,
  cilNotes,
  cilBike,
  cilGroup,
  cilUser,
  cilCheckCircle,
  cilBasket,
} from "@coreui/icons";

import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },

  {
    component: CNavTitle,
    name: "User Information",
  },

  {
    component: CNavGroup,
    name: "User Managment",
    to: "/customer",
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Drivers",
        icon: <CIcon icon={cilBike} customClassName="nav-icon"/>,
        to: "/drivers",
      },
      {
        component: CNavItem,
        name: "Service Providers",
        icon: <CIcon icon={cilNotes} customClassName="nav-icon"/>,
        to: "/providers",
      },
      {
        component: CNavItem,
        name: "Employees",
        icon: <CIcon icon={cilGroup} customClassName="nav-icon"/>,
        to: "/employees",
      },
    ],
  },

  {
    component: CNavTitle,
    name: "Order Information",
  },

  {
    component: CNavGroup,
    name: "Order Managment",
    to: "/order",
    icon: <CIcon icon={cilBasket} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Orders",
        icon: <CIcon icon={cilCart} customClassName="nav-icon"/>,
        to: "/order",
      },
      {
        component: CNavItem,
        name: "Progress",
        icon: <CIcon icon={cilReload} customClassName="nav-icon"/>,
        to: "/progress",
      },
      {
        component: CNavItem,
        name: "Done",
        icon: <CIcon icon={cilCheckCircle} customClassName="nav-icon"/>,
        to: "/done",
      },
    ],
  },

  
];

export default _nav;
