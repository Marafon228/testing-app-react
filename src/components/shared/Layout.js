import { useSelector, useDispatch } from 'react-redux'
import { productSearch } from '../../redux/productAction'
//import Container from 'react-bootstrap/Container';
import {Navbar,Nav, NavDropdown,Container} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom'
import {emptyCart} from "../../redux/action";
import { saveState } from '../localStorage';
import {useEffect} from "react";
import logo from '../logo/logo.png'; // Путь к изображению логотипа




import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const footerStyle = {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '5%',
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
    padding: '10px 0',
};
const transparent =  {
    background: 'none',
    border: 'none',
}



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
    if (store == null){
        store = []
    }


    return<>
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Nav.Link href={'/'}>
                        <img
                            src={logo} // Путь к изображению логотипа
                            width="120"
                            height="90"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />{' '}
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
                                <button style={transparent} onClick={() => dispatch(emptyCart())}>Очистить корзину</button>
                            </div>

                        </>
                        :
                        <>
                            <Nav.Link href={'/login'}>Логин</Nav.Link>
                            <Nav.Link href={'/register'}>Регистрация</Nav.Link>
                        </>
                }
            </Nav>
            {localStorage.getItem('user-info') ?
            <Nav style={{marginRight:70}}>
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
                        Выйти
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>
                : null}
        </Navbar>
        <Container>
            {props.children}
        </Container>

        <div style={footerStyle}>
        <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/">Главная</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">О нас</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Контакты</Nav.Link>
            </Nav.Item>
        </Nav>

        {/*<Nav className="justify-content-end" activeKey="/home">
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
        </Nav>*/}
        </div>
    </>
}

export default Layout;
