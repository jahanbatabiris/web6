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
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useRouter } from "next/router";
import ProfileTabs from './ProfileTabs';
import 'bootstrap/dist/css/bootstrap.min.css';

import SemiCircleProgressBar from "react-progressbar-semicircle";
import LockIcon from '@material-ui/icons/Lock';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


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

function LucBuzzStatus() {
    const classes = useStyles();


    const router = useRouter();
    const bbbb = router.query;
   
  
    let total = 0;
    var ar = [0,
      0.2, 0.2, 0.2, 0.2,
      0.1, 0.1, 0.1, 0.1,
      0.05, 0.05, 0.05, 0.05,
      0.04616, 0.04616, 0.04616, 0.04616,
      0.04616, 0.04616, 0.04616, 0.04616,
      0.04616, 0.04616, 0.04616, 0.04616, 0.04616,];
    let plus = ()=>{
  
  
      for(let i=1 ; i <= bbbb.week ; i++){
            total += (bbbb.balance)*(ar[bbbb.week])
        }
        return total;
    }
   
    
   const earnedP= plus();
   const sood=parseInt(earnedP);
    const balanceee=parseInt(bbbb.balance);
   const all=((balanceee)+(sood)).toFixed(2);
  
   const grade1= ((bbbb.balance)*ar[1]).toFixed(2);
   const grade2= ((bbbb.balance)*ar[5]).toFixed(2);
   const grade3= ((bbbb.balance)*ar[9]).toFixed(2);
   const grade4= ((bbbb.balance)*ar[13]).toFixed(2);
  //  const grade5= ((bbbb.balance)*ar[18]).toFixed(2);
  //  const grade6= ((bbbb.balance)*ar[22]).toFixed(2);
  //  const grade7= ((bbbb.balance)*ar[27]).toFixed(2);
  //  const grade8= ((bbbb.balance)*ar[31]).toFixed(2);
  //  const grade9= ((bbbb.balance)*ar[36]).toFixed(2);
  const arrG = [0,grade1*4,grade2*4,grade3*4,grade4*13]
  
   



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
        <title>LucBuzz Status</title>
      </Head>
                
        <div className={classes.root2}>
                <img id="img" className="headerluclogostaking" src='/img/exchange/logoo.png'/>
               

                <br/><br/>
                <br/><br/><br/><br/><br/>
                <Typography className="stakingcheck" >
               <b>B2e Status </b>         
               </Typography>

               
              
               {/* <a href="/StakingCheck">
                        <Typography className="stskingchecktitle" > 
                        <ArrowBackIcon/>  Back To The Staking Check Page
                        </Typography>  

               </a> */}
                
                      {/* <Link
                          href={{
                            pathname: "/StakingCheck",
                            query: bbbb, // the data
                          }}
                           >
                               <Typography className="stskingchecktitle" > 
                              <ArrowBackIcon/>  Back To The Staking Check Page
                              </Typography>  
                          </Link> */}
                    <br/><br/><br/><br/>
                    <Grid className={classes.root2} container spacing={1}> 
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               
                                <div className="statusdashdiv1">
                                  <p className="statusdashtitle1">Earned Profit</p>
                                  <p className="statusdashtitle2">{(earnedP).toFixed(2)}aaaaaaaaaa</p>
                                  
                                  <br/><br/><br/>
                                              <CircularProgressbar
                                                    value={50}
                                                    circleRatio={0.5}
                                                    strokeWidth={12}
                                                    styles={{
                                                      root: {
                                                        transform: "rotate(0.75turn)"
                                                      },
                                                      path: { stroke: "purple", strokeLinecap: "butt" },
                                                      trail: { stroke: "#C4C4C4", strokeLinecap: "butt" },
                                                      trailColor: "grey",
                                                      backgroundColor: "red",
                                                     
                                                    }}
                                                  />
                                    <Typography
                                     className="statusdashtitle3"
                                    >
                                      33%
                                    </Typography>
                                    <br/><br/><br/>
                                    <p className="statusdashtitle1">Start Date:</p>
                                  <p className="statusdashtitle4">{bbbb.startDate}</p>
                                  <br/><br/><br/>
                                  <p className="statusdashtitle1">New Rewards Avalable In:</p>
                                  <p className="statusdashtitle4">{bbbb.nextDate}</p>
                                  <br/><br/><br/>
                                  <p className="statusdashtitle1">New Rewards Avalable In:</p>
                                  <p className="statusdashtitle4">{bbbb.nextDate}</p>

                                  <br/><br/><br/>
                                  <div className="statusdashcirclelucpool">
                                       <br/>
                                      <p>pool1</p>
                                      <br/>
                                    </div>
                               </div>
                               
                             </Grid>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={8} xl={8}>
                             <Grid className={classes.root2} container spacing={1}> 
                                      <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                                      <div className="statusdashdiv1">
                                  <p className="statusdashtitle1">Earned Profit</p>
                                  <p className="statusdashtitle2">{(earnedP).toFixed(2)}</p>
                                  

                        
                               </div>
                                     </Grid>
                                     <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>

                                     <div className="statusdashdiv1">
                                  <p className="statusdashtitle1">Earned Profit</p>
                                  <p className="statusdashtitle2">{(earnedP).toFixed(2)}</p>
                                  

                               </div>

                                     </Grid>
                                     <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>

                                     <div className="statusdashdiv1">
                                  <p className="statusdashtitle1">Earned Profit</p>
                                  <p className="statusdashtitle2">{(earnedP).toFixed(2)}</p>
                                  

               
                               </div>

                                     </Grid>
                                     <Grid className="stskingcheck1" item xs={12} sm={12} lg={12} xl={12}>

                                      <div className="statusdashdiv">
                                      <Grid className={classes.root2} container spacing={1}> 
                                          <Grid  item xs={12} sm={4} lg={2} xl={2}>
                                            <div className="statusdashcirclelucbuz">
                                           
                                              <p>W1</p>
                                              <p className="statusdashcirclelucbuzpgold">80000 luc</p>
                                              
                                            </div>    
                                          </Grid>
                                          <Grid  item xs={12} sm={4} lg={2} xl={2}>
                                            <div className="statusdashcirclelucbuz">
                                            
                                              <p>W2</p>
                                              <p className="statusdashcirclelucbuzpgold">80000 luc</p>
                                            </div>    
                                          </Grid>
                                          <Grid  item xs={12} sm={4} lg={2} xl={2}>
                                            <div className="statusdashcirclelucbuz">
                                     
                                              <p>W3</p>
                                              <p className="statusdashcirclelucbuzpgold">80000 luc</p>
                                            </div>    
                                          </Grid>
                                          <Grid  item xs={12} sm={4} lg={2} xl={2}>
                                            <div className="statusdashcirclelucbuz">
                                          
                                              <p>W4</p>
                                              <p className="statusdashcirclelucbuzpgold">80000 luc</p>
                                            </div>    
                                          </Grid>
                                          <Grid  item xs={12} sm={4} lg={2} xl={2}>
                                            <div className="statusdashcirclelucbuz">
                                           
                                              <p>W5</p>
                                              <p className="statusdashcirclelucbuzpgold">80000 luc</p>
                                            </div>    
                                          </Grid>
                                          <Grid item xs={12} sm={4} lg={2} xl={2}>
                                            <div className="statusdashcirclelucbuz">
                                          
                                              <p>W6</p>
                                              <p className="statusdashcirclelucbuzpgold">80000 luc</p>
                                            </div>    
                                          </Grid>
                                          <Grid  item xs={12} sm={4} lg={2} xl={2}>
                                            <div className="statusdashcirclelucbuz">
                                            
                                              <p>W7</p>
                                              <p className="statusdashcirclelucbuzpgold">80000 luc</p>
                                            </div>    
                                          </Grid>
                                          <Grid  item xs={12} sm={4} lg={2} xl={2}>
                                            <div className="statusdashcirclelucbuz">
                                          
                                              <p>W8</p>
                                              <p className="statusdashcirclelucbuzpgold">80000 luc</p>
                                            </div>    
                                          </Grid>
                                          <Grid  item xs={12} sm={4} lg={2} xl={2}>
                                            <div className="statusdashcirclelucbuz">
                                           
                                              <p>W9</p>
                                              <p className="statusdashcirclelucbuzpgold">80000 luc</p>
                                            </div>    
                                          </Grid>
                                          <Grid  item xs={12} sm={4} lg={2} xl={2}>
                                            <div className="statusdashcirclelucbuz">
                                           
                                              <p>W10</p>
                                              <p className="statusdashcirclelucbuzpgold">80000 luc</p>
                                            </div>    
                                          </Grid>
                                          <Grid  item xs={12} sm={4} lg={2} xl={2}>
                                            <div className="statusdashcirclelucbuz">
                                          
                                              <p>W11</p>
                                              <p className="statusdashcirclelucbuzpgold">80000 luc</p>
                                            </div>    
                                          </Grid>
                                          <Grid  item xs={12} sm={4} lg={2} xl={2}>
                                            <div className="statusdashcirclelucbuz">
                                         
                                              <p>W12</p>
                                              <p className="statusdashcirclelucbuzpgold">80000 luc</p>
                                            </div>    
                                          </Grid>
                                          <Grid  item xs={12} sm={4} lg={2} xl={2}>

                                            <div className="statusdashcirclelucbuz">
                                           
                                              <p>W13</p>
                                              <p className="statusdashcirclelucbuzpgold">80000 luc</p>
                                            </div>    
                                          </Grid>
                                          <Grid  item xs={12} sm={4} lg={2} xl={2}>
                                            <div className="statusdashcirclelucbuz">
                                         
                                              <p>W14</p>
                                              <p className="statusdashcirclelucbuzpgold">80000 luc</p>
                                            </div>    
                                          </Grid>
                                          <Grid  item xs={12} sm={4} lg={2} xl={2}>
                                            <div className="statusdashcirclelucbuz">
                                        
                                              <p>W15</p>
                                              <p className="statusdashcirclelucbuzpgold">80000 luc</p>
                                            </div>    
                                          </Grid>
                                          <Grid item xs={12} sm={4} lg={2} xl={2}>
                                            <div className="statusdashcirclelucbuz">
                                          
                                              <p>W16</p>
                                              <p className="statusdashcirclelucbuzpgold">80000 luc</p>
                                            </div>    
                                          </Grid>
                                          <Grid item xs={12} sm={4} lg={2} xl={2}>
                                            <div className="statusdashcirclelucbuz">
                                        
                                              <p>W17</p>
                                              <p className="statusdashcirclelucbuzpgold">80000 luc</p>
                                            </div>    
                                          </Grid>
                                          <Grid  item xs={12} sm={4} lg={2} xl={2}>
                                            <div className="statusdashcirclelucbuz">
                                         
                                              <p>W18</p>
                                              <p className="statusdashcirclelucbuzpgold">80000 luc</p>
                                            </div>    
                                          </Grid>
                                          <Grid  item xs={12} sm={4} lg={2} xl={2}>
                                            <div className="statusdashcirclelucbuz">
                                         
                                              <p>W19</p>
                                              <p className="statusdashcirclelucbuzpgold">80000 luc</p>
                                            </div>    
                                          </Grid>
                                          <Grid item xs={12} sm={4} lg={2} xl={2}>
                                            <div className="statusdashcirclelucbuz">
                                           
                                              <p>W20</p>
                                              <p className="statusdashcirclelucbuzpgold">80000 luc</p>
                                            </div>    
                                          </Grid>
                                          <Grid item xs={12} sm={4} lg={2} xl={2}>
                                            <div className="statusdashcirclelucbuz">
                                         
                                              <p>W21</p>
                                              <p className="statusdashcirclelucbuzpgold">80000 luc</p>
                                            </div>    
                                          </Grid>
                                          <Grid item xs={12} sm={4} lg={2} xl={2}>
                                            <div className="statusdashcirclelucbuz">
                                          
                                              <p>W22</p>
                                              <p className="statusdashcirclelucbuzpgold">80000 luc</p>
                                            </div>    
                                          </Grid>
                                          <Grid item xs={12} sm={4} lg={2} xl={2}>
                                            <div className="statusdashcirclelucbuz">
                                       
                                              <p>W23</p>
                                              <p className="statusdashcirclelucbuzpgold">80000 luc</p>
                                            </div>    
                                          </Grid>
                                          <Grid item xs={12} sm={4} lg={2} xl={2}>
                                            <div className="statusdashcirclelucbuz">
                                     
                                              <p>W24</p>
                                              <p className="statusdashcirclelucbuzpgold">80000 luc</p>
                                            </div>    
                                          </Grid>
                                          <Grid item xs={12} sm={4} lg={2} xl={2}>
                                            <div className="statusdashcirclelucbuz">
                                         
                                              <p>W25</p>
                                              <p className="statusdashcirclelucbuzpgold">80000 luc</p>
                                            </div>    
                                          </Grid>
                                      </Grid>
                                        </div>

                                     </Grid>
                                     </Grid>
                              </Grid>
                    </Grid>
                        <div className="tabs-container">
                          <div className="tab active one"><a href="" className="tab-title">Grade 1</a>
                          <p className="statusetextweek">4 week</p>
                            <p className="statusetextearned">Earned Profit After G1:<span className="statusetextearnedspan"> {(arrG[1]).toFixed(2)}</span></p>
                          </div>
                          <div className="tab-content one" id="">

                          <Grid className={classes.root2} container spacing={1}> 
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                                  <p className="statusdashtitle1">Earned Profit</p>
                                  <p className="statusdashtitle2">{(earnedP).toFixed(2)}</p>
                                  

                                              <CircularProgressbar
                                                    value={50}
                                                    circleRatio={0.5}
                                                    strokeWidth={12}
                                                    styles={{
                                                      root: {
                                                        transform: "rotate(0.75turn)"
                                                      },
                                                      path: { stroke: "purple", strokeLinecap: "butt" },
                                                      trail: { stroke: "#C4C4C4", strokeLinecap: "butt" },
                                                      trailColor: "grey",
                                                      backgroundColor: "red",
                                                     
                                                    }}
                                                  />
                                    <Typography
                                     className="statusdashtitle3"
                                    >
                                      33%
                                    </Typography>
                               </div>
                             </Grid>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                                  <p className="statusdashtitle1">Start Date:</p>
                                  <p className="statusdashtitle4">{bbbb.startDate}</p>
                                  <br/><br/><br/>
                                  <p className="statusdashtitle1">New Rewards Avalable In:</p>
                                  <p className="statusdashtitle4">{bbbb.nextDate}</p>
                               </div>
                             </Grid>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                                  <p className="statusdashtitle1">Current Balance</p>
                                  <p  className="statusdashtitle2">{all}</p>
                                  <br/><br/><br/><br/><br/><br/><br/>
                                  <img className="statusdashimg" src="/img/staking/Frame.png"/>
                               </div>
                             </Grid>
                             <br/><br/> <br/><br/>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={12} xl={12}>
                             <br/><br/> <br/><br/>
                               <div className="statusdashdiv1">
                               <p className="statusdashtitle6">Grade1</p>
                               <br/><br/>
                                 <div className="statusdashcircleroot">
                                 {(() => {
                                 if( bbbb.week != 0  ){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade1} LUC</p>
                                      <p>Week1</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade1} LUC</p>
                                      <p>Week1</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}
                                    {(() => {
                                 if( bbbb.week != 0 && bbbb.week != 1 ){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade1} LUC</p>
                                      <p>Week2</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade1} LUC</p>
                                      <p>Week2</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}
                                     {(() => {
                                 if( bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade1} LUC</p>
                                      <p>Week3</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade1} LUC</p>
                                      <p>Week3</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}
                                    {(() => {
                                 if( bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2 && bbbb.week != 3 ){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade1} LUC</p>
                                      <p>Week4</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade1} LUC</p>
                                      <p>Week4</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}
                                 </div> 
                                 <br/><br/>
                                   <p className="statusdashtitle7"> Earned Profit After Grade 1: <span className="statusdashtitle7span">{(arrG[1]).toFixed(2)}</span></p> 
                               </div>
                             </Grid>
                          </Grid>
                          </div>

                          <div className="tab two"><a href="" className="tab-title">Grade 2</a>
                          <p className="statusetextweek">4 week</p>
                            <p className="statusetextearned">Earned Profit After G2:<span className="statusetextearnedspan"> {(arrG[2]).toFixed(2)}</span></p>
                          </div>
                          <div className="tab-content two" id="">
                            
                          <Grid className={classes.root2} container spacing={1}> 
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                                  <p className="statusdashtitle1">Earned Profit</p>
                                  <p className="statusdashtitle2">{(earnedP).toFixed(2)}</p>
                                  
                                  <CircularProgressbar
                                                    value={50}
                                                    circleRatio={0.5}
                                                    strokeWidth={12}
                                                    styles={{
                                                      root: {
                                                        transform: "rotate(0.75turn)"
                                                      },
                                                      path: { stroke: "purple", strokeLinecap: "butt" },
                                                      trail: { stroke: "#C4C4C4", strokeLinecap: "butt" },
                                                      trailColor: "grey",
                                                      backgroundColor: "red",
                                                     
                                                    }}
                                                  />
                                    <Typography
                                     className="statusdashtitle3"
                                    >
                                      33%
                                    </Typography>
                               </div>
                             </Grid>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                                  <p className="statusdashtitle1">Start Date:</p>
                                  <p className="statusdashtitle4">{bbbb.startDate}</p>
                                  <br/><br/><br/>
                                  <p className="statusdashtitle1">New Rewards Avalable In:</p>
                                  <p className="statusdashtitle4">{bbbb.nextDate}</p>
                               </div>
                             </Grid>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                                  <p className="statusdashtitle1">Current Balance</p>
                                  <p  className="statusdashtitle2">{all}</p>
                                  <br/><br/><br/><br/><br/><br/><br/>
                                  <img className="statusdashimg" src="/img/staking/Frame.png"/>
                               </div>
                             </Grid>
                             <br/><br/> <br/><br/>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={12} xl={12}>
                             <br/><br/> <br/><br/>
                               <div className="statusdashdiv1">
                               <p className="statusdashtitle6">Grade2</p>
                               <br/><br/>
                                 <div className="statusdashcircleroot">
                                 {(() => {
                                 if( bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2 && bbbb.week != 3 && bbbb.week != 4 ){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade2} LUC</p>
                                      <p>Week1</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade2} LUC</p>
                                      <p>Week1</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}

                                {(() => {
                                 if( bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2 && bbbb.week != 3 && bbbb.week != 4 && bbbb.week != 5 ){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade2} LUC</p>
                                      <p>Week2</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade2} LUC</p>
                                      <p>Week2</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}
                                                                   {(() => {
                                 if( bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2 && bbbb.week != 3 && bbbb.week != 4 && bbbb.week != 5 && bbbb.week != 6 ){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade2} LUC</p>
                                      <p>Week3</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade2} LUC</p>
                                      <p>Week3</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}
                                                                  {(() => {
                                 if( bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2 && bbbb.week != 3 && bbbb.week != 4 && bbbb.week != 5 && bbbb.week != 6 && bbbb.week != 7 ){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade2} LUC</p>
                                      <p>Week4</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade2} LUC</p>
                                      <p>Week4</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}
                                 </div> 
                                 <br/><br/>
                                 <p className="statusdashtitle7"> Earned Profit After Grade 2: <span className="statusdashtitle7span">{(arrG[2]).toFixed(2)}</span></p> 
                               </div>
                             </Grid>
                          </Grid>
                          </div>

                          <div className="tab"><a href="" className="tab-title">Grade 3</a>
                          <p className="statusetextweek">4 week</p>
                            <p className="statusetextearned">Earned Profit After G3:<span className="statusetextearnedspan">{(arrG[3]).toFixed(2)} </span></p>
                          </div>
                          <div className="tab-content" id="">
                          <Grid className={classes.root2} container spacing={1}> 
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                                  <p className="statusdashtitle1">Earned Profit</p>
                                  <p className="statusdashtitle2">{(earnedP).toFixed(2)}</p>
                                  <CircularProgressbar
                                                    value={50}
                                                    circleRatio={0.5}
                                                    strokeWidth={12}
                                                    styles={{
                                                      root: {
                                                        transform: "rotate(0.75turn)"
                                                      },
                                                      path: { stroke: "purple", strokeLinecap: "butt" },
                                                      trail: { stroke: "#C4C4C4", strokeLinecap: "butt" },
                                                      trailColor: "grey",
                                                      backgroundColor: "red",
                                                     
                                                    }}
                                                  />
                                    <Typography
                                     className="statusdashtitle3"
                                    >
                                      33%
                                    </Typography>
                               </div>
                             </Grid>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                                  <p className="statusdashtitle1">Start Date:</p>
                                  <p className="statusdashtitle4">{bbbb.startDate}</p>
                                  <br/><br/><br/>
                                  <p className="statusdashtitle1">New Rewards Avalable In:</p>
                                  <p className="statusdashtitle4">{bbbb.nextDate}</p>
                               </div>
                             </Grid>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                                  <p className="statusdashtitle1">Current Balance</p>
                                  <p  className="statusdashtitle2">{all}</p>
                                  <br/><br/><br/><br/><br/><br/><br/>
                                  <img className="statusdashimg" src="/img/staking/Frame.png"/>
                               </div>
                             </Grid>
                             <br/><br/> <br/><br/>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={12} xl={12}>
                             <br/><br/> <br/><br/>
                               <div className="statusdashdiv1">
                               <p className="statusdashtitle6">Grade3</p>
                               <br/><br/>
                                 <div className="statusdashcircleroot">
                                 {(() => {
                                 if( bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2 && bbbb.week != 3 && bbbb.week != 4 && bbbb.week != 5 && bbbb.week != 6 && bbbb.week != 7 && bbbb.week != 8  ){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade3} LUC</p>
                                      <p>Week1</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade3} LUC</p>
                                      <p>Week1</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}

                                {(() => {
                                 if( bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2 && bbbb.week != 3 && bbbb.week != 4 && bbbb.week != 5 && bbbb.week != 6 && bbbb.week != 7 && bbbb.week != 8 && bbbb.week != 9 ){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade3} LUC</p>
                                      <p>Week2</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade3} LUC</p>
                                      <p>Week2</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}
                                                                   {(() => {
                                 if( bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2 && bbbb.week != 3 && bbbb.week != 4 && bbbb.week != 5 && bbbb.week != 6 && bbbb.week != 7 && bbbb.week != 8 && bbbb.week != 9 && bbbb.week != 10){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade3} LUC</p>
                                      <p>Week3</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade3} LUC</p>
                                      <p>Week3</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}
                                                                  {(() => {
                                 if( bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2 && bbbb.week != 3 && bbbb.week != 4 && bbbb.week != 5 && bbbb.week != 6 && bbbb.week != 7 && bbbb.week != 8 && bbbb.week != 9 && bbbb.week != 10 && bbbb.week != 11 ){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade3} LUC</p>
                                      <p>Week4</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade3} LUC</p>
                                      <p>Week4</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}
                                             {(() => {
                                 if( bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2 && bbbb.week != 3 && bbbb.week != 4 && bbbb.week != 5 && bbbb.week != 6 && bbbb.week != 7 && bbbb.week != 8 && bbbb.week != 9 && bbbb.week != 10 && bbbb.week != 11 && bbbb.week != 12 ){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade3} LUC</p>
                                      <p>Week5</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade3} LUC</p>
                                      <p>Week5</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}
                                 </div> 
                                 <br/><br/>
                                 <p className="statusdashtitle7"> Earned Profit After Grade 3: <span className="statusdashtitle7span">{(arrG[3]).toFixed(2)}</span></p> 
                               </div>
                             </Grid>
                          </Grid>
                          </div>

                          <div className="tab last"><a href="" className="tab-title">Grade 4</a>
                          <p className="statusetextweek">4 week</p>
                            <p className="statusetextearned">Earned Profit After G4:<span className="statusetextearnedspan">{(arrG[4]).toFixed(2)} </span></p>
                          </div>
                          <div className="tab-content last" id="">
                          <Grid className={classes.root2} container spacing={1}> 
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                                  <p className="statusdashtitle1">Earned Profit</p>
                                  <p className="statusdashtitle2">{(earnedP).toFixed(2)}</p>
                                  <CircularProgressbar
                                                    value={50}
                                                    circleRatio={0.5}
                                                    strokeWidth={12}
                                                    styles={{
                                                      root: {
                                                        transform: "rotate(0.75turn)"
                                                      },
                                                      path: { stroke: "purple", strokeLinecap: "butt" },
                                                      trail: { stroke: "#C4C4C4", strokeLinecap: "butt" },
                                                      trailColor: "grey",
                                                      backgroundColor: "red",
                                                     
                                                    }}
                                                  />
                                    <Typography
                                     className="statusdashtitle3"
                                    >
                                      33%
                                    </Typography>
                               </div>
                             </Grid>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                                  <p className="statusdashtitle1">Start Date:</p>
                                  <p className="statusdashtitle4">{bbbb.startDate}</p>
                                  <br/><br/><br/>
                                  <p className="statusdashtitle1">New Rewards Avalable In:</p>
                                  <p className="statusdashtitle4">{bbbb.nextDate}</p>
                               </div>
                             </Grid>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                                  <p className="statusdashtitle1">Current Balance</p>
                                  <p  className="statusdashtitle2">{all}</p>
                                  <br/><br/><br/><br/><br/><br/><br/>
                                  <img className="statusdashimg" src="/img/staking/Frame.png"/>
                               </div>
                             </Grid>
                             <br/><br/> <br/><br/>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={12} xl={12}>
                             <br/><br/> <br/><br/>
                               <div className="statusdashdiv1">
                               <p className="statusdashtitle6">Grade4</p>
                               <br/><br/>
                                 <div className="statusdashcircleroot">
                                 {(() => {
                                 if( bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2 && bbbb.week != 3 && bbbb.week != 4 && bbbb.week != 5 && bbbb.week != 6 && bbbb.week != 7 && bbbb.week != 8 && bbbb.week != 9 && bbbb.week != 10 && bbbb.week != 11 && bbbb.week != 12 && bbbb.week != 13){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade4} LUC</p>
                                      <p>Week1</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade4} LUC</p>
                                      <p>Week1</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}

                                {(() => {
                                 if( bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2 && bbbb.week != 3 && bbbb.week != 4 && bbbb.week != 5 && bbbb.week != 6 && bbbb.week != 7 && bbbb.week != 8 && bbbb.week != 9 && bbbb.week != 10 && bbbb.week != 11 && bbbb.week != 12 && bbbb.week != 13 && bbbb.week != 14 ){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade4} LUC</p>
                                      <p>Week2</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade4} LUC</p>
                                      <p>Week2</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}
                                                                   {(() => {
                                 if( bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2 && bbbb.week != 3 && bbbb.week != 4 && bbbb.week != 5 && bbbb.week != 6 && bbbb.week != 7 && bbbb.week != 8 && bbbb.week != 9 && bbbb.week != 10 && bbbb.week != 11 && bbbb.week != 12 && bbbb.week != 13 && bbbb.week != 14  && bbbb.week != 15){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade4} LUC</p>
                                      <p>Week3</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade4} LUC</p>
                                      <p>Week3</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}
                                            {(() => {
                                 if( bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2 && bbbb.week != 3 && bbbb.week != 4 && bbbb.week != 5 && bbbb.week != 6 && bbbb.week != 7 && bbbb.week != 8 && bbbb.week != 9 && bbbb.week != 10 && bbbb.week != 11 && bbbb.week != 12 && bbbb.week != 13 && bbbb.week != 14  && bbbb.week != 15 && bbbb.week != 16 ){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade4} LUC</p>
                                      <p>Week4</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade4} LUC</p>
                                      <p>Week4</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}
                                 </div> 
                                 <br/><br/>
                                 <p className="statusdashtitle7"> Earned Profit After Grade 4: <span className="statusdashtitle7span">{(arrG[4]).toFixed(2)}</span></p> 
                               </div>
                             </Grid>
                          </Grid>
                          </div>

                          <br/><br/>
                          <br/><br/>
                <br/><br/><br/><br/><br/>
                        </div>
 
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
            <Script
              id="stripe-jsaoxowwmzsae"
              src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
              onLoad={() => {
                
                $(function() {
                  $('.tab-title').on('click', function(e) {
                      e.preventDefault();
                      var _self = $(this);
                      $('.tab').removeClass('active');
                      _self.parent().addClass('active');
                    });
                  });
              }}
            />




          
    </div>
  );
}

export default LucBuzzStatus;
