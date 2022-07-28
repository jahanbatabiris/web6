import React from 'react';
import Script from 'next/script';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Head from "next/head";
import Footer from '../component/element/Footer';

const useStyles = makeStyles((theme) => ({

    root:{
        backgroundColor:'#0C0617',
        paddingTop:'80px',
    },
    root2:{
        width:'90%',
        backgroundPosition: 'center center',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    root3:{
      backgroundPosition: 'center center',
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    },

    img:{
        borderRadius:'50%',
        width:'110px',
        position:'absolute',
        left:'90px',
        top:'-80px',
        backgroundColor:'#0C0617',
        padding:"20px 20px 20px 20px"
    },

    back:{
        marginTop:'180px',
        backgroundImage:'url("/img/aboutus/about us_box.png")',
        width:'300px',
        height: '630px',
        backgroundSize:'100% 100%',
        padding:'10px 10px 10px 10px',
        position:'relative'
    },
    back1:{
      marginTop:'100px',
      backgroundImage:'url("/img/aboutus/about us_box.png")',
      width:'300px',
      height: '630px',
      backgroundSize:'100% 100%',
      padding:'10px 10px 10px 10px',
      position:'relative'
  },
   
    linkdin:{
        color:'white',
        width:'60px',
        position:'absolute',
        top:'10px',
        right:'0px',
        "&:hover": {
           transform:'scale(1.2)'
          },
    }
    // logo:{
    //     width:'110px',
    //     float:'left',
    //     marginBottom:'40px',
    //     position:'absolute',
    //     [theme.breakpoints.down("600")]: {
    //         width:'80px',
    //       },
    //       [theme.breakpoints.down("386")]: {
    //         width:'52px',
    //       },
    // },

}));

function AboutUs() {
    const classes = useStyles();
  return (
    <div>
             <Head>
        <link rel="icon" type="/img/total/logot.ico" sizes="32x32" href="/img/total/logot.ico" />
        <link rel="icon" type="/img/total/logot.ico" sizes="16x16" href="/img/total/logot.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/img/total/logot.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="title" content="Lucretius" />
        <meta name="description" content="Lucretius" />
        <meta name="robots" content="index, follow" />
        <title>About Us</title>
      </Head>
      <video autoPlay muted loop id="myVideo">
        <source src="/img/aboutus/vid.mp4" type="video/mp4"/>
        Your browser does not support HTML5 video.
        </video>

        <div className="content">
        <h1 className="aboutustitle"><b>ABOUT <span className="aboutustitlespan">US</span></b></h1>
        <p className="aboutustext">The game is heavily incentivized, and as such, active and dedicated players will be rewarded with points and LUC tokens. The LUC token is the native currency of the Lucretius complex, and it’s the only accepted means of payment. Players can use their LUC tokens to acquire NFTs and other in-game assets within the Lucretius complex. The game is built on the ultra-efficient XRPL ledger and provides the player with an incredibly immersive gameplay experience. The interface is visually appealing and extremely easy to navigate, making it an enjoyable game to play anytime, any day.</p>
          <button className="aboutusbtn" id="myBtnn" >Pause</button>
        </div>


        <div className="content2">
        <a href="/HomePage"><img id="img" className="headerluclogo" src='/img/exchange/logoo.png'/></a> 
            <button  className="headerbtnmodal" id="myBtn">
            <span className="headerbtnmodalspan1"></span>
            <span className="headerbtnmodalspan2"></span>
            <span className="headerbtnmodalspan2"></span>
            </button>


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
                            <li><a href="/LucToken">Luc Token</a></li>
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
        </div>

       <div className={classes.root}>
                <Grid className={classes.root2} container spacing={1}> 
                        <Grid className={classes.root3} item xs={12} sm={12} lg={4} xl={3}>
                            <div className={classes.back1} >
                                    <img className={classes.img} src="/img/aboutus/2.2.jpg"/>
                                    <p className="usertitle"><b>Geleen</b></p>
                                    <p className="usertitle2">CFO</p>
                                    <p className="usertext">Geleen is an expert in financial planning, reporting and analysis across both the private and public sectors. She is ambitious, detail oriented and quick to adapt to challenges even in fast-paced work environment. She is a natural team player who is always eager to contribute towards the achievement of shared objectives.</p>
                                    <p className={classes.linkdinroot}>
                                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/geleen-ahm-32176672/">
                                    <LinkedInIcon className={classes.linkdin}/>
                                    </a>
                                    </p>
                            </div>
                        </Grid>
                        <Grid className={classes.root3} item xs={12} sm={12} lg={4} xl={3}>
                            <div className={classes.back} >
                                    <img className={classes.img} src="img/aboutus/1.2.jpg"/>
                                    <p className="usertitle"><b>Soroosh</b></p>
                                    <p className="usertitle2">CEO</p>
                                    <p className="usertext">He is an engineer with a wealth of experience as a field engineer. In 2016, he took a look to forex market and the world of cryptocurrencies with great passion. His unwavering interest led him to trade every day and constantly seek out more information regarding cryptocurrencies and blockchain technology in general. In 2021, he found a gap in the NFT market and that’s what led to the birth of the Moon Light Night project.</p>
                                    <p className={classes.linkdinroot}>
                                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/soroosh-abbasi-3344a966/">
                                    <LinkedInIcon className={classes.linkdin}/>
                                    </a>
                                    </p>
                            </div>
                        </Grid>
                        <Grid className={classes.root3} item xs={12} sm={12} lg={4} xl={3}>
                            <div className={classes.back1} >
                                    <img className={classes.img} src="/img/aboutus/4222.jpg"/>
                                    <p className="usertitle"><b>Baris</b></p>
                                    <p className="usertitle2">Founder</p>
                                    <p className="usertext">Senior Web-Developer with a solid background in different programming area. Good understanding of decentralized technologies. Have a lot of experiences and practical expertise in smart contract development. Very well experienced in mobile games and blockchain based native apps.</p>
                                    <p className={classes.linkdinroot}>
                                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/baris-ali-ros-81654122b/" >
                                    <LinkedInIcon className={classes.linkdin}/>
                                    </a>
                                    </p>
                            </div>
                        
                        </Grid>
                        <Grid className={classes.root3}  item xs={12} sm={12} lg={4} xl={3}>
                            <div className={classes.back} >
                                    <img className={classes.img} src="/img/aboutus/rahiim.jpg"/>
                                    <p className="usertitle"><b>Raheem</b></p>
                                    <p className="usertitle2">Game Developer Executive Producer</p>
                                    <p className="usertext">Game development executive officer: Raheem, started his work by 3D art packages. Now, He is a game designer with 3 majors on Animations, interactive tech, video graphics and special effects. He is also an expert on virtual space and developing art games.</p>
                                  <p className={classes.linkdinroot}>
                                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rahimhashemi/">
                                    <LinkedInIcon className={classes.linkdin}/>
                                    </a>
                                    </p>
                            </div>
                        
                        </Grid>
                </Grid>   
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <Footer/>
       </div>


        <Script
              id="stripe-jsaorrr"
              src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
              onLoad={() => {
                
                var video = document.getElementById("myVideo");
                var btn = document.getElementById("myBtnn");
                
                $(document).ready(function(){
    
                    $('#myBtnn').click(function() {
                  if (video.paused) {
                    video.play();
                    btn.innerHTML = "Pause";
                  } else {
                    video.pause();
                    btn.innerHTML = "Play";
                  }
                });
                   
                
            });

              }}
            />

            <Script
              id="stripe-jsaoxoww"
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
    </div>
  );
}

export default AboutUs;
