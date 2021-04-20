import React from 'react';
import { makeStyles } from  '@material-ui/core';
import { useInView } from 'react-intersection-observer';

//gambar
import FotoPidato from '../component/FotoPidato';

const useStyle = makeStyles({
    root: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
        // backgroundImage: `url(${GambarPidato})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: "#03A9F4",
        // background: "-moz-linear-gradient(top, rgba(99,185,219,1) 0%, rgba(255,255,255,1) 100%)",
        // background: "-webkit-gradient(left top, left bottom, color-stop(0%, rgba(99,185,219,1)), color-stop(100%, rgba(255,255,255,1)))",
        // background: "-webkit-linear-gradient(top, rgba(99,185,219,1) 0%, rgba(255,255,255,1) 100%)",
        // background: "-o-linear-gradient(top, rgba(99,185,219,1) 0%, rgba(255,255,255,1) 100%)",
        // background: "-ms-linear-gradient(top, rgba(99,185,219,1) 0%, rgba(255,255,255,1) 100%)",
        // background: "linear-gradient(to bottom, rgba(99,185,219,1) 0%, rgba(255,255,255,1) 100%)",
        // filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#63b9db', endColorstr='#ffffff', GradientType=0 )",
    },

})

let isi = '20';

export default function Pidato() {
    const classes = useStyle() 
    const { ref, inView, entry } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    let isi = '20';
    
    if (inView) {
        isi = <FotoPidato/>;
       } 
       

    return(
        <div className={classes.root} ref={ref}>
            {/* menggunakan IF */}
            {isi}
        </div>
    )
}