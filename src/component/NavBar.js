import React from 'react';
import '../CSS/NavBar.css';
import Logo from '../img/logo.png'
import '../CSS/Animation.css'


export default function NavBar() { 
    return(
        <div >
            <nav class="navigasi">
                <div class='fadeInLeft' ><img src={Logo} alt="logo" class="logo"/></div>
                <div class='fadeInDown'>
                    <a href="https://www.w3schools.com" class='pilih'>News</a >
                    <a href="#About" class='pilih'>About Us</a >
                    <a  class='pilih'>Career</a >
                    <a  class='pilih'>Contact</a >
                </div>
            </nav>
        </div>
    )
 }

 