import React, {Fragment,useEffect} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PostForm from './components/posts/addPost';
import Posts from './components/posts/Posts';
import store from './store';
import { loadUser } from './components/actions/auth';
import {  Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom';
import setAuthToken from './utils/setAuthToken';
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App=()=>{
  
    useEffect(() => {
      store.dispatch(loadUser()); // we have access to store and dispatch is a function of store
    }, []);
  return (

    
    <Provider store={store}>
  <Router>
    <Fragment>

      <Navbar></Navbar>
      <Routes>
      <Route exact path='/' element={<Landing />} />
   
              <Route path='/login' element={<Login />} />
              <Route path='/Register' element={<Register />} />
              <Route path='/addPost' element={<PostForm />} />
              <Route path='/posts' element={<Posts />} />
      

     
      </Routes>
    </Fragment>
  </Router>
  </Provider>
  );
}

export default App;
