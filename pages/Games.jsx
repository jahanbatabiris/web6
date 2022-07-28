import React from 'react';
import Script from 'next/script';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Head from "next/head";
import axios from "axios";
import { useForm } from "react-hook-form";
import swal from 'sweetalert2';
import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from '../component/element/Footer';
import TimeLinePool from '../component/element/TimelinePool';
import GameSlider from '../component/element/GameSlider';

import CntDwn3 from '../component/layout/CntDwn3';
import CntDwn2 from '../component/layout/CntDwn2';
import CntDwn0701 from '../component/layout/CntDwn0701';



const useStyles = makeStyles((theme) => ({

    root:{
        backgroundPosition: 'center center',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    root2:{
        width:'100%',
        backgroundImage:'url("/img/game/gamehero.jpg")',
        backgroundSize:'100% 100vh',
        height:'100vh',

    },
    root22:{
      width:'90%',
      height:'100%',
      paddinRight:'5%',
      paddingLeft:'5%',

  },
    root3:{
      width:'90%',
      paddinRight:'5%',
      paddingLeft:'5%',
  },
    back1:{
        marginTop:'100px',
        backgroundImage:'url("/img/aboutus/about us_box.png")',
        width:'250px',
        height: '270px',
        backgroundSize:'100% 100%',
        padding:'10px 26px 10px 26px',
        position:'relative',
        margin:'30px'
    },
    back2b2e:{
      backgroundPosition: 'center center',
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',

      
    },
    back2b2ediv:{
      marginTop:'100px',
      backgroundImage:'url("/img/aboutus/about us_box.png")',
      width:'100%',
      height: 'auto',
      backgroundSize:'100% 100%',
      paddingBottom:'80px',
      paddingTop:'30px',
 
    },
    stskingsectn3:{
        backgroundPosition: 'center center',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    stskingsectn33:{
      backgroundPosition: 'center center',
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      [theme.breakpoints.down("675")]: {
        marginLeft: '1px !important',
        display: 'block',
      },
  },
    stskingsectn5:{
      width:'90%',
      backgroundPosition: 'center center',
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',

    },
    sublink:{
      backgroundPosition: 'center center',
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      [theme.breakpoints.down("550")]: {
        margin: '1px',
        display: 'block',
      },
    },
    gamegrid:{
      backgroundColor:'#fffefe0e !important',
      padding:'29px 0px 29px 0px !important',
      borderRadius:'17px',
      width: '97% !important',
      position:'relative !important',
      marginTop:'32px'
    }
     

}));

const slideImages = [
  "https://react-slideshow.herokuapp.com/images/slide_2.jpg",
  "https://react-slideshow.herokuapp.com/images/slide_3.jpg",
  "https://react-slideshow.herokuapp.com/images/slide_4.jpg"
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

function Games() {
    const classes = useStyles();


    const [dataa, setDataa] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch('https://check.lucretius.network/checkb2eall')
        .then((res) => res.json())
        .then((data) => {
          setDataa(data)
          setLoading(false)
        })
    }, [])

    
  return (
    <div  className={classes.root} id="root">
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
        <title>Games</title>
      </Head>
       <div>
        <div className={classes.root2}>
          <div className={classes.root22}>
          <a href="/HomePage"><img  id="img" className="headerluclogo" src='/img/exchange/logoo.png'/></a> 
                <button  className="headerbtnmodalstaking" id="myBtn">
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

                <br/><br/><br/><br/><br/><br/>

          <div className={classes.sublink}>
            <a href="#playground" className="sublinka">PLAYGROUND</a>
            <a href="#howtoplay" className="sublinka2">HOW TO PLAY</a>
            <a href="#drawing"  className="sublinka2">DRAWINGS</a>
          </div>
          <br/><br/><br/><br/>
          <p id="playground" className="gametitle">Drive Lucretius’s super fast off-road Hummer and collect scores by playing extremely fun mini-game.</p>
          <br/><br/><br/><br/>
          <button className="gamebtn">GO TO PLAYGROUND</button>
          <br/><br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <div>
          </div>
          </div>
          </div> 
          <Typography className="sotitle2" id="howtoplay">
                 <b>HOW TO P<span className="title2sospan">LAY</span></b>
            </Typography>
            <Typography className="sotitle1">
              <b> HOW TO PLAY</b> 
            </Typography>
          <GameSlider/>
          
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <div>
          <div className={classes.root3} style={{ backgroundColor:'#0C0617'}}>
        <Typography id="drawing" className="sotitle2">
              <b>DRAWI<span className="title2sospan">NGS</span></b>
          </Typography>
          <Typography className="sotitle1">
            <b> DRAWINGS</b> 
          </Typography>
          <Grid container spacing={3}> 
                    <Grid  item xs={12} sm={12} lg={12} xl={12}>
                          <div className={classes.gamegrid}>  
                          <p className="gametextwinner">     
                              After collecting the drawing keys from prize's chest there would be a whole new world of valuable tempting rewards awaiting you in our drawings chests that allow you to participate in our weekly (sundays with 7 digits code) and monthly (1st of each month with 7 digit code) draws which will be held online right here.
                            </p>
                         </div>
                          
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6} xl={6}>
                    <Grid className={classes.gamegrid}>  
                    <p className="gametext2winner">     
                    Weekly
                    </p>
                    <br/><br/>
                    <p className="gametextwinner">     
                    Next : 31 July 10 UTC ⏱
                    </p>
                    <br/><br/><br/><br/><br/><br/>
                    <img className="gameimgwinner"  src="/img/game/Gold.png"/>
                    <p className="gametext3winner">     
                    Weekly
                    </p>
                    <br/><br/><br/><br/>
                    <p className="gametextwinner">     
                    each of ten winners receives <span className="gametextwinnerspan">1000 luc</span> 
                    </p>
                    <br/><br/>
                    <div>
                      <CntDwn3/>
                    </div> 
                    <br/><br/>
                    <a target="_blank" href='/WinnerListWeekly' rel="noreferrer"><button className="gamebtnwinner"> Winners List</button></a>
                    </Grid> 
                    </Grid>


                    <Grid item xs={12} sm={12} lg={6} xl={6}>
                    <Grid className={classes.gamegrid}> 
                    <p className="gametext2winner">     
                    Monthly
                    </p>
                    <br/><br/>
                    <p className="gametextwinner">     
                    Next : 01 August 10 UTC ⏱
                    </p>
                    <br/><br/>
                    <img className="gameimgwinner" src="/img/game/Gold.png"/>
                    <p className="gametext4winner">     
                    30000 LUC tokens
                    </p>
                    <img className="gameimgwinner"  src="/img/game/Silver.png"/>
                    <p className="gametext4winner">     
                    15000 LUC tokens
                    </p>
                    <img className="gameimgwinner"  src="/img/game/Bronze.png"/>
                    <p className="gametext4winner">     
                    5000 LUC tokens
                    </p>
                    <br/><br/>
                   <div>
                     <CntDwn0701/>
                   </div> 
                    <br/><br/>
                    <a target="_blank" href='/WinnerListMonthly' rel="noreferrer"><button className="gamebtnwinner"> Winners List</button></a>
                    </Grid>  
                    </Grid> 
                  
            </Grid>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <iframe  
                className='iframelottary'
      style={{border:'none !import',outline:'none !import',border:'none',outline:'none',backgroundColor:'#1d224400'}}
      id="xxx"
      title="xxx"
      width="100%"
     
      frameBorder="value"
      allowTransparency
      srcDoc={`
          <!doctype html>
 
          <!doctype html>
          <html>
          <head>
              <title>Chat bot</title>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width">
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
             <style>
             @font-face {
              font-family: myFirstFont;
              src: url(/fonts/SevenSegment.ttf);
            }
            @font-face {
              font-family: timothy;
              src: url(/fonts/TimothyRegular400.ttf);
              src: url(/fonts/TimothyRegular400.woff);
            }
             body{
              background-color:#26224800;
               height: 100vh;
               box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
               padding-top:100px
             }
             .row{
              background-color:#fffefe0e;
            
              border-radius:17px;
               width:100wh !important;
               padding:10px 10px 25px 10px;
                background-position: center center;
                margin: auto;
                justify-content: center;
                align-items: center;
                display:flex;
             }
             .p111{
               color:white;
               font-size:40px;
               background-position: center center;
               margin: auto;
               justify-content: center;
               align-items: center;
               display:flex;
               background-image: linear-gradient(to right, #672E91 , #B3178D);
               width:600px;
               padding:20px 20px 20px 20px;
               border-radius:170px;
               margin-top:-85px
             }
             .p1111{
              color:white;
              font-size:35px;
              text-align:center;
              margin-top:100px;
              margin-bottom:40px;
              text-align:center;
              justify-content: center;
              align-items: center;
            }

             .p222{
              background-position: center center;
              margin: auto;
              justify-content: center;
              align-items: center;
              display:flex;
              
              font-family: myFirstFont;
              color:#EEB2FF;
              font-size:73px;
              text-shadow: -2px 0 rgb(197, 8, 141), 0 1px rgb(197, 8, 141), 1px 0 rgb(197, 8, 141), 0 -2px rgb(197, 8, 141);
             }
             .p333{
              background-position: center center;
              margin: auto;
              justify-content: left;
              align-items: center;
              display:flex;
             font-family: myFirstFont;
             color:white;
             font-size:110px;
             text-shadow: 0 0 3px #FA67EF, 0 0 7px #FA67EF;
            }
            .aaaa{
              background-color: rgba(255, 255, 255, 0.192);
              border-radius:60px;
              width:100% !important;
              padding:20px 10px 20px 10px ;
              margin-top:26px;
            }
            .bbb{
              background-image: linear-gradient(to right, #672E91 , #B3178D);
              padding:5px 12px;
              border-radius:50%;
              border:solid 2px white;
              color:white;
              font-size:20px;
            }
            .bbbb{
              background-image: linear-gradient(to right, #672E91 , #B3178D);
              padding:5px 7px;
              border-radius:50%;
              border:solid 2px white;
              color:white;
              font-size:15px;
            }
            .ccc{
              color:white;
              font-size:24px;
              margin-left:5px;
              font-weight: 700;
            }
            .row2{
              background-position: center center;
              margin: auto;
              justify-content: center;
              align-items: center;
              display:flex;
            }
 

            @media screen and (max-width:1197px){
              .p111{
                color:white;
                font-size:30px;
                
              }
              .p222{
               font-family: myFirstFont;
               color:#EEB2FF;
               font-size:56px;
               text-shadow: -2px 0 rgb(197, 8, 141), 0 1px rgb(197, 8, 141), 1px 0 rgb(197, 8, 141), 0 -2px rgb(197, 8, 141);
              }
              .p333{
             
              font-family: myFirstFont;
              color:white;
              font-size:110px;
             
              }
             }
             @media screen and (max-width:998px){
              .p111{
                color:white;
                width:400px;
                font-size:27px;
                
              }
              .p222{
                
               font-family: myFirstFont;
               color:#EEB2FF;
               font-size:46px;
               text-shadow: -2px 0 rgb(197, 8, 141), 0 1px rgb(197, 8, 141), 1px 0 rgb(197, 8, 141), 0 -2px rgb(197, 8, 141);
              }
              .p333{
            
              font-family: myFirstFont;
              color:white;
              font-size:110px;
              
              }
             }
             @media screen and (max-width:898px){
              .p333{
                justify-content: center;
                font-family: myFirstFont;
                color:white;
                font-size:150px;
               
                }
              
             }
             @media screen and (max-width:898px){
              .p111{
                color:white;
                width:290px;
                font-size:21px;
                
              }
              .p1111{
                color:white;
               
                font-size:22px;
                margin-top:30px;
                
              }
              .p222{
                
               font-family: myFirstFont;
               color:#EEB2FF;
               font-size:32px;
               text-shadow: -2px 0 rgb(197, 8, 141), 0 1px rgb(197, 8, 141), 1px 0 rgb(197, 8, 141), 0 -2px rgb(197, 8, 141);
              }
              .p333{
                justify-content: center;
                font-family: myFirstFont;
                color:white;
                font-size:90px;
                  color: white;
                  
                }
             }
             @media screen and (max-width:458px){
              .p111{
                color:white;
                width:290px;
                font-size:21px;
                
              }
              .p1111{
                color:white;
              
                font-size:20px;
                margin-top:20px;
                
              }
             }
             @media screen and (max-width:370px){
              .p111{
                color:white;
                width:260px;
                font-size:17px;
                
              }
              .p1111{
                color:white;
              
                font-size:20px;
                margin-top:20px;
                
              }
             }
            
             </style>
            </head>
          <body style="width:auto;">
          
          <!--   <div class="container-fluid" id="root">
            <h3 style="color:white;text-align:center;margin-top:100px">
            The Weekly draw is gonna begin...
            </h3>
          </div>
          
          <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.26.0/axios.min.js"></script>
 
             <script>
              setInterval(()=>{
                  
                axios.get('http://service.lucretius.network/drawing/weekly').then(res => {
                      var obj = res.data
                      document.getElementById("root").innerHTML = obj ;
                  })
                } , 1000)
             </script>-->

             <!--   <div class="container-fluid" id="root">
             <h3 style="color:white;text-align:center;margin-top:100px">
             The Monthly draw is gonna begin...
             </h3>
           </div>
           
           <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.26.0/axios.min.js"></script>
  
              <script>
               setInterval(()=>{
                   
                 axios.get('service.lucretius.network/drawing/monthly').then(res => {
                       var obj = res.data
                       document.getElementById("root").innerHTML = obj ;
                   })
                 } , 1000)
              </script>-->




        <div class="container-fluid">
             <div class="row">
               <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
               <br/>
               <p class="p111">
                 
                <b>Winners Of The Drawing</b>  
            
               </p>
               <p class='p1111' variant='h5'>
               24 July ⏱
               </p>
               </div> 
               <br>        
             <div class="row2 row" style=" background-color:#fffefe00;">

                 <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3  col-xl-2 ">
                   <div class="aaaa">
                   <span class="bbb">1</span>
                   <span class="ccc">9246617 </span>
                   </div>
                 </div>
                 <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3  col-xl-2 ">
                   <div class="aaaa">
                   <span class="bbb">2</span>
                   <span class="ccc">1247068 </span>
                   </div>
                 </div>
                 <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3  col-xl-2 ">
                   <div class="aaaa">
                   <span class="bbb">3</span>
                   <span class="ccc">2247245   </span>
                   </div>  
                 </div>
               <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3  col-xl-2 ">
                   <div class="aaaa">
                   <span class="bbb">4</span>
                   <span class="ccc">8252019  </span>
                   </div>
               </div>
               <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3  col-xl-2 ">
                   <div class="aaaa">
                   <span class="bbb">5</span>
                   <span class="ccc">6252502 </span>
                   </div>
               </div>
               <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3  col-xl-2 ">
                 <div class="aaaa">
                 <span class="bbb">6</span>
                 <span class="ccc">4253415 </span>
                 </div>
               </div>
               <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3  col-xl-2 ">
                 <div class="aaaa">
                 <span class="bbb">7</span>
                 <span class="ccc">7254073   </span>
                 </div>
               </div>
               <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3  col-xl-2 ">
                 <div class="aaaa">
                 <span class="bbb">8</span>
                 <span class="ccc">6255127    </span>
                 </div>
               </div>
               <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3  col-xl-2 ">
                 <div class="aaaa">
                 <span class="bbb">9</span>
                 <span class="ccc">2267731   </span>
                 </div>
               </div>
               <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3  col-xl-2 ">
                 <div class="aaaa">
                 <span class="bbbb">10</span>
                 <span class="ccc">9301436    </span>
                 </div>
               </div>
               <br/> <br/>  
             </div>
           
           </div> 

           


             <!--<div class="container-fluid">
             <div class="row">
             <br><br><br>
               <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
               <p class="p111">
               
               Winners Of The Monthly Drawing
         
            </p>
 
               <p class='p1111' variant='h5'>
               1 July ⏱
               </p>
            
               </div> 
               <br/> <br/> <br/>        
             <div class="row2 row">
             <br/> <br/>   <br/> <br/>   
                 <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2  col-xl-2 ">
                   <div class="aaaa">
                   <span class="bbb">🥇</span>
                   <span class="ccc">3103902 </span>
                   </div>
                 </div>
                 <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2  col-xl-2 ">
                   <div class="aaaa">
                   <span class="bbb">🥈</span>
                   <span class="ccc">2100974</span>
                   </div>
                 </div>
                 <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2  col-xl-2 ">
                   <div class="aaaa">
                   <span class="bbb">🥉</span>
                   <span class="ccc">5115571</span>
                   </div>  
                 </div>
             </div>
           </div> -->




           <!--  <div class="container-fluid">
           <div class="row">
           <br><br><br>
             <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
             <br><br><br>
             <p class="p111">
               
                Winners Of The Monthly Drawing
          
             </p>
             <p class='p1111' variant='h5'>
             1 June ⏱
             </p>
          
             </div> 
             <br/> <br/> <br/>        
           <div class="row2 row">
           <br/> <br/>   <br/> <br/>   
               <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2  col-xl-2 ">
                 <div class="aaaa">
                 <span class="bbb">🥇</span>
                 <span class="ccc">7103467 </span>
                 </div>
               </div>
               <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2  col-xl-2 ">
                 <div class="aaaa">
                 <span class="bbb">🥈</span>
                 <span class="ccc">3108325</span>
                 </div>
               </div>
               <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2  col-xl-2 ">
                 <div class="aaaa">
                 <span class="bbb">🥉</span>
                 <span class="ccc">1109649</span>
                 </div>  
               </div>
           </div>
         </div> -->
             

        
          
        <!--  <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.26.0/axios.min.js"></script>
 
             <script>
              setInterval(()=>{
                  
                axios.get('https://lucretius.network/drawing').then(res => {
                      var obj = res.data
                      document.getElementById("root").innerHTML = obj ;
                  })
                } , 1000)
             </script>
          
          
          </div> -->
          </body>
          </html>
          `}
       />
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div> 
        </div>     
       </div>         
                 
        <Script
              id="stripe-jsaoxowwmaq"
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

export default Games;
