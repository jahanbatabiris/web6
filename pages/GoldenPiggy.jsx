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
    stskingsectn3:{
        backgroundPosition: 'center center',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    stskingsectn5:{
      width:'90%',
      backgroundPosition: 'center center',
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    }
     

}));

function GoldenPiggy() {
    const classes = useStyles();
    const [dataa, setDataa] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch('https://check.lucretius.network/checkstakingall')
        .then((res) => res.json())
        .then((data) => {
          setDataa(data)
          setLoading(false)
        })
    }, [])



    // ----------------------------------------sbscribe---------------------------------------
    const { register, handleSubmit } = useForm();
    const {
      register: register2,
      handleSubmit: handleSubmit2,
    } = useForm();
    const {
      register: register3,
      handleSubmit: handleSubmit3,
    } = useForm();
  
    const onSubmit = (data) => {
  
  
      const signupfunction = () => {
        axios.get(`https://staking.lucretius.network/addUser/${data.walletAddress}/${data.amount}`).then((res) => {
          console.log(res.data)
          if (res.data == "add") {
            swal.fire({
              icon: 'success',
              html: `  
          <div className={classes.root}>
           
          <Grid className={classes.box2}>
            <Typography className='stakingtitle3' >
                   <span style="font-size:15px;color:darkblue" >Registration Confirmed</span>
           </Typography>
           <br/>
            <div style="font-size:13px">
            
            1st Grade &nbsp;
             <span style="color:#e1ab42;font-size:20px">
             &#8594;
             </span> 
            
            
             &nbsp;
             ${(data.amount * 30 / 100 / 52).toFixed(0)}(4 Week) = ${(data.amount * 30 / 100 / 52 * 4).toFixed(0)} 
  
            </div>
            <div style="font-size:13px">
            
            2nd Grade &nbsp;
            <span style="color:#e1ab42;font-size:20px">
            &#8594;
            </span> 
             
             &nbsp;
             ${(data.amount * 50 / 100 / 52).toFixed(0)}(4 Week) = ${(data.amount * 50 / 100 / 52 * 4).toFixed(0)} 
            </div>
            <div style="font-size:13px">
            
            3rd Grade &nbsp;
            <span style="color:#e1ab42;font-size:20px">
            &#8594;
            </span> 
             &nbsp;
             ${(data.amount * 70 / 100 / 52).toFixed(0)}(5 Week) = ${(data.amount * 70 / 100 / 52 * 5).toFixed(0)}
  
            </div>
            <div style="font-size:13px">
            
            4th Grade &nbsp;
            <span style="color:#e1ab42;font-size:20px">
            &#8594;
            </span> 
             &nbsp;
             ${(data.amount * 100 / 100 / 52).toFixed(0)}(4 Week) = ${(data.amount * 100 / 100 / 52 * 4).toFixed(0)}
  
            </div>
            <div style="font-size:13px">
            
            5th Grade &nbsp;
            <span style="color:#e1ab42;font-size:20px">
            &#8594;
            </span> 
             &nbsp;
             ${(data.amount * 130 / 100 / 52).toFixed(0)}(4 Week) = ${(data.amount * 130 / 100 / 52 * 4).toFixed(0)}
  
            </div>
            <div style="font-size:13px">
            
            6th Grade &nbsp;
            <span style="color:#e1ab42;font-size:20px">
            &#8594;
            </span> 
             &nbsp;
             ${(data.amount * 180 / 100 / 52).toFixed(0)}(5 Week) = ${(data.amount * 180 / 100 / 52 * 5).toFixed(0)} 
  
            </div>
            <div style="font-size:13px">
            
            7th Grade &nbsp;
            <span style="color:#e1ab42;font-size:20px">
            &#8594;
            </span> 
             &nbsp;
             ${(data.amount * 250 / 100 / 52).toFixed(0)}(4 Week) = ${(data.amount * 250 / 100 / 52 * 4).toFixed(0)} 
  
            </div>
            <div style="font-size:13px">
            
            8th Grade &nbsp;
            <span style="color:#e1ab42;font-size:20px">
            &#8594;
            </span> 
            
             &nbsp;
             ${(data.amount * 350 / 100 / 52).toFixed(0)}(5 Week) = ${(data.amount * 350 / 100 / 52 * 5).toFixed(0)}
            </div>
            <div style="font-size:13px">
            
            9th Grade &nbsp;
            <span style="color:#e1ab42;font-size:20px">
            &#8594;
            </span> 
            
             &nbsp;
             ${(data.amount * 520 / 100 / 52).toFixed(0)}(1 Week) = ${(data.amount * 520 / 100 / 52 * 1).toFixed(0)}
            </div>
            <br/>
            <Grid container spacing={1}>
            <Grid item  xs={12} sm={12} md={6} lg={6} xl={6}>
           <div style="font-size:13px">
              
            </div>
            </Grid>
            <Grid item  xs={12} sm={12} md={6} lg={6} xl={6}>
               
             <div style="font-size:13px">
                     <Typography className='stakingtitle31'>
                     Total reward for 36 weeks:
                     </Typography>
                     <Typography className='stakingtitle32'>
                     ${((data.amount * 520 / 100 / 52 * 1) + (data.amount * 350 / 100 / 52 * 5) + (data.amount * 250 / 100 / 52 * 4) + (data.amount * 180 / 100 / 52 * 5)
                  + (data.amount * 130 / 100 / 52 * 4) + (data.amount * 100 / 100 / 52 * 4) +
                  (data.amount * 70 / 100 / 52 * 5) + (data.amount * 50 / 100 / 52 * 4) +
                  (data.amount * 30 / 100 / 52 * 4)).toFixed(0)
                }
                     </Typography>
             </div>
             </Grid>
            </Grid>
  
          </Grid>
       </div> 
  `,
            })
          } else if (res.data == "exch") {
            swal.fire({
              icon: 'error',
              html: `<div>Your Subscription failed
          <br/>
         <p style="font-size:11px;text-align:center">Exchange wallets are not qualified for the program, Please submit your XRPL wallets.</p> 
          </div>`
            })
          }
          else if (res.data == "neb") {
            swal.fire({
              icon: 'error',
              html: `<div>
          <br/>
         <p style="font-size:11px;text-align:center">Your balance is not enough.</p> 
          </div>`
            })
          }
          else if (res.data == "ww") {
            swal.fire({
              icon: 'error',
              html: `<div>Your Subscription failed
        <br/>
        <p style="font-size:11px;text-align:center">Check your wallet address and try again later.</p> 
        </div>`
            })
          }else if (res.data == "tha") {
            swal.fire({
              icon: 'error',
              html: `<div>Your Subscription failed
        <br/>
        <p style="font-size:11px;text-align:center">The maximum amount is 1M.</p> 
        </div>`
            })
          }
        }) 
      }
      if (document.getElementById("input111").value === "") {
        swal.fire({
          icon: 'error',
          text: 'Please fill the boxes',
        })
      } else if (document.getElementById("input222").value === "") {
        swal.fire({
          icon: 'error',
          text: 'Please fill the boxes',
        })
      }
      else {
        swal.fire({
          html: 'Please wait...',
          allowEscapeKey: false,
          allowOutsideClick: false,
          timer : 10000,
          didOpen: () => {
            swal.showLoading()
          }
        })
        axios.get(`https://staking.lucretius.network/checkUser/${data.walletAddress}`).then((res) => {
          if (res.data >= 1) {
            swal.fire({
              title: 'You already have the active plan, do you want to add a new plan ?',
              icon: 'info',
              showCancelButton: true,
              confirmButtonText: 'Yes, add a new plan',
              cancelButtonText: `No Thanks`,
            }).then((result) => {
  
              if (result.isConfirmed) {
                signupfunction()
              } else if (result.isDenied) {
                swal.fire('Changes are not saved', '', 'info')
              }
            })
  
          }
          else {
            swal.fire({
              html: 'Please wait...',
              allowEscapeKey: false,
              allowOutsideClick: false,
              timer : 10000,
              didOpen: () => {
                swal.showLoading()
              }
            })
            signupfunction()
          }
        })
      }
    };


    // ------------------------------------------check-------------------------------------
    const [data, setData] = useState({ name: "" });
    const onSubmitCheck = () => {
 
      if(document.getElementById("input11").value === ""){
       
        swal.fire({
             icon: 'error',
          text: 'Please fill the boxes!'
        
        })
      }
      else {
  
    
      }
    };


    // ---------------------------------------------claimed---------------------------------------------
      
  const [walletAddress, setWalletAddress] = useState('');

  const handleChange = event => {
    setWalletAddress(event.target.value);
  };

  const [emailAddress, setEmailAddress] = useState('');

  const handleChanget = event => {
    setEmailAddress(event.target.value);
  };

  const onSubmitClaim = () => {
    if(emailAddress === ''){
        
      emailAddress=0;
     
    }

    if(document.getElementById("input112").value === ""){
     
      swal.fire({
           icon: 'error',
        text: 'Please fill the boxes!'
      
      })
    }


    else {
      swal.fire({
        html: 'Please wait...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        timer : 10000,
        didOpen: () => {
          swal.showLoading()
        }
      })
      axios.get(`https://staking.lucretius.network/faq/${walletAddress}/${emailAddress}`).then((res) => {

        if (res.data == "ww") {
          swal.fire({
            icon: 'error',
            text: 'wrong wallet address!'
    
          })
        }
        else{
          swal.fire({
          icon: 'success',
          text: 'your request registered!'

        })
        }

      })
 
  
    }
  };


    
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
                <title>Golden Piggy "36"</title>
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

                <br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/>
                <Typography className="stakingtitle" >
               <b>Golden Piggy "36" </b>         
               </Typography>
                <Grid container spacing={3}> 
                    <Grid item xs={12} sm={12} lg={7} xl={8}>
                           <Typography className="stakingtext">
                           We have created the Golden Piggy "36" program to support $LUC investors and holders until the launch of our MetaVerse. The program is built around 36 weeks of rewards where token holders will enjoy APY of between 30% and 520%.
                           </Typography>
                            <button className="stakingbtn1" id="sub">
                            Subscribe
                            </button>

                            <div className="modal-parent" id="modal-parent">
                              <div className="modalsub">
                              <p className="modalsubtitle">golden piggy ’36’ subscription</p> 
                              <form onSubmit={handleSubmit(onSubmit)}> 
                              <Grid container spacing={0} >
                                
                                   <Grid item xs={12} sm={12} lg={6} xl={6}>
                                   <p className="modalsublable">Enter Your Wallet Address:</p>
                                   </Grid>
                                   <Grid item xs={12} sm={12} lg={6} xl={6}>
                                   <input className="modalsubinput" id='input111'  {...register("walletAddress")} />
                                   </Grid>
                                   <Grid item xs={12} sm={12} lg={6} xl={6}>
                                   <p className="modalsublable">Enter Amount:</p>
                                   </Grid>
                                   <Grid item xs={12} sm={12} lg={6} xl={6}>
                                   <input className="modalsubinput" id='input222'   {...register("amount")} type="number" min="1000" max="1000000"/>
                                   </Grid>
                                   <input type="submit" value="Subscribe" className="modalsubinputsubmit"/>
                                 
                              </Grid>
                             </form> 
                                <span className="X" id="X">&times;</span>
                              </div>
                            </div>
                            &nbsp; &nbsp;
                            <button className="stakingbtn2" id="sub2">
                            Check Reward
                            </button>
                            <div className="modal-parent" id="modal-parent2">
                              <div className="modalsub">
                              <p className="modalsubtitle">golden piggy ’36’ Check Reward</p> 
                             
                              <Grid container spacing={0} onSubmit={handleSubmit2(onSubmitCheck)}> 
                                   <Grid item xs={12} sm={12} lg={6} xl={6}>
                                   <p className="modalsublable">Enter Your Wallet Address:</p>
                                   </Grid>
                                   <Grid item xs={12} sm={12} lg={6} xl={6}>
                                   <input className="modalsubinput" id='input11'  {...register2("walletaddress")}
                                         value={data.name}
                                         onChange={(event) =>
                                           setData({
                                             name: event.target.value,
                                           })
                                         }
                                   />
                                   </Grid>
                                   <Link
                                      href={{
                                        pathname: "/StakingCheck",
                                        query: data,
                                      }}
                                    >
                                      <a className="modalsubinputsubmit" target="_blank" rel="noreferrer">
                                        Check Reward
                                      </a>
                                    </Link>
                              </Grid>
                                
                                <span className="X" id="X2">&times;</span>
                              </div>
                            </div>
                            &nbsp; &nbsp;
                            <button className="stakingbtn3" id="sub3">
                            Reward didn't arrive
                            </button>
                            <div className="modal-parent" id="modal-parent3">
                              <div className="modalsub">
                              <p className="modalsubtitle">Reward didn't arrive?</p> 
                              <form onSubmit={handleSubmit3(onSubmitClaim)}>
                              <Grid container spacing={0} > 
                                   <Grid item xs={12} sm={12} lg={6} xl={6}>
                                   <p className="modalsublable">Enter Your Wallet Address:</p>
                                   </Grid>
                                   <Grid item xs={12} sm={12} lg={6} xl={6}>
                                   <input className="modalsubinput"
                                             onChange={handleChange}
                                             value={walletAddress}
                                             id='input112' />
                                   </Grid>
                                   <Grid item xs={12} sm={12} lg={6} xl={6}>
                                   <p className="modalsublable">Enter Your Email Address</p>
                                   </Grid>
                                   <Grid item xs={12} sm={12} lg={6} xl={6}>
                                   <input className="modalsubinput" placeHolder="(optional)"
                                    onChange={handleChanget}
                                    value={emailAddress}
                                    id='input113'
                                   />
                                   </Grid>
                                   <input type="submit" value="Claim Reward" className="modalsubinputsubmit"/>
                              </Grid>
                              </form>
                                <span className="X" id="X3">&times;</span>
                              </div>
                            </div>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={5} xl={4}>
                      <br/><br/>
                            <img className="headerimg" src="/img/events/golden-piggy.png"/>
                            <br/><br/>
                            <Typography className="showstaking1">
                                 Staked
                            </Typography>
                            <Typography className="showstaking2">
                                {new Intl.NumberFormat().format(dataa)} LUC
                            </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12} xl={12}>
                        <br/><br/><br/><br/><br/>
                                <Typography className="stakingsection2text1">
                                  
                                </Typography>
                                <Typography className="stakingsection2text2">
                                Please check the rewards and percentages below for better understanding :
                               </Typography>
                               <Typography className="stakingsection2text3">
                               
                               </Typography>
                               <Typography className="stakingsection2text4">
                               
                               </Typography>
                    </Grid>
                </Grid>

                <Typography className="stskingsectn3title" >36 Weeks Rewards</Typography>
                <Grid className={classes.stskingsectn3} container spacing={3}> 
                        <div className={classes.back1} >
                                  
                                  <p className="stskingsectn3text1">1st Grade</p>
                                  <p className="stskingsectn3text2">4 Weeks</p>
                                  <p className="stskingsectn3span"></p>
                                  <p className="stskingsectn3text3">Weekly</p>
                                  <p className="stskingsectn3text4">30% APY</p>
                          </div>
                            <div className={classes.back1} >
                                  
                                  <p className="stskingsectn3text1">2nd Grade</p>
                                  <p className="stskingsectn3text2">4 Weeks</p>
                                  <span className="stskingsectn3span"></span>
                                  <p className="stskingsectn3text3">Weekly</p>
                                  <p className="stskingsectn3text4">50% APY</p>
                          </div>
                            <div className={classes.back1} >
                                  
                                  <p className="stskingsectn3text1">3rd Grade</p>
                                  <p className="stskingsectn3text2">5 Weeks</p>
                                  <span className="stskingsectn3span"></span>
                                  <p className="stskingsectn3text3">Weekly</p>
                                  <p className="stskingsectn3text4">70% APY</p>
                          </div>
                          <div className={classes.back1} >
                                  
                                  <p className="stskingsectn3text1">4th Grade</p>
                                  <p className="stskingsectn3text2">4 Weeks</p>
                                  <span className="stskingsectn3span"></span>
                                  <p className="stskingsectn3text3">Weekly</p>
                                  <p className="stskingsectn3text4">100% APY</p>
                          </div>
                            <div className={classes.back1} >
                                  
                                  <p className="stskingsectn3text1">5th Grade</p>
                                  <p className="stskingsectn3text2">4 Weeks</p>
                                  <span className="stskingsectn3span"></span>
                                  <p className="stskingsectn3text3">Weekly</p>
                                  <p className="stskingsectn3text4">130% APY</p>
                          </div>
                            <div className={classes.back1} >
                                  
                                  <p className="stskingsectn3text1">6th Grade</p>
                                  <p className="stskingsectn3text2">5 Weeks</p>
                                  <span className="stskingsectn3span"></span>
                                  <p className="stskingsectn3text3">Weekly</p>
                                  <p className="stskingsectn3text4">180% APY</p>
                          </div>
                            <div className={classes.back1} >
                                  
                                  <p className="stskingsectn3text1">7th Grade</p>
                                  <p className="stskingsectn3text2">4 Weeks</p>
                                  <span className="stskingsectn3span"></span>
                                  <p className="stskingsectn3text3">Weekly</p>
                                  <p className="stskingsectn3text4">250% APY</p>
                          </div>
                            <div className={classes.back1} >
                                  
                                  <p className="stskingsectn3text1">8th Grade</p>
                                  <p className="stskingsectn3text2">5 Weeks</p>
                                  <span className="stskingsectn3span"></span>
                                  <p className="stskingsectn3text3">Weekly</p>
                                  <p className="stskingsectn3text4">350% APY</p>
                          </div>
                            <div className={classes.back1} >
                                  
                                  <p className="stskingsectn3text1">9th Grade</p>
                                  <p className="stskingsectn3text2">1 Weeks</p>
                                  <span className="stskingsectn3span"></span>
                                  <p className="stskingsectn3text3">Weekly</p>
                                  <p className="stskingsectn3text4">520% APY</p>
                          </div>
                </Grid>
              

                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <Typography className="stskingsectn3title" >Example for 100K LUC</Typography>
                <Grid className={classes.stskingsectn3} container spacing={3}> 
                         <div className={classes.back1} >
                                  
                                  <p className="stskingsectn3text1">1st Grade</p>
                                  <p className="stskingsectn3text5">4 Weeks</p>
                                  <p className="stskingsectn3text3"> 30000/52  =  (Weekly)577*4  =>  2307</p>

                          </div>
                          <div className={classes.back1} >
                                  
                                  <p className="stskingsectn3text1">2nd Grade</p>
                                  <p className="stskingsectn3text5">4 Weeks</p>
                                  <p className="stskingsectn3text3"> 50000/52  =  (Weekly)962*4  =>  3846</p>

                          </div>
                          <div className={classes.back1} >
                                  
                                  <p className="stskingsectn3text1">3rd Grade</p>
                                  <p className="stskingsectn3text5">5 Weeks</p>
                                  <p className="stskingsectn3text3">70000/52  =  (Weekly)1346*5  =>  6731</p>

                          </div>
                          <div className={classes.back1} >
                                  
                                  <p className="stskingsectn3text1">4th Grade</p>
                                  <p className="stskingsectn3text5">4 Weeks</p>
                                  <p className="stskingsectn3text3">100000/52  =  (Weekly)1923*4  =>  7692</p>

                          </div>
                          <div className={classes.back1} >
                                  
                                  <p className="stskingsectn3text1">5th Grade</p>
                                  <p className="stskingsectn3text5">4 Weeks</p>
                                  <p className="stskingsectn3text3">130000/52  =  (Weekly)2500*4  =>  10000</p>

                          </div>
                          <div className={classes.back1} >
                                  
                                  <p className="stskingsectn3text1">6th Grade</p>
                                  <p className="stskingsectn3text5">5 Weeks</p>
                                  <p className="stskingsectn3text3">180000/52  =  (Weekly)3462*5  =>  17308</p>

                          </div>
                          <div className={classes.back1} >
                                  
                                  <p className="stskingsectn3text1">7th Grade</p>
                                  <p className="stskingsectn3text5">4 Weeks</p>
                                  <p className="stskingsectn3text3">250000/52  =  (Weekly)4808*4  =>  19230</p>

                          </div>
                          <div className={classes.back1} >
                                  
                                  <p className="stskingsectn3text1">8th Grade</p>
                                  <p className="stskingsectn3text5">5 Weeks</p>
                                  <p className="stskingsectn3text3">350000/52  =  (Weekly)6731*5  =>  33653</p>

                          </div>
                          <div className={classes.back1} >
                                  
                                  <p className="stskingsectn3text1">9th Grade</p>
                                  <p className="stskingsectn3text5">1 Weeks</p>
                                  <p className="stskingsectn3text3">520000/52  =  (Weekly)10000*1  =>  10000</p>

                          </div>
                </Grid>
                <Typography className="stskingsectn3total" >Total reward for 36 weeks = <span className="stskingsectn3totalspan">110,769</span></Typography>

                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <Typography className="stskingsectn3title" >NB</Typography>
                <div className={classes.stskingsectn5}>
                <Typography className="stskingsectn5text" >
                1. To participate in the Golden Piggy '36' program, you'll subscribe using your wallet address and the amount of LUC that you are willing to participate with.
                <br/>
                2. Your rewards will be automatically canceled the day your holding amount falls below your subscription amount. For example, if you subscribe with 100k LUC, you are required to keep your holding balance above 100k. If your holding balance drops to 99,999, your subscription will cancel automatically and you will lose out on the rewards of the remaining weeks.
                <br/>
                3. You can increase your subscription amount by adding to your holding balance. you must subscribe to the program for an additional amount and your rewards will be coming after the first week and it'll be calculated separately from the previous rewards.
                <br/>
                4. Minimum holding amount to participate is 1000LUC, maximum is 1,000,000LUC.
                <br/>
                5. The reward deposits in less than 24h
                <br/>
                6. The Golden Piggy '36' will commence on <span className="stskingsectn5textspan">Monday 20th June 2022</span>.
                <br/>
                7. Subscription period <span className="stskingsectn5textspan">begins 1st June</span>  and <span className="stskingsectn5textspan">ends July 31st</span> . (May be extended)

                </Typography>
                </div>

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



            <Script
              id="stripe-jsaoxowwmnm"
              src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
              onLoad={() => {
                
                let $ = document
                let modalBtn = $.querySelector("#sub")
                let modal = $.querySelector("#modal-parent")
                let close = $.querySelector("#X")
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
            <Script
              id="stripe-jsaoxowwmnmcd"
              src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
              onLoad={() => {
                
                let $ = document
                let modalBtn = $.querySelector("#sub2")
                let modal = $.querySelector("#modal-parent2")
                let close = $.querySelector("#X2")
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
             <Script
              id="stripe-jsaoxowwmnmcdee"
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
  );
}

export default GoldenPiggy;
