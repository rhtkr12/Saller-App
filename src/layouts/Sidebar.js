import React from 'react'
import Settings from '../styles/sidebar.module.css'
import { Col } from 'reactstrap'
import NavRoutes from '../routes/NavRoutes'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (

        <>
            <div className={Settings.setting}>
                <Col className={Settings.innerLinks}>
                    {
                        NavRoutes.map((route) => (

                            <Link to={route.navLink}>
                                {route.icon}
                                {route.title}
                            </Link>
                        ))
                    }
                </Col>
            </div>
        </>
    )
}

export default Sidebar