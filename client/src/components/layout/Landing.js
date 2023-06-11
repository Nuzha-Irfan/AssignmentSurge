import React, { Fragment } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  // if (isAuthenticated) {
  //   return <Navigate to="/" />;
  // }

  return (
    <Fragment>
      <section className="section-one"> 
    <div className="containerLand">
      <h2 className='h1Land'>Surge</h2>
      <p className='pLand'>Software Engineering Internship</p>
      <p className='pLand'>Fathima Nuzha Irfan</p>
      <a href="/register" class="home-button">Sign Up</a>
      <a href="/login" class="home-button">Login</a>
    </div>  
  </section> 
          
           
          
        
      
    </Fragment>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
