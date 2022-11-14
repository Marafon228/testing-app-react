import Container from 'react-bootstrap/Container';
import {Navbar,Nav, NavDropdown} from 'react-bootstrap';
import {useNavigate } from 'react-router-dom'

function Layout(props){

    let user = JSON.parse(localStorage.getItem('user-info'))
    const navigate = useNavigate()
    function logout(){
        localStorage.clear();
        navigate('/')
    }


    return<>
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
            <Nav>
                {
                    localStorage.getItem('user-info') ?
                        <>
                            <Nav.Link href={'/add'}>add prod</Nav.Link>
                            <Nav.Link href={'/update'}>update prod</Nav.Link>
                        </>
                        :
                        <>
                            <Nav.Link href={'/login'}>Login</Nav.Link>
                            <Nav.Link href={'/register'}>Register</Nav.Link>
                        </>
                }
            </Nav>
            {localStorage.getItem('user-info') ?
            <Nav>
                <NavDropdown title={user && user.Login}>
                    <NavDropdown.Item onClick={logout}>
                        Logout
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>
                : null}
        </Navbar>
        <Container>
            {props.children}
        </Container>
    </>
}

export default Layout;