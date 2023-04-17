import React from 'react'
const Progress = React.lazy(()=>import('./views/Progress.js')) 
const Order = React.lazy(() => import('./views/Order.js'))
const Drivers = React.lazy(()=> import('./views/Drivers.js'))
const Customer = React.lazy(()=> import('./views/Customer.js'))
const Employees = React.lazy(()=> import('./views/Employees.js'))
const ServiceProviders = React.lazy(()=> import('./views/ServiceProviders.js'))

const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/order', name: 'Order', element: Order },
    { path: '/progress', name: 'Progress', element: Progress },
    { path: '/drivers', name: 'Drivers', element: Drivers },
    { path: '/customer', name: 'Customer', element: Customer },
    { path: '/employees', name: 'Employees', element: Employees },
    { path: '/providers', name: 'ServiceProviders', element: ServiceProviders },


]

export default routes