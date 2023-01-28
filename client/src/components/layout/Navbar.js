import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';
import M from 'materialize-css'
const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    <ul className="nobull">
     <li>  <a
            onClick={logout}
            href='/'
           
          >
            <i class="fa fa-power-off" aria-hidden="true"></i>{' '}
            
          </a>
     </li>
      <li>
        <Link to="/posts"><i class="fa fa-home" aria-hidden="true"></i></Link>
      </li>
      <li>
        <Link to="/addPost">
         
        <i class="fa fa-plus-square-o" aria-hidden="true"></i>
        </Link>
      </li>
      <li>
       
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="nobull">
      
      <li>
        <Link to="/register"><i class="fa fa-user-plus" aria-hidden="true"><p>Sign Up</p></i></Link>
      </li>
      <li>
        <Link to="/login"><i class="fa fa-sign-in" aria-hidden="true"><p>Sign In</p></i></Link>
      </li>
    </ul>
  );

  return (
    <nav>
        
        <div className="icon-bar">
       
      
        
      <ul  className="nobull">
      <Fragment>
      <Link to="/">
         <h2 style={{float:'left',color: 'white' ,fontSize:"5.5vw", margin:"0"}}> Social</h2>
        </Link>
        {isAuthenticated ? authLinks : guestLinks}</Fragment>
      </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);

