
import React from 'react';
import { MDBCol, MDBRow, MDBIcon, MDBContainer,  MDBFooter, } from 'mdb-react-ui-kit';
import './footer.css'

export default function Footer() {
  return (
    <MDBFooter className='p-5 text-center footer' color='white' bgColor='dark'>
        <MDBContainer>
          <MDBRow>
        <MDBCol md='6'>
        <ul className='list-unstyled mb-0'>
          <li>
          CopyRight 2022
            Andrew Kim

          </li>
            
          <li>
            Contact Info: 516-830-1435
            </li>
            <li>
             Email: andrewk745@gmail.com
             </li>
            </ul>
        </MDBCol>
        <MDBCol className='text-center align-self-center' md='6'>
        <a href='https://www.linkedin.com/in/andrew-kim-0705/'><MDBIcon size='2x' className='me-2' fab icon='linkedin-in'/></a>
        <a href='https://github.com/andrewjkim745'><MDBIcon size='2x' className='me-2' fab icon='github-alt'/></a>
        <a href="mailto:andrewk745@gmail.com"> <MDBIcon  size='2x' className='me-2' fas icon='envelope'/> </a>
        </MDBCol>
        </MDBRow>
        </MDBContainer>
    </MDBFooter>
  )
}