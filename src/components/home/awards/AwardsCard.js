import React from 'react'
import { awards } from '../../data/Data'

const AwardsCard = () => {
    return (
        <>
            <div className="content grid4 mtop">
                {
                    awards.map((val) => {
                        const { icon, num, name, id } = val;
                        return (
                            <div className='box' key={id}>
                                <div className='icon'>
                                    <span>{icon}</span>
                                </div>
                                <h1>{num}</h1>
                                <p>{name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default AwardsCard