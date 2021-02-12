import React from 'react';
import "../Styles/Style.css";

function Widgets() {
    const time= new Date();
    const hours= time.getHours();
    const minutes= time.getMinutes();

    return (
        //iframe to website
        //shows current time//js
        //links for internal pages
        //thimk CSS zize, placement
        <div>
            <iframe scrolling="no" src="http://localhost:3000/"></iframe>
            <div className="time">{hours %12}:{minutes %12}</div>
            <div className="links">
                <a href="/">Click me</a>
                <a href="/">Test me</a>
                <a href="/">Run me</a>
            </div>
            <input type="search"></input>
        </div>
    )
}

export default Widgets


