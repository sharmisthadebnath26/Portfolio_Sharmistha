import React, { useState } from 'react'
import { Box, Button } from '@mui/material'
import './Portfolio.css'
import MediaQuery from 'react-responsive'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Portfolio() {
  const [hover, setHover] = useState(true);
    const [hoverUnderline1, setHoverUnderline1] = useState(true);

    //responsive
    const [bar, setbar] = useState(true);


    const handleHover = () => {
        setHover(false);
    }
    const handleHoverLeft = () => {
        setHover(true);
    }

    const handleHoverUnderline1 = () => {
        setHoverUnderline1(false);
    }
    const handleHoverUnderlineLeft1 = () => {
        setHoverUnderline1(true);
    }

    //responsive
    const navbarOpen = () => {
        setbar(false);
    }
    const closeNavbar = () => {
        setbar(true);
    }

  return (
    <>
      <MediaQuery minWidth={900}>
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
                <a href='#' 
                style={{textDecoration:'underline', color:'#ffffff'}}>PROJECTS</a>
            </Box>
            <Box>
            <Button className='button' variant="outlined" 
        onMouseEnter={handleHover} onMouseLeave={handleHoverLeft} 
        style={hover ? {borderColor:'#ffffff', color:'#ffffff', margin:'13px'}:{borderColor:'#974484', color:"#ffffff", background:'#974484', margin:'13px'}}>
        Hit me up
        </Button>
            </Box>
        </Box>
        </Box>
        <Box>
        <h2 className='projects'>PROJECTS</h2>
        </Box>
    </MediaQuery>
        

    <MediaQuery minWidth={320} maxWidth={900} >
    <Box style={{display:'flex', justifyContent:'space-between', maxHeight:'100px'}}>
        <Box>
            <h2 className='myName'>Sharmistha Debnath</h2>
        </Box> 
        <Box style={{display:'block'}}>
        <MenuIcon style={{color:'#ffffff', margin:'35px 40px', fontSize:'35px', float:'right'}} onClick={navbarOpen} />
        <Box style={{backgroundColor:'#ffffff', display:'block', minwidth:'30%', maxWidth:'70%', marginRight:'10px', top:'20px', right:'0px'}} position="absolute">
        <CloseIcon onClick={closeNavbar} style={bar ? {display:'none'} : {float:'right', color:'#121A2D', margin:'10px'}}/>
        <Box style={bar ? {display:'none', padding:'10px'} : {display:'flex', flexDirection:'column', padding:'10px'}}>
            <Box style={{margin:'30px 10px 10px 5px'}}>
            <a onMouseEnter={handleHoverUnderline1} onMouseLeave={handleHoverUnderlineLeft1} href='#' 
                style={hoverUnderline1 ? {textDecoration:'none', color:'#974484'} : {textDecoration:'underline', color:'#974484'}}>ABOUT</a>
            </Box>
            <Box style={{margin:'20px 10px'}}>
            <a href='#' 
                style={{textDecoration:'underline', color:'#974484'}}>PROJECTS</a>
            </Box>
            <Box>
            <Button variant="outlined" 
        onMouseEnter={handleHover} onMouseLeave={handleHoverLeft} 
        style={hover ? {borderColor:'#974484', color:'#974484', margin:'13px'}:{borderColor:'#974484', color:"#ffffff", background:'#974484', margin:'13px'}}>
        Hit me up
        </Button>
        </Box>
        </Box>
        </Box>
        </Box>
        
        </Box>
        <Box>
        <h2 className='projects' style={{fontSize:'45px', marginTop:'55px', letterSpacing:'5px'}}>PROJECTS</h2>
        </Box>
        </MediaQuery>
        
        <MediaQuery minWidth={280} maxWidth={319} >
    <Box style={{display:'flex', justifyContent:'space-between', maxHeight:'100px'}}>
        <Box>
            <h2 className='myName'>Sharmistha Debnath</h2>
        </Box> 
        <Box style={{display:'block'}}>
        <MenuIcon style={{color:'#ffffff', margin:'35px 40px', fontSize:'35px', float:'right'}} onClick={navbarOpen} />
        <Box style={{backgroundColor:'#ffffff', display:'block', minwidth:'30%', maxWidth:'70%', marginRight:'10px', top:'20px', right:'0px'}} position="absolute">
        <CloseIcon onClick={closeNavbar} style={bar ? {display:'none'} : {float:'right', color:'#121A2D', margin:'10px'}}/>
        <Box style={bar ? {display:'none', padding:'10px'} : {display:'flex', flexDirection:'column', padding:'10px'}}>
            <Box style={{margin:'30px 10px 10px 5px'}}>
            <a onMouseEnter={handleHoverUnderline1} onMouseLeave={handleHoverUnderlineLeft1} href='#' 
                style={hoverUnderline1 ? {textDecoration:'none', color:'#974484'} : {textDecoration:'underline', color:'#974484'}}>ABOUT</a>
            </Box>
            <Box style={{margin:'20px 10px'}}>
            <a href='#' 
                style={{textDecoration:'underline', color:'#974484'}}>PROJECTS</a>
            </Box>
            <Box>
            <Button variant="outlined" 
        onMouseEnter={handleHover} onMouseLeave={handleHoverLeft} 
        style={hover ? {borderColor:'#974484', color:'#974484', margin:'13px'}:{borderColor:'#974484', color:"#ffffff", background:'#974484', margin:'13px'}}>
        Hit me up
        </Button>
        </Box>
        </Box>
        </Box>
        </Box>
        
        </Box>
        <Box>
        <h2 className='projects' style={{fontSize:'40px', marginTop:'50px', letterSpacing:'5px'}}>PROJECTS</h2>
        </Box>
        </MediaQuery>
    </>
  )
}
