import React, {useEffect} from 'react';
import { MDBBtn, MDBIcon, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
export default function CartCards({ gameID, qty, title, src, removeFromCartHandler, qtyChangeHandler }) {



    useEffect(() => {
       
    }, [])
  return (

    
    <MDBCard className='mt-3'>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
        <Link to={`/game/${gameID}`}>
          <MDBCardImage style={{width: '100%', height: '100%'}}src={src} alt='...' fluid />
          </Link>
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
                <MDBIcon onClick={removeFromCartHandler} size='2x'fas icon='trash-alt'></MDBIcon>
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