import React from 'react';
import '../CSS/NavBar.css';
import Logo from '../img/logo.png'


export default function() { 
    return(
        <div>
            <nav class="navigasi">
                <div ><img src={Logo} alt="logo" class="logo"/></div>
                <div>
                    <a href="https://www.w3schools.com" class='pilih'>News</a >
                    <a  class='pilih'>About Us</a >
                    <a  class='pilih'>Career</a >
                    <a  class='pilih'>Contact</a >
                </div>
            </nav>
        </div>
    )
 }