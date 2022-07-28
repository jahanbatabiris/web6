import React from 'react';
import Script from 'next/script';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Head from "next/head";
import Footer from '../component/element/Footer';


import ExampleAirdrop from '../component/element/ExampleAirdrop';


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
      padding:'29px 25px 29px 25px !important',
      borderRadius:'17px',
      width: '97% !important',
      position:'relative !important',
      marginTop:'32px',
      [theme.breakpoints.down("1100")]: {
        width: '95% !important',
      },
      [theme.breakpoints.down("800")]: {
        width: '91% !important',
      },
      [theme.breakpoints.down("550")]: {
        width: '86% !important',
      },
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
    gamegridrootgrid:{
      backgroundPosition: 'center center',
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    }


}));



function AirDrop() {
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
        <meta name="title" content="Lucretius" />
        <meta name="description" content="Lucretius" />
        <meta name="robots" content="index, follow" />
        <title>Airdrop</title>
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
            <a href="/LucToken" className="sublinka2">LucToken</a>
            <a href="/AirDrop" className="sublinka">AirDrop</a>
           
          </div>
          <br/><br/><br/><br/>
          
             
            
                   <p className="gametitlecir">  Lucretius has defined three $LUC airdrop plan</p>  
                   <br/><br/>
                   <p className="gametextwinner"> Distribution will start June 2022</p>  
                   <p className="gametextwinner"> Distribution may takes up to 6 months depend on market demands</p>  
                   <p className="gametextwinner">Distribution will be placed in batched , each time 5% of total receivable amount. For example if your receivable amount is 1000 LUC you will receive 20 times , each time 50 LUC</p>  
                   <p className="gametextwinner"> Qualification terms must keep until distribution finished for each airdrop events. For example if your wallet address is qualified in snapshot but the holding LUC sold before distribution , you will not receive airdrop</p>  
                   <br/><br/><br/>
                   
              <br/><br/><br/>
              

          <div>
          </div>
        
        
        
          
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
     
         
            <Grid className={classes.gamegridrootgrid} container spacing={3}> 
 
                    <Grid  item xs={12} sm={12} lg={7} xl={7}>
                      
                    <div className={classes.backlucdiv}>  
                    <div className={classes.backlucdivroot} >
                    <img className={classes.backlucimglogosecCapital}  src="/img/luctoken/Group 446.png"/>
                  <br/>
                    <p className="gametext2winner">     
                    LUC holder airdrop exclusively on   bitrue

                    </p>
                    <br/><br/>
                    <p className="gametextwinner">     
                    Bitrue will be supporting the upcoming airdrop of LUC to users on Bitrue who own LUC
                    </p>
                    <br/><br/>
                    <p className="gametextwinner">     
                    Snapshots of LUC will be taking place on April 16 to May 16 at 16:00~18:00 UTC
                    </p>
                    <br/><br/>
                    <p className="gametextwinner">     
                    If you wish to take part in this airdrop then please make sure you are holding this token during the snapshot periods
                    </p>
                   
                    <br/><br/>
                    <br/><br/>
                    <a target="_blank" href="https://bitrue.zendesk.com/hc/en-001/articles/5566620858393" rel="noreferrer"><button className="gamebtnwinner"> 
Read More On Bitrue</button></a>
                    <br/><br/> <br/><br/>
                    </div>
                    </div>
                    </Grid>
                   
            </Grid>



           
         <br/><br/><br/><br/><br/><br/>
         <br/><br/><br/><br/><br/><br/>
         

             <div className={classes.gamegrid}> 
             
             <br/><br/>
                    <p className="gametext2winner">     
                   <b>$LUC holders airdrop to unlimited trustlines</b> 
                    </p>
                    <br/><br/><br/><br/>
                    <p style={{textAlign:'left'}} className="gametextwinner">     
                 
                      We will take 17 different snapshots from 25th Feb till 16th May. Each snapshot will qualify holder’s to receive a percentage of their balance during the airdrop. Here are the dates for the snapshots (add to your calendar)

                          <br/> <br/>
                          Receivable amount will be calculated as the sum of all percentages a holder qualifies for
                          <br/> <br/>
                          Total maximum receivable is 120% of $LUC balance or 300K $LUC
                          <br/> <br/>
                          If your balance decrease in one snapshot , the minimum balance will be consider for all the previous ones
                          <br/> <br/>
                          If your balance increase in a snapshot, it will not effect in previous ones and each snapshot will calculate separately
                          <br/> <br/> 
                          Distribution date : 16th June 2022




                </p>
              <br/><br/><br/><br/><br/><br/>
             
             </div>

             <br/><br/><br/><br/><br/><br/>   <br/><br/><br/><br/><br/><br/>
             <div>
               <ExampleAirdrop/>
             </div>





      
             
         
             <Grid className={classes.gamegridrootgrid} container spacing={3}> 
 
                      <Grid  item xs={12} sm={12} lg={7} xl={7}>
                        
                      <div className={classes.backlucdiv}>  
                      <div className={classes.backlucdivroot} >
                      <img className={classes.backlucimglogosecCapital}  src="/img/luctoken/Group 458.png"/>
                      <br/>
                        <p className="gametext2winner">     
                        Airdrop to unlimited trustlines based on XRP Holding amount
                      </p>
                      <br/><br/><br/><br/> <br/><br/>
                      <p className="gametextwinner">     
                      Snapshot 1st June 13:00 UTC
                      </p>
                      <br/><br/>
                      <p className="gametextwinner">     
                      Qualification : 200 LUC Balance
                      </p>
 
                      <br/><br/>
                      <p className="gametextwinner">     
                      25 Million $LUC will be distributed to unlimited trustlines based on their available $XRP balance. the maximum countable XRP for each wallets is 1000
                      </p>
                      <br/><br/>
                     
                     
                      <br/><br/>
                      <br/><br/>
                      <a target="_blank" href="/LUCtoXRPholder" rel="noreferrer"><button className="gamebtnwinner"> Check The Snapshots Here</button></a>
                      <br/><br/> <br/><br/>
                      </div>
                      </div>
                      </Grid>

                      </Grid>



                         
         <br/><br/><br/><br/><br/><br/>
         <br/><br/><br/><br/><br/><br/>
         

             <div className={classes.gamegrid}> 
             
             <br/><br/>
                    <p className="gametext2winner">     
                   <b>LUC holder airdrop exclusively on   mexc global</b> 
                    </p>
                    <br/><br/><br/><br/>
                    <p style={{textAlign:'left'}} className="gametextwinner">     
                 
                    MEXC Global will be supporting the upcoming airdrop of LUC to users on MEXC Global who own LUC

                          <br/> <br/>
                          Snapshots of LUC will be taking place on April 20 to May 16 at 16:00~18:00 UTC. If you wish to take part in this airdrop then please make sure you are holding this token during the snapshot periods


                          <br/> <br/>
                          The amount of LUC that any user will receive will be determined according to this formula:
                          <br/> <br/>
                          LUC received = (The sum of LUC held by user every day from April 20 to May 16 at 16:00~18:00 UTC) / 30 * 1
                          <br/> <br/>
                          3.33% each day =90% of your $LUC Holding for entire program
                          <br/> <br/> 
                        

                </p>
                <p style={{textAlign:'left'}} className="gametext2winner">     
                            <b>Notes :</b> 
                </p>
                <p style={{textAlign:'left'}} className="gametextwinner">   
              
                           . Any LUC in open orders will not be eligible to receive this airdrop
                           <br/><br/>
                           . Any LUC in the process of being withdrawn will not be eligible to receive this airdrop
                           <br/><br/>
                           . Any account with assets less than $1 at the time of airdrop distribution will not be allocated LUC airdrop
                           <br/><br/>
                           . Any distributions of LUC that would be below 1 LUC will not be distributed
                           <br/><br/>
                           . The maximum amount of LUC that a single user can receive is 300,000 LUC
                </p>
             </div>




   
             <br/><br/><br/><br/><br/><br/>
         <br/><br/><br/><br/><br/><br/>
         <br/><br/><br/><br/><br/><br/>
         
         

             <div className={classes.gamegrid}> 
             <img className={classes.backlucimglogosecCapital}  src="/img/luctoken/Group 447.png"/>
             <br/><br/>
                    <p className="gametext2winner">     
                   <b>Airdrop To First 50K Twitter Followers</b> 
                    </p>
                    <br/><br/><br/><br/>
                    <p style={{textAlign:'left'}} className="gametextwinner">     
                 
                    Snapshot 1st June 13:00 UTC
We are glad to inform Lucretius community members that 50 Million $LUC will be distributed to first Lucretius 50K twitter follower. Twitter follower list will be closed on 16th June 2022

                          <br/> <br/>
                          We are currently compiling list of our twitter follower and those who unfollow @LucretiusNet before 25th April will be removed from our airdrop list
                          <br/> <br/>
                          Also, we have started recording our twitter follower wallet address. Hence, we have provided another twitter page for the record. All the followers must send their address in private message to @LucretiusAD
                          <br/> <br/>
                          Kindly click here and DM you wallet address now
                          <br/> <br/>

                </p>
              <br/><br/><br/><br/><br/><br/>
             
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

export default AirDrop;