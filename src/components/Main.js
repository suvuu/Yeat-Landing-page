import React from "react"

import { FaTiktok, FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaSoundcloud } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import "./main.css";





export default function Main (){
    return(
        <>

         <nav className="main-nav">
           <a href="/" className="site-title">
            YEAT
           </a >
           </ nav>
        <div className="main-component">
     
              <aside className="social-links">
                <div className="social-links-icons">
                    <li>
                    <a href="twitter.com"><FaTwitter color="white" /></a>
                    </li>
                    <li>
                    <a href="facebook.com"><FaFacebook color="white" /></a>
                    </li>
                    <li>
                    <a href="tiktok.com"><FaTiktok color="white" /></a>
                    </li>
                    <li>        
                    <a href="youtube.com"><FaYoutube color="white" /></a>
                    </li>
                    <li>
                    <a href="instagram.com"><FaInstagram color="white" /></a>
                    </li>
                    <li>
                    <a href="soundcloud.com"><FaSoundcloud color="white" /></a>
                    </li>
                </div>

            </aside>
        </div>
        </ >
    )
    
    }
