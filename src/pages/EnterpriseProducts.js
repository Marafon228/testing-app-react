import axios from "axios";
import {useEffect, useState} from "react";
import {Card, Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useNavigate, useParams} from "react-router-dom";
import {productList} from "../redux/productAction";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeToCart} from "../redux/action";






function EnterpriseProducts(){

    const dispatch = useDispatch();
    let data = useSelector((state)=>state.productData);
    //let shop = useSelector((state)=>state.productData);
    console.warn("data in main component", data);


    const navigate = useNavigate();

    const [shop, setShop] = useState([])

    const {Id} = useParams();


   /* useEffect(()=>
    {
        //dispatch(productList())
        axios.get(`http://192.168.101.25:3310/api/Products/GetProductFromEnterpriseId?id=${Id}`)
            .then((response)=>{
                setShop((existingData)=>{
                        return response.data;
                    }
                )
            })

    },[])*/

    useEffect(()=>{
        dispatch(productList())
    },[])

    return<>
        <Row>
            <Col md={{ span: 4, offset: 4}}>
                <Button variant="primary" type="button" onClick={()=> dispatch(productList())}>
                    Add a product
                </Button>
            </Col>
        </Row>
        {/*<Row>
            <Col md={{ span: 4, offset: 4}}>
                <Button variant="primary" type="button" onClick={()=> {navigate("/add-product");}}>
                    Add a product
                </Button>
            </Col>
        </Row>*/}

        <Row xs={1} md={3} className="g-4">
            {data.map((sp) => (
                <Col key={sp.Id}>
                    <Card>
                        {/*<Card.Img variant={"top"} src = {sp.Image((im)=> {})} />*/}
                        <Card.Img variant={"top"} src = {`data:image/png;base64,${sp.Image}`} width="100px" height="350px"/>
                        {/*<Card.Img variant="top" styles={{borderRadius : '50%'}} src={`data:image/${sp.Image};base64,${encodeBase64(sp.Image)}`} />*/}
                        {/*<Card.Img variant="top" src={encodeBase64(sp.Image)}  />*/}
                        <Card.Body>
                            <Card.Title>{sp.Id}</Card.Title>
                            <Card.Title>{sp.Name}</Card.Title>
                            <Card.Text>
                                <b>Price:</b>{sp.Price}
                            </Card.Text>
                            <Button variant="primary" type="button" onClick={()=> dispatch(addToCart(sp))}>
                                Add to cart
                            </Button>
                            <Button variant="primary" type="button" onClick={()=> dispatch(removeToCart(sp.Id))}>
                                Remove to cart
                            </Button>
                            {/*<Button variant="primary" type="button" onClick={()=> {navigate(`/update-product/${sp.Id}`);}}>
                                Edit
                            </Button>*/}

                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </>;
}

export default EnterpriseProducts;