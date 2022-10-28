import React from 'react'
import { NavLink } from 'react-router-dom'
import { nav } from '../../data/Data'

const Navigation = ({ navList }) => {
    return (
        <>
            <div className='nav'>
                <ul className={navList ? "small" : "flex"}>
                    {
                        nav.map((list) => {
                            const { text, path, id } = list;
                            return (
                                <li key={id}>
                                    <NavLink to={path}>{text}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Navigation