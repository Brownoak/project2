import React from 'react'
const Progress = React.lazy(()=>import('./views/Progress.js')) 
const Order = React.lazy(() => import('./views/Order.js'))

const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/order', name: 'Order', element: Order },
    { path: '/progress', name: 'Progress', element: Progress },

]

export default routes