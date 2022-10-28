import React from 'react'
import { price } from '../../data/Data'

const PriceCard = () => {
    return (
        <>
            <div className='content flex mtop'>
                {
                    price.map((item, index) => {
                        const { best, plan, price, ptext, list } = item;
                        return (
                            <div className='box shadow' key={index}>
                                <div className='topbtn'>
                                    <button className='btn3'>{best}</button>
                                </div>
                                <h3>{plan}</h3>
                                <h1>
                                    <span>$ {price}</span>
                                </h1>
                                <p>{ptext}</p>

                                <ul>
                                    {
                                        list.map((val) => {
                                            const { text, icon, change } = val;
                                            return (
                                                <li>
                                                    <label htmlFor='' style={{
                                                        background: change === "color" ? "#dc35451d" : "#27ae601f",
                                                        color: change === "color" ? "#dc3848" : "#27ae60"
                                                    }}>
                                                        {icon}
                                                    </label>
                                                    <p>{text}</p>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>

                                <button className='btn5'
                                    style={{
                                        background: item.plan === "Standard" ? "#27ae60" : "#fff",
                                        color: item.plan === "Standard" ? "#fff" : "#27ae60"
                                    }}>
                                    Start {item.plan}
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default PriceCard