import { useSelector, useDispatch } from 'react-redux'
import { productSearch } from '../redux/productAction'
import Container from 'react-bootstrap/Container';
import {Navbar,Nav, NavDropdown} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom'

function Layout(props){
    const result = useSelector((state) => state.cartData);
    const dispatch = useDispatch();
    console.warn("data in header", result);
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

                            <div className='search-box'>
                                <input type="text" onChange={(event) => dispatch(productSearch(event.target.value))} placeholder='Search Product' />
                            </div>
                            <Link to="/cart">
                                <div className="cart-div">
                                    <span>{result.length}</span>
                                    <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />
                                </div>
                            </Link>
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
