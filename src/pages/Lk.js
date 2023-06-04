import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {IP} from "../const/global"

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import Table from 'react-bootstrap/Table';


import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import axios from "axios";
import Button from "react-bootstrap/Button";

//import Sonnet from '../../components/Sonnet';

function Lk(props) {
    const navigate = useNavigate();
    let user = JSON.parse(localStorage.getItem('user-info'))


    const [User, setUser] = useState([])

    useEffect(()=>
    {
        axios.get(`http://192.168.0.101:3310/api/Users/GetAllUser`)
            .then((response)=>{
                setUser((existingData)=>{
                        return response.data;
                    }
                )
            })

    },[])



    const [Order, setOrder] = useState([])

    useEffect(()=>
    {
        axios.get(IP + `/api/Orders/GetOrdersFromUserId?id=${user.Id}`)
            .then((response)=>{
                setOrder((existingData)=>{
                        return response.data;
                    }
                )
            })

    },[])

    const [OrdersEmployee, setOrdersEmployee] = useState([])

    useEffect(()=>
    {
        axios.get(IP + `/api/Orders/GetOrdersFromUserIdForEmployee`)
            .then((response)=>{
                setOrdersEmployee((existingData)=>{
                        return response.data;
                    }
                )
            })

    },[])


    return (
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3">


            <Tab eventKey="profile" title="Профиль">

                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Имя
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue={user.FirsName} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Фамилия
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue={user.MidleName} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Отчество
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue={user.LastName} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Логин
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue={user.Login} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue={user.Email} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Телефон
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue={user.Phone} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Адрес
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue={user.Adress} />
                        </Col>
                    </Form.Group>




                    {/*<Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>*/}
                </Form>

            </Tab>

            {
                user.Role === 'Менеджер' ?
                    <Tab eventKey="users" title="Пользователи"> {/* У админа */}
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Middle Name</th>
                                <th>Last Name</th>
                                <th>Login</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>IdRole</th>

                            </tr>
                            </thead>
                            <tbody>
                            {
                                User.map((user, index) =>
                                    <tr>
                                        <td>{index}</td>
                                        <td>{user.FirsName}</td>
                                        <td>{user.MiddleName}</td>
                                        <td>{user.LastName}</td>
                                        <td>{user.Login}</td>
                                        <td>{user.Adress}</td>
                                        <td>{user.Phone}</td>
                                        <td>{user.Email}</td>
                                        <td>{user.IdRole}</td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </Table>
                    </Tab>
                    : null
            }



            <Tab eventKey="order" title="Мои заказы"> {/* У клиента */}
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Описание</th>
                        <th>Дата заказа</th>
                        <th>Статус</th>
                        <th>Сумма</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        Order.map((or, index) =>
                            <tr key={or.id}>
                                <td>{index}</td>
                                <td>{or.Description}</td>
                                <td>{or.Date}</td>
                                <td>{or.Status}</td>
                                <td>{or.OverPrice}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
            </Tab>

            {
                user.Role === 'Сотрудник' ?

                    <Tab eventKey="orders" title="Заказы клиентов"> {/* У курьера */}
                        <label>Свободные заказы </label>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Описание</th>
                                <th>Дата заказа</th>
                                <th>Статус</th>
                                <th>Сумма</th>
                                <th>Действие</th>

                            </tr>
                            </thead>
                            <tbody>
                            {
                                OrdersEmployee.map((order, index)=>


                                    <tr>
                                        <td>{index}</td>
                                        <td>{order.Description}</td>
                                        <td>{order.Date}</td>
                                        <td>{order.Status}</td>
                                        <td>{order.OverPrice}</td>
                                        <td>
                                            <Link to={`/update-order/${order.Id}`}>
                                                Подробнее
                                            </Link>

                                        </td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </Table>
                    </Tab>


                    : null }

            {

                user.Role === 'Предприниматель' ?
                    <Tab eventKey="add_product" title="Добавить продукт">
                    <Row>
                        <Col md={{ span: 4, offset: 4}}>
                            <Button variant="primary" type="button" onClick={()=> {navigate("/add-product");}}>
                                Add a product
                            </Button>
                        </Col>
                    </Row>
                    </Tab>: null}



        </Tabs>
    );
}

export default Lk;