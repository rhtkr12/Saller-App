import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './NavBar'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { Container } from 'reactstrap'

const AppLayout = () => {
    return (
        <>
            <Header />
            <div className='d-flex'>
                <Sidebar />
                <Container style={{ backgroundColor: 'gray' }}>
                    <Outlet />
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default AppLayout