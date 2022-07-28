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


     

}));

function RichList() {
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
          <meta name="title" content="Lucretius"/>
          <meta name="description" content="Lucretius"/>
          <meta name="robots" content="index, follow" />
          <title>Rich List</title>
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
                <br/>
        <Typography style={{ color:'white',textAlign:'center'}} variant='h4'>
              <b>Rich List</b>
        </Typography>
        <br/>
            <iframe style={{height:'1200px',  backgroundColor: '#1C2246',}}
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
         
          .div {
              text-align: center;
              width: 90%;
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

          .inputroot{
              position: relative;
              width: 95%;
            
              height: 57px;
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

              }
      
      </style> 
         </head>
          <body>
            
          <div style="margin-top: 10px;" class="div"  id="root">
          <div class="divinside">
             
          <div class="inputroot">
                 <input class="inputmodal" type="text" id="myInput" onkeyup="myFunction1()" placeholder="Enter Your Wallet Address Here" dir="ltr">
                 <i class='fas fa-search'></i>
          </div>
          <br/> <br/> <br/>
          <div class="tableroot" style="overflow-x:auto;direction: ltr;">
              <table id="myTable">
                  <tr class="one" style="border-radius: 100px !important;">
                      <th class="thone">Index</th>
                      <th>Wallet Address</th>
                      <th>Balance</th>
                      <th class="thtwo">Currency</th>
                  </tr>
                  <tr v-for="(item, index) in obj"  style="border-radius: 100px !important;">
                  <td class="align-middle text-center first">
                      <p> {{index+startSlice+1}}</p>


                  </td>
                  <td class="align-middle text-center">
                      <p> {{item.address}}</p>

                  </td>
                  <td class="align-middle text-center">
                      <p>
                          {{new Intl.NumberFormat().format(item.balance)}}
                      </p>
                  </td>
                  <td class="align-middle text-center last">
                      <p>
                          {{item.currency}}
                      </p>
                  </td>

              </tr>

              </table>
              <br/> <br/> <br/> <br/> <br/>
          </div>
          <br/> <br/> <br/> <br/>
          </div>
          <br/> <br/> <br/> <br/> <br/> <br/> <br/>
      </div>





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
         <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
         <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
         <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.26.0/axios.min.js"></script>
         <script>
         const div = document.querySelector('div')
         div.addEventListener('dragstart', (e) => {
             e.preventDefault()
         })
     
         div.addEventListener('drop', (e) => {
             e.preventDefault()
         })
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
                     console.log('run')
                     axios.get('https://lucretius.network/richList/trustlines').then(res => {
                         res.data.forEach(element => {
                             if (
                                 (parseFloat(element.state.balance) * -1) >= 1
                             ) {
                                 this.obj.push({
                                     "balance": (parseFloat(element.state.balance) * -1).toFixed(2),
                                     "address": element.specification.counterparty,
                                     "currency": element.specification.currency
                                 })
                             }
 
                         })
                         this.obj.sort(function(a, b) {
                             return b.balance - a.balance;
                         });
                         console.log(this.obj)
                         console.log(this.obj.length)
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

export default RichList;