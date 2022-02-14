import React, {useState, useEffect}  from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse,
    MDBRow,
    MDBBadge
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux'

const Navbar = ({ cart }) => {
    const [showNavColor, setShowNavColor] = useState(false);

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
      console.log(cart)
      let count = 0;
      if (cart) {
        cart.forEach((item) => {
        count += item.qty;
      });
      setCartCount(count)
    }
  
      
    }, [cart, cartCount]);
  return (
    <>
    <MDBRow>
      <div className='mr-4 bg-light d-flex justify-content-center'><h6 class='is-size-6-mobile'>516-830-1435 | andrewk745@gmail.com</h6></div>
    </MDBRow>
     <MDBNavbar sticky expand='lg' dark bgColor='secondary'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'>
          <div class='d-flex flex-column'>
          <h2 class='is-size-6-mobile is-size-4-desktop'>Twitch Store</h2>
          </div>
          </MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarColor02'
          aria-controls='navbarColor02'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavColor(!showNavColor)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse show={showNavColor} navbar>
          <MDBNavbarNav right fullWidth={false} className='ms-auto'>
            <MDBNavbarItem className='active'>
              <MDBNavbarLink  href='/'aria-current='page'>
              <span className='text-light'>
                <MDBIcon fas icon='home'></MDBIcon>
              </span>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='active'>
              <MDBNavbarLink href='/cart' onClick={() => setShowNavColor(!showNavColor)} >
                
              <span className='text-light me-2'>
                <MDBIcon fas icon='shopping-cart'></MDBIcon>
              </span>
              <MDBBadge pill color='danger'>{cart ? cartCount : 0}</MDBBadge>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </>
  );
}


const mapStateToProps = state => {
  return {
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps)(Navbar)