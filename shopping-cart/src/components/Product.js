import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, fetchProducts } from "./actions/actions";
class Product extends Component {
    componentDidMount() {
        this.props.fetchProducts();
    }
    render() {
        const props = this.props;
        return (
            <div>
                <div>
                    {props.products.map(product => (
                        <div key={product.id}>
                            <h3>{product.name}</h3>
                            <span>{product.price}</span>
                            <button
                                onClick={() => {
                                    props.addToCart(product);
                                }}
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
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
