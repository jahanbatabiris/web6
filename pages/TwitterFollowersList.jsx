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
    title:{

        [theme.breakpoints.down("710")]: {
            marginTop:'60px',
            fontSize:'26px',
          },
    }


     

}));

function TwitterFollowersList() {
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
          <meta name="title" content="Lucretius"/>
          <meta name="description" content="Lucretius"/>
          <meta name="robots" content="index, follow" />
          <title>Twitter Followers List</title>
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
                <br/><br/><br/><br/><br/>
                <br/>
        <Typography className={classes.title} style={{ color:'white',textAlign:'center'}} variant='h4'>
              <b>Twitter Followers List</b>
              <br/><br/><br/>
        </Typography>
        <br/>
            <iframe style={{height:'1900px',  backgroundColor: '#1C2246',}}
      id="xxx"
      title="xxx"
      width="100%"
      height="auto"
      frameBorder="value"
      allowTransparency
      srcDoc={`
          <!doctype html>
          <html>
          <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>TwitterFollowers</title>
          <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
          <style>

  
          @font-face {
            font-family:robo;
            src: url('/fonts/Roboto-Regular.ttf');
          }

          body{
              font-family:RobotoCondensed;
              background-color:#0C0617;
              background-size: 100% 100%;
              background-repeat: no-repeat; 
              overflow: hidden;
              height: auto;
              text-align: center;
              background-position: center center;
              justify-content: center;
              align-items: center;
              margin: auto;
              display: flex;
          }
         
          .rooot{
            width: 100%;
          }

          .div {
              text-align: center;
              width: 95%;
              height: 850px;
              background-repeat: no-repeat;
              background-size: 100% 100%;
              padding-top: 30px;
              padding-bottom: 30px;
              padding-left: 30px;
              padding-right: 30px;
              border-radius: 10px; 
              overflow: hidden;
          }  
          .divinside{
            overflow: hidden;
            border-radius: 10px; 
            padding-top: 20px;
            padding-bottom: 20px;
            padding-left: 20px;
            padding-right: 20px;
            height: 95%;
          }
   
          #myInput {
            width: 100%;
            background-color:#8E5FC300;
            height: 70px;
            border-radius: 100px; 
            padding-left:20px;
            border: solid 2px white;
            color:white;
            font-size:22px
          }
  
          ::-webkit-input-placeholder {
              text-align: left;
              color: gray;
              font-size:15px;
              margin:13px
          }
  
          :-ms-input-placeholder {
              text-align: left;
              color: gray;
              font-size:15px;
              margin:13px
          }
  
          ::placeholder {
              text-align: left;
              color: gray;
              font-size:15px;
              padding-left:20px !important
          }
  
          input[type="text"]::placeholder {
              text-align: left;
              font-size:20px
          }
          .tableroot{
              height: 99%;
              width: 100%;
              overflow: scroll;
          }
  
          ::-webkit-scrollbar {
              width: 8px;
      }

      ::-webkit-scrollbar-track {
          background-color: #f7f7f7;
          border-radius: 50px;
          width: 8px;
      }

      ::-webkit-scrollbar-thumb {
          background-color: #8b9dc3;
          border-radius: 50px;
          width: 8px;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        border: 1px solid #ddd00;
      }
      
      th, td {
        text-align: center;
        padding: 16px;
        color:white;
        font-size:20px;
        font-family:robo !important;
        
      }
      th{
          color:#EF9630;
          font-size:22px;
          
      }
      .thone{
          border-bottom-left-radius:100px;
          border-top-left-radius:100px
      }
      
      .first{
        border-bottom-left-radius:100px;
        border-top-left-radius:100px
      }
      .last{
        border-bottom-right-radius:100px;
        border-top-right-radius:100px
      }


      tr:nth-child(even) {
        background-color: #ffffff28;
        border-radius: 100px !important;
      }
      tr{
        border-radius: 100px !important;
      }
      .fa-search{
          color:gray !important;
          position:absolute;
          right:18px;
          top:25px;
          font-size:29px;
      }

      .inputroot{
        position: relative;
        width: 99%;
        height: 57px;

        
    }

    
          @media screen and (max-width: 500px){
            input[type="text"]::placeholder {
                text-align: left;
                font-size:16px
            }
            ::-webkit-input-placeholder {
                text-align: left;
                color: gray;
                font-size:10px;
                margin:13px
            }
    
            :-ms-input-placeholder {
                text-align: left;
                color: gray;
                font-size:10px;
                margin:13px
            }
    
            ::placeholder {
                text-align: left;
                color: gray;
                font-size:10px;
                padding-left:20px !important
            }
          .inputroot{
              position: relative;
              width: 95%;
              height: 50px;
              border-radius: 10px; 
              
          }
          ::placeholder {
            text-align: left;
            color: gray;
            font-size:12px;
            padding-left:0px !important
        }
        .fa-search{
            color:gray !important;
            position:absolute;
            right:18px;
            top:25px;
            font-size:29px;
            display:none
        }
        .div {
            margin-left:-13%;
            text-align: center;
            width: 105%;
            height: 850px;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding-top: 30px;
            padding-bottom: 30px;
            padding-left: 30px;
            padding-right: 30px;
            border-radius: 10px; 
            overflow: hidden;
        }  
        th, td {
            text-align: center;
            padding: 3px;
            font-size:17px;
            font-family:robo !important;
            
          }
          #myInput {
            width: 100%;
            background-color:#8E5FC300;
            height: 60px;
            border-radius: 100px; 
            padding-left:10px;
            border: solid 2px white;
            color:white;
            font-size:14px !important
          }

              }

              .titleroot{
                background-position: center center;
                margin: auto;
                justify-content: center;
                align-items: center;
                display:flex;
                font-family:robo;
            }
            .titleroot2{
                 width: 95%;

            }
            .title1{
                 color: white;
                 text-align: left; 
                 font-size:25px

            }
            .title11{
                text-align: left;                 
           }
            .title2{
                 color: white;
                 text-align: left;
                 font-size:20px;
            }
            .title3{
                 color: white;
                 text-align: left;
                 font-size:16px;
            }
            .span1{
                 background-color: #ffffff3d;
                 border-radius: 20px; 
                 padding:5px 5px;
            }
            .twitlink{
                color: white;
            }
            .twitlink1{
                color: white;
            }
                @media screen and (max-width: 800px){
                .title1{
                 color: white;
                 text-align: left;                 
                 background-color: rgba(0, 0, 0, 0);;
                 border-radius: 20px; 
                 padding:10px 10px;
                 font-size:20px
            }
            .title2{
                color: white;
                text-align: left;
                font-size:17px;
           }
           .title3{
                color: white;
                text-align: left;
                font-size:15px;
           }
                }
      
      
      </style> 
         </head>
          <body>
          <div class="rooot">
          <div class="titleroot">
          <div class="titleroot2">
          <br/>
           <h2 class="title11">
            <span class="title1">Our bots are recording your wallet addresses automatically. </span> 
           </h2>
           <br/>
           <p class="title2">
               <b>Please be patient if you sent your wallet address to <a class="twitlink" href="https://twitter.com/LucretiusAD" target="_blank"> @LucretiusAD </a> but your wallet is not yet on the list. </b><br/>
               You can check again after sometime.
           </p><br/>
           <p class="title3">
               <svg style="color:#0A99F6" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                 <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
               </svg>
               Please note that to qualify for this airdrop, you must:
               <br/><br/>
              <span class="span1"> 1. Be following <a class="twitlink1" href="https://twitter.com/LucretiusAD" target="_blank">@LucretiusNet</a></span>
                <br/> <br/>
                <span class="span1">
                  2. Hold at least 200 $ LUC balance.   
                </span>
              
           </p>
       </div>  
       </div>
          <div style="margin-top: 10px;" class="div"  id="root">
          <div class="divinside">
             
          <div class="inputroot">
                 <input class="inputmodal" type="text" id="myInput" onkeyup="myFunction1()" placeholder="Enter Your Wallet Address Here" dir="ltr">
                 <i class='fas fa-search'></i>
          </div>
          <br/> <br/> <br/>
          <div class="tableroot" style="overflow-x:auto;direction: ltr;">
              <table id="myTable">


              <tr class="one">
              <th class="thone">Index</th>
                  <th >Twitter Handle</th>
                  <th >Wallet Address</th>
                  <th class="thtwo">Qualification</th>
              </tr>
           
              <tr v-for="(item, index) in obj">
                       <td class="align-middle text-cente first">
                            <p> {{index+1}}</p>
                        </td>
                       <td class="align-middle text-center">
                            <p> {{item.twitterHandle}}</p>
                        </td>
                        <td class="align-middle text-center">
                            <p> {{item.walletAddress.slice(0, 10).concat("...")}}</p>
                        </td>
                         <td class="align-middle text-center last">
                            <p>{{item.qualification}}</p>
                         </td>
                </tr>

              </table>
          
          </div>

          </div>
    
      </div>
</div>
      <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
      <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.26.0/axios.min.js"></script>
         <script>
             function myFunction1() {
                 // Declare variables 
                 var input, filter, table, tr, td, i;
                 input = document.getElementById("myInput");
                 filter = input.value.toUpperCase();
                 table = document.getElementById("myTable");
                 tr = table.getElementsByTagName("tr");
     
                 // Loop through all table rows, and hide those who don't match the search query
                 for (i = 0; i < tr.length; i++) {
                     td = tr[i].getElementsByTagName("td")[1];
                     if (td) {
                         if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                             tr[i].style.display = "";
                             console.log(tr[i].cells[1].firstChild.data)
                         } else {
                             tr[i].style.display = "none";
                             // # # # # #
                             // display: none
                             // # # # #
                         }
                     }
                 }
             }
         </script>
         <script>
       new Vue({
           el: "#root",
           data: {
               obj: [],
               w8: true,
               resultBack: false,
               startSlice: 0,
               numberSlice: 50,

           },
           methods: {
               getData: function() {
                
                   axios.get('http://service.lucretius.network/snapshot/twitterAirdrop').then(res => {
                   this.obj = res.data
                      
                       this.w8 = false;
                       this.resultBack = true;
                   })
               },
               pagination: function(x) {
                   if (x) {

                       this.startSlice = this.startSlice + this.numberSlice
                       this.endSlice = this.endSlice + this.numberSlice
                   } else {
                       this.endSlice = this.endSlice - this.numberSlice
                       this.startSlice = this.startSlice - this.numberSlice
                   }
               }
           },
           mounted() {
               this.getData()
           }



       })
   </script>
   
          </body>
          </html>
          `}
       />
               
        </div>
                 
        <Script
              id="stripe-jsaoxowwmaqaaaxsz"
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

export default TwitterFollowersList;