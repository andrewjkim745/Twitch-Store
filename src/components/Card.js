import React, {useState} from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardHeader, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Card({src, title, onLoad, loaded}) {
  return (
    <MDBCard>
      <Skeleton width={400} height={550} style={loaded ? {display: 'none'} : {}}/>
      <MDBRipple style={loaded ? {} : {display: 'none'}} rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage onLoad={onLoad} src={src} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody style ={{ width: 200, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
        <MDBCardTitle>{title || <Skeleton/>}</MDBCardTitle>
        {loaded ? <MDBBtn href='#'></MDBBtn> : <Skeleton/>}
      </MDBCardBody>
    </MDBCard>
  );
}