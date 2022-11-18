import { useSelector, useDispatch } from 'react-redux'
import { productSearch } from '../../redux/productAction'
//import Container from 'react-bootstrap/Container';
import {Navbar,Nav, NavDropdown,Container} from 'react-bootstrap';
import { useNavigate} from 'react-router-dom'
import {emptyCart} from "../../redux/action";
import { saveState } from '../localStorage';
import {useEffect} from "react";

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
    async function SaveCart(){
        await localStorage.setItem("store",JSON.stringify(result))

    }


    let store = localStorage.getItem("store")


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
                            {/*<Nav.Link href={'/add'}>add prod</Nav.Link>
                            <Nav.Link href={'/update'}>update prod</Nav.Link>*/}

                            <div className='search-box'>
                                <input type="text" onChange={(event) => dispatch(productSearch(event.target.value))} placeholder='Search Product' />
                            </div>
                            <Nav.Link href={'/cart'} onClick={SaveCart} >
                                <div className="cart-div">
                                    <span>{result.length}</span>
                                    <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />

                                </div>
                            </Nav.Link>
                            <div>
                                <button >Save cart</button>
                            </div>
                            <div className='search-box'>
                                <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
                            </div>

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
