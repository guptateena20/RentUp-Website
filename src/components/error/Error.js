import React from 'react'
import { useNavigate } from 'react-router-dom'
import img from "../images/error.jpg"
import "./error.css"
import {BiArrowBack} from "react-icons/bi"

const Error = () => {

  const navigate = useNavigate();
  function goBack(){
    navigate(-1);
  }

  return (
    <div className='error'>
      <img className="errorImg" src={img} />

      <div className='img'>
        
          <button  className = "btn" onClick = {goBack}><BiArrowBack style = {{marginRight : "5px", fontSize : "20px"}}/>Go Back</button>
        
      </div>
    </div>
  )
}

export default Error