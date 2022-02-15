import React from 'react';
import { MDBBtn, MDBCardTitle ,MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

export default function Subtotal({ cartCount, itemQty, itemName, children }) {
  return (
    <MDBListGroup className='mt-3'>
      <MDBListGroupItem>
          
                <MDBCardTitle>Cart has ({cartCount}) items</MDBCardTitle>
         
        </MDBListGroupItem>
        <MDBListGroupItem>
            {children}

        </MDBListGroupItem>
        
      <MDBListGroupItem><MDBBtn>Proceed to Checkout</MDBBtn></MDBListGroupItem>
    </MDBListGroup>
  );
}