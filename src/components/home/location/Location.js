import React from 'react'
import Heading from '../../common/Heading'
import "./location.css"
import LocationCard from './LocationCard'


const Location = () => {
  return (
    <>
    <section className='location padding'>
        <div className='container'>
            <Heading title = "Explore By Location" subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."/>

            <LocationCard/>
        </div>
    </section>
    </>
  )
}

export default Location