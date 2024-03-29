import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useEffect, useRef} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {IP} from "../const/global";

function UpdateProduct () {

    const ProductName = useRef("");
    const ProductDescription = useRef("");
    const ProductPrice = useRef("");
    const ProductImage = useRef("");
    const CurrentProductImage = useRef("");

    const navigate = useNavigate();



    const {Id} = useParams();

    let img;
    let img1;

    useEffect(()=>
    {
        axios.get(IP + `/api/Products/GetProductFromId?id=${Id}`)
            .then((response)=> {
                ProductName.current.value = response.data.Name;
                ProductDescription.current.value = response.data.Description;
                ProductPrice.current.value = response.data.Price;
                //ProductImage.current.value = response.data.Image;// Если убрать preview будет видно
                //ProductImage.current.value = `data:image/png;base64,${response.data.Image}`
                CurrentProductImage.current.value = response.data.Image;
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
            Name: ProductName.current.value,
            Description: ProductDescription.current.value,
            Price: ProductPrice.current.value,
            Image:viewArray

        };
        axios.put(`http://192.168.0.101:3310/api/Products/EditProduct?id=${Id}`, payload)
            .then((response)=>{
                navigate("/");
            });
    }

    var viewArray;
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
        let imgInp = document.getElementById('image')
        imgInp = new Image();
        imgInp.onchange = evt => {
            const [file] = imgInp.files
            if (file) {
                let bl = document.getElementById('blah');
                bl.src = URL.createObjectURL(file)
            }
        }
        /*imgInp.onchange = evt => {
            const [file] = imgInp.files
            if (file) {
                blah.src = URL.createObjectURL(file)
            }
        }*/
    }
    function viewImg(){
        console.log(img1)
        console.log(img)
        console.log(CurrentProductImage.current.value)
        img = document.getElementById('blah')
        img.src = `data:image/png;base64,${CurrentProductImage.current.value}`;
    }
    /*function loadImage(){
        var img = new Image()
        img.onload = function() { alert("Height: " + this.height); };
        img = document.getElementById('blah1');
        img.src = `data:image/png;base64,CurrentProductImage.current.value`;
    }*/

    return<>

        <legend>Обновление продукта</legend>
        <Form>

            <Form.Group className="mb-3" controlId="formProductName">
                <Form.Label>Название</Form.Label>
                <Form.Control type="text" ref={ProductName}/>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formProductDescription">
                <Form.Label>Описание</Form.Label>
                <Form.Control type="text"  ref={ProductDescription}/>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formProductPrice">
                <Form.Label>Цена</Form.Label>
                <Form.Control type="integer"  ref={ProductPrice}/>

            </Form.Group>
            <Form.Group className="mb-3" controlId="formProductImage">
                <Form.Label>Фото</Form.Label>
                {/*<Form.Control id="image" type="file" ref={ProductImage} onInput={inputImage} />*/}
                <Form.Control id="image" type="file" ref={ProductImage} onInput={inputImage} />
            </Form.Group>
            <Form.Group>
                <Button variant="primary" type="button" onClick={viewImg} >
                    Посмотреть превью фото
                </Button>
            </Form.Group>
            <Form.Group>

                <Form.Label >Превью фото</Form.Label>
            </Form.Group>

            <Form.Group>
                <img id="blah" ref={CurrentProductImage} src={`data:image/png;base64,${CurrentProductImage.current.value}`} width="350px" height="350px"/>
            </Form.Group>
            <Form.Group>
                <Button variant="primary" type="button" onClick={updateProductHandler}>
                    Сохранить
                </Button>

            </Form.Group>



        </Form>
    </>
}

export default UpdateProduct;