import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'

export default function NavBar({teams}) {
    return (
            <Navbar
                className='justify-content-center'
                style={{ position: 'sticky' }}
                variant= 'dark'
                bg= 'dark'
                fixed='top'
        >   
            <Navbar.Brand>
            <img
                alt=""
                src="/nfl.png"
                
                height="50"
                    className="d-inline-block align-top"
                />{' '}
            </Navbar.Brand>
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/teams'>Teams</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/standings'>Stadiums</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/contact'>Contact</Nav.Link>
                    </Nav.Item>
                </Nav>

            </Navbar>
  )
}
