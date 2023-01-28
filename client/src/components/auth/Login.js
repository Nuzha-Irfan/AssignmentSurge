import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';
import ReCAPTCHA from 'react-google-recaptcha';
const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Navigate to="/posts" />;
  }

  return (
  
    
    <div id="card">
      
    <div id="card-content">
   
      <div id="card-title">
            <h1 className='pLand2' >Sign in</h1>
           
      </div>
      
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
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
        <div className="form-border"></div>
        <div className="form-group">
          <input
            className='form-content'
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            minLength="8"
            required
          />
        </div>
        <div className="form-border"></div>
        <ReCAPTCHA sitekey="6LcdvC8kAAAAAA1t3XJXxe_1MsvWFxEe2pVWfoGg"
        onChange={onChange} size='normal'></ReCAPTCHA>
        <input type="submit" id="submit-btn" value="Login" />
        
      </form>
    
      
      
    </div>
    
    
    </div>
  
    
    
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);