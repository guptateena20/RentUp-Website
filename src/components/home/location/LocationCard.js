import React from 'react'
import { location } from '../../data/Data'

const LocationCard = () => {
  return (
    <>
        <div className='content grid3 mtop'>
                {
                    location.map((items) => {
                        const {id, name, Villas, Apartments, Offices, cover} = items;
                        return(
                            <div className='box' key = {id}>
                                <img src = {cover} alt = ""/>
                                <div className='overlay'>
                                    <h5>{name}</h5>
                                    <p>
                                        <label>{Villas}</label>
                                        <label>{Offices}</label>
                                        <label>{Apartments}</label>
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
    </>
  )
}

export default LocationCard