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
    iframe:{
      height:"555px",
      [theme.breakpoints.down("850")]: {
        height:"510px",
      },
    }
     

}));

function BurnToEarn() {
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



    // ----------------------------------check-------------------------
    const [data, setData] = useState({ wallet: "" });
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



    // ---------------------------------------------claimed-------------------------------------------

    const {
      register: register2,
      handleSubmit: handleSubmit2,
    } = useForm();
    const {
      register: register3,
      handleSubmit: handleSubmit3,
    } = useForm();

    const [walletAddress, setWalletAddress] = useState('');

    const handleChanget = event => {
      setWalletAddress(event.target.value);
    };
  
  
    const [emailAddress, setEmailAddress] = useState('');
  
    const handleChangetr = event => {
      setEmailAddress(event.target.value);
    };
  
    const onSubmitClaim = () => {
      if (emailAddress === '') {
  
        emailAddress = 0;
  
      }
  
  
      if (document.getElementById("input112").value === "") {
  
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
          timer: 10000,
          didOpen: () => {
            swal.showLoading()
          }
        })
        axios.get(`https://b2e.lucretius.network/faq/${walletAddress}/${emailAddress}`).then((res) => {
  
          if (res.data == "ww") {
            swal.fire({
              icon: 'error',
              text: 'wrong wallet address!'
  
            })
          }
          else {
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
        <title>Burn To Earn "25"</title>
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
               <b>Burn To Earn "25"</b>         
               </Typography>
                <Grid container spacing={3}> 
                    <Grid item xs={12} sm={12} lg={7} xl={8}>
                           <Typography className="stakingtext">
                           UP to 1040% APY
                           <br/>
                           At Lucretius, we have designed the Burn to Earn "25" program to support our early investors and loyal followers before we launch our Lucretius metaverse. The program is aimed at members of the XRPL community; as such, exchange wallets will be ineligible to participate.
                          <br/>
                          Please read the full information below to gain a deeper understanding of the program.
                           </Typography>
                            <button className="stakingbtn1" id="sub">
                            Subscribe
                            </button>

                            <div className="modal-parent" id="modal-parent">
                              <div className="modalsub">
                              <p className="modalsubtitle">golden piggy ’36’ subscription</p> 
                              <iframe
                              className={classes.iframe}
          style={{ border: 'none !import', outline: 'none !import'}}
          id="xxxbb"
          title="xxx"
          width="100%"
          frameBorder="value"
          allowTransparency
          srcDoc={`
          <!doctype html>
          <html>
          <head>
              <title>Chat bot</title>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width">
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
              <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
              <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
              <style>
              body{
                background-color:#26224800;
                
                border-radius:10px;
                height: 100%;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
              }
              @font-face {
                font-family: myFirstFont;
                src: url(/fonts/SevenSegment.ttf);
              }
              @font-face {
                font-family: timothy;
                src: url(/fonts/TimothyRegular400.ttf);
                src: url(/fonts/TimothyRegular400.woff);
              }
              .root{
              margin: auto;
              background-color: #23255A00;

              }

              .row1{
                background-position: center center;
                margin: auto;
                justify-content: center;
                align-items: center;
                display:flex;
              }
              .lable11{
                color:white;
                font-size:18px;
                float:left;
                
              }
              .lable12{
                color:white;
                font-size:18px;
                float:left;
               
              }
              .lable13{
                color:white;
                font-size:18px;
                float:left;
         
              }
              .input1{
                padding: 10px 10px;
                width: 100%;
                border:solid 1px white;
                background-color:#23255A00;
                border-radius: 100px;
                color: black;
                fontSize: 13px;
               
              }

              .btn{
                color:white;
                font-size:22px;
                background-position: center center;
                margin: auto;
                justify-content: center;
                align-items: center;
                display: flex;
                cursor: pointer;
                color: white;
                font-size: 24px;
                width: 250px;
                background-color: #EF9630;
                border: none;
                outline: none;
                border-radius: 100px;
                padding: 10px 10px;
              }

              .add{
                background-color:gray;
                border:none;
                border-radius: 100%;
                color:white !important;
                font-size:20px;
                width: 55px;
                height: 55px;
          
                border:solid 3px white;
                justify-content: center;
                align-items: center;
                display: inline-flex;
                cursor: pointer;
              }
              .add:hover{
                background-color:rgb(89, 56, 179);
                border:solid 3px #cf52da;
                color:#cf52da;
              }

              @media only screen and (max-width: 840px){
                .lable11{
                  color:white;
                  font-size:14px;
                  float:left;
                  margin-top:-20px
                }
                .lable12{
                  color:white;
                  font-size:14px;
                  float:left;
                  margin-top:-10px
                 
                }
                .lable13{
                  color:white;
                  font-size:14px;
                  float:left;
                  margin-top:-10px
                }
                .input1{
                  padding: 10px 5px;
                  width: 100%;
                  border:solid 1px white;
                  background-color:#23255A00;
                  border-radius: 100px;
                  color: black;
                  fontSize: 13px;
                 
                }
  
                .btn{
                  color:white;
                  font-size:18px;
                  background-position: center center;
                  margin: auto;
                  justify-content: center;
                  align-items: center;
                  display: flex;
                  cursor: pointer;
                  color: white;
                  font-size: 24px;
                  width: 200px;
                  background-color: #EF9630;
                  border: none;
                  outline: none;
                  border-radius: 100px;
                  padding: 5px 5px;
                  margin-top:-30px
                }
  
                .add{
                  background-color:gray;
                  border:none;
                  border-radius: 100%;
                  color:white !important;
                  font-size:15px;
                  width: 42px;
                  height: 42px;
            
                  border:solid 3px white;
                  justify-content: center;
                  align-items: center;
                  display: inline-flex;
                  cursor: pointer;
                }
              }
             
              </style>
          </head>
          <body style="width:auto;">
          <div id="root" class="root">

                <br/><br/>
              <form>
                <div class="container-fluid">
                <div class="row row1">
                
                  <div  class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                   <label class="lable11" for="fname">Enter Your Wallet Address :</label>
                  </div> 
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <input onclick="myFunctionn()" v-model="walletAddress" class="input1"  type="text" id="fname" name="fname">
             
                  </div> 
                  
                
               </div> 
               </div> 

               <br/><br/>

               <div class="container-fluid">
               <div class="row row1">
               
                 <div  class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <label class="lable12" for="fname">Enter Your LUC Purchased TX Hash :</label>
                 </div> 
                 
                 <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                 <!--   <span v-for="item in pHashs" style="color:white;background:#cf52da" class="badge ">{{nesfkon(item)}}</span>-->
                 <textarea style="display:block" v-model="pHash" class="input1"  type="text" id="fname" name="fname"  >

                 
                </textarea>
                <p   class="add" @click="addpHash" > &#10133; </p>
                <!--  <span style="color:white;font-size:14px;margin-left:20px">You entred {{(pHashs).length}} TX Hash</span>-->
      
                </div> 
                 
               
              </div> 
              </div> 

              <br/><br/>


              <div class="container-fluid">
              <div class="row row1">
              
                <div  class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                 <label class="lable13" for="fname">Enter LUC Transferred TX Hash :</label>
                </div> 
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <!--<span v-for="item in tHashs" style="color:white;background:#cf52da" class="badge ">{{nesfkon(item)}}</span>-->
                  <textarea style="display:block" v-model="tHash" class="input1"  type="text" id="fname" name="fname">
                 
                  </textarea>
                <p   class="add" @click="addtHash" > &#10133; </p>
                <!--  <span style="color:white;font-size:14px;margin-left:20px">You entred {{(tHashs).length}} TX Hash</span>-->
                
                </div> 
                
             </div> 
             </div> 
             <br/><br/><br/>
             <p onclick="myFunction()" @click="submitb2e" class="btn">
               Subscribe
             </p>
             </form>  

         
             
          </div>
        
          <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
       <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
       <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.26.0/axios.min.js"></script>

       <script>
        function myFunction() {
                       Swal.fire({
                          icon: 'info',
                          text: 'new Burn 2 Earn subscription program is not available until further notice.'
                         })
       }
       </script>
       <script>
       function myFunctionn() {
                      Swal.fire({
                         icon: 'info',
                         text: 'new Burn 2 Earn subscription program is not available until further notice.'
                        })
      }
      </script>
         
    //       <script>
    //     new Vue({
    //         el: "#root",
    //         data: {

    //             obj: {},
    //             walletAddress : '',
    //             tHash : '',
    //             pHash : '',
    //             pHashs : [],
    //             tHashs : [],

    //         },
    //         methods: {


    //           Swal.fire({
    //             icon: 'error',
    //             text: 'please enter a purchased tx hash'
    //           })

    //             nesfkon : function (text){
    //               let result = text.substr(0, 3) 
    //               let result1 = text.substr(text.length-3,text.length )
    //               return result + '...' + result1
    //             },
    //           addpHash: function() {
    //             if (this.pHash === "") {
    //               Swal.fire({
    //                 icon: 'error',
    //                 text: 'please enter a purchased tx hash'
    //               })
    //              }
    //              else {
    //               (this.pHashs).push(this.pHash)
    //               this.pHash = ""
    //               Swal.fire({
    //                 icon: 'success',
    //                 text: 'Your tx hash has been added successfully, you can add another one'
    //               })
                  
    //             }
               
    //         },
    //         addtHash: function() {
    //           if (this.tHash === "") {
    //             Swal.fire({
    //               icon: 'error',
    //               text: 'please enter a transferred tx hash'
    //             })
    //            }
    //           else {
    //             (this.tHashs).push(this.tHash)
    //             this.tHash = ""
    //             Swal.fire({
                  
    //               icon: 'success',
    //               text: 'Your tx hash has been added successfully, you can add another one'
    //             })
               
    //           }
              
    //       },
    //            submitb2e: function () {
    //             if (this.tHashs === "" || this.pHashs === "" || this.walletAddress === "") {
    //                 Swal.fire({
    //                     icon: 'error',
    //                     html: 'Please fill all the required fields and add your tx by + button'
    //                 })
    //             }
    //             else {
    //                 Swal.fire({
    
    //                     icon: 'info',
    //                     html: 'You entered ' + (this.tHashs).length + ' transferred tx hashes and ' + (this.pHashs).length + ' purchased tx hashes for <br>' + this.walletAddress + '<br> Do you confirm it?',
    //                     showCancelButton: true,
    //                     confirmButtonText: 'Yes, I do',
    //                     cancelButtonText: 'No , I will enter again',
    
    //                 }).then((result) => {
    
    //                     if (result.isConfirmed) {

    //                       Swal.fire({
    //                         html: 'Please wait...',
    //                         allowEscapeKey: false,
    //                         allowOutsideClick: false,
    //                         timer : 10000,
    //                         didOpen: () => {
    //                           Swal.showLoading()
    //                         }
    //                       })
                          
                       
    //                         this.obj.walletAddress = this.walletAddress
    //                         this.obj.pHash = this.pHashs
    //                         this.obj.tHash = this.tHashs
    //                         console.log(this.obj)

    //                         axios.put("https://b2e.lucretius.network/addUser",this.obj
    //                         ).then(function(response) {
    //                           Swal.close()
    //                           if(response.data == "add"){
    //                             Swal.fire({
    //                               icon: 'success',
    //                               html: 'Your request registered! , You can check your status after 48 Hour'
    //                           })
                
    //                           }
    //                   if(response.data == "ww"){
    //                     Swal.fire({
    //                       icon: 'error',
    //                       html: 'wrong wallet address'
    //                   })

    //                   }


    //                   this.obj = {}
    //                   this.walletAddress = '',
    //                   this.tHash = ''
    //                   this.pHash = ''
    //                   this.pHashs = []
    //                   this.tHashs = []




                           
    //                         })

    
    //                     } else {
    //                       this.obj = {}
    //                       this.walletAddress = '',
    //                       this.tHash = ''
    //                       this.pHash = ''
    //                       this.pHashs = []
    //                       this.tHashs = []
    //                       }
    //                       })
                         
                       
                
    //             }
    
    //         }
    //         }



    //     })
    // </script>
    
          </body>
          </html>
          `}
        />
                                  
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
                                   <input className="modalsubinput" 
                                                   value={data.wallet}
                                                   onChange={(event) =>
                                                     setData({
                                                       wallet: event.target.value,
                                                     })
                                                   }
                                                 />
                                   </Grid>
                                   <Link
                                    href={{
                                      pathname: "/B2eCheck",
                                      query: data, // the data
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
                        <Grid container spacing={0}> 
                            
                                   <Grid item xs={12} sm={12} lg={6} xl={6}>
                                   <p className="modalsublable">Enter Your Wallet Address:</p>
                                   </Grid>
                                   <Grid item xs={12} sm={12} lg={6} xl={6}>
                                   <input className="modalsubinput"
                                      id='input112'    
                                      onChange={handleChanget}
                                          value={walletAddress}
                                          />
                                   </Grid>
                                   <Grid item xs={12} sm={12} lg={6} xl={6}>
                                   <p className="modalsublable">Enter Your Email Address</p>
                                   </Grid>
                                   <Grid item xs={12} sm={12} lg={6} xl={6}>
                                   <input  className="modalsubinput" placeHolder="(optional)"
                                   name="email"
                                    id='input113'  
                                    onChange={handleChangetr}
                                      value={emailAddress}
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
                            <img className="headerimg" src="/img/events/b2e.png"/>
                            <br/><br/>
                            <Typography className="showstaking1">
                            Burned
                            </Typography>
                            <Typography className="showstaking2">
                                {new Intl.NumberFormat().format(dataa)} LUC
                            </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12} xl={12}>
                        <br/><br/><br/><br/><br/>
                                <Typography className="stakingsection2text1">
                                  <b>To participate in the program,</b>
                                </Typography>
                                <Typography className="stakingsection2text2">
                                you will buy $LUC tokens from the market and send them to the wallet address provided below:
                               </Typography>
                               <Typography className="stakingsection2text3">
                               "rK6oxn1UBPRSyjFPgw9HmRdGQNwku55Wg6"
                               </Typography>
                               <Typography className="stakingsection2text4">
                               The tokens will be burnt automatically upon arrival at the address. Participants must submit their wallet address, the transaction hash for buying tokens, and the transaction hash for transferring tokens to the burn wallet address.
                               </Typography>
                    </Grid>
                </Grid>
                <div className={classes.back2b2e} >
                    <div className={classes.back2b2ediv}>
                      <p className="back2b2edivtext">If you buy a total of 100,000 $LUC from the market through four transactions, you will have four different transaction hashes:</p>
                            <div className={classes.stskingsectn33}>
                              <div className="gradient-border-mask">ABB1234...</div> 
                              <div className="gradient-border-mask">B2233HH...</div> 
                              <div className="gradient-border-mask">C3456AA...</div> 
                              <div className="gradient-border-mask">DTED44...</div> 
                          
                            </div>  
                        <p className="back2b2edivtext">Then you send all the 100,000 $LUC to the wallet address provided to burn, and you get another transaction hash:</p>
                        <div className={classes.stskingsectn33}>
                            <p className="gradient-border-mask">ETH321BBB...</p>
                            </div>  
                    </div>                          
                  </div>
                <Typography className="stskingsectn3title" >To participate in the Burn to Earn “25” program</Typography>
                <p className="back2b2edivtext">you must submit your wallet address, the four transaction hashes for buying the $LUC tokens, and the transaction hash for transferring tokens to the burn wallet address into the provided form fields.</p>
              
                <p className="back2b2edivtext">The first week of the incentive program will commence twenty-four hours after submission. Participants will enjoy the following APY percentages:</p>
                <Grid className={classes.stskingsectn3} container spacing={3}> 
                        <div className={classes.back1} >
                                  
                                  <p className="stskingsectn3text1">1st Grade</p>
                                  <p className="stskingsectn3text2">4 Weeks</p>
                                  <p className="stskingsectn3span"></p>
                                  <p className="stskingsectn3text4"> 1040% APY  </p>
                          </div>
                            <div className={classes.back1} >
                                  
                                  <p className="stskingsectn3text1">2nd Grade</p>
                                  <p className="stskingsectn3text2">4 Weeks</p>
                                  <span className="stskingsectn3span"></span>
                                  <p className="stskingsectn3text4">520% APY  </p>
                          </div>
                            <div className={classes.back1} >
                                  
                                  <p className="stskingsectn3text1">3rd Grade</p>
                                  <p className="stskingsectn3text2">4 Weeks</p>
                                  <span className="stskingsectn3span"></span>
                                  <p className="stskingsectn3text4">260% APY </p>
                          </div>
                          <div className={classes.back1} >
                                  
                                  <p className="stskingsectn3text1">4th Grade</p>
                                  <p className="stskingsectn3text2">13 Weeks</p>
                                  <span className="stskingsectn3span"></span>
                                  <p className="stskingsectn3text4">240% APY  </p>
                          </div>
                            
                </Grid>
              

                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <Typography className="stskingsectn3title" >Example for 100K LUC</Typography>
                <p className="back2b2edivtext"> Continuing based on the example above, you participated in the program with 100,000 $LUC. Below is a breakdown of your rewards for 25 weeks of the program:</p>
               
                <Grid className={classes.stskingsectn3} container spacing={3}> 
                         <div className={classes.back1} >
                                  
                                
                                  <p className="stskingsectn3text5">First 4 weeks</p>
                                  <p className="stskingsectn3text3">
1040% APY  =  1,040,000/52  =  20,000  =>  80,000 
<br/>Receivable for 4 weeks  </p>

                          </div>
                          <div className={classes.back1} >
                                  
                                
                                  <p className="stskingsectn3text5">Second 4 weeks</p>
                                  <p className="stskingsectn3text3">
520% APY  =  520,000/52  =  10,000  =>  40,000
<br/> Receivable for 4 weeks </p>

                          </div>
                          <div className={classes.back1} >
                                  
                
                                  <p className="stskingsectn3text5">Third 4 weeks</p>
                                  <p className="stskingsectn3text3">
260% APY  =  260,000/52  =  5,000  =>  20,000<br/> Receivable for 4 weeks  </p>

                          </div>
                          <div className={classes.back1} >
                                  
                             
                                  <p className="stskingsectn3text5">Last 13 weeks</p>
                                  <p className="stskingsectn3text3">
240% APY  =  240,000/52  =  4,616  =>  60,000<br/> Receivable for 13 weeks </p>

                          </div>
                         
                </Grid>
                <Typography className="stskingsectn3total" >Total reward for 25 weeks: <span className="stskingsectn3totalspan">200,000</span></Typography>

                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <Typography className="stskingsectn3title" >NB</Typography>
                <div className={classes.stskingsectn5}>
                <Typography className="stskingsectn5text" >
                1. The Burn to Earn “25” program is designed for members of the XRPL community; exchange wallets will be ineligible to participate.
                <br/>
                2. The program will commence on Friday 1st July 2022, and participation will stay open until 100,000,000 $LUC tokens are burned. In other words, the Burn to Earn “25” program will end when that amount is reached.
                <br/>
                3. The reward deposits in less than 24h
                <br/>
                4. Rewards will be distributed weekly starting 1st July
                <br/>
                5. Lucretius will accept only successful transactions on XRPL DEXs for participation in the program.
                
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

export default BurnToEarn;
