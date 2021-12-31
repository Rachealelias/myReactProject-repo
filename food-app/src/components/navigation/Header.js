import React from 'react'

function Header({storeName, slogan}) {

    const styles ={
        backgroundColor: 'rgb( 47,79,79)'
    }
    return (
        <div className='header'>
            <div className='row'>
                <div className='col-6' style={{display: "flex",height:" 200px", float:"left"}}>
                    <img src="https://t3.ftcdn.net/jpg/02/71/69/52/360_F_271695243_6YC3fCzdw9VoRg3JgyOYBZGcQuNkuVHq.jpg"
                style={styles}
                     />
                </div>
                <div className='col-6' style={{display:"inline-block", height:"70px", fontSize:"2em", paddingLeft:"30px", alignContent:"center"}}>
                <h2>{storeName}</h2> 
                <h4 style={{color:"gray", fontSize:"30PX"}}>{slogan}</h4>
                </div>
            </div>
           
        </div>
    )
}

export default Header
