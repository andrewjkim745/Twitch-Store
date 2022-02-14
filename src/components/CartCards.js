import React from 'react';
import { MDBBtn, MDBIcon, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function CartCards({ src, title }) {
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
            <div className='p-4 d-flex justify-content-end'>
            <MDBIcon size='2x'fas icon='trash-alt'></MDBIcon>
            </div>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}