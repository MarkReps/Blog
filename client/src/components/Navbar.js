import React, { useContext,  } from "react";
import {Navbar,Container,Nav, Button    } from 'react-bootstrap';
import { Context } from "..";
import {observer} from 'mobx-react-lite';

import { ADMIN_ROUTE, HOME_ROUTE, LOGIN_ROUTE,PROFILE_ROUTE } from "../utils/consts";

const NavBar = observer(() => {

    const {store} = useContext(Context)

    const logoutHandler = ()=>{
        store.userStore.isAuth = false;
        store.userStore.user = {};
        window.localStorage.removeItem('token')
    }

    return(
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href={HOME_ROUTE}>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href={HOME_ROUTE}>Home</Nav.Link>
                        <Nav.Link href={PROFILE_ROUTE}>Profile</Nav.Link>
                        <Nav.Link href={ADMIN_ROUTE}>Admin </Nav.Link>
                    </Nav>
                    
                    {store.userStore.isAuth ? 
                        <Button onClick={() => logoutHandler()}>
                        Logout
                    </Button>
                    :
                    <>
                        <Nav className="me-right">
                            <Nav.Link href={LOGIN_ROUTE}>Login</Nav.Link>
                            <Nav.Link href="/registration">Registration</Nav.Link>
                        </Nav>
                    </>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
})

export default NavBar;