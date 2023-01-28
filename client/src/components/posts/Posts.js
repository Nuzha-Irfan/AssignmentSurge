import React, {  Fragment,useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import{getUserByID} from '../actions/auth';
import { getPosts } from '../actions/post';

const Posts = ({ getPosts, post: { posts } ,getUserByID, auth: { user }}) => {
  useEffect(() => {
    getPosts();
   
 
   
  }, [getPosts]);

  return (
    <Fragment>
      

      <nav className='navi'> 
      <img src={user && user.avatar} style={{ borderRadius: '60%' }}></img>
      <h2 style={{textAlign:'center' ,fontFamily:'monospace'}}>{user && user.name}</h2>
      <h2 style={{textAlign:'center'  }}> {user && user.userName}</h2>
       
        
        
      
      </nav>
      <div className='background1'>
      {
        posts.map( post =>(
          <PostItem key={post._id} post={post}></PostItem>
        ))
      }
      </div>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  getUserByID:PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
 
};

const mapStateToProps = (state) => ({
  post: state.post,
  auth:state.auth
});

export default connect(mapStateToProps, { getPosts,getUserByID })(Posts);
