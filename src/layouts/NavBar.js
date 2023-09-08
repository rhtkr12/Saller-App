import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

const NavBar = () => {
    return (
        <>
            <Navbar color="dark" dark>
                <NavbarBrand href="/">
                    {/* <img
                        alt="logo"
                        src="/logo-white.svg"
                        style={{
                            height: 40,
                            width: 40
                        }}
                    /> */}
                    Saller App
                </NavbarBrand>
            </Navbar>
        </>
    )
}

export default NavBar