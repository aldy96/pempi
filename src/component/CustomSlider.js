import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import '../CSS/About.css'
import foto from '../img/pidato.jpg'

export default function Slidernya(){
  return(
  <div>
    <Carousel class='ContSlide' interval={1000000}>
      <Carousel.Item>
        <div class='isiSlide'>
        <div class='textSlide'>
          <h3>Profil Pempi</h3>
          <p>Perkumpulan Eksekutif Maritim dan Pelabuhan Indonesia (PEMPI) adalah asosiasi keanggotaan nirlaba yang 
            didedikasikan untuk mengembangkan dan mempertahankan standar profesional dalam industri maritim. pempi 
            mencapai tujuan ini dalam dua cara utama - dengan mengembangkan jaringan keanggotaan profesional pelabuhan 
            di seluruh indonesia, dan dengan menyediakan program pendidikan standar untuk mensertifikasi para profesional 
            di pelabuhan dan membuka jalan bagi pengembangan profesional secara jangka panjang.</p>
          </div>
          
          <div class='fotoSlide'>
            <img
              className="d-block w-100"
              src={foto}
              alt="First slide"
            />
          </div>
        </div>
         
       
      </Carousel.Item>
  <Carousel.Item>
  <div class='isiSlide'>
        <div class='textSlide'>
          <h3>Tujuan</h3>
          <p>
              1.	Mengembangkan dan Mempertahankan standar untuk manajer dan eksekutif pada industri maritim
          <br/>2.	Memberikan layanan informasi kepada anggota
          <br/>3.	Mengembangkan peluang jaringan bagi anggota
          <br/>4.	Membangun anggota dalam pengembangan pribadi melalui program pendidikan dan pelatihan
          <br/>5.	Menyediakan bahan penelitian dan kajian untuk perencanaan strategis, pengembangan bisnis, dan proses manajemen
          </p>
          </div>
          
          <div class='fotoSlide'>
            <img
              className="d-block w-100"
              src={foto}
              alt="First slide"
            />
          </div>
        </div>
  </Carousel.Item>
  <Carousel.Item>
  <div class='isiSlide'>
        <div class='textSlide'>
          <h3>Kursus</h3>
          <p>Berbagai latar belakang dan tingkat pengalaman peserta memberikan nilai tambah bagi program ini. 
            Seminar Pendidikan Berketanjutan dirancang untuk memaksimalkan partisipasi karena peserta akan memperoleh pengetahuan tidak hanya dari materi seminar, 
            tetapi juga dari peserta lain dalam program tersebut.  Program ini dirancang untuk menarik para profesional 
            dengan pengetahuan khusus di bidang tertentu dari manajemen pelabuhan, termasuk operasi, keuangan, keamanan, dll.  
            Di pelabuhan umum dan khusus (swasta). Ilmu yang didapat dari orang lain dalam kursus berfungsi untuk memperkuat dan menambah materi kursus</p>
          </div>
          
          <div class='fotoSlide'>
            <img
              className="d-block w-100"
              src={foto}
              alt="First slide"
            />
          </div>
        </div>
  </Carousel.Item>
  <Carousel.Item>
  <div class='isiSlide'>
        <div class='textSlide'>
          <h3>Mengapa Perlu Menjadi Anggota?</h3>
          <p>Jadilah bagian dari jaringan profesional pelabuhan dan maritim yang berkembang di seluruh Indonesia dan seluruh dunia! 
            Anggota PEMPI memiliki akses ke dokumen Organisasi Maritim Internasional (imodocs) untuk makalah penelitian, studi, dan 
            dokumen lain yang terkait dengan industri maritim. Butuh pencerahan? Butuh dukungan tambahan? Anggota PEMPI memiliki akses ke 
            materi program dan dukungan berkelanjutan kapan saja - hubungi kami! Untuk informasi lebih lanjut tentang keanggotaan, dan untuk 
            mengetahui bagaimana Anda bisa menjadi anggota</p>
          </div>
          
          <div class='fotoSlide'>
            <img
              className="d-block w-100"
              src={foto}
              alt="First slide"
            />
          </div>
        </div>
  </Carousel.Item>
  <Carousel.Item>
  <div class='isiSlide'>
        <div class='textSlide'>
          <h3>Standar Dan Pendidikan Untuk Dunia Maritim</h3>
          <p>Program pendidikan PEMPI disusun untuk memberikan tingkatan sertifikasi standar bagi profesional pelabuhan. 
            Penawaran utama asosiasi - program Maritime Port and Logistic, program Maritime Traffic and Shipping dan 
            Program Administration for Safety, Security, Environment and Authority - adalah standar industri yang perlu 
            diketahui oleh para profesional pelabuhan untuk berhasil dalam bisnis ini, Program ini dirancang oleh Capt. 
            Sahattua P. Simatupang, M.M.,M.H seLaku Founder dan Advisory Board asosiasi.</p>
          </div>
          
          <div class='fotoSlide'>
            <img
              className="d-block w-100"
              src={foto}
              alt="First slide"
            />
          </div>
        </div>
  </Carousel.Item>
</Carousel>
</div>
  )
}