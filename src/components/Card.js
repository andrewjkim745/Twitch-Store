import React from 'react';
import { Link } from "react-router-dom";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import { connect } from 'react-redux'
import 'react-loading-skeleton/dist/skeleton.css'
import { getGameDetails } from '../redux/actions/game-actions';

function Card ({src, title, getGameDetails, game}) {
  return (
        <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={src} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody style ={{ width: 200, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
        <MDBCardTitle>{title}</MDBCardTitle>
        <Link to={`/game/${game.id}`}><MDBBtn onClick={()=> getGameDetails(game)}>View Game</MDBBtn></Link>
      </MDBCardBody>
    </MDBCard>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getGameDetails: (game) => dispatch(getGameDetails(game))
  }
}

export default connect(null, mapDispatchToProps)(Card);