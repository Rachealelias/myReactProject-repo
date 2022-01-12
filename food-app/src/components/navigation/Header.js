import React from 'react'
import { Headers } from '../styled-components/Style'

function Header({storeName, slogan}) {

    // const styles ={
    //     backgroundColor: 'rgb( 47,79,79)'
    // }
    return (
        <div className='header'>
            <Headers>
            <div className='row'>
                <div className='col-6'>
                    <img src="https://t3.ftcdn.net/jpg/02/71/69/52/360_F_271695243_6YC3fCzdw9VoRg3JgyOYBZGcQuNkuVHq.jpg"
               alt="Racheal's kitchen"
                     />
                </div>
                <div className='col-6' style={{display:"inline-block"}}>
                <h2>{storeName}</h2> 
                <h4 style={{color:"gray", fontSize:"30PX"}}>{slogan}</h4>
                </div>
            </div>
            </Headers>
           
        </div>
    )
}

export default Header
