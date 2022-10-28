import React from 'react'
import { team } from '../../data/Data'
import { BsCheckCircleFill, BsFillEnvelopeFill } from "react-icons/bs"
import { AiFillPhone } from "react-icons/ai"
import { MdLocationPin } from "react-icons/md"

const i = { color: "#108be7", fontSize: "17px", position: "absolute", top: "35px", right: "-10px" }

const TeamCard = () => {
    return (
        <>
            <div className='content mtop grid3'>
                {
                    team.map((val) => {
                        const { id, list, cover, address, name, icon } = val;
                        return (
                            <div className='box' key={id}>
                                <button className='btn3'>{list} Listings</button>
                                <div className='details'>
                                    <div className='img'>
                                        <img src={cover} alt="" />
                                        <BsCheckCircleFill style={i} />
                                    </div>
                                    <MdLocationPin />
                                    <label htmlFor=''>{address}</label>
                                    <h4>{name}</h4>

                                    <ul>
                                        {icon.map((icon, index) => {
                                            return (
                                                <li key={index}>{icon}</li>
                                            )
                                        })}
                                    </ul>
                                    <div className='button flex'>
                                        <button>
                                            <BsFillEnvelopeFill style={{ fontSize: "15px", marginRight: "5px" }} />
                                            Message
                                        </button>

                                        <button className='btn4'>
                                            <AiFillPhone style={{ fontSize: "20px" }} />
                                        </button>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default TeamCard