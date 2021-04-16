import React from 'react';
import { makeStyle, makeStyles } from  '@material-ui/core';

//gambar
import GambarPidato from '../img/pidato.jpg'

const useStyle = makeStyles({
    root: {
        width: '100vw',
        height: '100vh',
        color: 'red',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${GambarPidato})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },

    Contfoto: {
      
    },
    foto: {
        
        width: '70vw',
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
        <div className={classes.root}>
            <div className={classes.Contfoto}>
                {/* <img className={classes.foto} src={GambarPidato} alt=""/> */}
            </div>
        </div>
    )
}