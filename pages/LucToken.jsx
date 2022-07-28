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

import Slideeer from '../component/element/Slideeer';



const useStyles = makeStyles((theme) => ({

    root:{
        backgroundPosition: 'center center',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        width:'100%',
    },
    root2:{
        width:'90%',
        height:'100%',

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


    backlucdiv:{
        backgroundImage:'url("/img/aboutus/about us_box.png")',
        width:'80%',
        height: 'auto',
        backgroundSize:'100% 100%',
        padding:'10px 16px 10px 16px',
        position:'relative',
        backgroundPosition: 'center center',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        borderRadius:'20px'
    },
    backlucdivroot:{
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    backlucimglogo:{
        width:'200px',
        backgroundPosition: 'center center',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    backlucimglogosec:{
      width:'250px',
      backgroundPosition: 'center center',
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    },
    backlucimglogosecCapital:{
      width:'220px',
      backgroundPosition: 'center center',
      margin: '-140px auto auto auto',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
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
    },
    gamegrid2:{
      backgroundColor:'#fffefe0e !important',
      padding:'29px 0px 29px 0px !important',
      borderRadius:'17px',
      width: '92% !important',
      position:'relative !important',
      marginLeft:'4%'
    },
    gamegridroot:{
      width: '100% !important',
    },

    gamegrid3:{
      backgroundColor:'#0C0617 !important',
      padding:'29px 0px 29px 0px !important',
      borderRadius:'17px',
      width: '92% !important',
      position:'relative !important',
      marginLeft:'4%'
    },


}));



function LucToken() {
    const classes = useStyles();

    
    // const [data, setData] = useState(null)
    // const [isLoading, setLoading] = useState(false)
  
    // useEffect(() => {
    //   setLoading(true)
    //   fetch('http://service.lucretius.network/snapshot/lucCirculation')
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setData(data)
    //       setLoading(false)
    //     })
    // }, [])
    const baseURL = `http://service.lucretius.network/snapshot/lucCirculation`;

    const [post, setPost] = useState(null);
    useEffect(() => {
      axios.get(baseURL).then((response) => {
        console.log(response.data)
        setPost(response.data);
      });
    });
  
    if (!post) return null;

    console.log(post)


    
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
       <div  className={classes.root2}>
        
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

                <br/><br/><br/><br/><br/><br/>

          <div className={classes.sublink}>
            <a href="/LucToken" className="sublinka">LucToken</a>
            <a href="/AirDrop" className="sublinka2">AirDrop</a>
           
          </div>
          <br/><br/><br/><br/>
          <div id="luctoken" className={classes.backlucdiv}>
              <div className={classes.backlucdivroot}>
                   <p  className="gametitleluck">TOTAL LUC TOKENS IN CIRCULATION</p>
                   <br/><br/>
                   <p className="gametitlecir">  {new Intl.NumberFormat().format(post)}</p>  
                   <br/><br/>
                   <p className="gametitlecirluc2"> View the list of $LUC Holders</p>  
                   <br/><br/><br/>
                    <a href="/RichList"> <p className="gametitlecirbtnluc"> Rich List </p></a>
                   <br/><br/><br/>
              </div>  
          </div>

          
          <br/><br/><br/><br/><br/><br/><br/><br/>

          <p  className="gametitlecirluc2">$LUC CEX Listing</p>
                   <br/><br/>
          <div className={classes.backlucdiv}>
              <div className={classes.backlucdivroot}>
                   <br/><br/><br/>
                   <Grid container spacing={3}> 
                    <Grid  item xs={12} sm={6} lg={3} xl={3}>
                    <a href="https://www.mexc.com/exchange/LUC_USDT"> <img className={classes.backlucimglogo} src="/img/exchange/mexc.png"/></a>
                    </Grid>
                    <Grid  item xs={12} sm={6} lg={3} xl={3}>
                    <a href="https://www.xt.com/trade/luc_usdt"> <img className={classes.backlucimglogo}  src="/img/exchange/xt.com.png"/></a>
                    </Grid>
                    <Grid  item xs={12} sm={6} lg={3} xl={3}>
                    <a href="https://www.probit.com/app/exchange/LUC-USDT"> <img className={classes.backlucimglogo}  src="/img/exchange/probit.png"/></a>
                    </Grid>
                    <Grid  item xs={12} sm={6} lg={3} xl={3}>
                    <a href="https://www.bitrue.com/trade/luc_usdt"> <img className={classes.backlucimglogo}  src="/img/exchange/bitrue.png"/></a>
                    </Grid>
                    </Grid>
                    <br/>
              <br/><br/><br/>
              </div>  
          </div>

          <br/><br/><br/><br/><br/><br/><br/><br/>

                <p  className="gametitlecirluc2">Add $LUC to your watch list at</p>
                        <br/><br/>
                <div style={{ width: '90% !important',}} className={classes.backlucdiv}>
                    <div className={classes.backlucdivroot}>
                        <br/><br/><br/>
                        <Grid container spacing={3}> 
                        <Grid  item xs={12} sm={6} lg={3} xl={3}>
                        <a href="https://coinmarketcap.com/currencies/lucretius/"> <img className={classes.backlucimglogo} src="/img/exchange/coincap.png"/></a>
                        </Grid>
                        <Grid  item xs={12} sm={6} lg={3} xl={3}>
                        <a href="https://www.coingecko.com/en/coins/lucretius"> <img className={classes.backlucimglogo}  src="/img/exchange/coingeck.png"/></a>
                        </Grid>
                        <Grid  item xs={12} sm={6} lg={3} xl={3}>
                        <a href="https://crypto.com/price/lucretius"> <img className={classes.backlucimglogo}  src="/img/exchange/crypto.png"/></a>
                        </Grid>
                        <Grid  item xs={12} sm={6} lg={3} xl={3}>
                        <a href="https://www.livecoinwatch.com/price/LUCRETIUS-_LUC"> <img className={classes.backlucimglogo}  src="/img/exchange/liveinwatch.png"/></a>
                        </Grid>
                        </Grid>
                        <br/>
                    <br/><br/><br/>
                    </div>  
                </div>
        
          <br/><br/><br/><br/><br/><br/> <br/>
          <div>
          </div>
        
        
        
          
          <br/><br/><br/><br/><br/><br/>
     
         
            <Grid container spacing={3}> 

                    <Grid item xs={12} sm={12} lg={6} xl={6}>
                    <div className={classes.gamegrid}>  
                    <p className="gametext2winner">     
                    The first round of private sales (5th-7th February)
                    </p>
                    <br/><br/>
                    <p className="gametextwinner">     
                    Total number of confirmed participants: 272
                    </p>
                    <br/><br/>
                    <p className="gametextwinner">     
                    The total volume of LUC tokens sold: 25,331,351 LUC tokens
                    </p>
                    <p className="gametextwinner">     
                    Price: 0.008 XRP
                    </p>
                    <br/><br/>
                    <p className="gametextwinner">     
                    Wallet address:
                    </p>
                    <p className="gametextwinner  gametextwinnerspan11root">     
                    rK6oxn1UBPRSyjFPgw9HmRdGQNwku55Wg6
                    </p>
                    <br/><br/>
                    <br/><br/>
                    <a target="_blank" href="https://docs.google.com/spreadsheets/d/1PeThHKzC8FxgxA2R_7bp5Ww1MJQiWa7sUUp51fERPc8/edit#gid=0" rel="noreferrer"><button className="gamebtnwinner"> CHECK YOUR ORDER</button></a>
                    </div>
                    </Grid>


                    <Grid item xs={12} sm={12} lg={6} xl={6}>
                    <div className={classes.gamegrid}> 
                    <p className="gametext2winner">     
                    The second round of private sales (7th-10th February)
                    </p>
                    <br/><br/>
                    <p className="gametextwinner">     
                    Total number of confirmed participants: 251
                    </p>
                    <br/><br/>
                    <p className="gametextwinner">     
                    The total volume of LUC tokens sold: 10,190,692.33 LUC tokens
                    </p>
                    <p className="gametextwinner">     
                    Price: 0.01 XRP
                    </p>
                    <br/><br/>
                    <p className="gametextwinner">     
                    Wallet address:
                    </p>
                    <p className="gametextwinner  gametextwinnerspan11root">     
                    r3FMM9DhEXbxur9P3zriAVvYho6aEenqJj
                    </p>
                    <br/><br/>
                    <br/><br/>
                    <a target="_blank" href="https://docs.google.com/spreadsheets/d/1-x2G53fUIvoqEepspmkP-EK0O_I3p2XLA5GS_jXTsGs/edit#gid=0" rel="noreferrer"><button className="gamebtnwinner"> CHECK YOUR ORDER</button></a>
                    </div>
                    </Grid>
            </Grid>



            <br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/>
         
        <Grid container spacing={3}> 
            <Grid item xs={12} sm={12} lg={12} xl={12}>
                <img className={classes.backlucimglogosec}  src="/img/luctoken/Group 446.png"/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </Grid>
            <br/><br/><br/><br/><br/><br/>
             <Grid item xs={12} sm={12} lg={6} xl={6}>
             <div className={classes.gamegrid2}> 
             <p className="gametext2winnerluc">     
             Initial DEX Offering (10th February-14th March)
             </p>
             <br/><br/>

             <p className="gametextwinner">     
             Wallet Address:
             </p>
             <p className="gametextwinner gametextwinnerspan11root">     
             rK6oxn1UBPRSyjFPgw9HmRdGQNwku55Wg6
             </p>
             <br/><br/>
             <p className="gametextwinner">     
             Total LUC tokens Sold: 10,000,000 LUC
             </p>
             <p className="gametextwinner">     
             Price 0.012 XRP
             </p>
           
           
             </div>
             </Grid>


             <Grid item xs={12} sm={12} lg={6} xl={6}>
             <div className={classes.gamegrid2}> 
             <p className="gametext2winnerluc">     
             Initial Exchange Offering (3 March)
             </p>
             <br/><br/>

             <p className="gametextwinner">     
             Wallet Address:
             </p>
             <p className="gametextwinner gametextwinnerspan11root">     
             r3RaNVLvWjqqtFAawC6jbRhgKyFH7HvRS8
             </p>
             <br/><br/>
             <p className="gametextwinner">     
             Total LUC Token Sold : 
             </p>
             <p className="gametextwinner">     
             27,855,000 LUC
             </p>
            
           
             </div>
             </Grid>
         </Grid>



         <br/><br/><br/><br/><br/><br/>
         <br/><br/><br/><br/><br/><br/>
         

             <div className={classes.gamegrid}> 
             <br/><br/><br/><br/><br/><br/>
                    <p className="gametext2winner">     
                   <b>Distribution Schedule</b> 
                    </p>
              <br/><br/><br/><br/><br/><br/>
             <div className={classes.gamegridroot}>
             <Grid container spacing={3}> 
             <Grid item xs={12} sm={12} lg={6} xl={6}>
                <div className={classes.gamegrid3}> 
                <p className="gametext2winnerluc">     
                Airdrop 150,000,000 LUC tokens
                </p>
                <br/><br/>

                <p className="gametextwinner">     
                75,000,000 tokens to LUC holders

                </p>
                <p className="gametextwinner">     
                25,000,000 tokens to XRP Holders
                </p>
                <p className="gametextwinner">     
                50,000,000 tokens to Twitter followers
                </p>
                <br/><br/>
                <p className="gametextwinner">     
                Distribution will occur from May to October,
                </p>
                <p className="gametextwinner">     
                depending on the market demand.
                </p>
                </div>
             </Grid>
             <Grid item xs={12} sm={12} lg={6} xl={6}>
                <div className={classes.gamegrid3}> 
                <p className="gametext2winnerluc">     
                Q1 2023-2024 650,000,000 LUC tokens

                </p>
                <br/><br/>

                <p className="gametextwinner">     
                Distribution will take place after game
                </p>
                <p className="gametextwinner">     
                launch as outlined in the tokenomics
                </p>
              
                <p className="gametextwinner">     
                section of our whitepaper.
                </p>
                <br/><br/> <br/><br/> <br/><br/> <br/><br/>
               
                </div>
             </Grid>
             </Grid>
             </div>
             </div>






             <br/><br/><br/><br/><br/><br/>
             <br/><br/><br/><br/><br/><br/>
         


    
              <br/><br/><br/><br/><br/><br/>
             <div className={classes.gamegridroot}>
             <Grid container spacing={3}> 
             <Grid item xs={12} sm={12} lg={6} xl={6}>
                <div className={classes.gamegrid2}> 
                <img className={classes.backlucimglogosecCapital}  src="/img/luctoken/Group 452.png"/>
                <br/><br/>
                <br/><br/>
                <br/><br/>
                <br/><br/><br/><br/>
                <p className="gametextwinner">     
                 Treasury Wallet address :

                </p>
                <p className="gametextwinner  gametextwinnerspan11root">     
                r4bGj7jkMqip3xkaPaetBhNtQSaG6QazmL
                </p>
                <p className="gametextwinner">     
                Total Luc tokens in treasury wallet: 650,000,441 LUC tokens
                </p>

                <br/><br/>
                <br/><br/>
                <br/><br/>
                <br/><br/>
                
                </div>
             </Grid>
             <Grid item xs={12} sm={12} lg={6} xl={6}>
                <div className={classes.gamegrid2}> 
                <img className={classes.backlucimglogosecCapital}  src="/img/luctoken/Group 453.png"/>
                <br/><br/>
                <p className="gametext2winnerluc">     
                Capital Raising

                </p>
                <br/><br/>

                <p className="gametextwinner">     
                Wallet balance after private sale distribution:
                </p>
                <p className="gametextwinner">     
                102,977,937 LUC tokens
                </p>
              
                <p className="gametextwinner">     
                Distribution: From March to September 2022
                </p>
                <br/><br/>
                <p className="gametextwinner">     
                Usage:
                </p>
              
                <p className="gametextwinner">     
                Release for IEO, Staking, Market Liquidity, Fundraising
                </p>
                <br/><br/> 
               
                </div>
             </Grid>
             </Grid>
             
             </div>

             <br/><br/><br/><br/><br/><br/>
             <br/><br/><br/><br/><br/><br/>
             <br/><br/><br/><br/><br/><br/>
                    <p className="gametext2winner">     
                   <b>Token Allocation</b> 
                    </p>
                    <div className={classes.backlucimglogoallocation}>
                       <Slideeer/>
                    </div>
                    <br/><br/><br/><br/><br/><br/><br/><br/>

          <Footer/>


    
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

export default LucToken;