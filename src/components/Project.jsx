import React, { useState } from 'react'
import { Box, Button } from '@mui/material'
import './Project.css'
import MediaQuery from 'react-responsive'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Image from './codepen.png';
import Textutils from './textutils.png';
import photoweb from './photeweb.png';
import calculator from './calculator.png';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function Portfolio() {
    const [hover, setHover] = useState(true);
    const [hoverUnderline1, setHoverUnderline1] = useState(true);
    const [hoverLink1, setHoverLink1] = useState(true);
    const [hoverLink2, setHoverLink2] = useState(true);
    const [hoverLink3, setHoverLink3] = useState(true);
    const [hoverLink4, setHoverLink4] = useState(true);
    const [contactMe, setContactMe] = useState(true);
    const [aboutMe, setAboutMe] = useState(true);
    const [like1, setLike1] = useState(true);
    const [like2, setLike2] = useState(true);
    const [like3, setLike3] = useState(true);
    const [like4, setLike4] = useState(true);

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
    const transparent = () => {
        setContactMe(false)
    }
    const green = () => {
        setContactMe(true)
    }
    const transparent1 = () => {
        setAboutMe(true)
    }
    const green1 = () => {
        setAboutMe(false)
    }
    const liked1 = () => {
        setLike1(false);
    }
    const liked2 = () => {
        setLike2(false);
    }
    const liked3 = () => {
        setLike3(false);
    }
    const liked4 = () => {
        setLike4(false);
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
      <MediaQuery minWidth={1207}>
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
        style={hover ? {borderColor:'#ffffff', color:'#ffffff', margin:'13px'}:{borderColor:'#974484', color:"#2E3445", background:'#ffffff', margin:'13px'}}>
        Hit me up
        </Button>
            </Box>
        </Box>
        </Box>
        <p className='projects'>PROJECTS</p>
        <div style={{display:'flex', justifyContent:'center', margin:'10px 25px 50px 25px'}}>
            <Button onMouseEnter={transparent} onMouseLeave={green} 
            style={contactMe ? {margin:'20px', color:'#2E3445', background:'#81C7BC', padding:'10px 25px', border:'1px solid #81C7BC'} : {margin:'20px', color:'#81C7BC', padding:'10px 25px', variant:'outlined', border:'1px solid #81C7BC'}}>CONTACT ME</Button>
            <Button onMouseEnter={green1} onMouseLeave={transparent1} 
            style={aboutMe ? {margin:'20px', color:'#81C7BC', border:'1px solid #81C7BC', variant:'outlined', padding:'10px 25px'} : {margin:'20px', color:'#2E3445', background:'#81C7BC', padding:'10px 25px', border:'1px solid #81C7BC'}}>Know Me</Button>
        </div>
        <div style={{display:'flex', justifyContent:'center', marginBottom:'20px'}}>
            <div className='codepen' style={{padding:'20px', borderRadius:'5px', marginRight:'20px'}}>
                <img src={Image} style={{width:'500px'}}/><br/>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <p style={{color:'#ffffff'}}>August 2023</p>
                <p style={{color:'#ffffff'}}>ReactJs · useContext Hooks</p>
                </div>
                <div style={{display:'flex', justifyContent:'space-between', margin:'10px 25px 5px 0px'}}>
                <a onMouseEnter={enlarge} onMouseLeave={normal} href='https://sharmisthadebnath26.github.io/CodePen-clone/' 
                style={hoverLink1 ? {fontSize:'25px', color:'#81C7BC', fontWeight:'bolder'} : {fontSize:'26px', color:'#81C7BC', fontWeight:'bolder'}} 
                target='_blank' title='Visit Site'>CodePen Clone</a>
                <FavoriteIcon onClick={liked1} style={like1 ? {color:'#ffffff'} : {color:'red'}}/>
                </div>
                
            </div>
            <div className='textutils' style={{padding:'20px', borderRadius:'5px', marginLeft:'20px'}}>
                <img src={Textutils} style={{width:'500px'}} />
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <p style={{color:'#ffffff'}}>September 2022 - October 2022</p>
                <p style={{color:'#ffffff'}}>ReactJs</p>
                </div>
                <div style={{display:'flex', justifyContent:'space-between', margin:'10px 25px 5px 0px'}}>
                <a onMouseEnter={enlarge2} onMouseLeave={normal2} href='https://sharmisthadebnath26.github.io/Text-utils/' 
                style={hoverLink2 ? {fontSize:'25px', color:'#81C7BC', fontWeight:'bolder'} : {fontSize:'26px', color:'#81C7BC', fontWeight:'bolder'}} 
                target='_blank' title='Visit Site'>TextUtils</a>
                
                <FavoriteIcon onClick={liked2} style={like2 ? {color:'#ffffff'} : {color:'red'}}/>
                </div>
            </div>
        </div>

        <div style={{display:'flex', justifyContent:'center', margin:'20px 0'}}>
            <div className='photoweb' style={{padding:'20px', borderRadius:'5px', marginRight:'20px'}}>
                <img src={photoweb} style={{width:'500px'}}/><br/>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <p style={{color:'#ffffff'}}>October 2022 - November 2022</p>
                <p style={{color:'#ffffff'}}>Bootstrap Framework</p>
                </div>

                <div style={{display:'flex', justifyContent:'space-between', margin:'10px 25px 5px 0px'}}>
                <a onMouseEnter={enlarge3} onMouseLeave={normal3} href='https://sharmisthadebnath26.github.io/E-commerce-Photography-website/' 
                style={hoverLink3 ? {fontSize:'25px', color:'#81C7BC', fontWeight:'bolder'} : {fontSize:'26px', color:'#81C7BC', fontWeight:'bolder'}} 
                target='_blank' title='Visit Site'>E-commerce Photography Website</a>
                <FavoriteIcon onClick={liked3} style={like3 ? {color:'#ffffff'} : {color:'red'}}/>
                </div>
                
                
            </div>
            <div className='calculator' style={{padding:'20px', borderRadius:'5px', marginLeft:'20px'}}>
                <img src={calculator} style={{width:'500px'}} />
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <p style={{color:'#ffffff'}}>October 2022</p>
                <p style={{color:'#ffffff'}}>HTML5, CSS3, JavaScript</p>
                </div>
                <div style={{display:'flex', justifyContent:'space-between', margin:'10px 25px 5px 0px'}}>
                <a onMouseEnter={enlarge4} onMouseLeave={normal4} href='https://sharmisthadebnath26.github.io/Calculator/' 
                style={hoverLink4 ? {fontSize:'25px', color:'#81C7BC', fontWeight:'bolder'} : {fontSize:'26px', color:'#81C7BC', fontWeight:'bolder'}} 
                target='_blank' title='Visit Site'>Calculator</a>
                <FavoriteIcon onClick={liked4} style={like4 ? {color:'#ffffff'} : {color:'red'}}/>
                </div>
                
            </div>
        </div>
    </MediaQuery>
        

    <MediaQuery minWidth={320} maxWidth={1207} >
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
                style={hoverUnderline1 ? {textDecoration:'none', color:'##2E3445'} : {textDecoration:'underline', color:'#2E3445'}}>ABOUT</a>
            </Box>
            <Box style={{margin:'20px 10px'}}>
            <a href='#' 
                style={{textDecoration:'underline', color:'##2E3445'}}>PROJECTS</a>
            </Box>
            <Box>
            <Button variant="outlined" 
        onMouseEnter={handleHover} onMouseLeave={handleHoverLeft} 
        style={hover ? {borderColor:'#2E3445', color:'#2E3445', margin:'13px'}:{borderColor:'#2E3445', color:"#ffffff", background:'#2E3445', margin:'13px'}}>
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
                style={hoverUnderline1 ? {textDecoration:'none', color:'#2E3445'} : {textDecoration:'underline', color:'#2E3445'}}>ABOUT</a>
            </Box>
            <Box style={{margin:'20px 10px'}}>
            <a href='#' 
                style={{textDecoration:'underline', color:'#2E3445'}}>PROJECTS</a>
            </Box>
            <Box>
            <Button variant="outlined" 
        onMouseEnter={handleHover} onMouseLeave={handleHoverLeft} 
        style={hover ? {borderColor:'#2E3445', color:'#2E3445', margin:'13px'}:{borderColor:'#2E3445', color:"#ffffff", background:'#2E3445', margin:'13px'}}>
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
