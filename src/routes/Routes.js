import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import Dashboard from '../views/Dashboard';
import Products from '../views/Products'
import Product from '../views/Product'
import Settings from '../views/Settings'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/saller' element={<AppLayout />} >
                <Route index element={<Dashboard />} />
                <Route path='/saller/products' element={<Products />} />
                <Route path='/saller/product' element={<Product />} />
                <Route path='/saller/settings' element={<Settings />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes