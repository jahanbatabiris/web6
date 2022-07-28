import React from 'react';
import Script from 'next/script';
import { Typography } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Head from "next/head";
import axios from "axios";
import { useForm } from "react-hook-form";
import swal from 'sweetalert2';
import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from '../component/element/Footer';


const useStyles = makeStyles((theme) => ({

    root:{
        backgroundColor:'#0C0617',
        backgroundPosition: 'center center',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    root2:{
        width:'90%',
    },
    stskingsectn3root:{
     
    },
    stskingsectn3:{
       backgroundColor:'#fffefe18 !important',
       padding:'19px 50px 19px 50px !important',
       borderRadius:'17px',
       width:'90% !important'
    },
    stskingsectn3root:{
      width:'100% !important'
    }
     

}));

function BMP() {

    const classes = useStyles();
   
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
        <title>Burning Mechanism Partner (BMP)</title>
      </Head>
                
        <div className={classes.root2}>
        <a href="/HomePage"><img id="img" className="headerluclogo" src='/img/exchange/logoo.png'/></a> 
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

                <br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/>
                <Typography className="stakingtitle" >
               <b>Burning Mechanism Partner (BMP) </b>         
               </Typography>
               <Typography className="bmptext">
               Lucretius has defined various BMP
              </Typography>

              <br/><br/><br/><br/><br/><br/>
              
                <Grid className={classes.stskingsectn3root}  container spacing={2}> 

                <Grid  className="stskingsectn3" item xs={12} sm={12} lg={4} xl={4}>
                  <div className="stskingsectn3div">
                     <Typography className="bmpsectn3title" >1- XRPL Top 100 Holders :
                    </Typography>      
                    <Typography className="bmpsectn5text" >
                    <b>Our BMP list will comprise the top 100 holders each month.</b><br/>
                    We will rank the top 100 holders and reward them with their BMP shares based on their average balance during our two snapshot periods.
                    The first snapshot period will take place from 10th - 15th while the second snapshot period will take place from 25th - 30th of each month.
                    <br/><br/>
                      </Typography>   
                      <a href='/XRPLTop100Holders' target="_blank" rel="noreferrer">
                         <p className="bmpsectnlink" >Who is On The List ?</p>
                      </a>
                     
                  </div>
                   
                </Grid>
                <Grid className="stskingsectn3" item xs={12} sm={12} lg={4} xl={4}>
                  <div className="stskingsectn3div">
                     <Typography className="bmpsectn3title" >2- Lucretius Ambassadors :</Typography>      
                     <Typography className="bmpsectn5text" >There are so many benefits that come with being a Lucretius ambassador. Ambassador wallets will appear on our BMP list and they’ll also get to run Lucretius giveaway events on their page.
                        You can apply to become a Lucretius ambassador by sending a message to us on Twitter. Pages are required to meet certain requirements to qualify and get approval to be Lucretius ambassadors.
                        Send in your application today.
                        </Typography>   
                        <a href='/LucretiusAmbassadors' target="_blank" rel="noreferrer">
                        <p className="bmpsectnlink" >Who is On The List ?</p>
                        </a>
                  </div>
                </Grid>
                <Grid  className="stskingsectn3" item xs={12} sm={12} lg={4} xl={4}>
                  <div className="stskingsectn3div">
                    <Typography className="bmpsectn3title" >
                      3- Solid Supporters :
                    </Typography>      
                    <Typography className="bmpsectn5text" >We will name our solid supporters every week on Twitter. Solid supporters will be selected based on engagements with our posts including following, sharing, and commenting on our social media posts and Lucretius events.
                    Those who are announced as solid supporters on Twitter will have their wallet addresses included in the BMP list and will receive the equivalent rewards.
                  </Typography>   
                    <a href='/SolidSupporters' target="_blank" rel="noreferrer">
                    <p className="bmpsectnlink" >Who is On The List ?</p>
                    </a>
                  </div>
                </Grid>
                <Grid  className="stskingsectn3" item xs={12} sm={12} lg={4} xl={4}>
                  <div className="stskingsectn3div1">
                     <Typography className="bmpsectn3title" >4- Solid Players :</Typography>      
                    <Typography className="bmpsectn5text" >Solid players are those who constantly connect their wallets to our games and MetaVerse. Players in the top 5% will have their wallets included on the Lucretius BMP list and receive the equivalent rewards.
                    <br/><br/>
                    </Typography>   
                  </div>
                   
                </Grid>
                <Grid className="stskingsectn3" item xs={12} sm={12} lg={4} xl={4}>
                  <div className="stskingsectn3div1">
                      <Typography className="bmpsectn3title" >
                      5- Tournaments Winners :</Typography>      
                    <Typography className="bmpsectn5text" >Winners of the Lucretius games tournament will have their wallets posted on the BMP list. The top three winners from each tournament will spend three consecutive months on the BMP list.
                    <br/><br/>
                    </Typography>   
                
                  </div>
                  
                </Grid>
                <Grid  className="stskingsectn3" item xs={12} sm={12} lg={4} xl={4}>
                  <div className="stskingsectn3div1">
                    <Typography className="bmpsectn3title" >6- Lucretius Citizens :</Typography>      
                    <Typography className="bmpsectn5text" >We have defined various types of permanent employment opportunities for Lucretius users. Users whose wallet addresses own lands, shops or have jobs in the Lucretius city are the bonafide citizens of Lucretius. As such, they will be included in the BMP list.</Typography>   
               
                  </div>
               
                </Grid>
                </Grid>

              
                
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>

                <Footer/>
        </div>
                 
        <Script
              id="stripe-jsaoxowwm"
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

export default BMP;
