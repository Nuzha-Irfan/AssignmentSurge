import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { setAlert } from '../actions/alert';
import { register } from '../actions/auth';
import PropTypes from 'prop-types';
import M from 'materialize-css'
import Swal from 'sweetalert2';
import ReCAPTCHA from 'react-google-recaptcha';
const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    userName: '',
    name:'',
    email: '',
    password: '',
    password2: ''
  });

  const { userName,name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      Swal.fire({
        icon: 'error',
        title:'Password Mismatch ',
        text: 'Password does not Match'});
    } else {
      register({ userName, name,email, password });
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    

    <div id="card">
    <div id="card-content">
      <div id="card-title">
      <h1 className='pLand2' >Register</h1>
      </div>
      <form className="form" onSubmit={onSubmit}>
      <div >
          <input
             className='form-content'
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
          
        </div>
        <div class="form-border"></div>
        <div >
        
          <input
            className='form-content'
            
            type="text"
            placeholder="User Name"
            name="userName"
            value={userName}
            onChange={onChange}
            required
          />
        </div>
        <div class="form-border"></div>
        <div >
          <input
            className='form-content'
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
          
        </div>
        <div class="form-border"></div>

        <div >
          <input
             className='form-content'
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <div class="form-border"></div>
        <div>
          <input
             className='form-content'
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={onChange}
            required
          />
        </div>
        <div class="form-border"></div>
        <ReCAPTCHA sitekey="6LcdvC8kAAAAAA1t3XJXxe_1MsvWFxEe2pVWfoGg"
        onChange={onChange}/>
        <input type="submit" id="submit-btn" value="Register" />
      </form>
      
     
    </div>
    </div>
    
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);