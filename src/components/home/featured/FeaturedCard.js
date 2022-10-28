import React from 'react'
import { featured } from '../../data/Data'

const FeaturedCard = () => {
  return (
    <>
    <div className='content grid5 mtop'>
        {
            featured.map((item) => {
                const {cover, name, total , index} = item;
                return (
                    <div className='box' key = {index}>
                    <img src = {cover} alt = ""/>
                    <h4>{name}</h4>
                    <label>{total}</label>
                </div>
                )
            })
        }
    </div>
    </>
  )
}

export default FeaturedCard