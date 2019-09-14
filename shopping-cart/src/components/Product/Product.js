import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Image, Button, Row, Col, Container, CardDeck, CardColumns } from "react-bootstrap";
import { addToCart, fetchProducts } from "../actions/actions";
class Product extends Component {
    componentDidMount() {
        this.props.fetchProducts();
    }
    render() {
        const props = this.props;
        // return (
        //     <div>
        //         <div>
        //             {props.products.map(product => (
        //                 <div key={product.id}>
        //                     <h3>{product.name}</h3>
        //                     <span>{product.price}</span>
        //                     <button
        //                         onClick={() => {
        //                             props.addToCart(product);
        //                         }}
        //                     >
        //                         Add to Cart
        //                     </button>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // );
        return (
            <section className='product'>
                <Container>
                    <Row className='justify-content-center '>
                        {props.products.map(product => (
                            <Col key={product.id} className='col-sm-12 col-md-6 col-lg-4 mb-4'>
                                <Card className='w-100'>
                                    <Image
                                        src={product.img}
                                        fluid
                                        style={{ width: "100%", height: "200px" }}
                                    />
                                    <Card.Body className='d-flex flex-column'>
                                        <Card.Title
                                            style={{
                                                width: "100%",
                                                textAlign: "center",
                                                textOverflow: "ellipsis",
                                                whiteSpace: "nowrap",
                                                overFlow: "hidden"
                                            }}>
                                            {product.name}
                                        </Card.Title>
                                        <Card.Title style={{ textAlign: "center" }}>
                                            {product.price}
                                        </Card.Title>
                                        <Button
                                            variant='primary'
                                            onClick={() => {
                                                props.addToCart(product);
                                            }}>
                                            Add to Cart
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        );
    }
}
const mapStateToProps = appState => {
    return { products: appState.products };
};

const mapActionsToProps = dispatch => {
    return {
        addToCart: product => {
            dispatch(addToCart(product));
        },
        fetchProducts: () => {
            dispatch(fetchProducts());
        }
    };
};

export default connect(
    mapStateToProps,
    mapActionsToProps
)(Product);
