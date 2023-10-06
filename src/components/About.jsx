import React from 'react'
import { useState } from 'react'
import { Box, Button } from '@mui/material'
import './About.css'
import Self from './self.png';

export default function () {
    const [hover, setHover] = useState(true);
    const [hoverUnderline2, setHoverUnderline2] = useState(true);
    const [hover1, setHover2] = useState(true);
    const handleHover = () => {
        setHover(false);
    }
    const handleHoverLeft = () => {
        setHover(true);
    }
    const handleHoverUnderline2 = () => {
        setHoverUnderline2(false);
    }
    const handleHoverUnderlineLeft2 = () => {
        setHoverUnderline2(true);
    }
    const handleHover1 = () => {
        setHover2(false);
    }
    const handleHoverLeft2 = () => {
        setHover2(true);
    }
  return (
    <>
     <Box style={{display:'flex', justifyContent:'space-between'}}>
        <Box>
            <h2 className='myName'>Sharmistha Debnath</h2>
        </Box> 
        <Box style={{display:'flex', padding:20}}>
            <Box style={{margin:'20px 10px'}}>
                <a style={{textDecoration:'underline', color:'#ffffff'}}>ABOUT</a>
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
        <Box style={{display:'flex', justifyContent:'space-between'}}>
            <img src={Self} alt="Self" style={{margin:'70px 25px 70px 70px', minWidth:'25%', minHeight:'25%'}}/>
            <Box style={{margin:'80px 15px 30px 15px'}}>
            <h1 style={{color:'#ffffff', margin:'20px 0'}}>Hi,</h1>
            <span style={{color:'#ffffff', lineHeight:'40px', fontSize:'22px'}}>I am <b>Sharmistha Debnath</b>, passionate <em>Frontend Developer</em>. I am proficient in creating dynamic and responsive user interfaces, with a keen eye for design aesthetics 
            and a solid understanding of web development principles. Quick learner, eager to contribute innovative solutions to create seamless user experiences. 
            Open to challenges and seeking opportunities to leverage creativity and technical expertise in a growth-oriented environment.<br/>
            &#10024; Available for Freelancing <br/> &#128640; Let's collaborate and bring your web projects to life!</span><br/>
            <a href='https://github.com/sharmisthadebnath26' style={{color:'#ffffff', margin:'auto'}} target='_blank'><Button variant="outlined" 
        onMouseEnter={handleHover1} onMouseLeave={handleHoverLeft2}
        style={hover1 ? {color:"#070B2B", background:'#ffffff', margin:'25px auto'} : {borderColor:'#ffffff', color:'#ffffff', margin:'25px auto'}}>
        Github Profile
        </Button></a>
            </Box>
        </Box>
        
        
    </>
  )
}
