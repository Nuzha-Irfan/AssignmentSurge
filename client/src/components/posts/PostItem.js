import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


import { connect } from 'react-redux';
import { addLike, removeLike } from '../actions/post';


function formatDate(date) {
   var date1=new Date(date);
  var date2=new Date();
  let difference = date2.getTime() - date1.getTime();
  let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return TotalDays;
   
}

const PostItem = ({
  addLike,
  removeLike,
  getUserByID,
  auth,
  post: { _id, user, title, body, photo, likes, comments, date,postedby},
  showActions
}) => (
  <div className='background1'>
  <div id="card1">
  <div id="card-content1">
    <div id="card-title1">
    
     
        <img width="600" height="300" className='center' src={photo} alt=""  style={{borderRadius:'10px'}}/>
     
    
    
    <div>
     

      {showActions && (
        <Fragment>
         <p className='center'>
          <button
            
            style={{backgroundColor:'white',border: 'none'}}
            onClick={() => addLike(_id)}
            onDoubleClick={()=>removeLike(_id)}
            type="button"
            
          >
            
            
          <i className='fa fa-heart fa-2x' style={{color: 'red'}}></i>{' '}
            <span>{likes.length > 0 && <span className='pLand2'>{likes.length}</span>}</span>
          </button>
         </p>
         <p style={{textAlign:'right',marginBlock:'3px'}}>{postedby} <span>               </span>Posted {formatDate(date)} days ago </p>
    
          <p  className='center'>{title}</p>
      <p className='center' >{body}</p>

     
        </Fragment>
      )}
    </div>
  </div>
  </div>
  </div>
  </div>
 
);

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,

  showActions: PropTypes.bool
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike})(
  PostItem
);
