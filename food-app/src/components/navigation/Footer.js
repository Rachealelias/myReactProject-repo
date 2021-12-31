import React, {Component} from 'react'

function Footer() {
    const getYear = () => {
        let currentYear = new Date().getFullYear();
        return currentYear
    }
    return (
        <div className='footer' >
            <footer>
                <div>
                    <p>
                        Copyright &copy;
                        <span>{getYear()} Racheal Amuneke</span>
                        <br/> Made with 😍 by Racheal 
                    </p>
                </div>
            </footer>
            
        </div>
    )
}

export default Footer
