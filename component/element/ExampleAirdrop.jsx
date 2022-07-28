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
        height:"990px",
        [theme.breakpoints.down("870")]: {
            height:"900px",
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

function ExampleAirdrop() {
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
                border-bottom: 0;
                   width: 80%; 
                  margin: 40px auto;
                  margin-bottom: 0;
                
              
              }
              
              .board > div.board-inner{
                  background: #fafafa00;
                
              }
              
              p.narrow{
                  width: 100%;
                  margin: 10px auto;
              }
        
              
              .nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {
                  color: #555555;
                  cursor: default;
                  /* background-color: #ffffff; */
                  border: 0;
              
              }
              
              span.round-tabs{
                  width: 105px;
                  height: 85px;
                  line-height: 70px;
                  display: inline-block;
                  
                  z-index: 2;
                  position: absolute;
                  left: 0;
                  text-align: center;
                  font-size: 22px;
                  color: gray;
                  padding-top:4px
              }
              
              span.round-tabs.one{
                  color:  gray
                  ;border: none;
              }
              
              li.active span.round-tabs.one{
                border:solid 1px #ddd00 !important;
                  color: white;
              }
              
              span.round-tabs.two{
                color: gray;border: none;
                border:solid 1px #ddd00 !important;
              }
              
              li.active span.round-tabs.two{
                border:solid 1px #ddd00 !important;
                  color: white;
              }
              
              span.round-tabs.three{
                color: gray;border: none;
                border:solid 1px #ddd00 !important;
              }
              
              li.active span.round-tabs.three{
                border:solid 1px #ddd00 !important;
                color: white;
              }
              
            
              
              .nav-tabs > li.active > a span.round-tabs{
                  background: #fafafa00;
              }
              .nav-tabs > li.active > a span.round-tabs :hover{
                border:solid 1px #ddd00 !important;
            }
              .nav-tabs > li {
                  width: 25%;
                  border:solid 1px #ddd00 !important;
              }
              .nav-tabs > li a{
              
                border:solid 1px #ddd00 !important;
              }
              .nav-tabs > li a :hover{
                border:solid 1px #ddd00 !important;
              }
              
              .nav-tabs > li:after {
                  content: " ";
                  position: absolute;
                  left: 45%;
                 opacity:0;
                  margin: 0 auto;
                  bottom: 0px;
                  border:solid 1px #ddd00 !important;
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
                border:solid 1px #ddd00 !important;
              }
              .tab-pane{
                  margin-top:50px;
                 position: relative;
                 padding: 50px 30px 20px 30px;
                 background-color:rgba(255, 250, 250, 0.116) !important;
                 border-radius: 20px;
                 border:solid 1px #ddd00 !important;
              }



              .title{
                  font-size:22px;
                  color:white
              }

              .titlespan{
               color: #EF963000
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
              width: 100%;
              height:auto !important;
              }
       
                  span.round-tabs {
                      font-size:16px;
              width: 81px;
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
                               E.g. 1
                        </span> 
                        
                    </a>
                    
                    </li>
                    
                    <li><a href="#profile" data-toggle="tab" title="profile">
                       <span class="round-tabs two">
                       E.g. 2
                       </span> 
                    </a>
                   </li>
                   <li><a href="#messages" data-toggle="tab" title="bootsnipp goodies">
                       <span class="round-tabs three">
                       E.g. 3
                       </span> </a>
                       </li>
  
  

                       
                       </ul></div>
  
                       <div class="tab-content">
                        <div class="tab-pane fade in active" id="home">
                                
                                    <p class="title">If you bought 100k LUC during the IDO and you hold it without touching it till 25th May, you’ll receive the maximum 120% which is 120k LUC tokens.</p>
                                   <br/> <br/>
                                    <p class="title">100k * 120% = 120K LUC tokens
                                    </p>
                                   
                        </div>
                        <div class="tab-pane fade" id="profile">
                                    <p class="title">If you bought 100k LUC from the market and you hold without touching it until 25th May, you’ll receive 110% which is 110k LUC tokens. </p>
                                    <br/> <br/>
                                    <p class="title">100K * 110% = 110K LUC tokens
                                    </p>
                                    <br/> <br/>
                                    <p class="title">You’ll not receive 10% because you weren’t an ICO/IDO/IEO participant.
                                   
                                    </p>
                       
                        </div>
                        <div class="tab-pane fade" id="messages">
                                        <p class="title">If you bought 100k during the IDO and you hold it without touching it until 25th February but you reduce your balance to 50k LUC on 5th March and hold your 50k LUC until 25th May. </p>
                                        <p class="title">50k * 120% = 60k LUC tokens</p>
                                        <p class="title">Your receivable amount will be calculated based on the lowest balance throughout the period.
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

export default ExampleAirdrop;