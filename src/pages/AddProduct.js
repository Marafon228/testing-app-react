import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useRef} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {IP} from "../const/global"
import data from "bootstrap/js/src/dom/data";
/*import {FormLabel} from "react-bootstrap";*/
/*import {encodeBase64} from "tweetnacl-util";*/
/*import {type} from "@testing-library/user-event/dist/type";*/
/*import {Image, InputGroup} from "react-bootstrap";*/
/*import {encodeBase64} from "tweetnacl-util";*/
/*import canvas, {Canvas} from "canvas"*/



function AddProduct(){




    const ProductName = useRef("");
    const ProductDescription = useRef("");
    const ProductPrice = useRef("");
    const ProductImage = useRef("");
    const ProductEnterprise = useRef("");


    const navigate = useNavigate();

    let user = JSON.parse(localStorage.getItem('user-info'))
    let Enterprise = user['Enterprise'];
    if (user['Role'] !== 'Предприниматель'){
        navigate('/')
    }
    console.log(user['Enterprise'])


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

    /*function imgToArray(){
        document.querySelector('#inputImage').addEventListener('change', function() {

            var reader = new FileReader();
            reader.onload = function() {

                var arrayBuffer = new Uint8Array(reader.result);
                console.log(arrayBuffer);
            };
            reader.readAsArrayBuffer(this.files[0]);
        });
    }*/
    /*var imgOnClicks;

    function onClicks(){
        var img = document.querySelector('#image')
        img.addEventListener('change', function() {
            var reader = new FileReader();

            reader.onload = function () {

                var arrayBuffer = new Uint8Array(reader.result);
                imgOnClicks = arrayBuffer;
                console.log(arrayBuffer);
            };
            reader.readAsArrayBuffer(this.files[0]);
        })
    }*/

    function addProductHandler(){
        /*onClicks()*/
       /* imgToArray()*/

        /*console.log(typeof document.getElementById('inputImage'))*/

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
/*
        var p;
        var canvas = document.createElement("canvas");
        var img1=document.createElement("img");

        function getBase64Image(){
            p=document.getElementById("fileUpload").value;
            img1.setAttribute('src', p);
            canvas.width = img1.width;
            canvas.height = img1.height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img1, 0, 0);
            var dataURL = canvas.toDataURL("image/png");
            alert("from getbase64 function"+dataURL );
            return dataURL;
        }*/
        /*var dtURL = {
            getBase64Image
        };
        console.log(dtURL);*/

        /*document.querySelector('#ProductImage').addEventListener('change', function() {

            var reader = new FileReader();
            reader.onload = function() {

                var arrayBuffer = new Uint8Array(reader.result);
                console.log(arrayBuffer);
            };
            reader.readAsArrayBuffer(this.files[0]);
        });

        var reader = new FileReader(ProductImage.current.value);
        reader.onload = function () {
            var arrayBuffer = new Uint8Array(reader.result);
            console.log(arrayBuffer);
        }

*/

        /*imgInp.onchange = evt => {
            const [file] = imgInp.files
            if (file) {
                blah.src = URL.createObjectURL(file)
            }
        }*/


        /*const input = ProductImage
        input.type = "file";
        document.body.append(input);
        input.addEventListener("change", async event => {
            const ab = await input.files[0].arrayBuffer();
            const ui8a = new Uint8Array(ab);
            console.log("Uint8Array", ui8a);
        });*/

        /*var imgArray = async ()=> {
            const ab = await ProductImage.current.arrayBuffer();
            const ui8a = new Uint8Array(ab);
            console.log("Uint8Array", ui8a);
            return ui8a;
        }*/

        /*const reader = new FileReader();
        reader.readAsDataURL()
        reader.onload = function() {

            var arrayBuffer = new Uint8Array(reader.result);
            console.log(arrayBuffer);
        };
        reader.readAsArrayBuffer(this.files[0]);*/

        /*var file = this.refs.fileUpload.getInputDOMNode().files;*/

        /*var ArrayBufferImg = async (e)=> {
            const ab = await e.arrayBuffer();
            const ui8a = new Uint8Array(ab);
            console.log("Uint8Array", ui8a);
            return ui8a;
        }*/




        /*var arraBufferImage =  imageFile.addEventListener("change", async event => {
            const ab = await imageFile.files[0].arrayBuffer();
            const ui8a = new Uint8Array(ab);
            console.log("Uint8Array", ui8a);
        });*/

        /*var img = document.getElementById('image');*/
        /*img.addEventListener("change",  )*/
        var payload = {
            Name: ProductName.current.value,
            Description: ProductDescription.current.value,
            Price: ProductPrice.current.value,
            Image: viewArray,
            IdEnterprise: ProductEnterprise.current.value
            /*Image: ArrayBufferImg(document.getElementById('image'))*/

                /*async ()=> {
                const ab = await ProductImage.current.arrayBuffer();
                const ui8a = new Uint8Array(ab);
                console.log("Uint8Array", ui8a);
                return ui8a;
            }*/


            /*Image: ProductImage.current*/


            /*Image: dtURL*/

            /*Image: 'data:image/png;base64,${ProductImage.current.value}'*/
            /*Image: decodeBase64(ProductImage.current).toString(),*/
            /*Image: encodeBase64(ProductImage.current.value),*/
            /*Image: createCanvas(),*/

        }
        /*var reader = new FileReader();
        reader.readAsDataURL(imgInForm);*/


        /*console.log(imgInForm);
        console.log(ArrayBufferImg);
        console.log(ProductImage);*/
        /*console.log(imgArray);*/
        /*imageFile.files[0].arrayBuffer().then(resp=>{
            let ui8 = new Uint8Array(resp);
            let rawData = [...ui8];
            console.log(rawData);
        });*/
       /* console.log(imgOnClicks)*/
        /*console.log(imageFile)
        console.log(ProductImage.current)
        console.log(imgInProductImage)*/
        /*console.log(arraBufferImage)*/
        /*console.log(img)*/
        /*console.log(immge)*/
        console.log(typeof payload.Image);
        console.log(payload.Image);
        axios.post(IP + "/api/Products/AddProductWeb",payload)//POST запрос
            .then((response)=>{
                navigate("/");
            });
       /* imgArray = new FileReader()
        imgArray.onload = function() {

            var arrayBuffer = new Uint8Array(imgArray.result);
            console.log(arrayBuffer);
        };
        imgArray.readAsArrayBuffer(this.files[0]);*/



        /*
        *  var reader = new FileReader();
            reader.onload = function() {

                var arrayBuffer = new Uint8Array(reader.result);
                console.log(arrayBuffer);
            };
            reader.readAsArrayBuffer(this.files[0]);
        *
        * */


    }
    /*function MyComponent(): JSX.Element {
        const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>): void => {
            const files = Array.from(e.target.files)
            console.log("files:", files)
        }
    }*/

    /*var setImgArray;
    var imgArray;*/



    /*function imgToArray(e){
        var imgInForm;
        imgInForm = e.target.files[0];
        let fileReader = new FileReader()
        fileReader.onload = e= {
            // ATOB is a global method
            // Base64 must be converted to characters
            let bytes = atob(e.target.result.split(', ') [1])
            download(bytes)
        }
        fileReader.readAsDataURL(file)


    }
*/
    /*var imgInForm;

    function onImageChange(event) {
        const imageFile = URL.createObjectURL(event.target.files[0]);
        createImage(imageFile, convertImage);
    }

    function createImage(imageFile, callback) {
        const image = document.createElement('img');
        image.onload = () => callback(image);
        image.setAttribute('src', imageFile);
    }

    function convertImage(image) {
        const canvas = drawImageToCanvas(image);
        const ctx = canvas.getContext('2d');

        let result = [];
        for (let y = 0; y < canvas.height; y++) {
            result.push([]);
            for (let x = 0; x < canvas.width; x++) {
                let data = ctx.getImageData(x, y, 1, 1).data;
                result[y].push(data[0]);
                result[y].push(data[1]);
                result[y].push(data[2]);
            }
        }

        const arrayCode = `
    #define IMAGE_WIDTH ${canvas.width}
    #define IMAGE_HEIGHT ${canvas.height}
    #define BYTES_PER_PIXEL 3
    uint8_t imageData[IMAGE_HEIGHT][IMAGE_WIDTH * BYTES_PER_PIXEL] = ${convertArray(result)};
  `;
        document.getElementById('result').innerHTML = arrayCode;
    }

    function drawImageToCanvas(image) {
        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        canvas.getContext('2d').drawImage(image, 0, 0, image.width, image.height);
        return canvas;
    }

    function convertArray(array) {
        return JSON.stringify(array).replace(/\[/g, '{').replace(/\]/g, '}');
    }*/

    /*var imageFile;*/
    /*console.log(new ArrayBuffer(imageFile));*/
    /*var imgInProductImage;*/

    /*const blobToArrayBuffer = require("blob-to-arraybuffer");

    blobToArrayBuffer(imageFile).then(buffer => {
        // hurrah!
    });

    fetch(imageFile)
        .then(res => res.blob)
        .then(blobToArrayBuffer)
        .then(buffer => {

        });
*/


    /*imageFile.files[0].arrayBuffer().then(resp=>{
        let ui8 = new Uint8Array(resp);
        let rawData = [...ui8];
    })*/

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
    return (
        <>

        <legend>Добавить новый продукт</legend>
        <Form>

            <Form.Group className="mb-3" controlId="formProductName">
                <Form.Label>Наименование</Form.Label>
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
                {/*<Form.Control type="file" ref={ProductImage} onChange={(e)=> { console.log(e.target.files)}}/>*/}
                {/*<Form.Control value={imgArray} type="file" ref={ProductImage} onChange={(e)=> setImgArray(e.target.value)}/>*/}
                {/*<Form.Control id="image" type="file" ref={ProductImage} onChange={()=> imgInForm = document.getElementById('image')}/>*/}
                {/*<Form.Control id="image" type="file" ref={ProductImage} onChange={()=> imgInForm = document.getElementById('image')}/>*/}
                {/*<Form.Control id="image" type="file" ref={ProductImage} onChange={(e) => imageFile = e.target.files} />*/}
                <Form.Control id="image" type="file" ref={ProductImage} onInput={inputImage} />



                {/*<Form.Control id="image" type="file" ref={ProductImage} onChange={(e) => {
                    imageFile = e.target.files
                    imageFile.addEventListener("change", async event => {
                        const ab = await imageFile.files[0].arrayBuffer();
                        const ui8a = new Uint8Array(ab);
                        imgInProductImage = ui8a;
                        console.log("Uint8Array", ui8a);
                    });

                }} />*/}
                {/*<Form.Control id="image" type="file" ref={ProductImage} onChange={async ()=> {
                    const ab = await imgInForm.arrayBuffer();
                    const ui8a = new Uint8Array(ab);
                    console.log("Uint8Array", ui8a);
                    return ui8a;
                    ;
                }}/>*/}

            </Form.Group>

            <Form.Group>
                <Form.Label>Предприятие</Form.Label>
                <Form.Select aria-label="Default select example">
                    {/*<option>Select Enterprise</option>*/}
                    {
                        Enterprise.map((Enter)=>(<option value={Enter.IdEnterprise} ref={ProductEnterprise}>{Enter.NameEnterprise}</option>))
                    }
                    {/*<option value="1" ref={ProductEnterprise}>One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>*/}
                </Form.Select>
            </Form.Group>
            {/*<Form.Group>
                <Form.Label htmlFor="fileUpload" styles={{ cursor: "pointer" }}>
                    <Form.Control
                        id="fileUpload"
                        type="file"
                    />
                </Form.Label>
            </Form.Group>*/}



            <br/>
            <Button variant="primary" type="button" onClick={addProductHandler}>
                Сохранить
            </Button>

        </Form>
    </>
    );
}


export default AddProduct;