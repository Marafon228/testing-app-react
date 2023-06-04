import axios from "axios";
import {useEffect, useState} from "react";
import {Card, Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import {IP} from "../const/global"


function ShopEnterprise(props) {

    const navigate = useNavigate();



    const [shop, setShop] = useState([])

    useEffect(()=>
    {
        axios.get(IP + "/api/Enterprises/GetEnterpris")
            .then((response)=>{
                setShop((existingData)=>{
                        return response.data;
                    }
                )
            })

    },[])


    return <>
        {/*<Row>
            <Col md={{ span: 4, offset: 4}}>
                <Button variant="primary" type="button" onClick={()=> {navigate("/view-product");}}>
                    View product
                </Button>
            </Col>
        </Row>*/}
        <br/>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/1.jpg?text=First slide&bg=373940"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/2.jpg?text=Second slide&bg=282c34"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/3.jpg?text=Third slide&bg=20232a"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        <br/>

        <Row xs={1} md={3} className="g-4">
            {shop.map((sp) => (
                <Col key={sp.id}>
                    <Card>
                        {/*<Card.Img variant={"top"} src = {sp.Image((im)=> {})} />*/}
                        {/*<Card.Img variant={"top"} src = {`data:image/png;base64,${sp.Image}`} width="100px" height="350px"/>*/}
                        {/*<Card.Img variant="top" styles={{borderRadius : '50%'}} src={`data:image/${sp.Image};base64,${encodeBase64(sp.Image)}`} />*/}
                        {/*<Card.Img variant="top" src={encodeBase64(sp.Image)}  />*/}
                        <Card.Body>
                            <Card.Title>{sp.Id}</Card.Title>
                            <Card.Title>{sp.Name}</Card.Title>
                            {/*<Card.Text>
                                <b>Price:</b>{sp.Price}
                            </Card.Text>*/}
                            {/*<Button variant="primary" type="button" onClick={()=> {navigate(`/update-product/${sp.Id}`);}}>
                                Edit
                            </Button>*/}
                            <Button variant="primary" type="button" onClick={()=> {navigate(`/view-product/${sp.Id}`);}}>
                                View product
                            </Button>

                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </>;
}

export default ShopEnterprise;