import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import CartCards from "./CartCards";
import Subtotal from "./Subtotal";
import { adjustQty, removeFromCart } from "../redux/actions/shopping-actions";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";


export default function CartScreen() {
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.shop.cart)


    useEffect(() => {
    }, [])



    const qtyChangeHandler = (id, qty) => {
        dispatch(adjustQty(id, qty));

    };

    const getCartCount = () => {
        return cart.reduce((qty, item) => Number(item.qty) + qty, 0);
    }

    const getItemPrice = (qty) => {
        const price = Number(59.99 * qty)
        return (
           price
        )
    } 

    const getCartSubTotal = () => {
        return cart.reduce((price, item) => price + 59.99 * item.qty, 0).toFixed(2);
    }


    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };


    return (

        <MDBContainer data-aos='fade-in' className="mb8">
            <MDBRow>
            <MDBCol md='7'>
                <h2 className='mt-3'>Shopping Cart</h2>

                {cart.length === 0 ? (
                    <div>
                        Your Cart Is Empty <Link to="/">Go Back</Link>
                    </div>
                ) : (
                    cart.map((game) => (
                        <CartCards
                            key={game.id}
                            gameID={game.id}
                            title={game.name}
                            src={game.box_art_url}
                            qty={game.qty}
                            qtyChangeHandler={(e) => qtyChangeHandler(game.id, e.target.value)}
                            removeFromCartHandler={() => removeFromCartHandler(game.id)}
                        />
                    ))
                )}
            </MDBCol>
            <MDBCol className="md-5">
            <h2 className='mt-3'>Checkout</h2>
                <Subtotal 
                cartCount={getCartCount()}
                >
                    <div className="p-2 border-bottom border-dark">
                    {cart.map((item => {
                        return (
                            <>
                            <p>{item.name} * {item.qty} = ${getItemPrice(item.qty)}</p>
                            </>
                        )
                    }))}
                    </div>
                    <p className='p-2'>Total = ${getCartSubTotal()}</p>
                </Subtotal>
            </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}