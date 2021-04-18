import React from 'react';
import '../CSS/About.css';
import CustomSlider from '../component/CustomSlider'

import { useInView } from 'react-intersection-observer';

export default function About() { 
    const { ref, inView, entry } = useInView({
        threshold: 0.3,
    });
    return(
        <section id="About" ref={ref}>
            {
                inView ?
                <div class='fadeInRight'>
                    <CustomSlider />
                </div>
                
                :
                ''
            }

            
        </section>
    )
 }