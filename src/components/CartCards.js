import React, {useEffect} from 'react';
import { MDBBtn, MDBIcon, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function CartCards({ qty, title, src, removeFromCartHandler, qtyChangeHandler }) {



    useEffect(() => {
        console.log('cart games', qty)
    }, [])
  return (

    
    <MDBCard className='mt-3'>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src={src} alt='...' fluid />
        </MDBCol>
        <MDBCol md='4'>
          <MDBCardBody>
            <MDBCardTitle>{title}</MDBCardTitle>
            <MDBCardText>
              <small className='text-muted'>Price is 59.99</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
        <MDBCol md='4'>
            <div className='p-4 h-100 d-flex justify-content-end'>
                <div className='d-flex flex-column'>
                <MDBIcon onClick={removeFromCartHandler} size='3x'fas icon='trash-alt'></MDBIcon>
            <select value={qty} onChange={qtyChangeHandler} className='mt-3'>
                {[...Array(qty === 1 || 2 ? qty=10 : qty).keys()].map((x) => (
                    <option key={x+1}value={x+1}>
                        {x+1}
                    </option>
                ))}
            </select>
                </div>
            </div>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}