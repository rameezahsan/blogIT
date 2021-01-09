import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
import { addPostMentalHealth } from '../../actions/post';
import { addPostPolitics } from '../../actions/post';
import { addPostItTech } from '../../actions/post';
import {Link} from "react-router-dom"
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Fragment } from 'react';
import CheckIcon from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button'
import { Fade } from '@material-ui/core';


const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');
  const [MentalHealth,setMentalHealth]=useState(false);
  const [ItTech,setItTech]=useState(false);
  const [Politics,setPolitics]=useState(false);
  const [categorySelected, setCategorySelected]=useState("");
  const [title,setTitle]=useState("");
  
  // const handleClick=async(e)=>{
  //   if(e.target.name==="mental-health"){
  //     await setMentalHealth(!MentalHealth);
  //     await setItTech(false);
  //     await setPolitics(false);
  //     await console.log(MentalHealth+" "+ItTech+" "+Politics)
  //     setCategorySelected("Mental Health")
  //     // alert("mental health seletected!")
  //     // console.log(MentalHealth)
  //   }
  //  else if(e.target.name==="it-and-tech"){
  //     setItTech(!ItTech);  
  //     setMentalHealth(false);
  //     setPolitics(false);
  //     console.log(MentalHealth+" "+ItTech+" "+Politics)
  //     setCategorySelected("IT and Tech")
  //     // alert("IT and tech selected")
  //     // console.log(ItTech)
  //   }
  //   else if(e.target.name==="politics")
  //     setPolitics(true);
  //     setMentalHealth(false);
  //     setItTech(false);
  //     console.log(MentalHealth+" "+ItTech+" "+Politics)
  //     setCategorySelected("politics")

  //     // alert("Politics selected")
  //     // console.log(Politics)
    
  // }

  const mentalHealthClick=(e)=>{
    setItTech(false);  
    setMentalHealth(true);
    setPolitics(false);
    console.log(MentalHealth+" "+ItTech+" "+Politics+" "+title )
    setCategorySelected("mental-health")
    console.log(categorySelected)

  }
  const itTechClick=(e)=>{
    setItTech(true);  
    setMentalHealth(false);
    setPolitics(false);
    console.log(MentalHealth+" "+ItTech+" "+Politics)
    setCategorySelected("it-and-tech")
  }
  const politicsClick=(e)=>{
    setItTech(false);  
    setMentalHealth(false);
    setPolitics(true);
    console.log(MentalHealth+" "+ItTech+" "+Politics)
    setCategorySelected("politics")
  }
  return (
    
    <Fragment>
      

      <div className='post-form my-3'>
      <div className='bg-primary p-1' style={{borderRadius:"5px"}}>
        <h2>Select Category first:</h2>
        <div className="category-options">
        <ul>
          <li>
          <Button onClick={(e)=>mentalHealthClick(e)} name="mental-health" color="secondary" variant="contained" size="small">
            <CheckIcon/>
          </Button>{' '}
           <i className="fas fa-heartbeat"/> Mental Health
            </li>

          <li>
          <Button onClick={(e)=>itTechClick(e)} name="it-and-tech" color="secondary" variant="contained" size="small">
            <CheckIcon/>
          </Button>{' '}
          <i className="fas fa-mobile"/> IT and Tech
          </li>

          <li>
          <Button onClick={(e)=>politicsClick(e)} name="politics" color="secondary" variant="contained" size="small">
            <CheckIcon/>
          </Button>{' '}
          <i className="fas fa-landmark"/> Politics
          </li>
        </ul>

        <div className="my-1">
        writing blog on: <p style={{fontWeight:"bolder",float:"right",
                              marginRight:"470px", fontSize:"25px"
                              ,textDecoration:"underline",color:"white"} 
                                   }>
                              {categorySelected && categorySelected}
                          </p>
        </div>
        
        </div>

      </div>
      {categorySelected &&(
        <form
        className='form my-1'

        onSubmit={(e) => {
          e.preventDefault();

          if(categorySelected==="mental-health"){
              console.log("mental health called")
              const body={
                text:text,
                category:categorySelected,
                title:title
                }
                console.log(body)
              addPost(body)
          
          
          setText('');
          setTitle('');
        }
        else if(categorySelected==="it-and-tech"){
              console.log("it tech called")
              const body={
                text:text,
                category:categorySelected,
                title:title,
                }
                console.log(body)
              addPost(body)
          
         
          setText('');
          setTitle('');
        }

        else if(categorySelected==="politics"){
              console.log("Poltics called")
              const body={
                text:text,
                category:categorySelected,
                title:title,
                }
                console.log(body)
              addPost(body)
          
          
          setText('');
          setTitle('');
        }
        
        }
        }
      > 
        <input onChange={(e)=>setTitle(e.target.value)} className="my-1" type="text" placeholder="title for the blog.." />
        <textarea
          name='text'
          value={text}
          cols='30'
          rows='5'
          placeholder='what is on your mind? '
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <button type='submit' className='btn btn-success my-1'>submit</button>
      </form>
      )}
     
    </div>
    </Fragment>
    
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
