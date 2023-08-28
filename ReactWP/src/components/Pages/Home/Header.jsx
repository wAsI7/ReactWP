import React from "react"
import reactLogo from '../../../assets/react.svg'
import wpLogo from '../../../assets/wpLogo.png'


const Header = () => {

        return (

            <>
                <img src={reactLogo} className="logo react" alt="React logo" />
                <img src={wpLogo} className="logo react" alt="WP logo" />
                <h2>Posts are fetched here using API</h2>
            </>
            
        );
}

export default Header;