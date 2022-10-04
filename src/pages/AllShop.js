import axios from "axios";
import {useEffect, useState} from "react";
import {Card, Col, Row} from "react-bootstrap";
import {encodeBase64} from "tweetnacl-util";
import ImageUploading from 'react-images-uploading';




function AllShop(){




    const [shop, setShop] = useState([])

    useEffect(()=>
    {
        axios.get("http://192.168.0.101:3310/api/Products/GetProducts")
            .then((response)=>{
                setShop((existingData)=>{
                        return response.data;
                    }
                )
            })

    },[])




    return<>
        <Row xs={1} md={3} className="g-4">
            {shop.map((sp) => (
                <Col key={sp.id}>
                    <Card>

                            <Card.Img variant="top" src={encodeBase64(sp.Image)} />

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