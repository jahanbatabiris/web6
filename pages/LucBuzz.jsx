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
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CntDwnLucBuzz from '../component/layout/CntDwnLucBuzz';


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
    poolroot:{
      backgroundColor:'#231E2D',
      borderRadius:'17px',
      padding:'5% 26px 5% 26px',
    },
    LucBuzzcnt:{
      width:'90%',
      backgroundPosition: 'center center',
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    }
     

}));


function LucBuzz() {
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



    // ---------------------------------------subscribe-----------------------------------------
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


       swal.fire({
          icon: 'info',
          text: 'The BUZZ Program will commence on 1st of August',
        })
  
  
  //     const signupfunction = () => {
  //       axios.get(`https://api.lucretius.network/buzz/add${data.walletAddress}/${data.amount}`).then((res) => {
  //         console.log(res.data)
  //         if (res.data == "add") {

  //           swal.fire({
  //             icon: 'success',
  //             html: `  
  //             <div className={classes.root}>
              
  //             <Grid className={classes.box2}>
  //               <Typography className='stakingtitle3' >
  //                     <span style="font-size:15px;color:darkblue" >Registration Confirmed</span>
  //             </Typography>
  //             <br/>
  //               <div style="font-size:13px">
                
  //               1st Grade &nbsp;
  //             <span style="color:#e1ab42;font-size:20px">
  //             &#8594;
  //             </span> 
              
            
  //            &nbsp;
  //            ${(data.amount * 30 / 100 / 52).toFixed(0)}(4 Week) = ${(data.amount * 30 / 100 / 52 * 4).toFixed(0)} 
  
  //           </div>
  //           <div style="font-size:13px">
            
  //           2nd Grade &nbsp;
  //           <span style="color:#e1ab42;font-size:20px">
  //           &#8594;
  //           </span> 
             
  //            &nbsp;
  //            ${(data.amount * 50 / 100 / 52).toFixed(0)}(4 Week) = ${(data.amount * 50 / 100 / 52 * 4).toFixed(0)} 
  //           </div>
  //           <div style="font-size:13px">
            
  //           3rd Grade &nbsp;
  //           <span style="color:#e1ab42;font-size:20px">
  //           &#8594;
  //           </span> 
  //            &nbsp;
  //            ${(data.amount * 70 / 100 / 52).toFixed(0)}(5 Week) = ${(data.amount * 70 / 100 / 52 * 5).toFixed(0)}
  
  //           </div>
  //           <div style="font-size:13px">
            
  //           4th Grade &nbsp;
  //           <span style="color:#e1ab42;font-size:20px">
  //           &#8594;
  //           </span> 
  //            &nbsp;
  //            ${(data.amount * 100 / 100 / 52).toFixed(0)}(4 Week) = ${(data.amount * 100 / 100 / 52 * 4).toFixed(0)}
  
  //           </div>
  //           <div style="font-size:13px">
            
  //           5th Grade &nbsp;
  //           <span style="color:#e1ab42;font-size:20px">
  //           &#8594;
  //           </span> 
  //            &nbsp;
  //            ${(data.amount * 130 / 100 / 52).toFixed(0)}(4 Week) = ${(data.amount * 130 / 100 / 52 * 4).toFixed(0)}
  
  //           </div>
  //           <div style="font-size:13px">
            
  //           6th Grade &nbsp;
  //           <span style="color:#e1ab42;font-size:20px">
  //           &#8594;
  //           </span> 
  //            &nbsp;
  //            ${(data.amount * 180 / 100 / 52).toFixed(0)}(5 Week) = ${(data.amount * 180 / 100 / 52 * 5).toFixed(0)} 
  
  //           </div>
  //           <div style="font-size:13px">
            
  //           7th Grade &nbsp;
  //           <span style="color:#e1ab42;font-size:20px">
  //           &#8594;
  //           </span> 
  //            &nbsp;
  //            ${(data.amount * 250 / 100 / 52).toFixed(0)}(4 Week) = ${(data.amount * 250 / 100 / 52 * 4).toFixed(0)} 
  
  //           </div>
  //           <div style="font-size:13px">
            
  //           8th Grade &nbsp;
  //           <span style="color:#e1ab42;font-size:20px">
  //           &#8594;
  //           </span> 
            
  //            &nbsp;
  //            ${(data.amount * 350 / 100 / 52).toFixed(0)}(5 Week) = ${(data.amount * 350 / 100 / 52 * 5).toFixed(0)}
  //           </div>
  //           <div style="font-size:13px">
            
  //           9th Grade &nbsp;
  //           <span style="color:#e1ab42;font-size:20px">
  //           &#8594;
  //           </span> 
            
  //            &nbsp;
  //            ${(data.amount * 520 / 100 / 52).toFixed(0)}(1 Week) = ${(data.amount * 520 / 100 / 52 * 1).toFixed(0)}
  //           </div>
  //           <br/>
  //           <Grid container spacing={1}>
  //           <Grid item  xs={12} sm={12} md={6} lg={6} xl={6}>
  //          <div style="font-size:13px">
              
  //           </div>
  //           </Grid>
  //           <Grid item  xs={12} sm={12} md={6} lg={6} xl={6}>
               
  //            <div style="font-size:13px">
  //                    <Typography className='stakingtitle31'>
  //                    Total reward for 36 weeks:
  //                    </Typography>
  //                    <Typography className='stakingtitle32'>
  //                    ${((data.amount * 520 / 100 / 52 * 1) + (data.amount * 350 / 100 / 52 * 5) + (data.amount * 250 / 100 / 52 * 4) + (data.amount * 180 / 100 / 52 * 5)
  //                 + (data.amount * 130 / 100 / 52 * 4) + (data.amount * 100 / 100 / 52 * 4) +
  //                 (data.amount * 70 / 100 / 52 * 5) + (data.amount * 50 / 100 / 52 * 4) +
  //                 (data.amount * 30 / 100 / 52 * 4)).toFixed(0)
  //               }
  //                    </Typography>
  //            </div>
  //            </Grid>
  //           </Grid>
  
  //         </Grid>
  //      </div> 
  // `,
  //           })
  //         } else if (res.data == "exch") {
  //           swal.fire({
  //             icon: 'error',
  //             html: `<div>Your Subscription failed
  //         <br/>
  //        <p style="font-size:11px;text-align:center">Exchange wallets are not qualified for the program, Please submit your XRPL wallets.</p> 
  //         </div>`
  //           })
  //         }
  //         else if (res.data == "neb") {
  //           swal.fire({
  //             icon: 'error',
  //             html: `<div>
  //         <br/>
  //        <p style="font-size:11px;text-align:center">Your balance is not enough.</p> 
  //         </div>`
  //           })
  //         }
  //         else if (res.data == "ww") {
  //           swal.fire({
  //             icon: 'error',
  //             html: `<div>Your Subscription failed
  //             <br/>
  //             <p style="font-size:11px;text-align:center">Check your wallet address and try again later.</p> 
  //             </div>`
  //           })
  //         }else if (res.data == "tha") {
  //           swal.fire({
  //             icon: 'error',
  //             html: `<div>Your Subscription failed
  //                     <br/>
  //                     <p style="font-size:11px;text-align:center">The maximum amount is 10000.</p> 
  //                     </div>`
  //           })
  //         }
  //       }) 
  //     }
      // if (document.getElementById("input111").value === "") {
      //   swal.fire({
      //     icon: 'error',
      //     text: 'Please fill the boxes',
      //   })
      // } else if (document.getElementById("input222").value === "") {
      //   swal.fire({
      //     icon: 'error',
      //     text: 'Please fill the boxes',
      //   })
      // }
      // else {
      //   swal.fire({
      //     html: 'Please wait...',
      //     allowEscapeKey: false,
      //     allowOutsideClick: false,
      //     timer : 10000,
      //     didOpen: () => {
      //       swal.showLoading()
      //     }
      //   })
      //   axios.get(`https://staking.lucretius.network/checkUser/${data.walletAddress}`).then((res) => {
      //     if (res.data >= 1) {
      //       swal.fire({
      //         title: 'You already have the active plan, do you want to add a new plan ?',
      //         icon: 'info',
      //         showCancelButton: true,
      //         confirmButtonText: 'Yes, add a new plan',
      //         cancelButtonText: `No Thanks`,
      //       }).then((result) => {
  
      //         if (result.isConfirmed) {
      //           signupfunction()
      //         } else if (result.isDenied) {
      //           swal.fire('Changes are not saved', '', 'info')
      //         }
      //       })
  
      //     }
      //     else {
      //       swal.fire({
      //         html: 'Please wait...',
      //         allowEscapeKey: false,
      //         allowOutsideClick: false,
      //         timer : 10000,
      //         didOpen: () => {
      //           swal.showLoading()
      //         }
      //       })
      //       signupfunction()
      //     }
      //   })
      // }
    };



    // --------------------------------------------pool------------------------------------------------

    const baseURL = `https://api.lucretius.network/buzz/check`;

    const [post, setPost] = useState(null);
    useEffect(() => {
      axios.get(baseURL).then((response) => {
        console.log(response.data)
        setPost(response.data);
      });
    }, []);
  
    if (!post) return null;

    const percentage = 0;






    
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
        <title>LucBuzz</title>
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
               <b> The Lucretius Buzz Program</b>         
               </Typography>
                <Grid container spacing={3}> 
                    <Grid item xs={12} sm={12} lg={7} xl={8}>
                           <Typography className="stakingtext">
                              The Buzz program is a spectacular new program that will propel the Lucretius project to the moon.
                              <br/>
                            
                           </Typography>
                            <button className="stakingbtn1" id="sub">
                             Subscribe
                            </button>

                            <div className="modal-parent" id="modal-parent">
                              <div className="modalsub">
                              <p className="modalsubtitle">golden piggy ’36’ subscription</p> 
                            

                              {/* {(() => {
                                
                                 
                                for(let i=3 ; i>-1 ; i--){
                                
                                   if(data.id === 4 && data.is_full === 1){

                                    <p className="modalsubtitle"> All pools are filled</p> 

                                   }
                                   else if(data.id === 3 && data.is_full === 1){
                                    <p className="modalsubtitle"> pool4</p> 
                                   }
                                   else if(data.id === 2 && data.is_full === 1){
                                    <p className="modalsubtitle"> pool3</p> 
                                   }
                                   else if(data.id === 1 && data.is_full === 1){
                                    <p className="modalsubtitle"> pool2</p> 
                                   }
                                   else if(data.id === 1 && data.is_full === 0){
                                    <p className="modalsubtitle"> pool1</p> 
                                   }
                                 
                                 }


                                 for (var i = 3; i > -1; i--) {
                                  var result = post.result[i]
                                 
                                  for (const [key, data] of Object.entries(result)) {
                                      if (key == "id") {
                                          console.log(data)
                                      }
                                  }
                          
                              }
                               
                              })()} */}
                                
                    

                                  
                         
                              <p className="modalsubtitle"></p> 
                              <form onSubmit={handleSubmit(onSubmit)}> 
                              <Grid container spacing={0}> 
                                   <Grid item xs={12} sm={12} lg={6} xl={6}>
                                   <p className="modalsublable">Enter Your Wallet Address:</p>
                                   </Grid>
                                   <Grid item xs={12} sm={12} lg={6} xl={6}>
                                   <input className="modalsubinput" id='input111'  {...register("walletAddress")}/>
                                   </Grid>
                                   <Grid item xs={12} sm={12} lg={6} xl={6}>
                                   <p className="modalsublable">Enter Amount:</p>
                                   </Grid>
                                   <Grid item xs={12} sm={12} lg={6} xl={6}>
                                   <input className="modalsubinput" type="number" min="100" max="10000" id='input222'   {...register("amount")}/>
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
                              <Grid container spacing={0}> 
                                   <Grid item xs={12} sm={12} lg={6} xl={6}>
                                   <p className="modalsublable">Enter Your Wallet Address:</p>
                                   </Grid>
                                   <Grid item xs={12} sm={12} lg={6} xl={6}>
                                   <input className="modalsubinput"/>
                                   </Grid>
                                   <input type="submit" value="Check Reward" className="modalsubinputsubmit"/>
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
                              <Grid container spacing={0}> 
                                   <Grid item xs={12} sm={12} lg={6} xl={6}>
                                   <p className="modalsublable">Enter Your Wallet Address:</p>
                                   </Grid>
                                   <Grid item xs={12} sm={12} lg={6} xl={6}>
                                   <input className="modalsubinput"/>
                                   </Grid>
                                   <Grid item xs={12} sm={12} lg={6} xl={6}>
                                   <p className="modalsublable">Enter Your Email Address</p>
                                   </Grid>
                                   <Grid item xs={12} sm={12} lg={6} xl={6}>
                                   <input className="modalsubinput" placeHolder="(optional)"/>
                                   </Grid>
                                   <input type="submit" value="Claim Reward" className="modalsubinputsubmit"/>
                              </Grid>
                                <span className="X" id="X3">&times;</span>
                              </div>
                            </div>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={5} xl={4}>
                      <br/><br/>
                            <img className="headerimg" src="/img/events/lucbuzz.png"/>
                            <br/><br/>
                            <Typography className="showstaking1">
                               Filled
                            </Typography>
                            <Typography className="showstaking2">
                                {new Intl.NumberFormat().format(post.total_capacity)} XRP
                            </Typography>
                    </Grid>
                    <br/><br/>    <br/><br/>
                    <Grid item xs={12} sm={12} lg={12} xl={12}>
                    <br/><br/>    <br/><br/>    <br/><br/>
                        <Grid className={classes.poolroot} container spacing={0}> 
                        {post.result.map((user) => (
                               <Grid item xs={12} sm={12} lg={3} xl={3} key={user}>
                                                
                               <br/><p className="progresslucbuzrootp">Pool{user.id}</p>
                               <div className="progresslucbuzroot">
                                 
                                 <CircularProgressbar value={((user.current_capacity)*100/(user.max_capacity))} text={`${user.current_capacity}  Balance`}
                                     style={{ margin: 0}}
                                       gradient={[
                                         { stop: 0.0, color: "#2E008B" },
                                         { stop: 1, color: "#BB16A3" }
                                       ]}
                                     
                                       strokeWidth={3}
                                       ballStrokeWidth={25}
                                       subtitle={"Periyod Süresi"}
                                         />
                                 </div> 
                               </Grid>
                            ))}
      

                              {/* <Grid item xs={12} sm={12} lg={4} xl={3}>
                                 
                              <br/><p className="progresslucbuzrootp">Pool2</p>
                              <div className="progresslucbuzroot">
                               
                                <CircularProgressbar value={percentage} text={`${percentage} balance`}
                                    style={{ margin: 0}}
                                      gradient={[
                                        { stop: 0.0, color: "#2E008B" },
                                        { stop: 1, color: "#BB16A3" }
                                      ]}
                                   
                                      strokeWidth={3}
                                      ballStrokeWidth={25}
                                      subtitle={"Periyod Süresi"}
                                       />
                                </div> 
                              </Grid>
                              <Grid item xs={12} sm={12} lg={4} xl={3}>
                              
                              <br/><p className="progresslucbuzrootp">Pool3</p>
                              <div className="progresslucbuzroot">
                                <CircularProgressbar value={percentage} text={`${percentage} balance`}
                                    style={{ margin: 0}}
                                      gradient={[
                                        { stop: 0.0, color: "#2E008B" },
                                        { stop: 1, color: "#BB16A3" }
                                      ]}
                                   
                                      strokeWidth={3}
                                      ballStrokeWidth={25}
                                      subtitle={"Periyod Süresi"}
                                       />
                                </div> 
                              </Grid>
                              <Grid item xs={12} sm={12} lg={4} xl={3}>
                              <br/>
                              <p className="progresslucbuzrootp">Pool4</p>
                              <div className="progresslucbuzroot">
                                <CircularProgressbar value={percentage} text={`${percentage} balance`}
                                    style={{ margin: 0}}
                                      gradient={[
                                        { stop: 0.0, color: "#2E008B" },
                                        { stop: 1, color: "#BB16A3" }
                                      ]}
                                   
                                      strokeWidth={3}
                                      ballStrokeWidth={25}
                                      subtitle={"Periyod Süresi"}
                                       />
                                </div> 
                              </Grid> */}
                              <Grid item xs={12} sm={12} lg={12} xl={12}>
                              <br/><br/><br/><br/>
                                <div className={classes.LucBuzzcnt}>
                                   <CntDwnLucBuzz/>
                                </div>
                               
                              </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={12} sm={12} lg={12} xl={12}>
                        <br/><br/><br/><br/><br/>
                                <Typography className="stakingsection2text1">
                                  <b>primary objectives of the program are to:</b>
                                </Typography>
                                <Typography className="stskingsectn5text" >
                        <span style={{display:'inline-block',color:'#EF9630'}} >.</span>   Release more $LUC tokens and create ample liquidity in the market

                <br/>
                <span style={{display:'inline-block',color:'#EF9630'}} >.</span>    Generate buzz and attract more investors to Lucretius ahead of the project launch 

                <br/>
                <span style={{display:'inline-block',color:'#EF9630'}} >.</span>    Turn the bear market around by providing abundant liquidity for trading the $LUC token
                <br/>
                <span style={{display:'inline-block',color:'#EF9630'}} >.</span>     Build a rock-solid buy wall to boost the price of the $LUC token during the program

                <br/>
                <span style={{display:'inline-block',color:'#EF9630'}} >.</span>    Help token holders and other investors invest safely in the $LUC token while maximizing rewards
                
                <br/><br/><br/>
                </Typography>
                <Typography style={{margin:'5%'}} className="stskingsectn5text" >
                The program consists of four repeatable pools that users can join to enjoy juicy rewards. All four pools will have unique wallet addresses and a maximum capacity of 10000 XRP each. To join a pool, each user is required to hold between 100 and 10000 XRP. In other words, each pool will comprise between 1-100 persons. 
                <br/><br/><br/>
                </Typography>
                    </Grid>
                </Grid>
               
                <Typography className="stskingsectn3title" >How it works:</Typography>
               <TimeLinePool/>
               
                <br/><br/><br/><br/><br/>
                
                <div className={classes.stskingsectn5}>
                <Typography className="stskingsectn5text" >
                Upon joining a pool, each investor will receive two transaction hashes; one for a buy order equal to 50% of their investment and another for a sell order equal to 20% of their investment. 
                <br/>
                Participating investors can track their investments and follow their weekly rewards and commissions from other pools that will be deposited daily.

                <br/>
                After the completion of Pool 4, the pools will be repeated until the target number of $LUC tokens has been released into circulation. In other words, after Pool 4, we will conduct another round starting from Pool 1. 
                <br/>
                We will redistribute all proceeds from $LUC tokens bought back to the community during this period. The Lucretius team will not receive this bounty. 

                
                <br/><br/><br/><br/><br/>
                </Typography>
                </div>

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



            <Script
              id="stripe-jsaoxowwmnmcdi"
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
              id="stripe-jsaoxowwmnmcdmn"
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
              id="stripe-jsaoxowwmnmcdeepol"
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

export default LucBuzz;
