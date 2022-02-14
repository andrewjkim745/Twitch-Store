import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect} from 'react';
import CartCards from "./CartCards";
import { addToCart } from "../redux/actions/shopping-actions";
import { Link } from "react-router-dom";
import { MDBContainer } from "mdb-react-ui-kit";


export default function CartScreen() {
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.shop.cart)

    const { cartItems } = cart;
    
    
    useEffect(() => {
        console.log('cart screen', cart)
    }, [])

    

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty));
      };



    return (
        <MDBContainer>
        <h2 className='mt-3'>Shopping Cart</h2>

        {cart.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            
            cart.map((game) => (
            
              <CartCards
                key={game.id}
                title={game.name}
                src={game.box_art_url}
                qty={game.qty}
                qtyChangeHandler={(e)=> qtyChangeHandler(game.id, e.target.value)}
              />
            ))
          )}
      </MDBContainer>
    )
}