import React from 'react'
import './Header.css';
const Header = (props) => {
    return(
        <header className="Headerr">
        <div className="Nav1">
            <h1 className="Texter">Muhammad Usama</h1>
        </div>
        <div className="Nav2">
            <ul className="Buttons">
                <li className="Items">
                <button className="Batton">
                <p className="Textor">Home</p>
                </button>
                </li>
                <li className="Itemss">
                <button className="Batton">
                <p className="Textor">About</p>
                </button>
                </li>
                <li className="Itemsss">
                <button className="Batton">
                <p className="Textor">Contact Us</p>
                </button>
                </li>
            </ul>
        </div>
        </header>
        
    )
}

export default Header