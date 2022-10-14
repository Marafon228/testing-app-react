import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useEffect, useRef} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

function UpdateProduct () {

    const ProductName = useRef("");
    const ProductDescription = useRef("");
    const ProductPrice = useRef("");
    const ProductImage = useRef("");


    const {id} = useParams();

    useEffect(()=>
    {
        axios.get(`http://localhost/api/Products/EditProduct/${id}`)
            .then((response)=> {
                ProductName.current.value = response.data.Name;
                ProductDescription.current.value = response.data.Description;
                ProductPrice.current.value = response.data.Price;
                ProductImage.current.value = response.data.Image;

            })

    },[]);


    function updateProductHandler(){

    }

    var viewArray = [];
    function inputImage(){
        var img = document.querySelector('#image')
        img.addEventListener('change', function() {
            var reader = new FileReader();

            reader.onload = function () {

                var arrayBuffer = new Uint8Array(reader.result);
                console.log(arrayBuffer);
                viewArray = Array.from(arrayBuffer);
            };
            reader.readAsArrayBuffer(this.files[0]);

        })

    }

    return<>

        <legend>Update product</legend>
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
                <Form.Control id="image" type="file" ref={ProductImage} onInput={inputImage} />


            </Form.Group>
            <Button variant="primary" type="button" onClick={updateProductHandler}>
                Submit
            </Button>

        </Form>
    </>
}

export default UpdateProduct;