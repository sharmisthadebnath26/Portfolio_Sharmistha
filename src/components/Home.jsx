import React, { useState } from 'react'
import { Box, Button } from '@mui/material'
import './Home.css'
import MediaQuery from 'react-responsive'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Home() {
    const [hover, setHover] = useState(true);
    const [hover1, setHover2] = useState(true);
    const [hoverUnderline1, setHoverUnderline1] = useState(true);
    const [hoverUnderline2, setHoverUnderline2] = useState(true);

    //responsive
    const [bar, setbar] = useState(true);


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

        <h1 style={{color:'#ffffff', fontSize:70, textAlign:'center', margin:'100px 15px 40px 15px', display:'grid'}}>Weaving Dreams into Web Reality</h1>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Button variant="outlined" 
        onMouseEnter={handleHover1} onMouseLeave={handleHoverLeft2}
        style={hover1 ? {color:"#070B2B", background:'#ffffff', margin:'10px auto'} : {borderColor:'#ffffff', color:'#ffffff', margin:'25px auto'}}>
        Dig into my universe
        </Button>
    </div>
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
                <a style={{textDecoration:'underline', color:'#121A2D'}}>ABOUT</a>
            </Box>
            <Box style={{margin:'20px 10px'}}>
                <a onMouseEnter={handleHoverUnderline2} onMouseLeave={handleHoverUnderlineLeft2} href='#' 
                style={hoverUnderline2 ? {textDecoration:'none', color:'#121A2D'} : {textDecoration:'underline', color:'#121A2D'}}>PROJECTS</a>
            </Box>
            <Box>
            <Button variant="outlined" 
        onMouseEnter={handleHover} onMouseLeave={handleHoverLeft} 
        style={hover ? {borderColor:'#121A2D', color:'#121A2D', margin:'10px', fontSize:'15px'}:{color:"#ffffff", background:'#121A2D', margin:'10px', fontSize:'15px'}}>
        Hit me up
        </Button>
        </Box>
        </Box>
        </Box>
        </Box>
        
        </Box>
        <h2 style={{color:'#ffffff', fontSize:70, textAlign:'center', margin:'100px 20px 25px 20px', display:'grid'}}>Weaving Dreams into Web Reality</h2>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Button variant="outlined" 
        onMouseEnter={handleHover1} onMouseLeave={handleHoverLeft2}
        style={hover1 ? {color:"#070B2B", background:'#ffffff', margin:'25px auto'} : {borderColor:'#ffffff', color:'#ffffff', margin:'25px auto'}}>
        Dig into my universe
        </Button>
    </div>
        </MediaQuery>
        
        <MediaQuery minWidth={280} maxWidth={320} >
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
                <a style={{textDecoration:'underline', color:'#121A2D'}}>ABOUT</a>
            </Box>
            <Box style={{margin:'20px 10px'}}>
                <a onMouseEnter={handleHoverUnderline2} onMouseLeave={handleHoverUnderlineLeft2} href='#' 
                style={hoverUnderline2 ? {textDecoration:'none', color:'#121A2D'} : {textDecoration:'underline', color:'#121A2D'}}>PROJECTS</a>
            </Box>
            <Box>
            <Button variant="outlined" 
        onMouseEnter={handleHover} onMouseLeave={handleHoverLeft} 
        style={hover ? {borderColor:'#121A2D', color:'#121A2D', margin:'10px', fontSize:'15px'}:{color:"#ffffff", background:'#121A2D', margin:'10px', fontSize:'15px'}}>
        Hit me up
        </Button>
        </Box>
        </Box>
        </Box>
        </Box>
        
        </Box>
        <h1 style={{color:'#ffffff', fontSize:50, textAlign:'center', margin:'100px 10px 25px 20px', display:'grid'}}>Weaving Dreams into Web Reality</h1>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Button variant="outlined" 
        onMouseEnter={handleHover1} onMouseLeave={handleHoverLeft2}
        style={hover1 ? {display:'block', color:"#070B2B", background:'#ffffff', margin:'25px auto'} : {display:'block', borderColor:'#ffffff', color:'#ffffff', margin:'25px auto'}}>
        Dig into my universe
        </Button>
    </div>
        </MediaQuery>
    </>
  )
}
