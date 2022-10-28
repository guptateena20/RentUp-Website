import React, { useState } from 'react'
import "./contact.css"
import Back from '../common/Back'
import img from "../images/services.jpg"
import {useNavigate} from "react-router-dom"

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
 

  const navigate = useNavigate();
  function handleSubmit(e){
    e.preventDefault();
    if(!name || !email || ! subject){
      alert("All fields are Required.");
    }
    else{
      alert("Your Request is Submitted Successfully.")
      navigate("/home", {replace : true})
    }
  }
      

  return (
    <>
    
    <section className='contact mb'>
        <Back name = "Contact Us" title = "Get Helps & Friendly Support" cover = {img}/>

        <div className='container'>
          <form action = "" className='shadow' onSubmit = {handleSubmit}>
                <h4>Fillup The Form</h4>
                <div>
                  <input type = "text" placeholder = "Name" onChange={(e) => setName(e.target.value)} value = {name}/>
                  <input type = "text" placeholder = "Email" onChange={(e) => setEmail(e.target.value)} value = {email}/>
                </div>
                  <input type = "text" placeholder='Subject'onChange={(e) => setSubject(e.target.value)} value = {subject}/>
                  <textarea name = "" id = "" cols = "30" rows = "10"></textarea>
                  <button >Submit Request</button>
          </form>
        </div>
    </section>
    </>
  )
}

export default Contact