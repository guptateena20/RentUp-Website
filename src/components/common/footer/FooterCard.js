import React from 'react'
import { footer } from '../../data/Data'

const FooterCard = () => {
    return (
        <>
            <footer>
                <div className='container'>
                    <div className='box'>
                        <div className='logo'>
                            <img src="../images/logo-light.png" alt="" />
                            <h2>Do You Need Help With Anything?</h2>
                            <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

                            <div className='input flex'>
                                <input type="text" placeholder="Email Address" name="" id="" />
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>

                    {
                        footer.map((val) => {
                            const {id, title, text} = val;
                            return(
                                <div className='box' key = {id}>
                                    <h3>{title}</h3>
                                    <ul>
                                        {
                                            text.map((items) => {
                                                return(
                                                    <li>{items.list}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </footer>

            <div className='legal'>
                <span>© 2022 RentUp.</span>
            </div>
        </>
    )
}

export default FooterCard