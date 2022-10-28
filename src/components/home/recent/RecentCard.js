import React from 'react'
import { list } from '../../data/Data'
import {BsFillSuitHeartFill} from "react-icons/bs"
import {ImLocation2} from "react-icons/im"

const icon = {fontSize : "20px", color : "#bec7d8"}
const RecentCard = () => {
    return (
        <>
            <div className='content grid3 mtop'>
                {
                    list.map((value) => {
                        const { id, cover, name, location, category, price, type } = value;
                        return (
                            <div className='box shadow' key={id}>
                                <div className='img'>
                                    <img src = {cover} alt = ""/>
                                </div>
                                <div className='text'>
                                    <div className='category flex'>
                                        <span style = {{background : category === "For Sale" ? "#25b5791a" : "#ff98001a", color : category === "For Sale" ? "#25b579" : "#ff9800"}}>{category}</span>
                                        <BsFillSuitHeartFill style = {icon}/>
                                    </div>
                                    <h4>{name}</h4>
                                    <p>
                                        <ImLocation2/>
                                        {location}
                                    </p>
                                </div>
                                <div className='button flex'>
                                    <div>
                                        <button className='btn2'>{price}</button>
                                        <label htmlFor=''>/sqft</label>
                                    </div>
                                    <span>{type}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default RecentCard