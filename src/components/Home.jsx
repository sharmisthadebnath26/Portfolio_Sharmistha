import React, { useState } from 'react'
import { Box, Button } from '@mui/material'
import './Home.css'

export default function Home() {
    const [hover, setHover] = useState(true);
    const [hover1, setHover2] = useState(true);
    const [hoverUnderline1, setHoverUnderline1] = useState(true);
    const [hoverUnderline2, setHoverUnderline2] = useState(true);
    const handleHover = () => {
        setHover(false);
    }
    const handleHoverLeft = () => {
        setHover(true);
    }

    const handleHover1 = () => {
        setHover2(false);
    }
    const handleHoverLeft2 = () => {
        setHover2(true);
    }
    const handleHoverUnderline1 = () => {
        setHoverUnderline1(false);
    }
    const handleHoverUnderlineLeft1 = () => {
        setHoverUnderline1(true);
    }
    const handleHoverUnderline2 = () => {
        setHoverUnderline2(false);
    }
    const handleHoverUnderlineLeft2 = () => {
        setHoverUnderline2(true);
    }
  return (
    <>
        <Box style={{display:'flex', justifyContent:'space-between'}}>
        <Box>
            <h2 className='myName'>Sharmistha Debnath</h2>
        </Box> 
        <Box style={{display:'flex', padding:20}}>
            <Box style={{margin:'20px 10px'}}>
                <a onMouseEnter={handleHoverUnderline1} onMouseLeave={handleHoverUnderlineLeft1} href='#' 
                style={hoverUnderline1 ? {textDecoration:'none', color:'#ffffff'} : {textDecoration:'underline', color:'#ffffff'}}>ABOUT</a>
            </Box>
            <Box style={{margin:'20px 10px'}}>
                <a onMouseEnter={handleHoverUnderline2} onMouseLeave={handleHoverUnderlineLeft2} href='#' 
                style={hoverUnderline2 ? {textDecoration:'none', color:'#ffffff'} : {textDecoration:'underline', color:'#ffffff'}}>PROJECTS</a>
            </Box>
            <Box>
            <Button className='button' variant="outlined" 
        onMouseEnter={handleHover} onMouseLeave={handleHoverLeft} 
        style={hover ? {borderColor:'#ffffff', color:'#ffffff', margin:'13px'}:{color:"#070B2B", background:'#ffffff', margin:'13px'}}>
        Hit me up
        </Button>
            </Box>
        </Box>
        
        </Box>

        <h1 style={{color:'#ffffff', fontSize:70, textAlign:'center', marginTop:'12%', display:'grid'}}>Weaving Dreams into Web Reality</h1>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Button variant="outlined" 
        onMouseEnter={handleHover1} onMouseLeave={handleHoverLeft2}
        style={hover1 ? {color:"#070B2B", background:'#ffffff', margin:'25px auto'} : {borderColor:'#ffffff', color:'#ffffff', margin:'25px auto'}}>
        Dig into my universe
        </Button>
    </div>

    </>
  )
}
