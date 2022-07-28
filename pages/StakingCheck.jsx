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
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import { useRouter } from "next/router";




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

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  width:'70% !important',
  backgroundPosition: 'center center',
  margin: 'auto',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === '#918E96' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    backgroundImage: 'linear-gradient(to right, #632D8C ,#662D91, #B0188D)',
  },
}));

function StakingCheck() {
    const classes = useStyles();


    const router = useRouter();
    const address = router.query.name;
    const baseURL = `https://staking.lucretius.network/checkWalletAddress/${address}`;

    const [post, setPost] = useState(null);
    useEffect(() => {
      axios.get(baseURL).then((response) => {
        console.log(response.data)
        setPost(response.data);
      });
    });
  
    if (!post) return null;



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
        <title>Staking Check</title>
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
                               <b> LUCRETIUSE</b> 
                            </Typography>
                            <Typography className="modalluc2">
                               <b>  LUCRET<span className="modalluc2span">IUSE</span></b>
                            </Typography>
                    </Grid>
                    </Grid>
                    </div>
                </div>
            </div>

                <br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/>
                <Typography className="stakingcheck" >
               <b>Staking Check </b>         
               </Typography>

               <br/><br/><br/><br/>
              
                <Grid className={classes.stskingsectn3root}  container spacing={2}>
                    <Grid  className="stskingcheck1" item xs={12} sm={12} lg={12} xl={12}>
                      <div className="stskingcheck1div">
                        <Typography className="stskingchecktitle" > 
                            Wallet Address : <span className="stskingchecktitlespan">{address}</span>
                        </Typography>      
                      </div>
                    </Grid>
                    {post.map((item,index) => {
                   let aaa = ((item.claimedAmount)*100/(item.totalClaimingAmount));
                if(item.alive === 1){
                  return (
                    <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4} key={item}>
                      <div className="stskingcheck1div">
                       <Grid className={classes.stskingsectn3root}  container spacing={2}>
                          <Grid item xs={12} sm={12} lg={6} xl={6}>
                            <Typography className="stskingcheck1divtitle1">
                               Amount: 
                            </Typography> 
                            <Typography className="stskingcheck1divtitle2">
                            {item.balance} 
                            </Typography>
                            <br/><br/>
                            <Typography className="stskingcheck1divtitle1">
                              Start Date:
                            </Typography> 
                            <Typography className="stskingcheck1divtitle2">
                            {item.startDate}
                            </Typography> 
                          </Grid>
                          <Grid  item xs={12} sm={12} lg={6} xl={6}>
                             
                             <Typography style={{textAlign:'center'}} className="stskingcheck1divtitle1">
                              Active
                              </Typography> 
                              <br />
                             <BorderLinearProgress variant="determinate" value={aaa} />
                              <br/> <br /> <br /> <br />
                              <Typography className="stskingcheck1divtitle1">
                              Claimed Amount:
                              </Typography> 
                              <Typography className="stskingcheck1divtitle2">
                              {(() => {
                                  let total = 0;
                                  var ar= [0, 0.00577, 0.00577, 0.00577, 0.00577, 0.00962, 0.00962, 0.00962, 0.00962
                                    , 0.013462, 0.013462, 0.013462, 0.013462, 0.013462, 0.019231, 0.019231,
                                    0.019231, 0.019231, 0.025, 0.025, 0.025, 0.025, 0.03462, 0.03462, 0.03462,
                                    0.03462, 0.03462, 0.0481, 0.0481, 0.0481, 0.0481, 0.06731, 0.06731,
                                    0.06731, 0.06731, 0.06731, 0.1];
                                  for(let i=1 ; i <= item.week ; i++){
                                    total += (item.balance)*(ar[item.week])
                                }
                                return (total).toFixed(2);
                               })()}
                              </Typography> 
                          </Grid>
                          
                          <Grid  item xs={12} sm={12} lg={12} xl={12}>
                          <Link
                          href={{
                            pathname: "/StakingStatus",
                            query: item, // the data
                          }}
                           >
                              <a className="stskingcheck1divlink">
                              <br/><br/>
                              View More Details <ArrowRightAltIcon className="stskingcheck1divlinkicon"/>
                              </a> 
                          </Link>

                           
                          </Grid>
                       </Grid>
                       
                      </div>
                    </Grid>
                          );
                 
                     }
                                 
                    return(
                      <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4} key={item}>
                      <div className="stskingcheck1divdead">
                       <Grid className={classes.stskingsectn3root}  container spacing={2}>
                          <Grid item xs={12} sm={12} lg={6} xl={6}>
                            <Typography className="stskingcheck1divtitle1">
                               Amount: 
                            </Typography> 
                            <Typography className="stskingcheck1divtitle2">
                            {item.balance} 
                            </Typography>
                            <br/><br/>
                            <Typography className="stskingcheck1divtitle1">
                              Start Date:
                            </Typography> 
                            <Typography className="stskingcheck1divtitle2">
                            {item.startDate}
                            </Typography> 
                          </Grid>
                          <Grid  item xs={12} sm={12} lg={6} xl={6}>
                             
                             <Typography style={{textAlign:'center'}} className="stskingcheck1divtitle1">
                              Deactive
                              </Typography> 
                              <br />
                             <BorderLinearProgress variant="determinate" value={0} />
                              <br/> <br /> <br /> <br />
                              <Typography className="stskingcheck1divtitle1">
                              Claimed Amount:
                              </Typography> 
                              <Typography className="stskingcheck1divtitle2">
                              {(() => {
                                  let total = 0;
                                  var ar= [0, 0.00577, 0.00577, 0.00577, 0.00577, 0.00962, 0.00962, 0.00962, 0.00962
                                    , 0.013462, 0.013462, 0.013462, 0.013462, 0.013462, 0.019231, 0.019231,
                                    0.019231, 0.019231, 0.025, 0.025, 0.025, 0.025, 0.03462, 0.03462, 0.03462,
                                    0.03462, 0.03462, 0.0481, 0.0481, 0.0481, 0.0481, 0.06731, 0.06731,
                                    0.06731, 0.06731, 0.06731, 0.1];
                                  for(let i=1 ; i <= item.week ; i++){
                                    total += (item.balance)*(ar[item.week])
                                }
                                return (total).toFixed(2);
                               })()}
                              </Typography> 
                          </Grid>
                          
                          <Grid  item xs={12} sm={12} lg={12} xl={12}>
                              <a className="stskingcheck1divlinkdead">
                              <br/><br/>
                              Outrage Occrured
                              </a> 
                           
                          </Grid>
                       </Grid>
                       
                      </div>
                    </Grid>
                      );
            
                    })}
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </Grid>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
               

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
              }}
            />



          
    </div>
  );
}

export default StakingCheck;
