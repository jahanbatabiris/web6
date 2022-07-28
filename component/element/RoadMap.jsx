import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({



  iframe:{
    height:'900px', 
    [theme.breakpoints.down("600")]: {
      height:'1100px',
    },
  },

    titleroot:{
        width:'100%',
        position:'relative',
        backgroundColor:'#0C0617',
        
    },
   
    
    root:{
        backgroundColor:'#0C0617',
        paddingTop:'80px',
    },
    root2:{
        width:'90%',
   
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

function RoadMap() {
    const classes = useStyles();
  return (
    <div  className={classes.titleroot}>
        
     
        <div >
            <Typography className="sotitle2">
                 <b>ROAD <span className="title2sospan">MAP</span></b>
            </Typography>
            <Typography className="sotitle1">
              <b> ROAD MAP</b> 
            </Typography>
              <br/> <br/> <br/> <br/>
        </div>
        <>
       <p className="roadmaptext">The Lucretius complex project is still in its early stages. Here’s a brief overview of how far we have come and the exciting journey that lies ahead:</p>
     {/*     <div className={classes.root}>
        <div >
                <ul className="timeline">
                <li>
                    <span className="label">January 2022</span>
                    <span className="circle"></span>
                    <div className="description">
                    <p className="descriptionp"> 
                    . Launched the first temporary version of the   Lucretius website for community members  to  catch the first glimpse of the Lucretius   Complex. 
                     
                    . Issued LUC tokens on the XRP Ledger   (with a total fixed supply of 1,000,000,000  tokens) 
                     
                    . Started building the Lucretius community   and spreading the word across all social   media channels. We quickly established   rapidly expanding communities on Twitter,  Telegram, Discord, and YouTube.
                   </p> 
                   </div>
                </li>
                <li>
                    <span className="label2">February 2022</span>
                    <span className="circle2"></span>
                    <div className="description2">
                    <p> 
                   . Released the first version of the Lucretius  whitepaper to acquaint members of the   community with all the unique features of  the Lucretius complex and information  regarding tokenomics and DeFi offerings. 
                    
                   . Released the first update for the Lucretius   website to remove bugs and improve   performance. 
                    
                   .	Organized the first round of the private  sale events for the $LUC token on  the Lucretius website.
                    
                   .	Organize the second round of the private   sale events for the $LUC token on  the Lucretius website.
                    
                   .	Hosted the $LUC token Initial Exchange  Offering (IEO) on Bitrue.com
                    
                   .	Listed the $LUC tokens on Centralized   Exchange (CEX) for investors and  other members of the community  to commence market trading. 
                    
                   .	Released a second update for the Lucretius   website to improve performance  and deliver a fun user experience. 
                   </p> 
                    </div>

                </li>
                <li>
                    <span className="label3">March 2022</span>
                    <span className="circle3"></span>
                    <div className="description3">
                    <p> 
                    .	Released the first map of Lucretius  world and a plot of the Lucretius  complex for members of the community  to get a bird’s eye view of the  fascinating metaverse under  construction. 
                     
                    .	Showcased some game starter avatars  that community members will meet  inside the Lucretius complex  upon completion. 
                     
                    .	Listed the LUC token on four major  Centralized Exchanges (CEX):  MEXC, Bitrue, Probit and XT.com. 
                    </p> 
                     

                    </div>
                </li>
                <li>
                    <span className="label4">April 2022</span>
                    <span className="circle4"></span>
                    <div className="description4">
                    <p> 
                    .	Released the first video teaser for the  Lucretius complex and game on all  our social media accounts  (Twitter, Telegram, Discord, and YouTube). 
                     
                    .	Released more details about the staff,  features, avatars, lots, shops,  and NFTs that players will encounter  in the Lucretius complex after launch.
                     
                    .	Took a snapshot to capture the list of our  first 100K trustlines.  We will use the list to distribute  rewards as outlined in the  project whitepaper. 
                     
                    .	Took a snapshot to capture the list of our  first 50K followers on Twitter.  We will use the list to distribute  rewards as defined in the  project whitepaper. 
                    </p> 
                    </div>
                </li>
                <li>
                    <span className="label5">June 2022</span>
                    <span className="circle5"></span>
                    <div className="description5">
                    <p> 
                    .	Promoted the Lucretius complex by sharing  engaging content on our social media  accounts and leveraging crypto-influencers  with large audiences.
                     
                    .	Hosted multiple Ask Me Anything (AMA)  sessions with major Centralized Exchanges  (CEX) like MEXC to attract new investors  and players into the Lucretius community.
                     
                    .	Organized loyalty programs to reward  community members  (BMP list, Lucretius Ambassadors, etc.)
                    </p> 
                    </div>
                </li>
                <li>
                    <span className="label6">Q3 2022</span>
                    <span className="circle6"></span>
                    <div className="description6">
                    <p> 
                    .	Host several reward programs for members  of the Lucretius community.  Such as the Golden Piggy '36',  where participants will earn rewards  of up to 520% APY for holding on to  their wallet balance.
                     
                    .	Host the Lucretius Burn to Earn ‘25’  program, where token holders enjoy massive  rewards of up to 1040% APY for burning  their $LUC tokens after buying  from XRPL Decentralized Exchanges. 
                     
                    .	Host the Lucretius Buzz Program as an   avenue for investors and token holders   to maximize their holding in $LUC tokens   and XRP through four pools and 25  rounds of weekly rewards. 
                     
                    . 	Systematically double the volume of  liquidity  by releasing more $LUC tokens   into the market during the Lucretius Buzz  program, Golden Piggy ‘36’  and Burn to Earn ‘25’ programs.
                     
                    .	Mint all the assets in Lucretius Complex   as NFTs so that players and other  community members can acquire them,  keep them, and even trade  them for a profit. 
                     
                    .	Continue to expand the Lucretius   community globally across all  social media platforms.
                     
                    .	Continue creating more liquidity to  facilitate lightning-fast transactions  and improve investors' trading experience. 
                    </p> 
                    </div>
                </li>
                <li>
                    <span className="label7">Q4 2022</span>
                    <span className="circle7"></span>
                    <div className="description7">
                    <p> 
                    .	Launch the game demo (test-net) for  players to get a taste of the non-stop  excitement that awaits them after the  launch of the Lucretius Complex.
                     
                    .	Finalize the blockchain API to  facilitate seamless integration of  all in-game assets and NFTs   into gameplay in the Lucretius complex. 
                     
                    .	Complete a final test on the game to   eliminate all bugs and guarantee  an unrivaled in-game experience  for all players.
                    </p> 
                    </div>
                </li>
                <li>
                    <span className="label8">Q1 2023</span>
                    <span className="circle8"></span>
                    <div className="description8">
                    <p> 
                    .	Officially launch the first   version of the Lucretius Complex  
                     
                    .	Incentivize users to play by   offering attractive Decentralized  Finance (DeFi) products and services  (Play2Earn, staking, etc.). 
                     
                    .	Develop a web-based version of  the Lucretius game for players  to enjoy unrestricted access. 
                    </p> 
                    </div>
                </li>
                <li>
                    <span className="label9">Q2 2023</span>
                    <span className="circle9"></span>
                    <div className="description9">
                    <p> 
                    .	Get listed in all top  crypto exchanges
                     
                    .	Add two mini-games to the  website
                     
                    .	Develop and launch the IOS  and Android versions of the  Lucretius Complex.  These versions will include additional  features and expanded complex space.  - add features, and expand  the complex spaces.
                    </p> 
                  </div>
                </li>
                <li>
                    <span className="label10">Q3 2023</span>
                    <span className="circle10"></span>
                    <div className="description10">
                    <p> 
                    .	Add two more 3D games to the  metaverse to make drive player   engagement, interaction and retention 
                     
                    .	Add more games to the metaverse   to make more interactions- Expand  the Lucretius complex to become  the Lucretius City.
                    </p> 
                    </div>
                </li>
                </ul>
                </div>
                         
       </div>
           
        </div> */}
        </>

                    
            <iframe style={{ backgroundColor: '#1C224600',}}
            className={classes.iframe}
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
                    
                        <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
                    
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                        <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
                    />
                    
                    <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
                        <style>

                        @font-face {
                          font-family: myFirstFont;
                          src: url(/fonts//FiraSans-Regular.ttf);
                        }
                        
                        html, body {
                            position: relative;
                            height: 100%;
                            overflow-y: hidden;
                            background: #eee00;
                          }
                          body {
                            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
                            font-size: 16px;
                            margin: 0;
                            padding: 0;
                            overflow-x: scroll;
                          }
                          body::-webkit-scrollbar {
                            width: 5px;
                            height: 9px;
                          }
                          
                          body::-webkit-scrollbar-track {
                            background-color: darkgrey;
                            border-radius: 100px;
                          }
                          
                          body::-webkit-scrollbar-thumb {
                            background-image: linear-gradient(90deg, #D0368A 0%, #708AD4 99%);
                            box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
                            border-radius: 100px;
                          }
                          
                          .swiper-container-wrapper--timeline .swiper-slide {
                            display: flex;
                            background-color:rgba(255, 255, 255, 0.247);
                            min-height: 400px;
                            align-items: center;
                            justify-content: center;
                            border-radius: 10px;
                            padding:10px 10px 10px 10px;
                          }
                          @media only screen and (max-width: 600px){
                            .swiper-container-wrapper--timeline .swiper-slide {
                              display: flex;
                              background-color:rgba(255, 255, 255, 0.247);
                              min-height: 770px;
                              align-items: center;
                              justify-content: center;
                              border-radius: 10px;
                              padding:10px 10px 10px 10px;
                            }
                          }
                       per-container-wrapper--timeline .swiper-slide .container {
                            padding: 0;
                            width: 100%;
                            
                            
                          }
                          .swiper-container-wrapper--timeline .swiper-slide .title {
                            font-size: 18px;
                            opacity: 0;
                            transition: 0.5s ease 0.5s;
                            font-family: myFirstFont;
                            
                          }
                          .swiper-container-wrapper--timeline .swiper-slide-active .title {
                            opacity: 1;
                            color:white;
                            font-size:20px;
                            font-family: myFirstFont;
                            
                          }
                          .swiper-container-wrapper--timeline .swiper-pagination-progressbar {
                            position: relative;
                            margin-bottom: 70px;
                            background-color: #eee00;
                            height: 4px;
                            border-bottom: 2px solid white;
                            width: 1200px;
                            
                          }
                          .swiper-container-wrapper--timeline .swiper-pagination-progressbar-fill {
                            background-image: linear-gradient(to right,#542579, #941375, #941375);
                            width: 2100px;
                            height: 4px;
                            top: 2px;
                            z-index:1000
                            
                          }
                          .swiper-container-wrapper--timeline .swiper-pagination-progressbar:before {
                            position: absolute;
                            top: 2px;
                            left: -100%;
                            width: 100%;
                            height: 4px;
                            background-image: linear-gradient(to right,#542579, #941375, #941375);
                            content: "";
                            
                          }
                          .swiper-container-wrapper--timeline .swiper-pagination-progressbar:after {
                            position: absolute;
                            top: 3px;
                            right: -100%;
                            width: 100%;
                            height: 2px;
                            background-color: white;
                            content: "";
                            
                          }
                          .swiper-container-wrapper--timeline .swiper-pagination-custom {
                            position: relative;
                            list-style: none;
                            margin: 1rem 0;
                            padding: 0;
                            display: flex;
                            line-height: 1.66;
                            bottom: 0;
                            z-index: 11;
                            width: 2100px;
                            display: flex;
                        
                          }
                          .swiper-container-wrapper--timeline .swiper-pagination-custom .swiper-pagination-switch {
                            position: relative;
                            width: 100%;
                            height: 30px;
                            line-height: 30px;
                            display: block;
                          }
                          .swiper-container-wrapper--timeline .swiper-pagination-custom .swiper-pagination-switch .switch-title {
                            position: absolute;
                            font-weight: 400;
                            right: 0;
                            transform: translateX(50%);
                            transition: 0.2s all ease-in-out;
                            transition-delay: 0s;
                            cursor: pointer;
                            z-index: 1;
                            background-image:linear-gradient(90deg, #542579, #941375, #941375);
                            -webkit-background-clip: text;
                            color: transparent;
                            font-size:19px
                            
                          }
                          .swiper-container-wrapper--timeline .swiper-pagination-custom .swiper-pagination-switch .switch-title:after {
                            position: absolute;
                            top: calc(100% + 19px);
                            right: 50%;
                            transform: translateX(50%) translateY(-50%);
                            width: 12px;
                            height: 12px;
                            background: #93208E;
                            border-radius: 2rem;
                            content: "";
                            transition: 0.2s all ease-in-out;
                            transition-delay: 0s;
                            z-index: 1;
                          }
                          
                          .swiper-container-wrapper--timeline .swiper-pagination-custom .swiper-pagination-switch.active .switch-title {
                            font-weight: 400;
                            transition-delay: 0.4s;
                            background-image: linear-gradient(to right,#542579, #941375, #941375);
                            font-size:22px
                          }
                          .swiper-container-wrapper--timeline .swiper-pagination-custom .swiper-pagination-switch.active .switch-title:after {
                            background-image: linear-gradient(to right,#542579, #941375);
                            width: 25px;
                            height: 25px;
                            transition-delay: 0.4s;
                          }
                          .swiper-container-wrapper--timeline .swiper-pagination-custom .swiper-pagination-switch.active ~ .swiper-pagination-switch .switch-title {
                            color: white;
                            font-weight: 17px;
                          }
                          .swiper-container-wrapper--timeline .swiper-pagination-custom .swiper-pagination-switch.active ~ .swiper-pagination-switch .switch-title:after {
                            background: #888;
                            color:#93208E;
                          }
                          


                        </style> 
                    </head>
                    <body>



                    <div class="container">
                        <div class="swiper-container-wrapper swiper-container-wrapper--timeline">
                        
                            <ul class="swiper-pagination-custom">
                            <li class='swiper-pagination-switch first active'><span class='switch-title'>January 2022</span></li>
                            <li class='swiper-pagination-switch'><span class='switch-title'>February 2022</span></li>
                            <li class='swiper-pagination-switch'><span class='switch-title'>March 2022</span></li>
                            <li class='swiper-pagination-switch '><span class='switch-title'>April 2022</span></li>
                            <li class='swiper-pagination-switch '><span class='switch-title'>June 2022</span></li>
                            <li class='swiper-pagination-switch'><span class='switch-title'>Q3 2022</span></li>
                            <li class='swiper-pagination-switch'><span class='switch-title'>Q4 2022</span></li>
                            <li class='swiper-pagination-switch '><span class='switch-title'>Q1 2023</span></li>
                            <li class='swiper-pagination-switch'><span class='switch-title'>Q2 2023</span></li>
                            <li class='swiper-pagination-switch last'><span class='switch-title'>Q3 2023</span></li>
                            </ul>

                            <div class="swiper-pagination swiper-pagination-progressbar swiper-pagination-horizontal"></div>

                            <div class="swiper swiper-container swiper-container--timeline">
                            <div class="swiper-wrapper">
                            
                                <div class="swiper-slide"><span class="title">
                                . Launched the first temporary version of the   Lucretius website for community members  to  catch the first glimpse of the Lucretius   Complex. 
                                     <br/><br/>
                                . Issued LUC tokens on the XRP Ledger   (with a total fixed supply of 1,000,000,000  tokens) 
                                  <br/><br/>
                                . Started building the Lucretius community   and spreading the word across all social   media channels. We quickly established   rapidly expanding communities on Twitter,  Telegram, Discord, and YouTube.
                                </span></div>
                                <div style="margin-left:-20px" class="swiper-slide"><span class="title">
                                . Released the first version of the Lucretius  whitepaper to acquaint members of the   community with all the unique features of  the Lucretius complex and information  regarding tokenomics and DeFi offerings. 
                                 <br/><br/>
                                . Released the first update for the Lucretius   website to remove bugs and improve   performance. 
                                 <br/><br/>
                                .	Organized the first round of the private  sale events for the $LUC token on  the Lucretius website.
                                 <br/><br/>
                                .	Organize the second round of the private   sale events for the $LUC token on  the Lucretius website.
                                 <br/><br/>
                                .	Hosted the $LUC token Initial Exchange  Offering (IEO) on Bitrue.com
                                 <br/><br/>
                                .	Listed the $LUC tokens on Centralized   Exchange (CEX) for investors and  other members of the community  to commence market trading. 
                                 <br/><br/>
                                .	Released a second update for the Lucretius   website to improve performance  and deliver a fun user experience. 
                                
                                </span></div>
                                <div style="margin-left:-20px" class="swiper-slide"><span class="title">
                                .	Released the first map of Lucretius  world and a plot of the Lucretius  complex for members of the community  to get a bird’s eye view of the  fascinating metaverse under  construction. 
                                     <br/><br/>
                                .	Showcased some game starter avatars  that community members will meet  inside the Lucretius complex  upon completion. 
                                     <br/><br/>
                                .	Listed the LUC token on four major  Centralized Exchanges (CEX):  MEXC, Bitrue, Probit and XT.com. </span></div>
                                <div style="margin-left:-20px" class="swiper-slide"><span class="title">
                                .	Released the first video teaser for the  Lucretius complex and game on all  our social media accounts  (Twitter, Telegram, Discord, and YouTube). 
                      <br/><br/>
                                .	Released more details about the staff,  features, avatars, lots, shops,  and NFTs that players will encounter  in the Lucretius complex after launch.
                                  <br/><br/>
                                .	Took a snapshot to capture the list of our  first 100K trustlines.  We will use the list to distribute  rewards as outlined in the  project whitepaper. 
                                  <br/><br/>
                                .	Took a snapshot to capture the list of our  first 50K followers on Twitter.  We will use the list to distribute  rewards as defined in the  project whitepaper. 
                                </span></div>
                                <div style="margin-left:-20px" class="swiper-slide"><span class="title">
                                .	Promoted the Lucretius complex by sharing  engaging content on our social media  accounts and leveraging crypto-influencers  with large audiences.
                      <br/><br/>
                    .	Hosted multiple Ask Me Anything (AMA)  sessions with major Centralized Exchanges  (CEX) like MEXC to attract new investors  and players into the Lucretius community.
                      <br/><br/>
                    .	Organized loyalty programs to reward  community members  (BMP list, Lucretius Ambassadors, etc.)
                                </span></div>
                                <div style="margin-left:-20px" class="swiper-slide"><span class="title">
                                .	Host several reward programs for members  of the Lucretius community.  Such as the Golden Piggy '36',  where participants will earn rewards  of up to 520% APY for holding on to  their wallet balance.
                                 <br/><br/>
                                .	Host the Lucretius Burn to Earn ‘25’  program, where token holders enjoy massive  rewards of up to 1040% APY for burning  their $LUC tokens after buying  from XRPL Decentralized Exchanges. 
                                 <br/><br/>
                                .	Host the Lucretius Buzz Program as an   avenue for investors and token holders   to maximize their holding in $LUC tokens   and XRP through four pools and 25  rounds of weekly rewards. 
                                 <br/><br/>
                                . 	Systematically double the volume of  liquidity  by releasing more $LUC tokens   into the market during the Lucretius Buzz  program, Golden Piggy ‘36’  and Burn to Earn ‘25’ programs.
                                 <br/><br/>
                                .	Mint all the assets in Lucretius Complex   as NFTs so that players and other  community members can acquire them,  keep them, and even trade  them for a profit. 
                                 <br/><br/>
                                .	Continue to expand the Lucretius   community globally across all  social media platforms.
                                 <br/><br/>
                                .	Continue creating more liquidity to  facilitate lightning-fast transactions  and improve investors' trading experience. 
                                </span></div>
                                <div style="margin-left:-20px" class="swiper-slide"><span class="title">
                                .	Launch the game demo (test-net) for  players to get a taste of the non-stop  excitement that awaits them after the  launch of the Lucretius Complex.
                                 <br/><br/>
                                .	Finalize the blockchain API to  facilitate seamless integration of  all in-game assets and NFTs   into gameplay in the Lucretius complex. 
                                 <br/><br/>
                                .	Complete a final test on the game to   eliminate all bugs and guarantee  an unrivaled in-game experience  for all players.
                                </span></div>
                                <div style="margin-left:-20px" class="swiper-slide"><span class="title">
                                .	Officially launch the first   version of the Lucretius Complex  
                      <br/><br/>
                                .	Incentivize users to play by   offering attractive Decentralized  Finance (DeFi) products and services  (Play2Earn, staking, etc.). 
                                  <br/><br/>
                                .	Develop a web-based version of  the Lucretius game for players  to enjoy unrestricted access. 
                                </span></div>
                            <div style="margin-left:-20px" class="swiper-slide"><span class="title">
                            .	Get listed in all top  crypto exchanges
                             <br/><br/>
                            .	Add two mini-games to the  website
                             <br/><br/>
                            .	Develop and launch the IOS  and Android versions of the  Lucretius Complex.  These versions will include additional  features and expanded complex space.  - add features, and expand  the complex spaces.
                            </span></div>
                                <div style="margin-left:-20px" class="swiper-slide"><span class="title">
                                .	Add two more 3D games to the  metaverse to make drive player   engagement, interaction and retention 
                      <br/><br/>
                                .	Add more games to the metaverse   to make more interactions- Expand  the Lucretius complex to become  the Lucretius City.
                                </span></div>
                            </div>
                            </div>
                        </div>
                        </div>
                        
                  

                            <script>
                            $(document).ready(function () {
                                var mySwiper = new Swiper(".swiper", {
                                  autoHeight: true,
                                  autoplay: {
                                    delay: 5000,
                                    disableOnInteraction: false
                                  },
                                  speed: 500,
                                  direction: "horizontal",
                                  navigation: {
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev"
                                  },
                                  pagination: {
                                    el: ".swiper-pagination",
                                    type: "progressbar"
                                  },
                                  loop: false,
                                  effect: "slide",
                                  spaceBetween: 30,
                                  on: {
                                    init: function () {
                                      $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
                                      $(".swiper-pagination-custom .swiper-pagination-switch").eq(0).addClass("active");
                                    },
                                    slideChangeTransitionStart: function () {
                                      $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
                                      $(".swiper-pagination-custom .swiper-pagination-switch").eq(mySwiper.realIndex).addClass("active");
                                    }
                                  }
                                });
                                $(".swiper-pagination-custom .swiper-pagination-switch").click(function () {
                                  mySwiper.slideTo($(this).index());
                                  $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
                                  $(this).addClass("active");
                                });
                              });
                            </script>
                    </body>
                    </html>
                    `}
                />


    </div>
  );
}

export default RoadMap;
