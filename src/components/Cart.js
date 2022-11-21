import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {Card, Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {addToCart, removeToCart} from "../redux/action";
import {forEach} from "react-bootstrap/ElementChildren";

const Cart = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const cartData = useSelector((state) => state.cartData);
    let amount = cartData.length && cartData.map(item=>item.Price).reduce((prev, next)=>prev+next)
    console.warn(amount)

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }


    /*function unique(array) {
        return $.grep(array, function(el, index) {
            return index == $.inArray(el, array);
        });
    }*/

    const filter = (Id, arr) => arr.filter(s => s.Id === Id);

    return (<div>
        {/*<Link id={'goBack'} onClick={navigate(-1)} >Go to Products Link</Link>*/}
        <h1>Cart Page</h1>
        <div className="cart-page-container">
            <table>
                <tr>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Image</td>
                    <td>Count</td>
                </tr>
                {
                    cartData.map((item) => <tr key={item.key}>
                        <td>{item.Name}</td>
                        <td>{item.Price}</td>
                        <td><img src = {`data:image/png;base64,${item.Image}`} width="250px" height="350px"></img></td>
                        <td>{

                            }</td>
                    </tr>)
                }
            </table>
            <div className="price-details">
                <div className="adjust-price"><span>Amount</span><span>{amount}</span></div>
                <div className="adjust-price"><span>Discount</span><span>{amount/10}</span></div>
                <div className="adjust-price"><span>Tax</span><span>000</span></div>
                <div className="adjust-price"><span>Total</span><span>{amount-(amount/10)}</span></div>

            </div>
        </div>

        <Row xs={1} md={3} className="g-4">
            {cartData.map((sp) => (
                /*<Col key={sp.unique}>*/
                /*<Col key={filter(sp.Id,sp)}>*/
                <Col key={sp.Id.unique}>
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
                            <Card.Text>
                                <b>Количество:</b>{cartData.length}
                                <br/>
                                <b>Количество:</b>{sp.Id}
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
            ))
            }
            <Link id={'goOrder'} onClick={navigate("/order")} >Order</Link>
        </Row>
    </div>)
}

export default Cart;