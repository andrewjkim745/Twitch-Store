import { useState, useEffect} from 'react';
import { MDBContainer, MDBIcon, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBBtn} from 'mdb-react-ui-kit';
import { connect } from 'react-redux'
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from '../redux/actions/shopping-actions';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useWindowDimensions from './windowDimensions';

function SingleGame({ current, addToCart }) {
  

  const { height, width } = useWindowDimensions();


  let navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
  },[] )



  const [qty, setQty] = useState(1);
  const addToCartHandler = () => {
    dispatch(addToCart(current.id, qty));
    alert('Added to Cart!')
  };

  return (
    <MDBContainer>
    <MDBCard border='secondary' className='my-5 mb8'>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage className='h-100 w-100' src={current.box_art_url}alt='...' fluid />
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
            <div className='d-flex justify-content-between'>
            {width < 768 ? <MDBIcon onClick={()=>addToCartHandler(current.id)} size='2x' fas icon='cart-plus'/> : <MDBBtn color='secondary' onClick={()=>addToCartHandler(current.id)}>Add to Cart</MDBBtn>}
            <Link to='/cart'>
              <MDBBtn>Go to Cart</MDBBtn>
            </Link>
            </div>
            
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