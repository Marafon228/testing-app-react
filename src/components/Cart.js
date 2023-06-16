import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { addToCart, removeToCart } from "../redux/action";
const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartData = useSelector((state) => state.cartData);
    let productCount = {};
    const uniqueProducts = cartData.filter((item, index, self) =>
            index === self.findIndex((t) => (
                t.Id === item.Id
            ))
    );
    console.warn("Данные корзины = "+cartData)
    if (cartData) {
        cartData.forEach(item => {
            if (productCount[item.Id]) {
                productCount[item.Id]++;
            } else {
                productCount[item.Id] = 1;
            }
        });

        let amount = cartData.length && cartData.map(item => item.Price).reduce((prev, next) => prev + next);
        console.warn(amount);
    }
    return (
        (cartData == null || cartData == [] || cartData == 0) ?
            <div>
                <h1>Корзина</h1>
                <p>Корзина пуста</p>
            </div> :
            <div>
                <h1>Корзина</h1>
                <Row xs={1} md={3} className="g-4">
                    {uniqueProducts.map((sp) => (
                        <Col key={sp.Id.unique}>
                            <Card>
                                <Card.Img variant={"top"} src={`data:image/png;base64,${sp.Image}`} width="100px" height="350px" />
                                <Card.Body>
                                    <Card.Title>{sp.Id}</Card.Title>
                                    <Card.Title>{sp.Name}</Card.Title>
                                    <Card.Text>
                                        <b>Price:</b> {sp.Price}
                                    </Card.Text>
                                    <Card.Text>
                                        <b>Количество:</b> {productCount[sp.Id] || 0}
                                    </Card.Text>
                                    <Button variant="primary" type="button" onClick={() => dispatch(addToCart(sp))}>
                                        +
                                    </Button>
                                    <Button variant="primary" type="button" onClick={() => dispatch(removeToCart(sp.Id))}>
                                        -
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                    <Link id={'goOrder'}  to="/order">Заказать</Link>
                </Row>
            </div>
    );
}
export default Cart;
