import React from 'react';
import Pempi from '../img/pempi.mp4'
import '../CSS/Page1.css'
import { useInView } from 'react-intersection-observer';


export default function Page1() { 

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });




    return(
        <section class='page1'>
            <video loop muted autoPlay src={Pempi} id='video'>
                <source src={Pempi} type='video/mp4'/>
            </video>
           <div class='latar'>
               <div class='fadeInLeft'>
                    <span>PEMPI </span>
                    <p>"-Menyongsong Kedigdayaan Pelabuhan dan Maritim Indonesia-"</p>
               </div>
           </div>
        </section>
    )
 }