import React from 'react';
import { Link } from "react-router-dom";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardHeader, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Card({src, title, gameId}) {
  return (
    // <MDBCard>
    //   <Skeleton width={300} height={300} style={loaded ? {display: 'none'} : {}}/>
    //   <MDBRipple style={loaded ? {} : {display: 'none'}} rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
    //     <MDBCardImage onLoad={onLoad} src={src} fluid alt='...' />
    //     <a>
    //       <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
    //     </a>
    //   </MDBRipple>
    //   <MDBCardBody style ={{ width: 200, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
    //     <MDBCardTitle>{title || <Skeleton/>}</MDBCardTitle>
    //     <Skeleton style={loaded ? {display: 'none'} : {}}/>
    //     {/* <Link to={`/game/${game.id}`}><MDBBtn style={loaded ? {} : {display: 'none'}}>View Game</MDBBtn></Link> */}
    //   </MDBCardBody>
    // </MDBCard>
        <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={src} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody style ={{ width: 200, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
        <MDBCardTitle>{title}</MDBCardTitle>
        <Link to={`/game/${gameId}`}><MDBBtn>View Game</MDBBtn></Link>
      </MDBCardBody>
    </MDBCard>
  );
}