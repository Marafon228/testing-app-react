import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useRef} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
/*import {Image, InputGroup} from "react-bootstrap";*/
/*import {encodeBase64} from "tweetnacl-util";*/
/*import canvas, {Canvas} from "canvas"*/





function AddProduct(){



    const ProductName = useRef("");
    const ProductDescription = useRef("");
    const ProductPrice = useRef("");
    const ProductImage = useRef("");


    const navigate = useNavigate();


    /*function uploadImage () {
        (":file").change(function () {
            if (this.files && this.files[0]) {
                var reader = new FileReader();

                reader.onload = imageIsLoaded;
                reader.readAsDataURL(this.files[0]);
            }
        });
    }*/

    /*function imageIsLoaded(e) {
        ('#myImg').attr('src', e.target.result);
        ('#yourImage').attr('src', e.target.result);
    }*/

    function addProductHandler(){

        /*var base64String = "";
        function Uploaded() {
            var file = ProductImage.current.value;
            var reader = new FileReader();
            reader.onload = function () {
                base64String = reader.result.replace("data:", "")
                    .replace(/^.+,/, "");
                imageBase64Stringsep = base64String;
            }
            reader.readAsDataURL(file);
        }*/
        /*function display() {
            console.log("Base64String about to be printed");
            alert(base64String);
        }*/
        /*const toDataUrl = Canvas.toDataURL(ProductImage.current)*/
        var payload = {

            Name: ProductName.current.value,
            Description: ProductDescription.current.value,
            Price: ProductPrice.current.value,

            /*Image: 'data:image/png;base64,${ProductImage.current.value}'*/
            /*Image: decodeBase64(ProductImage.current).toString(),*/
            /*Image: encodeBase64(ProductImage.current.value),*/
            /*Image: createCanvas(),*/

        }
        console.log(payload.Image);
        axios.post("http://192.168.100.123:3310/api/Products/AddProductWeb",payload)//POST запрос
            .then((response)=>{
                navigate("/");
            });
    }

    return (
        <>
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
                <Form.Control type="file"  ref={ProductImage} Form/>



            </Form.Group>


            <Button variant="primary" type="button" onClick={addProductHandler}>
                Submit
            </Button>
        </Form>
    </>
    );
}


export default AddProduct;