import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Script from 'next/script';
import AvatarSlider from './AvatarSlider';
import SocialMedia from './SocialMedia';
import Footer from './Footer';
import Events from './Events';
import RoadMap from './RoadMap';
import MetaSlider from './MetaSlider';


const useStyles = makeStyles((theme) => ({
    welcomediv:{
        width:'80%',
        border:'solid 2px white',
        borderRadius:'15px',
        backgroundColor:'#1208276b',
        backdropFilter: 'blur(10PX)',
        padding:'20px 20px 20px 20px',
        backgroundPosition: 'center center',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        height:'300px',
        color:'white',
        fontSize:'39px',
        transition:' 2s',
        cursor:'pointer',
        [theme.breakpoints.down("980")]: {
            fontSize:'34px',
          },
          [theme.breakpoints.down("710")]: {
            fontSize:'30px',
          },
          [theme.breakpoints.down("376")]: {
            fontSize:'26px',
          },
    },
    rootgridwelcome:{
        marginBottom:'200px ',
        transition:' 2s',
        [theme.breakpoints.down("600")]: {
            marginBottom:'80px ',
          },
    },
    rootgridwelcomeroot:{
        [theme.breakpoints.down("600")]: {
            backgroundPosition: 'center center',
            margin: 'auto',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          },
    },

    root:{
        backgroundImage:'url("/img/header/hero1.png")',
        width:'100% !important',
        backgroundRepeat:'no-repeat',
        backgroundSize:'100vw 100vh',
        overflow:'hidden',
        [theme.breakpoints.down("980")]: {
          backgroundImage:'url("/img/header/hero.png")',
          backgroundSize:'130vw 100vh',
        },
        [theme.breakpoints.down("750")]: {
          backgroundImage:'url("/img/header/hero.png")',
          backgroundSize:'145vw 100vh',
        },
        [theme.breakpoints.down("650")]: {
          backgroundImage:'url("/img/header/hero.png")',
          backgroundSize:'155vw 100vh',
        },
        [theme.breakpoints.down("550")]: {
          backgroundImage:'url("/img/header/hero.png")',
          backgroundSize:'175vw 100vh',
        },
        [theme.breakpoints.down("450")]: {
          backgroundImage:'url("/img/header/hero.png")',
          backgroundSize:'305vw 100vh',
        },
      },
   

    titlewelcome:{
        color:'white',
        fontSize:'50px',
        marginTop:'20vh',
        marginBottom:'2vh',
        marginLeft:'30px',
        transition:' 2s',
        [theme.breakpoints.down("980")]: {
            fontSize:'41px',
          },
          [theme.breakpoints.down("710")]: {
            fontSize:'37px',
            marginBottom:'46px',
          },
          [theme.breakpoints.down("376")]: {
            fontSize:'32px',
            marginLeft:'17px',
          },
    },
    
  
    root2gridwelcometitle:{
        color:'white',
        fontSize:'45px',
        marginTop:'16vh',
        marginBottom:'76px',
        paddingLeft:'12%',
        [theme.breakpoints.down("1000")]: {
            fontSize:'39px',
          },
          [theme.breakpoints.down("600")]: {
            fontSize:'30px',
            paddingLeft:'8%',
            paddingRight:'8%',
          },
    },
    root2gridwelcomebuy1:{
        backgroundColor:'white',
        color:'white',
        border:'solid 2px white',
       borderRadius:'80px',
       width:'250px',
       padding:'16px 15px 16px 15px',
       color:'#802690',
       fontSize:'20px',
       marginLeft:'12%',
       fontWeight:'700',
       cursor:'pointer',
       boxShadow: 'rgba(255, 255, 255, 0.322) 0px 2px 4px 0px, rgba(255, 255, 255, 0.404) 0px 2px 16px 0px',
       "&:hover": {
        backgroundColor:'inherit',
        color:'white',
        boxShadow: 'rgba(255, 255, 255, 0) 0px 2px 4px 0px, rgba(255, 255, 255, 0) 0px 2px 16px 0px',
        border:'solid 2px white',
      },
      [theme.breakpoints.down("1000")]: {
        fontSize:'18px',
        width:'190px',
        padding:'14px 13px 14px 13px',
      },
      [theme.breakpoints.down("600")]: {
        fontSize:'16px',
        marginLeft:'8%',
        display:'block',
        marginRight:'8%',
        width:'180px',
        padding:'9px 8px 9px 8px',
      },
    },
    root2gridwelcomebuy:{
      backgroundColor:'inherit',
      color:'white',
     
      border:'solid 2px white',
       borderRadius:'80px',
       width:'250px',
       padding:'16px 15px 16px 15px',
       color:'#802690',
       fontSize:'20px',
       marginLeft:'12%',
       fontWeight:'700',
       cursor:'pointer',
       boxShadow: 'rgba(255, 255, 255, 0.322) 0px 2px 4px 0px, rgba(255, 255, 255, 0.404) 0px 2px 16px 0px',
       "&:hover": {
        backgroundColor:'inherit',
        color:'white',
        boxShadow: 'rgba(255, 255, 255, 0) 0px 2px 4px 0px, rgba(255, 255, 255, 0) 0px 2px 16px 0px',
        border:'solid 2px white',
      },
      [theme.breakpoints.down("1000")]: {
        fontSize:'18px',
        width:'190px',
        padding:'14px 13px 14px 13px',
      },
      [theme.breakpoints.down("600")]: {
        fontSize:'16px',
        marginLeft:'8%',
        display:'block',
        marginRight:'8%',
        width:'180px',
        padding:'9px 8px 9px 8px',
      },
    },

    root2gridwelcomeset:{
        backgroundColor:'inherit',
        borderRadius:'80px',
        width:'250px',
        padding:'16px 15px 16px 15px',
        color:'white',
        border:'none',
        outline:'none',
        fontSize:'20px',
        border:'solid 2px white',
        marginLeft:'20px',
        fontWeight:'600',
        cursor:'pointer',
        [theme.breakpoints.down("1000")]: {
            fontSize:'18px',
            width:'190px',
            padding:'14px 13px 14px 13px',
          },
          [theme.breakpoints.down("600")]: {
            fontSize:'16px',
            marginLeft:'8%',
            marginRight:'8%',
            marginTop:'20px',
            width:'180px',
            padding:'9px 8px 9px 8px',
          },
     },
     rootimg1:{
      position: 'absolute',
      zIndex:'0',
      width:'50%',
      bottom:'8%',
      right:'5%',
      transform:'scale(1,1)',
      [theme.breakpoints.down("980")]: {
        display:'none'
      },
     },
     rootimg2:{
      position: 'absolute',
      zIndex:'0',
      width:'14%',
      top:'10%',
      right:'8%',
      [theme.breakpoints.down("980")]: {
        display:'none'
      },
     },
     rootimg3:{
      position: 'absolute',
      zIndex:'0',
      width:'20%',
      bottom:'8%',
      left:'0%',
      [theme.breakpoints.down("980")]: {
        display:'none'
      },
     },
     rootimg4:{
      position: 'absolute',
      zIndex:'0',
      width:'70%',
      top:'-10%',
      right:'20%',
      [theme.breakpoints.down("980")]: {
        display:'none'
      },
     },
     rootimg5:{
      position: 'absolute',
      zIndex:'0',
      width:'10%',
      top:'25%',
      left:'-4%',
      [theme.breakpoints.down("980")]: {
        display:'none'
      },
     },

     rootimg6:{
      position: 'absolute',
      zIndex:'0',
      width:'24%',
      top:'30%',
      right:'-7%',
      [theme.breakpoints.down("980")]: {
        display:'none'
      },
     }



}));

