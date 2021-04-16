import React from 'react';
import Pempi from '../img/pempi.mp4'
import '../CSS/Page1.css'


export default function Page1() { 
    return(
        <section class='page1'>
            <video loop muted autoPlay src={Pempi} id='video'>
                <source src={Pempi} type='video/mp4'/>
            </video>
           <div class='latar'>
               <div>
                    <span>PEMPI </span>
                    <p>"-Menyongsong Kedigdayaan Pelabuhan dan Maritim Indonesia-"</p>
               </div>
           </div>
        </section>
    )
 }