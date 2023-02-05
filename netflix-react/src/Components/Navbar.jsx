import { Component } from "react";
import { Container, Navbar, Nav, Form, Button } from "react-bootstrap";
import { Bell, Search } from "react-bootstrap-icons";


class MenuNavbar extends Component {
    render() {
        return (
            <Navbar expand="lg" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img src='./assets/netflix_logo.png' alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">TV Shows</Nav.Link>
                            <Nav.Link href="#">Movies</Nav.Link>
                            <Nav.Link href="#">Recently Added</Nav.Link>
                            <Nav.Link href="#">My List</Nav.Link>
                        </Nav>
                        <Form inline className="ml-auto">
                            <Button><Search /></Button>
                            <Button className="text-white text-decoration-none mr-2">KIDS</Button>
                            <Button className="btn my-2 my-sm-0 text-white mr-2" type="submit">
                                <Bell />
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        )
    }
}

export default MenuNavbar