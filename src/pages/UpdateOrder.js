import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useEffect, useRef} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

function UpdateOrder () {

    const OrderName = useRef("");
    const OrderDescription = useRef("");
    const OrderDate = useRef("");
    const OrderIdUser = useRef("");
    const OrderIdStatus = useRef("");
    const OrderOverPrice = useRef("");
    const OrderCount = useRef("");


    const navigate = useNavigate();



    const {Id} = useParams();

    let img;
    let img1;

    useEffect(()=>
    {
        axios.get(`http://192.168.0.101:3310/api/Orders/GetOrderFromId?id=${Id}`)
            .then((response)=> {
                OrderName.current.value = response.data.Name;
                OrderDescription.current.value = response.data.Description;
                OrderDate.current.value = response.data.Date;
                OrderIdUser.current.value = response.data.IdUser;
                OrderIdStatus.current.value = response.data.IdStatus;
                OrderOverPrice.current.value = response.data.OverPrice;
                OrderCount.current.value = response.data.Count;

            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
    },[]);
    /*console.log(img)
    console.log(ProductImage.current.value)
    console.log(ProductName.current.value)*/
    function updateProductHandler(){
        var payload = {
            Id: Id,
            Name: OrderName.current.value,
            Description: OrderDescription.current.value,
            Date: OrderDate.current.value,
            IdUser: OrderIdUser.current.value,
            IdStatus: OrderIdStatus.current.value,
            OverPrice: OrderOverPrice.current.value,
            Count: OrderCount.current.value,


        };
        axios.put(`http://192.168.0.101:3310/api/Orders/EditOrder?id=${Id}`, payload)
            .then((response)=>{
                navigate("/lk");
            });
    }



    return<>

        <legend>Update order</legend>
        <Form>

            <Form.Group className="mb-3" controlId="formOrderName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" ref={OrderName} disabled/>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formOrderDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text"  ref={OrderDescription} disabled/>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formOrderDate">
                <Form.Label>Date</Form.Label>
                <Form.Control type="datetime"  ref={OrderDate} disabled/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formOrderIdUser" >
                <Form.Label>IdUser</Form.Label>
                <Form.Control type="integer"  ref={OrderIdUser} disabled/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formOrderIdStatus">
                <Form.Label>Status</Form.Label> {/* IdStatus */}
                <Form.Select aria-label="Default select example" ref={OrderIdStatus}>
                    <option value="1">Новый</option>
                    <option value="2">Закрыт</option>
                </Form.Select>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formOrderOverPrice">
                <Form.Label>OverPrice</Form.Label>
                <Form.Control type="decimal"  ref={OrderOverPrice} disabled/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formOrderCount">
                <Form.Label>Count</Form.Label>
                <Form.Control type="integer"  ref={OrderCount} disabled/>
            </Form.Group>

            <Form.Group>
                <Button variant="primary" type="button" onClick={updateProductHandler}>
                    Submit
                </Button>

            </Form.Group>



        </Form>
    </>
}

export default UpdateOrder;