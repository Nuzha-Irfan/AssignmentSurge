
import { setAlert } from './alert';

import axios from "axios";
import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,

  ADD_POST,
  GET_POST,
 

 
} from './types';

import Swal from 'sweetalert2';



// Get posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get('api/posts');

    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add like
export const addLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`api/posts/like/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data }
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Remove like
export const removeLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`api/posts/unlike/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data }
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add post
export const addPost = (id,formData) => async (dispatch) => {
    try {
      const res = await axios.post(`api/posts/${id}`, formData);
  
      dispatch({
        type: ADD_POST,
        payload: res.data
      });
      
      dispatch(setAlert(Swal.fire({
        icon: 'success',
        title:'Posted ',
        text: 'Your Image has been posted'})));
    } catch (err) {
      const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(Swal.fire({
        icon: 'error',
        title:'Post upload error ',
        text: `${error.msg}`})));
    }

    dispatch({
      type: POST_ERROR
    });
    }
  };
  
  // Get post
  export const getPost = (id) => async (dispatch) => {
    try {
      const res = await axios.get(`api/posts/${id}`);
  
      dispatch({
        type: GET_POST,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
  