function Header() {
    const classes = useStyles();
  return (
    <div id="zoom" className={classes.root}>
      <img  id="img1" className={classes.rootimg1} src="/img/header/Asset 1.png"/>
      <img id="img2" className={classes.rootimg2} src="/img/header/Asset 2.png"/>
      <img id="img3" className={classes.rootimg3} src="/img/header/Asset 3.png"/>
      <img  id="img4" className={classes.rootimg4} src="/img/header/Asset 4.png"/>
      <img id="img5" className={classes.rootimg5} src="/img/header/Asset 5.png"/>
      <img id="img6" className={classes.rootimg6} src="/img/header/Asset 10.png"/>

        <div id="asd" className="asd"> 
        <Grid container spacing={0}>
            <Grid item xs={12} sm={12} lg={1} xl={1}>
            </Grid> 
        <Typography id="bbbb" className={classes.titlewelcome}><b>Welcome To Lucretius</b></Typography>
        </Grid> 
        <Grid className={classes.rootgridwelcomeroot} container spacing={1}>   
            <Grid item xs={12} sm={12} lg={1} xl={0}>
            </Grid> 
            
            <Grid className={classes.rootgridwelcome} item xs={11} sm={6} lg={3} xl={2}>
                <a href='https://lucretius.games/playground.html' >
                   <div id="ccc" className={classes.welcomediv}>
                     PLAYGROUND
                    </div>  
                </a>
               
            </Grid>
            <Grid className={classes.rootgridwelcome} item xs={11} sm={6} lg={3} xl={2}>
           
                <div id="fadeOut" className={classes.welcomediv}>
                    OFFICIAL <br/>WEBSITE
                </div>
           
            </Grid>
            <Grid item xs={12} sm={12} lg={3} xl={6}>
            </Grid>
           
        </Grid>


        </div>

       <div className="qwe" id="qwe">
      <a href="/HomePage"><img id="img" className="headerluclogohome" src='/img/exchange/logoo.png'/></a> 
        <button  className="headerbtnmodal" id="myBtn">
         <span className="headerbtnmodalspan1"></span>
         <span className="headerbtnmodalspan2"></span>
         <span className="headerbtnmodalspan2"></span>
        </button>
        <Grid id="gridheader"  container spacing={0}>   

                <div id="myModal" className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                    <span className="close">&times;</span>
                    <h2>
                        <img className="modallogoluc" src='/img/exchange/logoo.png'/>
                    </h2>
                    </div>
                    <div className="modal-header">
                    <Grid container spacing={3}> 
                    <Grid className={classes.modalgrid} item xs={4} sm={4} lg={5} xl={5}>
                        <ul className="modalul">
                            <li><a href="/HomePage">Home</a></li>
                            <br/>
                            <li><a href="/Docs">Docs</a></li>
                            <br/>
                            <li><a href="#">Luc Token</a></li>
                            <br/>
                            <li><a href="/AboutUs">About Us</a></li>
                            <br/>
                            <li><a href="/Games">Games</a></li>
                        </ul>
                    </Grid>
                    <Grid className={classes.modalgrid} item xs={8} sm={8} lg={6} xl={6}>
                            <div className="modaltext">
                             The Lucretius project is an exciting new metaverse with lots of unique features. In addition to a compelling plot, the game is loaded with lots of activities for players to engage in. an example of these fantastic features is the in-game cross-chain NFT marketplace that allows players to trade their NFTs across various blockchain networks.
                            </div>  
                            <div className="modalsocialmedia">
                              <a href="https://t.me/LucretiusNet"><img className="headersocialicon" src='/img/header/telegram.svg'/></a> 
                              <a href="https://www.youtube.com/channel/UC4gZGGIPaAprfC2vH_-r9cw"><img className="headersocialicon" src='/img/header/icon_youtube.svg'/></a>  
                              <a href='https://twitter.com/LucretiusNet'><img className="headersocialicon" src='/img/header/twitter.svg'/></a>    
                              <a href="https://discord.com/invite/mBErZap2Zr"><img className="headersocialicon" src='/img/header/discord.svg'/></a>   
                            </div>      
                    </Grid>
                    <Grid className={classes.modalgrid} item xs={12} sm={12} lg={12} xl={12}>
                            <Typography className="modalluc">
                               <b> LUCRETIUS</b> 
                            </Typography>
                            <Typography className="modalluc2">
                               <b>  LUCRET<span className="modalluc2span">IUS</span></b>
                            </Typography>
                    </Grid>
                    </Grid>
                    </div>
                </div>
                </div>

                
                <Grid className={classes.root2gridwelcome} item xs={12} sm={10} lg={7} xl={5}>
                <div id="titleluc" className={classes.root2gridwelcometitle}>

                    <div className="containerrr">
                        <p className="titleee title111">  <b> DECENTRALIZED METAVERSE OF ENDLESS ADVENTURE AND ENTERTAINMENT</b></p>
                    </div>
              
                </div>
                <div className="containerrr2">
                    <div className="titleee2 title1112">
                    <button id="sub3"  className={classes.root2gridwelcomebuy1}>
                        Buy Now
                    </button>
                    <div className="modal-parent" id="modal-parent3">
                              <div className="modalsub">
                            
                    
                        <Grid container spacing={0}> 
                            
                                   <Grid
                                    style={{        
                                             backgroundPosition: 'center center',
                                              margin: 'auto',
                                              justifyContent: 'center',
                                              alignItems: 'center',
                                              display: 'flex',}}
                                              item xs={12} sm={12} lg={12} xl={12}>
                                     <a target="_blank" href="https://www.mexc.com/exchange/LUC_USDT" rel="noreferrer">
                                   <button className={classes.root2gridwelcomebuy}>
                                   mexc
                                  </button>
                                  <br/>
                                  <br/>
                                     </a>
                                     <br/> <br/>
                                   </Grid>
                                   <br/> <br/>
                                   <Grid
                                                  style={{        
                                                    backgroundPosition: 'center center',
                                                     margin: 'auto',
                                                     justifyContent: 'center',
                                                     alignItems: 'center',
                                                     display: 'flex',}}
                                   item xs={12} sm={12} lg={12} xl={12}>
                                   <a target="_blank" href="https://www.bitrue.com/trade/luc_usdt" rel="noreferrer">
                                                                          <button className={classes.root2gridwelcomebuy}>
                                                                          bitrue
                                  </button>
                                  <br/> <br/>
                                       </a>

                                   </Grid>
                                   <Grid
                                                  style={{        
                                                    backgroundPosition: 'center center',
                                                     margin: 'auto',
                                                     justifyContent: 'center',
                                                     alignItems: 'center',
                                                     display: 'flex',}}
                                   item xs={12} sm={12} lg={12} xl={12}>
                                   <a target="_blank" href="https://www.probit.com/app/exchange/LUC-USDT" rel="noreferrer">
                                                                          <button className={classes.root2gridwelcomebuy}>
                                                                          probit
                                  </button>
                                  <br/> <br/>
                                       </a>

                                   </Grid>
                                   <Grid
                                                  style={{        
                                                    backgroundPosition: 'center center',
                                                     margin: 'auto',
                                                     justifyContent: 'center',
                                                     alignItems: 'center',
                                                     display: 'flex',}}
                                   item xs={12} sm={12} lg={12} xl={12}>
                                   <a target="_blank" href="https://sologenic.org/trade?market=LUC%2BrsygE5ynt2iSasscfCCeqaGBGiFKMCAUu7%2FXRP&network=mainnet" rel="noreferrer">
                                                                        <button className={classes.root2gridwelcomebuy}>
                                                                        sologenic
                                  </button>  
                                  <br/> <br/>
                                       </a>

                                   </Grid>
                                   <Grid 
                                                  style={{        
                                                    backgroundPosition: 'center center',
                                                     margin: 'auto',
                                                     justifyContent: 'center',
                                                     alignItems: 'center',
                                                     display: 'flex',}}
                                   item xs={12} sm={12} lg={12} xl={12}>
                                   <a target="_blank" href="https://www.xt.com/trade/luc_usdt" rel="noreferrer">
                                                                        <button className={classes.root2gridwelcomebuy}>
                                                                        xt
                                  </button>  
                                       </a>

                                   </Grid>
                                
                                   
                              </Grid>
                        
                                <span className="X" id="X3">&times;</span>
                              </div>
                            </div>
                         
                            <a target="_blank" href="https://xrpl.services/?issuer=rsygE5ynt2iSasscfCCeqaGBGiFKMCAUu7&currency=LUC&limit=1000000000" rel="noreferrer">
                            <button id="btnset"  className={classes.root2gridwelcomeset}>
                                    Set Trustline
                            </button>
                            </a>
                    </div>
                </div>
               
                </Grid>
                <Grid className={classes.root2gridwelcome} item xs={12} sm={2} lg={5} xl={5}>
                
                </Grid>
                <Grid item xs={6} sm={6} lg={6} xl={6}>
              
                <div className="containerrr3">
                  <a href="#footer">
                    <div className="titleee3 title1113">
                    <div className="headerscroll" id="scroll-down-animation">
                    <span className="mouse">
                        <span className="move"></span>
                    </span> 
                   
                    <h2 className="headerscrolltext">Scroll down</h2> 
                    
                    </div>
                    </div> 
                     </a> 
                </div>
               
                </Grid>
          
                <Grid item xs={6} sm={6} lg={6} xl={6}>
                <div className="containerrr4">
                    <div className="titleee4 title1114">
                        <div id="social"  className="headersocialroot">
                              <a href="https://t.me/LucretiusNet"><img className="headersocialicon" src='/img/header/telegram.svg'/></a> 
                              <a href="https://www.youtube.com/channel/UC4gZGGIPaAprfC2vH_-r9cw"><img className="headersocialicon" src='/img/header/icon_youtube.svg'/></a>  
                              <a href='https://twitter.com/LucretiusNet'><img className="headersocialicon" src='/img/header/twitter.svg'/></a>    
                              <a href="https://discord.com/invite/mBErZap2Zr"><img className="headersocialicon" src='/img/header/discord.svg'/></a>   
                        </div>
                    </div>
                </div>
                   
                </Grid>
            
        </Grid>    
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <div>
          <Typography className="sotitle2">
                 <b>AVAT<span className="title2sospan">ARS</span></b>
            </Typography>
            <Typography className="sotitle1">
              <b>AVATARS</b> 
            </Typography>
            <AvatarSlider/>
          </div>
          <br/><br/><br/><br/><br/><br/>
         <div>
            <Events/>
         </div>
         <div>
           <SocialMedia/>
         </div>

         <br/><br/><br/><br/><br/><br/>
         <Typography className="sotitle2">
                 <b>ENVIRON<span className="title2sospan">MENT</span></b>
            </Typography>
            <Typography className="sotitle1">
              <b>ENVIRONMENT</b> 
            </Typography>
         <MetaSlider/>
         <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
         <div>
           <RoadMap/>
         </div>
         <br/><br/><br/><br/><br/><br/>
         <div id="footer">
         <Footer />
         </div> 
    
      </div>
      
      


           <Script
              id="stripe-jssaoo"
              src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
              onLoad={() => {
                $(document).ready(function(){
    
                    $('#fadeOut').click(function() {
                        // $('#bbbb').css('opacity','1');
                        // $('#slideMeeee').fadeIn();
                        
                            $('#asd').animate({
                                opacity: '0',
                                height: '10px',
                                width: '350px',
                                transition:'5s'
                            });
                            $('#fadeOut').animate({
                                opacity: '0',
                                height: '10px',
                                width: '350px',
                                transition:'1.8s'
                            });
                            $('#ccc').animate({
                                opacity: '0',
                                height: '10px',
                                width: '350px',
                                transition:'.5s'
                            });
                            $('#bbbb').animate({
                                opacity: '0',
                                height: '10px',
                                transition:'1s'
                            });
                          
                            // $('#zoom').animate({
                            //     transform: 'scale3d(1.5,1.5,1.5)',
                            //     transition:'6s'
                            // });
                            $('#qwe').css({
                                "opacity":"0",
                                "display":"block",
                            }).show().animate({opacity:1});

                            $('#zoom').css({
                             
                              "display":"block",
                              
                              "transition":"3s",
                              "animation-delay":"3s",
                            
                              "animation-duration":"4.9s",
                             
                          }).show().animate({
                             
                              // backgroundSize: '150% 20%',
                              
                          });
                    

                        $('#img1').animate({
                          position: 'absolute',
                          zIndex:'0',
                          width:'55%',
                          bottom:'8%',
                          right:'2%',
                          transform:'scale(1.6,1.6)',
                          transition:'2s',
                      });
                      $('#img2').animate({
                        position: 'absolute',
                        zIndex:'0',
                        width:'14%',
                        top:'15%',
                        right:'-5%',
                        transition:'3s',
                    });
                    $('#img3').animate({
                      position: 'absolute',
                      zIndex:'0',
                      width:'20%',
                      bottom:'5%',
                      left:'-5%',
                      transition:'3s',
                  });
                  $('#img4').animate({
                    position: 'absolute',
                    zIndex:'0',
                    width:'70%',
                    top:'-13%',
                    right:'10%',
                    transition:'3s',
                });
                $('#img5').animate({
                  position: 'absolute',
                  zIndex:'0',
                  width:'10%',
                  top:'20%',
                  left:'-11%',
                  transition:'3s',
              });
              $('#img6').animate({
                position: 'absolute',
                zIndex:'0',
                width:'24%',
                top:'30%',
                right:'-14%',
                transition:'3s',
            });
                          
                         
                            
                    });
                   
                
                });

              }}
            />

            <Script
              id="stripe-jsaoxo"
              src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
              onLoad={() => {
                
                var modal = document.getElementById("myModal");

                var btn = document.getElementById("myBtn");

                var span = document.getElementsByClassName("close")[0];

                btn.onclick = function() {
                modal.style.display = "block";
                }

                span.onclick = function() {
                modal.style.display = "none";
                }

                window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
                }

              }}
            />

          <Script
              id="stripe-jsaoxowwmnmcdeepolvaswe"
              src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
              onLoad={() => {
                
                let $ = document
                let modalBtn = $.querySelector("#sub3")
                let modal = $.querySelector("#modal-parent3")
                let close = $.querySelector("#X3")
                let section = $.querySelector("#root")
                
              
                
            
                modalBtn.onclick = function() {
                  modal.style.display = "inline";
                }
                
                
                close.onclick = function() {
                  modal.style.display = "none";
                  section.style.filter = "blur(0px)";
                }
                
                window.addEventListener("keydown",closemodalKeydown)
                function closemodalKeydown (e){
                  if(e.keyCode === 27){
                    closeModal()
                  }
                }

              }}
            />
    </div>
  )
}

export default Header