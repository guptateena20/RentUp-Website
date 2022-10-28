import React from 'react'
import Header from '../common/header/Header'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import About from '../about/About'
import Services from '../services/Services'
import Blog from '../blog/Blog'
import Pricing from '../pricing/Pricing'
import Contact from '../contact/Contact'
import Footer from '../common/footer/Footer'
import Error from '../error/Error'

const Pages = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path = "/" element = {<Navigate replace to = "home"/>}/>
      <Route path = "home" element = {<Home/>}/>
      <Route path = "about" element = {<About/>}/>
      <Route path = "services" element = {<Services/>}/>
      <Route path = "blog" element = {<Blog/>}/>
      <Route path = "pricing" element = {<Pricing/>}/>
      <Route path = "contact" element = {<Contact/>}/>
      <Route path = "*" element = {<Error/>}/>
    </Routes>
    <Footer/>

    </>
  )
}

export default Pages