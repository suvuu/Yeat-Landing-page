import React from "react";
import "./footer.css";


export default function Footer() {
    return (
        <div className="footer-component"> 
            <header className="email-title"></header>
            <label for="email" className="email-field"><span></span></label>
            <input id="email" type="email" placeholder="E-MAIL"></input>
        
         </div>

      )
}