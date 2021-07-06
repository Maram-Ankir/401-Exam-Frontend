import React, { Component } from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'

export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Cocktail App</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/Favourite">Favourite</Nav.Link>
                          
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Header
