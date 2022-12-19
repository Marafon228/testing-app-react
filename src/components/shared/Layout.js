import { useSelector, useDispatch } from 'react-redux'
import { productSearch } from '../../redux/productAction'
//import Container from 'react-bootstrap/Container';
import {Navbar,Nav, NavDropdown,Container} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom'
import {emptyCart} from "../../redux/action";
import { saveState } from '../localStorage';
import {useEffect} from "react";





import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




/*function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Мои данные
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}*/


function Layout(props){
    //const [modalShow, setModalShow] = React.useState(false); //Modal



    const result = useSelector((state) => state.cartData);
    const dispatch = useDispatch();
    console.warn("data in header", result);
    localStorage.setItem("store",JSON.stringify(result))
    let user = JSON.parse(localStorage.getItem('user-info'))
    const navigate = useNavigate()
    function logout(){
        localStorage.clear();
        navigate('/')
    }
    async function SaveCart(){
        //await localStorage.setItem("store",JSON.stringify(result))

    }


    let store = JSON.parse(localStorage.getItem('store'))


    return<>
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Nav.Link href={'/'}>
                        Shop
                    </Nav.Link>


                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
            <Nav>
                {
                    localStorage.getItem('user-info') ?
                        <>
                            {/*<Nav.Link href={'/add'}>add prod</Nav.Link>
                            <Nav.Link href={'/update'}>update prod</Nav.Link>*/}

                            {/*<div className='search-box'>
                                <input type="text" onChange={(event) => dispatch(productSearch(event.target.value))} placeholder='Search Product' />
                            </div>*/}
                            <Link to="/cart"  >
                                <div className="cart-div">
                                    <span>{store.length}</span>
                                    <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />

                                </div>
                            </Link>
                            {/*<div>
                                <button >Save cart</button>
                            </div>*/}
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
                    <NavDropdown.Item href={'/lk'}>
                        Личный кабинет
                    </NavDropdown.Item>

                    {/*<NavDropdown.Item onClick={() => setModalShow(true)}>
                        Мои данные
                    </NavDropdown.Item>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}/>*/}


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


        <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>
        <p className="text-center mt-4 mb-4">Or right-aligned</p>
        <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>
    </>
}

export default Layout;
