import React from 'react'
import { useState } from 'react'
import { Box, Button } from '@mui/material'
import './About.css'
import Self from './self.png';
import MediaQuery from 'react-responsive'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


export default function () {

    //hover effect
    const [hover, setHover] = useState(true);
    const [hoverUnderline2, setHoverUnderline2] = useState(true);
    const [hover1, setHover2] = useState(true);

    //responsive
    const [bar, setbar] = useState(true);

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

    //responsive
    const navbarOpen = () => {
        setbar(false);
    }
    const closeNavbar = () => {
        setbar(true);
    }

  return (
    <>
    <MediaQuery minWidth={1472}>
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
            <a href='https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:101abd32-e2d7-3d9c-ac9a-4a0ecc2068f8' style={{color:'#ffffff', textDecoration:'none'}} target='_blank'><Button variant="outlined" 
        onMouseEnter={handleHover1} onMouseLeave={handleHoverLeft2}
        style={hover1 ? {color:"#070B2B", background:'#ffffff', margin:'25px 0'} : {display:'block', borderColor:'#ffffff', color:'#ffffff', margin:'25px 0'}}>
        My Resume
        </Button></a>
        </Box>
        </Box>
    </MediaQuery>
    <MediaQuery minWidth={1358} maxWidth={1471}>
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
            <img src={Self} alt="Self" style={{margin:'100px 25px 70px 70px', width:'400px', height:'400px'}}/>
            <Box style={{margin:'80px 15px 30px 15px'}}>
            <h1 style={{color:'#ffffff', margin:'20px 0'}}>Hi,</h1>
            <span style={{color:'#ffffff', lineHeight:'40px', fontSize:'22px'}}>I am <b>Sharmistha Debnath</b>, passionate <em>Frontend Developer</em>. I am proficient in creating dynamic and responsive user interfaces, with a keen eye for design aesthetics 
            and a solid understanding of web development principles. Quick learner, eager to contribute innovative solutions to create seamless user experiences. 
            Open to challenges and seeking opportunities to leverage creativity and technical expertise in a growth-oriented environment.<br/>
            &#10024; Available for Freelancing <br/> &#128640; Let's collaborate and bring your web projects to life!</span><br/>
            <a href='https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:101abd32-e2d7-3d9c-ac9a-4a0ecc2068f8' style={{color:'#ffffff', textDecoration:'none'}} target='_blank'><Button variant="outlined" 
        onMouseEnter={handleHover1} onMouseLeave={handleHoverLeft2}
        style={hover1 ? {color:"#070B2B", background:'#ffffff', margin:'25px 0'} : {borderColor:'#ffffff', color:'#ffffff', margin:'25px 0'}}>
        My Resume
        </Button></a>
        </Box>
        </Box>
    </MediaQuery>

    <MediaQuery minWidth={900} maxWidth={1358} >
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
        
            <img src={Self} alt="Self" style={{display:'block', margin:'100px auto 50px auto', width:'250px', height:'280px'}}/>
            <Box>
            <h1 style={{color:'#ffffff', margin:'10px 25px 15px 25px'}}>Hi,</h1>
            <p style={{color:'#ffffff', lineHeight:'40px', fontSize:'25px', margin:'5px 25px'}}>I am <em>Sharmistha Debnath</em>, passionate <b>Frontend Developer</b>. I am proficient in creating dynamic and responsive user interfaces, with a keen eye for design aesthetics 
            and a solid understanding of web development principles. Quick learner, eager to contribute innovative solutions to create seamless user experiences. 
            Open to challenges and seeking opportunities to leverage creativity and technical expertise in a growth-oriented environment.<br/>
            &#10024; Available for Freelancing <br/> &#128640; Let's collaborate and bring your web projects to life!</p><br/>
            <a href='https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:101abd32-e2d7-3d9c-ac9a-4a0ecc2068f8' style={{color:'#ffffff', textDecoration:'none'}} target='_blank' rel="noreferrer"><Button variant="outlined" 
        onMouseEnter={handleHover1} onMouseLeave={handleHoverLeft2}
        style={hover1 ? {display:'block', color:"#070B2B", background:'#ffffff', margin:'30px auto 25px auto'} : {display:'block', borderColor:'#ffffff', color:'#ffffff', margin:'10px auto 25px auto'}}>
        My Resume
        </Button></a>
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
        
            <img src={Self} alt="Self" style={{display:'block', margin:'50px auto', width:'250px', height:'280px'}}/>
            <Box>
            <h1 style={{color:'#ffffff', margin:'10px 25px 15px 25px'}}>Hi,</h1>
            <p style={{color:'#ffffff', lineHeight:'40px', fontSize:'18px', margin:'5px 25px'}}>I am <em>Sharmistha Debnath</em>, passionate <b>Frontend Developer</b>. I am proficient in creating dynamic and responsive user interfaces, with a keen eye for design aesthetics 
            and a solid understanding of web development principles. Quick learner, eager to contribute innovative solutions to create seamless user experiences. 
            Open to challenges and seeking opportunities to leverage creativity and technical expertise in a growth-oriented environment.<br/>
            &#10024; Available for Freelancing <br/> &#128640; Let's collaborate and bring your web projects to life!</p><br/>
            <a href='https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:101abd32-e2d7-3d9c-ac9a-4a0ecc2068f8' style={{color:'#ffffff', textDecoration:'none'}} target='_blank' rel="noreferrer"><Button variant="outlined" 
        onMouseEnter={handleHover1} onMouseLeave={handleHoverLeft2}
        style={hover1 ? {display:'block', color:"#070B2B", background:'#ffffff', margin:'10px auto 25px auto'} : {display:'block', borderColor:'#ffffff', color:'#ffffff', margin:'10px auto 25px auto'}}>
        My Resume
        </Button></a>
        </Box>
    </MediaQuery>
    <MediaQuery minWidth={270} maxWidth={319} >
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
        
            <img src={Self} alt="Self" style={{display:'block', margin:'50px auto', width:'250px', height:'280px'}}/>
            <Box>
            <h1 style={{color:'#ffffff', margin:'10px 25px 15px 25px'}}>Hi,</h1>
            <p style={{color:'#ffffff', lineHeight:'40px', fontSize:'18px', margin:'5px 25px'}}>I am <em>Sharmistha Debnath</em>, passionate <b>Frontend Developer</b>. I am proficient in creating dynamic and responsive user interfaces, with a keen eye for design aesthetics 
            and a solid understanding of web development principles. Quick learner, eager to contribute innovative solutions to create seamless user experiences. 
            Open to challenges and seeking opportunities to leverage creativity and technical expertise in a growth-oriented environment.<br/>
            &#10024; Available for Freelancing <br/> &#128640; Let's collaborate and bring your web projects to life!</p><br/>
            <a href='https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:101abd32-e2d7-3d9c-ac9a-4a0ecc2068f8' style={{color:'#ffffff', textDecoration:'none'}} target='_blank' rel="noreferrer"><Button variant="outlined" 
        onMouseEnter={handleHover1} onMouseLeave={handleHoverLeft2}
        style={hover1 ? {display:'block', color:"#070B2B", background:'#ffffff', margin:'10px auto 25px auto'} : {display:'block', borderColor:'#ffffff', color:'#ffffff', margin:'10px auto 25px auto'}}>
        My Resume
        </Button></a>
        </Box>
    </MediaQuery>



     
        
        
    </>
  )
}
