import React, { useState } from 'react'
import { Box, Button } from '@mui/material'
import './Portfolio.css'
import MediaQuery from 'react-responsive'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Image from './codepen.png';
import Textutils from './textutils.png';
import photoweb from './photeweb.png';
import calculator from './calculator.png';


export default function Portfolio() {
    const [hover, setHover] = useState(true);
    const [hoverUnderline1, setHoverUnderline1] = useState(true);
    const [hoverLink1, setHoverLink1] = useState(true);
    const [hoverLink2, setHoverLink2] = useState(true);
    const [hoverLink3, setHoverLink3] = useState(true);
    const [hoverLink4, setHoverLink4] = useState(true);

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
    const enlarge = () => {
        setHoverLink1(false);
    }
    const normal = () => {
        setHoverLink1(true);
    }
    const enlarge2 = () => {
        setHoverLink2(false);
    }
    const normal2 = () => {
        setHoverLink2(true);
    }
    const enlarge3 = () => {
        setHoverLink3(false);
    }
    const normal3 = () => {
        setHoverLink3(true);
    }
    const enlarge4 = () => {
        setHoverLink4(false);
    }
    const normal4 = () => {
        setHoverLink4(true);
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
        <div style={{display:'flex', justifyContent:'center', marginBottom:'20px'}}>
            <div className='codepen' style={{padding:'20px', borderRadius:'5px', marginRight:'20px'}}>
                <img src={Image} style={{width:'500px'}}/><br/>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <p style={{color:'#ffffff'}}>August 2023</p>
                <p style={{color:'#ffffff'}}>ReactJs · useContext Hooks</p>
                </div>
                <a onMouseEnter={enlarge} onMouseLeave={normal} href='https://sharmisthadebnath26.github.io/CodePen-clone/' 
                style={hoverLink1 ? {fontSize:'25px', color:'#121A2D', fontWeight:'bolder'} : {fontSize:'26px', color:'#121A2D', fontWeight:'bolder'}} 
                target='_blank' title='Visit Site'>CodePen Clone</a>
                
            </div>
            <div className='textutils' style={{padding:'20px', borderRadius:'5px', marginLeft:'20px'}}>
                <img src={Textutils} style={{width:'500px'}} />
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <p style={{color:'#ffffff'}}>September 2022 - October 2022</p>
                <p style={{color:'#ffffff'}}>ReactJs</p>
                </div>
                <a onMouseEnter={enlarge2} onMouseLeave={normal2} href='https://sharmisthadebnath26.github.io/Text-utils/' 
                style={hoverLink2 ? {fontSize:'25px', color:'#121A2D', fontWeight:'bolder'} : {fontSize:'26px', color:'#121A2D', fontWeight:'bolder'}} 
                target='_blank' title='Visit Site'>TextUtils</a>
            </div>
        </div>

        <div style={{display:'flex', justifyContent:'center', margin:'20px 0'}}>
            <div className='photoweb' style={{padding:'20px', borderRadius:'5px', marginRight:'20px'}}>
                <img src={photoweb} style={{width:'500px'}}/><br/>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <p style={{color:'#ffffff'}}>October 2022 - November 2022</p>
                <p style={{color:'#ffffff'}}>Bootstrap Framework</p>
                </div>
                <a onMouseEnter={enlarge3} onMouseLeave={normal3} href='https://sharmisthadebnath26.github.io/E-commerce-Photography-website/' 
                style={hoverLink3 ? {fontSize:'25px', color:'#121A2D', fontWeight:'bolder'} : {fontSize:'26px', color:'#121A2D', fontWeight:'bolder'}} 
                target='_blank' title='Visit Site'>E-commerce Photography Website</a>
                
            </div>
            <div className='calculator' style={{padding:'20px', borderRadius:'5px', marginLeft:'20px'}}>
                <img src={calculator} style={{width:'500px'}} />
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <p style={{color:'#ffffff'}}>October 2022</p>
                <p style={{color:'#ffffff'}}>HTML5, CSS3, JavaScript</p>
                </div>
                <a onMouseEnter={enlarge4} onMouseLeave={normal4} href='https://sharmisthadebnath26.github.io/Calculator/' 
                style={hoverLink4 ? {fontSize:'25px', color:'#121A2D', fontWeight:'bolder'} : {fontSize:'26px', color:'#121A2D', fontWeight:'bolder'}} 
                target='_blank' title='Visit Site'>Calculator</a>
            </div>
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
