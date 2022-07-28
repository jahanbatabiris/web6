import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Script from 'next/script';


const useStyles = makeStyles((theme) => ({



    titleroot:{
        width:'100%',
        position:'relative',
        backgroundColor:'#0C0617',
    },
   
    
    root:{
        height:"1090px",
        [theme.breakpoints.down("450")]: {
            height:"1390px",
          },
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

    imgspan:{
        backgroundPosition: 'center center',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',

    },
    img:{
        borderRadius:'50%',
        width:'110px',
        marginTop:'150px'
    },

    back:{

        backgroundImage:'url("/img/header/event box.png")',
        width:'500px',
        height: '530px',
        backgroundSize:'100% 100%',
        padding:'10px 10px 10px 10px',
        position:'relative'
    },
    back1:{

      backgroundImage:'url("/img/header/event box.png")',
      width:'500px',
      height: '530px',
      backgroundSize:'100% 100%',
      padding:'10px 10px 10px 10px',
      position:'relative'
  },
  
  title:{
  
    backgroundPosition: 'center center',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  }


}));

function TimeLinePool() {
    const classes = useStyles();
  return (
    <div  className={classes.titleroot}>
       <iframe style={{zIndex:'1000' }}
       className={classes.root}
      id="xxx"
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
              <link rel="shortcut icon" type="image/x-icon" href="https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico">
              <link rel="mask-icon" href="https://cpwebassets.codepen.io/assets/favicon/logo-pin-8f3771b1072e3c38bd662872f6b673a722f4b3ca2421637d5596661b4e2132cc.svg" color="#111">
              <link rel="canonical" href="https://codepen.io/aybukeceylan/pen/RwrRPoO?editors=0110">
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
              <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
              <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
              <style class="INLINE_PEN_STYLESHEET_ID">
              @import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700);
              /* written by riliwan balogun https://www.facebook.com/riliwan.rabo*/
              body{
                background-color: #0C0617 !important;  
              }
              .board{
              width: 95%;
              margin: 60px auto;
              height: 700px;
              background: #fff00;
              /*box-shadow: 10px 10px #ccc,-10px 20px #ddd;*/
              }
              .board .nav-tabs {
                  position: relative;
                  /* border-bottom: 0; */
                   width: 80%; 
                  margin: 40px auto;
                  margin-bottom: 0;
                  box-sizing: border-box;
              
              }
              
              .board > div.board-inner{
                  background: #fafafa00;
                
              }
              
              p.narrow{
                  width: 100%;
                  margin: 10px auto;
              }
              
              .liner{
                  height: 2px;
                  background: #ffffff00;
                  position: absolute;
                  width: 80%;
                  margin: 0 auto;
                  left: 0;
                  right: 0;
                  top: 50%;
                  z-index: 1;
              }
              
              .nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {
                  color: #555555;
                  cursor: default;
                  /* background-color: #ffffff; */
                  border: 0;
                  border-bottom-color: transparent;
              }
              
              span.round-tabs{
                  width: 85px;
                  height: 85px;
                  line-height: 70px;
                  display: inline-block;
                  border-radius: 100px;
                  background: #5a5a5a ;
                  z-index: 2;
                  position: absolute;
                  left: 0;
                  text-align: center;
                  font-size: 20px;
                  color: white;
                  padding-top:4px
              }
              
              span.round-tabs.one{
                  color:  color: white;;border: none;
              }
              
              li.active span.round-tabs.one{
                  background: #5a5a5a !important;
                  border: 3px solid purple;
                  color: white;
              }
              
              span.round-tabs.two{
                color: white;border: none;
              }
              
              li.active span.round-tabs.two{
                  background: #5a5a5a !important;
                  border: 3px solid purple;
                  color: white;
              }
              
              span.round-tabs.three{
                color: white;border: none;
              }
              
              li.active span.round-tabs.three{
                background: #5a5a5a !important;
                border: 3px solid purple;
                color: white;
              }
              
              span.round-tabs.four{
                color: white;border: none;
              }
              
              li.active span.round-tabs.four{
                background: #5a5a5a !important;
                border: 3px solid purple;
                color: white;
              }
              
              span.round-tabs.five{
                  color: #999;border: none ;
              }
              
              li.active span.round-tabs.five{
                background: #5a5a5a !important;
                border: 3px solid purple;
                color: white;
              }
              
              .nav-tabs > li.active > a span.round-tabs{
                  background: #fafafa;
              }
              .nav-tabs > li {
                  width: 25%;
              }
              
              .nav-tabs > li:after {
                  content: " ";
                  position: absolute;
                  left: 45%;
                 opacity:0;
                  margin: 0 auto;
                  bottom: 0px;
                  border: 5px solid pink;
                  border-bottom-color: #ddd;
                  transition:0.1s ease-in-out;
                  
              }
              .nav-tabs > li.active:after {
                  content: " ";
                  position: absolute;
                  left: 45%;
                 opacity:1;
                  margin: 0 auto;
                  bottom: 0px;
                  border: 10px solid transparent;
                  border-bottom-color: #ddd;
                  
              }
              .nav-tabs > li a{
                 width: 83px;
                 height: 83px;
                 margin: 25px auto;
                 border-radius: 100%;
                 padding: 0;
                 background-color: #fffefe00 !important;
              }
              
              .nav-tabs > li a:hover{
                  background-color: #fffefe00 !important;
              }
              
              .tab-content{

              }
              .tab-pane{
                  margin-top:50px;
                 position: relative;
                 padding: 50px 30px 20px 30px;
                 background-color:rgba(255, 250, 250, 0.116) !important;
                 border-radius: 20px;
              }
              .tab-content .head{
                  font-family: 'Roboto Condensed', sans-serif;
                  font-size: 25px;
                  text-transform: uppercase;
                  padding-bottom: 10px;
              }
              .btn-outline-rounded{
                  padding: 10px 40px;
                  margin: 20px 0;
                  border: 2px solid transparent;
                  border-radius: 25px;
              }
              
              .btn.green{
                  background-color:#5cb85c;
                  /*border: 2px solid #5cb85c;*/
                  color: #ffffff;
              }


              .title{
                  font-size:22px;
                  color:white
              }

              .titlespan{
               color: #EF9630
              }
              ul{
                list-style-type:numbre;
                font-size:22px;
                color:white
              }
              @media( max-width : 880px ){
                .title{
                    font-size:18px;
                    color:white
                }
                ul{
                    list-style-type:numbre;
                    font-size:18px;
                    color:white
                  }
                  .tab-pane{
                    margin-top:30px;
                   position: relative;
                   padding: 20px 10px 10px 10px;
                   background-color:rgba(255, 250, 250, 0.116) !important;
                   border-radius: 20px;
                }
              }
              @media( max-width : 585px ){
                  
                  .board {
              width: 90%;
              height:auto !important;
              }
       
                  span.round-tabs {
                      font-size:16px;
              width: 61px;
              height: 61px;
              line-height: 50px;
              padding-top:2px
                  }
                  .tab-content .head{
                      font-size:20px;
                      }
                  .nav-tabs > li a {
              width: 50px;
              height: 50px;
              line-height:50px;
              }
              
              .nav-tabs > li.active:after {
              content: " ";
              position: absolute;
              left: 35%;
              }
              
              .btn-outline-rounded {
                  padding:12px 20px;
                  }
              }
              .container{
                  background-color:#0C0617
              }
            </style>
          </head>
          <body style="width:auto">
         

          <section style={{background-color:#0C0617}}>
          <div class="container">
              <div class="row">
                  <div class="board">
                    
                      <div class="board-inner">
                      <ul class="nav nav-tabs" id="myTab">
                      <div class="liner"></div>

                       <li class="active">
                       <a href="#home" data-toggle="tab" title="welcome">
                        <span class="round-tabs one">
                               pool 1
                        </span> 
                        
                    </a>
                    
                    </li>
                    
                    <li><a href="#profile" data-toggle="tab" title="profile">
                       <span class="round-tabs two">
                       pool 2
                       </span> 
             </a>
                   </li>
                   <li><a href="#messages" data-toggle="tab" title="bootsnipp goodies">
                       <span class="round-tabs three">
                       pool 3
                       </span> </a>
                       </li>
  
                       <li><a href="#settings" data-toggle="tab" title="blah blah">
                           <span class="round-tabs four">
                           pool 4
                           </span> 
                       </a></li>
  

                       
                       </ul></div>
  
                       <div class="tab-content">
                        <div class="tab-pane fade in active" id="home">
                                    <p class="title">Capacity: <span class="titlespan">10000 XRP</span></p>
                                    <p class="title">Token Price: <span class="titlespan"> Live $LUC price on XRPL DEX
                                    </span></p>
                                    <p class="title">Investors will receive:
                                    <ul>
                                    <li>100% of the $LUC tokens they bought over 25 weeks (4% per week)

                                    </li>
                                    <li>Commission from subsequent pools is as follows: 30% from Pool 2, 20% from Pool 3, and 10% from Pool 4. In other words, investors will receive 3000XRP from Pool 2, 2000XRP from Pool 3, and 1000XRP from Pool 4. Investors will receive 60% of their investment as cashback in XRP. 

                                    </li>
                                    <li>We will use 50% of each investment to create a buy order at the same price the investor bought. These buy orders will combine to form a buy wall, and if the order is filled, the investor will receive the $LUC tokens in their wallet. 
                                    </li>
                                    <li>We will use 20% of each investment to create a sell order for $LUC at double the price such that if the price goes up and the order is filled, the investor will receive 20% of their investment in XRP.

                                    </li>
                                    </ul>
                                    </p>
                                    <p class="title">NB:<br/>
                                    If the price increases and the sell order is filled, the buy order will automatically be canceled. Also, if the buy order is filled, we will cancel the sell order. 

                                    </p>
                        </div>
                        <div class="tab-pane fade" id="profile">
                                    <p class="title">Capacity: <span class="titlespan">10000 XRP</span></p>
                                    <p class="title">Token Price: <span class="titlespan"> Live $LUC price on XRPL DEX
                                    </span></p>
                                    <p class="title">Investors will receive:
                                    <ul>
                                    <li>120% of the $LUC tokens they bought over 25 weeks (4.8% per week)
                                    </li>
                                    <li>Commission from subsequent pools is as follows: 30% from Pool 3 and 20% from Pool 4. In other words, investors will receive 3000XRP from Pool 3 and 2000XRP from Pool 4. Investors will receive 50% of their investment as cashback in XRP. 
                                    </li>
                                    <li>We will use 50% of each investment to create a buy order at the same price the investor bought. These buy orders will combine to form a buy wall, and if the order is filled, the investor will receive the $LUC tokens in their wallet. 
                                    </li>
                                    <li>We will use 20% of each investment to create a sell order for $LUC at double the price such that if the price goes up and the order is filled, the investor will receive 20% of their investment in XRP.
                                    </li>
                                    </ul>
                                    </p>
                                    <p class="title">NB:<br/>
                                    If the price increases and the sell order is filled, the buy order will automatically be canceled. Also, if the buy order is filled, we will cancel the sell order. 
                                    </p>
                        </div>
                        <div class="tab-pane fade" id="messages">
                                        <p class="title">Capacity: <span class="titlespan">10000 XRP</span></p>
                                        <p class="title">Token Price: <span class="titlespan"> Live $LUC price on XRPL DEX
                                        </span></p>
                                        <p class="title">Investors will receive:
                                        <ul>
                                        <li>150% of the $LUC tokens they bought over 25 weeks (6% per week)


                                        </li>
                                        <li>Commission from the subsequent pool (30% from Pool 4). In other words, investors will receive 3000XRP from Pool 4. Investors will receive 30% of their investment as cashback in XRP. 

                                        </li>
                                        <li>We will use 50% of each investment to create a buy order at the same price the investor bought. These buy orders will combine to form a buy wall, and if the order is filled, the investor will receive the $LUC tokens in their wallet. 

                                        </li>
                                        <li>We will use 20% of each investment to create a sell order for $LUC at double the price such that if the price goes up and the order is filled, the investor will receive 20% of their investment in XRP.

                                        </li>
                                        </ul>
                                        </p>
                                        <p class="title">NB:<br/>
                                        If the price increases and the sell order is filled, the buy order will automatically be canceled. Also, if the buy order is filled, we will cancel the sell order. 

                                        </p>
                        </div>
                        <div class="tab-pane fade" id="settings">
                                    <p class="title">Capacity: <span class="titlespan">10000 XRP</span></p>
                                    <p class="title">Token Price: <span class="titlespan"> Live $LUC price on XRPL DEX
                                    </span></p>
                                    <p class="title">Investors will receive:
                                    <ul>
                                    <li>100% of the $LUC tokens they bought if it is repeated and 200% if it is not repeated over 25 weeks (at 4% per week for 100% and 8% per week for 200%)



                                    </li>
                                    <li>Commission from other pools same as the first pool if it is repeated and nothing if is not repeated.

                                    </li>
                                    <li>We will use 50% of each investment to create a buy order at the same price the investor bought. These buy orders will combine to form a buy wall, and if the order is filled, the investor will receive the $LUC tokens in their wallet. 

                                    </li>
                                    <li>We will use 20% of each investment to create a sell order for $LUC at double the price such that if the price goes up and the order is filled, the investor will receive 20% of their investment in XRP.
                                    </li>
                                    </ul>
                                    </p>
                                    <p class="title">NB:<br/>
                                    If the price increases and the sell order is filled, the buy order will automatically be canceled. Also, if the buy order is filled, we will cancel the sell order. 

                                    </p>
                        </div>
                        
  <div class="clearfix"></div>
  </div>
  
  </div>
  </div>
  </div>
  </section>

          <script src="https://cpwebassets.codepen.io/assets/common/stopExecutionOnTimeout-1b93190375e9ccc259df3a57c1abc0e64599724ae30d7ea4c6877eb615f89387.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          
          <script>
            $(function(){
                $('a[title]').tooltip();
                });
          </script>
          </body>
          </html>
          `}
       />
    </div>
  );
}

export default TimeLinePool;