import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import '../CSS/About.css'
import foto from '../img/pidato.jpg'

export default function Slidernya(){
  return(
  <div>
    <Carousel class='ContSlide'>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Profil Pempi</h3>
          <p>Perkumpulan Eksekutif Maritim dan Pelabuhan Indonesia (PEMPI) adalah asosiasi keanggotaan nirlaba yang 
            didedikasikan untuk mengembangkan dan mempertahankan standar profesional dalam industri maritim. pempi 
            mencapai tujuan ini dalam dua cara utama - dengan mengembangkan jaringan keanggotaan profesional pelabuhan 
            di seluruh indonesia, dan dengan menyediakan program pendidikan standar untuk mensertifikasi para profesional 
            di pelabuhan dan membuka jalan bagi pengembangan profesional secara jangka panjang.</p>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1578315152043-509d4bd774ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="First slide"
        />
      </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={foto}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={foto}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
  )
}