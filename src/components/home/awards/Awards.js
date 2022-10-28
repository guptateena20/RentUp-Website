import React from 'react'
import Heading from '../../common/Heading'
import "./awards.css"
import AwardsCard from './AwardsCard'

const Awards = () => {
  return (
    <>
    <section className='awards padding'>
        <div className='container'>
            <Heading title = "Over 1,24,000+ Happy User being With Us Still They Love Our Services" subtitle = "Our Awards"/>

           <AwardsCard/>
        </div>
    </section>
    </>
  )
}

export default Awards
