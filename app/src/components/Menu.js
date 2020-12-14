import React from 'react';
import logo from 'assets/images/Logo-Marvel.png';
import { Button, Nav, Navbar, Form, FormControl } from 'react-bootstrap';


class Menu extends React.Component {
    render() {
        return (
            <div className="row menu">
                <div className="col-lg-4 col-12">
                    <Navbar.Brand className="brand transparent-background" href="/">
                        <img
                            alt=""
                            src={logo}
                            height="150"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                </div>
                <div className="col-lg-8 col-12">
                    <Navbar 
                        collapseOnSelect 
                        expand="lg" 
                        variant="light" 
                        className="navbar-light transparent-background align-middle">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto navbar">
                        <Nav.Item>
                                <Nav.Link className="navbar-link" href="/">Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="navbar-link" href="/ejercicio-1">Ejercicio 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="navbar-link" href="/ejercicio-2">Ejercicio 2</Nav.Link>
                                </Nav.Item>
                        </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>

        )
    }
}

export default Menu;

