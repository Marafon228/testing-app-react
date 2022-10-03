import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useRef} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function AddProduct(){

    const ProductName = useRef("");
    const ProductDescription = useRef("");
    const ProductPrice = useRef("");
    const ProductImage = useRef("");


    const navigate = useNavigate();

    function addProductHandler(){
        var payload = {
            Name: ProductName.current.value,
            Description: ProductDescription.current.value,
            Price: ProductPrice.current.value,
            Image: ProductImage.current.value,
        }
        axios.post("http://192.168.0.101:3310/api/Products/GetProducts",payload)//POST запрос
            .then((response)=>{
                navigate("/");
            })
    }

    return<>
        <legend>Add a new product</legend>
        <Form>
            <Form.Group className="mb-3" controlId="formProductName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" ref={ProductName}/>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formProductDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text"  ref={ProductDescription}/>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formProductPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control type="integer"  ref={ProductPrice}/>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formProductImage">
                <Form.Label>Image</Form.Label>
                <Form.Control type="Image"  ref={ProductImage}/>

            </Form.Group>


            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </>;
}


export default AddProduct;