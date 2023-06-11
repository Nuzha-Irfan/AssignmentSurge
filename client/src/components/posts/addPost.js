import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../actions/post';
import {  useParams} from 'react-router-dom';

const PostForm = ({ addPost}) => {
  const [formData, setFormData] = useState({
    title: '',
    body:'',
    photo: '',
    
   
  });
//       const [url,setUrl] = useState("")

   
      const { id } = useParams();


//       const { title, body, photo} = formData;

//       const onChange = (e) =>
//         setFormData({ ...formData, [e.target.name]: e.target.value });
    
//         const onSubmit = async (e) => {
//             e.preventDefault();
           
//               console.log(url);
//               addPost({id,formData});
            
//           };

//           const postDetails = ()=>{
//             const data = new FormData()
//             data.append("file",photo)
//             data.append("upload_preset","surgeCloud")
//             data.append("cloud_name","dxxnc0sqz")
//             fetch("https://api.cloudinary.com/v1_1/dxxnc0sqz/photo/upload",{
//                 method:"post",
//                 body:data
//             })
//             .then(res=>res.json())
//             .then(data=>{
//                setUrl(data.url)
//             })
//             .catch(err=>{
//                 console.log(err)
//             })
     
         
//         }
        

  return (
    <div id="card">
    <div id="card-content">
      <div id="card-title">
            <h2 >Say Something</h2>
           
      </div>
      
        
     
      <form className="form" onSubmit={onSubmit}>
      <div className="form-group">
        
          <input
            className='form-content'
            
            type="text"
            placeholder="Caption"
            name="title"
            value={title}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div class="form-border"></div>

        <div className="form-group">
        
        <input
          className='form-content'
          
          type="text"
          placeholder="Description"
          name="body"
          value={body}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div class="form-border"></div>


      <div className="form-group">
        
        
          <input className='form-content'  type="file" onChange={(e) => onChange(e.target.files[0])} />
          
            
          
            {/* <button onClick={()=>postDetails()} id='submit-btn'>
                SaveImage
            </button> */}
      </div>
     
        <input type='submit' id='submit-btn' value='Upload' />
      </form>
    </div>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(PostForm);
