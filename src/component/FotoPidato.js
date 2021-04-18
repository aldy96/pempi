import React from 'react';
import { makeStyles } from  '@material-ui/core';
import '../CSS/Animation.css'

//gambar
import GambarPidato from '../img/pidato.jpg'

const useStyle = makeStyles({

    Contfoto: {

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
        "& span":{
            position: 'absolute',
            width: '500px',
            height: '300px',
            color: 'white',
            left: '45vw',
            fontSize: '20px',
            fontStyle:'italic'
        }

        
    },
    foto: {
        
        height: '80vh',
        borderRadius: "25px 25px 25px 25px",
        MozBorderRadius: "25px 25px 25px 25px",
        WebkitBorderRadius: "25px 25px 25px 25px",
        border: "0px solid #000000",

        WebkitBoxShadow: "-10px 10px 7px 0px rgba(0,0,0,0.49)",
        MozBoxShadow: "-10px 10px 7px 0px rgba(0,0,0,0.49)",
        boxShadow: "-10px 10px 7px 0px rgba(0,0,0,0.49)",
      
    }
})

export default function Pidato() {
    const classes = useStyle() 

    return(
        <div className="fadeInLeft">
            <div className={classes.Contfoto}>
                <img className={classes.foto} src={GambarPidato} alt=""/>
                <span>"Kita telah terlalu lama memunggungi laut, memunggungi samudera, dan memunggungi selat dan teluk. 
                    Ini saatnya kita mengembalikan semuanya sehingga jalesveva jayamahe, 
                    di laut justru kita jaya, sebagai semboyan neneh moyang kita di masa lalu bisa hembali lagi membahana."
                    <p>Presiden RI - Ir Joho Widodo –</p>
                </span>
            </div>
        </div>
    )
}