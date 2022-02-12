import { useState, useEffect} from 'react';
import { MDBContainer,  MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBBtn} from 'mdb-react-ui-kit';
import { connect } from 'react-redux'
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from '../redux/actions/shopping-actions';
import { useNavigate } from 'react-router-dom';


function SingleGame({ current, addToCart }) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('current item data', current)
  },[] )
  const [qty, setQty] = useState(1);
  const addToCartHandler = () => {
    console.log('clicked item', current.id)
    dispatch(addToCart(current.id, qty));
    // navigate(`/`);
  };

  return (
    <MDBContainer>
    <MDBCard border='secondary' style={{marginTop: '6rem', width: '100%'}}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src={current.box_art_url}alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>{current.name}</MDBCardTitle>
            <MDBCardText>
              This is game number {current.id}
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Price is 59.99</small>
            </MDBCardText>
            <MDBBtn color='secondary' onClick={()=>addToCartHandler(current.id)}>Add to Cart</MDBBtn>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    </MDBContainer>
  );
}


const mapStateToProps = (state) => {
  return {
    current: state.getGameDetails.game
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleGame)