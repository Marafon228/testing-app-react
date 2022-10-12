import axios from "axios";
import {useEffect, useState} from "react";
import {Card, Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";






function AllShop(){


    const navigate = useNavigate();

    const [shop, setShop] = useState([])



    useEffect(()=>
    {
        axios.get("http://localhost/api/Products/GetProducts")
            .then((response)=>{
                setShop((existingData)=>{
                        return response.data;
                    }
                )
            })

    },[])




    return<>
        <Row>
            <Col md={{ span: 4, offset: 4}}>
                <Button variant="primary" type="button" onClick={()=> {navigate("/add-product");}}>
                    Add a product
                </Button>
            </Col>
        </Row>

        <Row xs={1} md={3} className="g-4">
            {shop.map((sp) => (
                <Col key={sp.id}>
                    <Card>
                        {/*<Card.Img variant={"top"} src = {sp.Image((im)=> {})} />*/}
                        <Card.Img variant={"top"} src = {`data:image/png;base64,${sp.Image}`} width="100px" height="350px"/>
                        {/*<Card.Img variant="top" style={{borderRadius : '50%'}} src={`data:image/${sp.Image};base64,${encodeBase64(sp.Image)}`} />*/}
                        {/*<Card.Img variant="top" src={encodeBase64(sp.Image)}  />*/}
                        <Card.Body>
                            <Card.Title>{sp.Name}</Card.Title>
                            <Card.Text>
                                <b>Price:</b>{sp.Price}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </>;
}

export default AllShop;