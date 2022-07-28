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

function StakingStatus() {
    const classes = useStyles();


    const router = useRouter();
    const bbbb = router.query;
   
  
    let total = 0;
    var ar= [0, 0.00577, 0.00577, 0.00577, 0.00577, 0.00962, 0.00962, 0.00962, 0.00962
      , 0.013462, 0.013462, 0.013462, 0.013462, 0.013462, 0.019231, 0.019231,
      0.019231, 0.019231, 0.025, 0.025, 0.025, 0.025, 0.03462, 0.03462, 0.03462,
      0.03462, 0.03462, 0.0481, 0.0481, 0.0481, 0.0481, 0.06731, 0.06731,
      0.06731, 0.06731, 0.06731, 0.1];
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
   const grade4= ((bbbb.balance)*ar[14]).toFixed(2);
   const grade5= ((bbbb.balance)*ar[18]).toFixed(2);
   const grade6= ((bbbb.balance)*ar[22]).toFixed(2);
   const grade7= ((bbbb.balance)*ar[27]).toFixed(2);
   const grade8= ((bbbb.balance)*ar[31]).toFixed(2);
   const grade9= ((bbbb.balance)*ar[36]).toFixed(2);
  const arrG = [0,grade1*4,grade2*4,grade3*5,grade4*4,grade5*4,grade6*5,grade7*4,grade8*5,grade9*1]
  
  let aaabb = ((bbbb.claimedAmount)*100/(bbbb.totalClaimingAmount)).toFixed(2);
  
  
   



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
        <title>Staking Status</title>
      </Head>  
        <div className={classes.root2}>
        <a href="/HomePage"><img id="img" className="headerluclogo" src='/img/exchange/logoo.png'/></a> 
               

                <br/><br/>
                <br/><br/><br/><br/><br/>
                <Typography className="stakingcheck" >
               <b>Staking Status </b>         
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
              

                        <div className="tabs-container">
                          <div className="tab active one"><a href="" className="tab-title">Grade 1</a>
                          <p className="statusetextweek">4 week</p>
                            <p className="statusetextearned">Earned Profit After G1:<span className="statusetextearnedspan"> {(arrG[1]).toFixed(2)}</span></p>
                          </div>
                          <div className="tab-content one" id="">

                          <Grid className={classes.root2} container spacing={1}> 
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                                 <div>
                                  <p className="statusdashtitle1">Earned Profit</p>
                                  <p className="statusdashtitle2">{(earnedP).toFixed(2)}</p>
                                  

                                              <CircularProgressbar
                                                    value={aaabb}
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
                                        {aaabb}
                                        <br/> <br/>
                                    </Typography>
                                    </div>
                               </div>
                             </Grid>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                               <div>
                                  <p className="statusdashtitle1">Start Date:</p>
                                  <p className="statusdashtitle4">{bbbb.startDate}</p>
                                  <br/><br/><br/>
                                  <p className="statusdashtitle1">New Rewards Avalable In:</p>
                                  <p className="statusdashtitle4">{bbbb.nextDate}</p>
                                  </div>
                               </div>
                             </Grid>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                               <div>
                                  <p className="statusdashtitle1">Current Balance</p>
                                  <p  className="statusdashtitle2">{all}</p>
                                  <br/><br/><br/><br/><br/><br/><br/>
                                  <img className="statusdashimg" src="/img/staking/Frame.png"/>
                                  </div>
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
                                 <div>
                                  <p className="statusdashtitle1">Earned Profit</p>
                                  <p className="statusdashtitle2">{(earnedP).toFixed(2)}</p>
                                  

                                              <CircularProgressbar
                                                    value={aaabb}
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
                                        {aaabb}
                                        <br/> <br/>
                                    </Typography>
                                    </div>
                               </div>
                             </Grid>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                               <div>
                                  <p className="statusdashtitle1">Start Date:</p>
                                  <p className="statusdashtitle4">{bbbb.startDate}</p>
                                  <br/><br/><br/>
                                  <p className="statusdashtitle1">New Rewards Avalable In:</p>
                                  <p className="statusdashtitle4">{bbbb.nextDate}</p>
                                  </div>
                               </div>
                             </Grid>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                               <div>
                                  <p className="statusdashtitle1">Current Balance</p>
                                  <p  className="statusdashtitle2">{all}</p>
                                  <br/><br/><br/><br/><br/><br/><br/>
                                  <img className="statusdashimg" src="/img/staking/Frame.png"/>
                                  </div>
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
                                 <div>
                                  <p className="statusdashtitle1">Earned Profit</p>
                                  <p className="statusdashtitle2">{(earnedP).toFixed(2)}</p>
                                  

                                              <CircularProgressbar
                                                    value={aaabb}
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
                                        {aaabb}
                                        <br/> <br/>
                                    </Typography>
                                    </div>
                               </div>
                             </Grid>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                               <div>
                                  <p className="statusdashtitle1">Start Date:</p>
                                  <p className="statusdashtitle4">{bbbb.startDate}</p>
                                  <br/><br/><br/>
                                  <p className="statusdashtitle1">New Rewards Avalable In:</p>
                                  <p className="statusdashtitle4">{bbbb.nextDate}</p>
                                  </div>
                               </div>
                             </Grid>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                               <div>
                                  <p className="statusdashtitle1">Current Balance</p>
                                  <p  className="statusdashtitle2">{all}</p>
                                  <br/><br/><br/><br/><br/><br/><br/>
                                  <img className="statusdashimg" src="/img/staking/Frame.png"/>
                                  </div>
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

                          <div className="tab"><a href="" className="tab-title">Grade 4</a>
                          <p className="statusetextweek">4 week</p>
                            <p className="statusetextearned">Earned Profit After G4:<span className="statusetextearnedspan">{(arrG[4]).toFixed(2)} </span></p>
                          </div>
                          <div className="tab-content" id="">
                          <Grid className={classes.root2} container spacing={1}> 
                          <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                                 <div>
                                  <p className="statusdashtitle1">Earned Profit</p>
                                  <p className="statusdashtitle2">{(earnedP).toFixed(2)}</p>
                                  

                                              <CircularProgressbar
                                                    value={aaabb}
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
                                        {aaabb}
                                        <br/> <br/>
                                    </Typography>
                                    </div>
                               </div>
                             </Grid>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                               <div>
                                  <p className="statusdashtitle1">Start Date:</p>
                                  <p className="statusdashtitle4">{bbbb.startDate}</p>
                                  <br/><br/><br/>
                                  <p className="statusdashtitle1">New Rewards Avalable In:</p>
                                  <p className="statusdashtitle4">{bbbb.nextDate}</p>
                                  </div>
                               </div>
                             </Grid>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                               <div>
                                  <p className="statusdashtitle1">Current Balance</p>
                                  <p  className="statusdashtitle2">{all}</p>
                                  <br/><br/><br/><br/><br/><br/><br/>
                                  <img className="statusdashimg" src="/img/staking/Frame.png"/>
                                  </div>
                               </div>
                             </Grid>                             <br/><br/> <br/><br/>
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

                          <div className="tab"><a href="" className="tab-title">Grade 5</a>
                          <p className="statusetextweek">4 week</p>
                            <p className="statusetextearned">Earned Profit After G5:<span className="statusetextearnedspan"> {(arrG[5]).toFixed(2)}</span></p>
                          </div>
                          <div className="tab-content" id="">
                          <Grid className={classes.root2} container spacing={1}> 
                          <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                                 <div>
                                  <p className="statusdashtitle1">Earned Profit</p>
                                  <p className="statusdashtitle2">{(earnedP).toFixed(2)}</p>
                                  

                                              <CircularProgressbar
                                                    value={aaabb}
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
                                        {aaabb}
                                        <br/> <br/>
                                    </Typography>
                                    </div>
                               </div>
                             </Grid>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                               <div>
                                  <p className="statusdashtitle1">Start Date:</p>
                                  <p className="statusdashtitle4">{bbbb.startDate}</p>
                                  <br/><br/><br/>
                                  <p className="statusdashtitle1">New Rewards Avalable In:</p>
                                  <p className="statusdashtitle4">{bbbb.nextDate}</p>
                                  </div>
                               </div>
                             </Grid>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                               <div>
                                  <p className="statusdashtitle1">Current Balance</p>
                                  <p  className="statusdashtitle2">{all}</p>
                                  <br/><br/><br/><br/><br/><br/><br/>
                                  <img className="statusdashimg" src="/img/staking/Frame.png"/>
                                  </div>
                               </div>
                             </Grid>                             <br/><br/> <br/><br/>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={12} xl={12}>
                             <br/><br/> <br/><br/>
                               <div className="statusdashdiv1">
                               <p className="statusdashtitle6">Grade5</p>
                               <br/><br/>
                                 <div className="statusdashcircleroot">
                                 {(() => {
                                 if(bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2 && bbbb.week != 3 && bbbb.week != 4 && bbbb.week != 5 && bbbb.week != 6 && bbbb.week != 7 && bbbb.week != 8 && bbbb.week != 9 && bbbb.week != 10 && bbbb.week != 11 && bbbb.week != 12 && bbbb.week != 13 && bbbb.week != 14  && bbbb.week != 15 && bbbb.week != 16  && bbbb.week != 17){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade5} LUC</p>
                                      <p>Week1</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade5} LUC</p>
                                      <p>Week1</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}

                                {(() => {
                                 if( bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2 && bbbb.week != 3 && bbbb.week != 4 && bbbb.week != 5 && bbbb.week != 6 && bbbb.week != 7 && bbbb.week != 8 && bbbb.week != 9 && bbbb.week != 10 && bbbb.week != 11 && bbbb.week != 12 && bbbb.week != 13 && bbbb.week != 14  && bbbb.week != 15 && bbbb.week != 16  && bbbb.week != 17 && bbbb.week != 18 ){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade5} LUC</p>
                                      <p>Week2</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade5} LUC</p>
                                      <p>Week2</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}
                                                                   {(() => {
                                 if( bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2 && bbbb.week != 3 && bbbb.week != 4 && bbbb.week != 5 && bbbb.week != 6 && bbbb.week != 7 && bbbb.week != 8 && bbbb.week != 9 && bbbb.week != 10 && bbbb.week != 11 && bbbb.week != 12 && bbbb.week != 13 && bbbb.week != 14  && bbbb.week != 15 && bbbb.week != 16  && bbbb.week != 17 && bbbb.week != 18 && bbbb.week != 19){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade5} LUC</p>
                                      <p>Week3</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade5} LUC</p>
                                      <p>Week3</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}
                                            {(() => {
                                 if( bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2 && bbbb.week != 3 && bbbb.week != 4 && bbbb.week != 5 && bbbb.week != 6 && bbbb.week != 7 && bbbb.week != 8 && bbbb.week != 9 && bbbb.week != 10 && bbbb.week != 11 && bbbb.week != 12 && bbbb.week != 13 && bbbb.week != 14  && bbbb.week != 15 && bbbb.week != 16  && bbbb.week != 17 && bbbb.week != 18 && bbbb.week != 19 && bbbb.week != 20 ){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade5} LUC</p>
                                      <p>Week4</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade5} LUC</p>
                                      <p>Week4</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}
                                 </div> 
                                 <br/><br/>
                                 <p className="statusdashtitle7"> Earned Profit After Grade 5: <span className="statusdashtitle7span">{(arrG[5]).toFixed(2)}</span></p> 
                               </div>
                             </Grid>
                          </Grid>
                          </div>

                          <div className="tab"><a href="" className="tab-title">Grade 6</a>
                          <p className="statusetextweek">4 week</p>
                            <p className="statusetextearned">Earned Profit After G6:<span className="statusetextearnedspan">{(arrG[6]).toFixed(2)}</span></p>
                          </div>
                          <div className="tab-content" id="">
                          <Grid className={classes.root2} container spacing={1}> 
                          <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                                 <div>
                                  <p className="statusdashtitle1">Earned Profit</p>
                                  <p className="statusdashtitle2">{(earnedP).toFixed(2)}</p>
                                  

                                              <CircularProgressbar
                                                    value={aaabb}
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
                                        {aaabb}
                                        <br/> <br/>
                                    </Typography>
                                    </div>
                               </div>
                             </Grid>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                               <div>
                                  <p className="statusdashtitle1">Start Date:</p>
                                  <p className="statusdashtitle4">{bbbb.startDate}</p>
                                  <br/><br/><br/>
                                  <p className="statusdashtitle1">New Rewards Avalable In:</p>
                                  <p className="statusdashtitle4">{bbbb.nextDate}</p>
                                  </div>
                               </div>
                             </Grid>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                               <div>
                                  <p className="statusdashtitle1">Current Balance</p>
                                  <p  className="statusdashtitle2">{all}</p>
                                  <br/><br/><br/><br/><br/><br/><br/>
                                  <img className="statusdashimg" src="/img/staking/Frame.png"/>
                                  </div>
                               </div>
                             </Grid>                 <br/><br/> <br/><br/>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={12} xl={12}>
                             <br/><br/> <br/><br/>
                               <div className="statusdashdiv1">
                               <p className="statusdashtitle6">Grade6</p>
                               <br/><br/>
                                 <div className="statusdashcircleroot">
                                 {(() => {
                                 if(bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2 && bbbb.week != 3 && bbbb.week != 4 && bbbb.week != 5 && bbbb.week != 6 && bbbb.week != 7 && bbbb.week != 8 && bbbb.week != 9 && bbbb.week != 10 && bbbb.week != 11 && bbbb.week != 12 && bbbb.week != 13 && bbbb.week != 14  && bbbb.week != 15 && bbbb.week != 16  && bbbb.week != 17 && bbbb.week != 18 && bbbb.week != 19 && bbbb.week != 20  && bbbb.week != 21){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade6} LUC</p>
                                      <p>Week1</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade6} LUC</p>
                                      <p>Week1</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}

                                {(() => {
                                 if( bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2 && bbbb.week != 3 && bbbb.week != 4 && bbbb.week != 5 && bbbb.week != 6 && bbbb.week != 7 && bbbb.week != 8 && bbbb.week != 9 && bbbb.week != 10 && bbbb.week != 11 && bbbb.week != 12 && bbbb.week != 13 && bbbb.week != 14  && bbbb.week != 15 && bbbb.week != 16  && bbbb.week != 17 && bbbb.week != 18 && bbbb.week != 19 && bbbb.week != 20  && bbbb.week != 21  && bbbb.week != 22){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade6} LUC</p>
                                      <p>Week2</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade6} LUC</p>
                                      <p>Week2</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}
                                                                   {(() => {
                                 if( bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2 && bbbb.week != 3 && bbbb.week != 4 && bbbb.week != 5 && bbbb.week != 6 && bbbb.week != 7 && bbbb.week != 8 && bbbb.week != 9 && bbbb.week != 10 && bbbb.week != 11 && bbbb.week != 12 && bbbb.week != 13 && bbbb.week != 14  && bbbb.week != 15 && bbbb.week != 16  && bbbb.week != 17 && bbbb.week != 18 && bbbb.week != 19 && bbbb.week != 20  && bbbb.week != 21  && bbbb.week != 22 && bbbb.week != 23){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade6} LUC</p>
                                      <p>Week3</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade6} LUC</p>
                                      <p>Week3</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}
                                            {(() => {
                                 if( bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2 && bbbb.week != 3 && bbbb.week != 4 && bbbb.week != 5 && bbbb.week != 6 && bbbb.week != 7 && bbbb.week != 8 && bbbb.week != 9 && bbbb.week != 10 && bbbb.week != 11 && bbbb.week != 12 && bbbb.week != 13 && bbbb.week != 14  && bbbb.week != 15 && bbbb.week != 16  && bbbb.week != 17 && bbbb.week != 18 && bbbb.week != 19 && bbbb.week != 20  && bbbb.week != 21  && bbbb.week != 22 && bbbb.week != 23 && bbbb.week != 24 ){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade6} LUC</p>
                                      <p>Week4</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade6} LUC</p>
                                      <p>Week4</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}
                               {(() => {
                                 if(bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2 && bbbb.week != 3 && bbbb.week != 4 && bbbb.week != 5 && bbbb.week != 6 && bbbb.week != 7 && bbbb.week != 8 && bbbb.week != 9 && bbbb.week != 10 && bbbb.week != 11 && bbbb.week != 12 && bbbb.week != 13 && bbbb.week != 14  && bbbb.week != 15 && bbbb.week != 16  && bbbb.week != 17 && bbbb.week != 18 && bbbb.week != 19 && bbbb.week != 20  && bbbb.week != 21  && bbbb.week != 22 && bbbb.week != 23 && bbbb.week != 24 && bbbb.week != 25 ){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade6} LUC</p>
                                      <p>Week5</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade6} LUC</p>
                                      <p>Week5</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}
                                 </div> 
                                 <br/><br/>
                                 <p className="statusdashtitle7"> Earned Profit After Grade 6: <span className="statusdashtitle7span">{(arrG[6]).toFixed(2)}</span></p> 
                               </div>
                             </Grid>
                          </Grid>
                          </div>

                          <div className="tab"><a href="" className="tab-title">Grade 7</a>
                          <p className="statusetextweek">4 week</p>
                            <p className="statusetextearned">Earned Profit After G7:<span className="statusetextearnedspan"> {(arrG[7]).toFixed(2)}</span></p>
                          </div>
                          <div className="tab-content" id="">
                          <Grid className={classes.root2} container spacing={1}> 
                          <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                                 <div>
                                  <p className="statusdashtitle1">Earned Profit</p>
                                  <p className="statusdashtitle2">{(earnedP).toFixed(2)}</p>
                                  

                                              <CircularProgressbar
                                                    value={aaabb}
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
                                        {aaabb}
                                        <br/> <br/>
                                    </Typography>
                                    </div>
                               </div>
                             </Grid>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                               <div>
                                  <p className="statusdashtitle1">Start Date:</p>
                                  <p className="statusdashtitle4">{bbbb.startDate}</p>
                                  <br/><br/><br/>
                                  <p className="statusdashtitle1">New Rewards Avalable In:</p>
                                  <p className="statusdashtitle4">{bbbb.nextDate}</p>
                                  </div>
                               </div>
                             </Grid>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                               <div>
                                  <p className="statusdashtitle1">Current Balance</p>
                                  <p  className="statusdashtitle2">{all}</p>
                                  <br/><br/><br/><br/><br/><br/><br/>
                                  <img className="statusdashimg" src="/img/staking/Frame.png"/>
                                  </div>
                               </div>
                             </Grid>    <br/><br/> <br/><br/>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={12} xl={12}>
                             <br/><br/> <br/><br/>
                               <div className="statusdashdiv1">
                               <p className="statusdashtitle6">Grade7</p>
                               <br/><br/>
                                 <div className="statusdashcircleroot">
                                 {(() => {
                                 if( bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2 && bbbb.week != 3 && bbbb.week != 4 && bbbb.week != 5 && bbbb.week != 6 && bbbb.week != 7 && bbbb.week != 8 && bbbb.week != 9 && bbbb.week != 10 && bbbb.week != 11 && bbbb.week != 12 && bbbb.week != 13 && bbbb.week != 14  && bbbb.week != 15 && bbbb.week != 16  && bbbb.week != 17 && bbbb.week != 18 && bbbb.week != 19 && bbbb.week != 20  && bbbb.week != 21  && bbbb.week != 22 && bbbb.week != 23 && bbbb.week != 24 && bbbb.week != 25 && bbbb.week != 26){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade7} LUC</p>
                                      <p>Week1</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade7} LUC</p>
                                      <p>Week1</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}

                                {(() => {
                                 if( bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2 && bbbb.week != 3 && bbbb.week != 4 && bbbb.week != 5 && bbbb.week != 6 && bbbb.week != 7 && bbbb.week != 8 && bbbb.week != 9 && bbbb.week != 10 && bbbb.week != 11 && bbbb.week != 12 && bbbb.week != 13 && bbbb.week != 14  && bbbb.week != 15 && bbbb.week != 16  && bbbb.week != 17 && bbbb.week != 18 && bbbb.week != 19 && bbbb.week != 20  && bbbb.week != 21  && bbbb.week != 22 && bbbb.week != 23 && bbbb.week != 24 && bbbb.week != 25 && bbbb.week != 26 && bbbb.week != 27){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade7} LUC</p>
                                      <p>Week2</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade7} LUC</p>
                                      <p>Week2</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}
                                                                   {(() => {
                                 if(bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2 && bbbb.week != 3 && bbbb.week != 4 && bbbb.week != 5 && bbbb.week != 6 && bbbb.week != 7 && bbbb.week != 8 && bbbb.week != 9 && bbbb.week != 10 && bbbb.week != 11 && bbbb.week != 12 && bbbb.week != 13 && bbbb.week != 14  && bbbb.week != 15 && bbbb.week != 16  && bbbb.week != 17 && bbbb.week != 18 && bbbb.week != 19 && bbbb.week != 20  && bbbb.week != 21  && bbbb.week != 22 && bbbb.week != 23 && bbbb.week != 24 && bbbb.week != 25 && bbbb.week != 26 && bbbb.week != 27 && bbbb.week != 28){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade7} LUC</p>
                                      <p>Week3</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade7} LUC</p>
                                      <p>Week3</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}
                                            {(() => {
                                 if( bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2 && bbbb.week != 3 && bbbb.week != 4 && bbbb.week != 5 && bbbb.week != 6 && bbbb.week != 7 && bbbb.week != 8 && bbbb.week != 9 && bbbb.week != 10 && bbbb.week != 11 && bbbb.week != 12 && bbbb.week != 13 && bbbb.week != 14  && bbbb.week != 15 && bbbb.week != 16  && bbbb.week != 17 && bbbb.week != 18 && bbbb.week != 19 && bbbb.week != 20  && bbbb.week != 21  && bbbb.week != 22 && bbbb.week != 23 && bbbb.week != 24 && bbbb.week != 25 && bbbb.week != 26 && bbbb.week != 27 && bbbb.week != 28 && bbbb.week != 29){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade7} LUC</p>
                                      <p>Week4</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade7} LUC</p>
                                      <p>Week4</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}
  
                                 </div> 
                                 <br/><br/>
                                 <p className="statusdashtitle7"> Earned Profit After Grade 7: <span className="statusdashtitle7span">{(arrG[7]).toFixed(2)}</span></p> 
                               </div>
                             </Grid>
                          </Grid>
                          </div>

                          <div className="tab"><a href="" className="tab-title">Grade 8</a>
                          <p className="statusetextweek">4 week</p>
                            <p className="statusetextearned">Earned Profit After G8:<span className="statusetextearnedspan">{(arrG[8]).toFixed(2)} </span></p>
                          </div>
                          <div className="tab-content" id=""> 
                          <Grid className={classes.root2} container spacing={1}> 
                          <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                                 <div>
                                  <p className="statusdashtitle1">Earned Profit</p>
                                  <p className="statusdashtitle2">{(earnedP).toFixed(2)}</p>
                                  

                                              <CircularProgressbar
                                                    value={aaabb}
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
                                        {aaabb}
                                        <br/> <br/>
                                    </Typography>
                                    </div>
                               </div>
                             </Grid>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                               <div>
                                  <p className="statusdashtitle1">Start Date:</p>
                                  <p className="statusdashtitle4">{bbbb.startDate}</p>
                                  <br/><br/><br/>
                                  <p className="statusdashtitle1">New Rewards Avalable In:</p>
                                  <p className="statusdashtitle4">{bbbb.nextDate}</p>
                                  </div>
                               </div>
                             </Grid>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                               <div>
                                  <p className="statusdashtitle1">Current Balance</p>
                                  <p  className="statusdashtitle2">{all}</p>
                                  <br/><br/><br/><br/><br/><br/><br/>
                                  <img className="statusdashimg" src="/img/staking/Frame.png"/>
                                  </div>
                               </div>
                             </Grid>                             <br/><br/> <br/><br/>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={12} xl={12}>
                             <br/><br/> <br/><br/>
                               <div className="statusdashdiv1">
                               <p className="statusdashtitle6">Grade8</p>
                               <br/><br/>
                                 <div className="statusdashcircleroot">
                                 {(() => {
                                 if( bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2 && bbbb.week != 3 && bbbb.week != 4 && bbbb.week != 5 && bbbb.week != 6 && bbbb.week != 7 && bbbb.week != 8 && bbbb.week != 9 && bbbb.week != 10 && bbbb.week != 11 && bbbb.week != 12 && bbbb.week != 13 && bbbb.week != 14  && bbbb.week != 15 && bbbb.week != 16  && bbbb.week != 17 && bbbb.week != 18 && bbbb.week != 19 && bbbb.week != 20  && bbbb.week != 21  && bbbb.week != 22 && bbbb.week != 23 && bbbb.week != 24 && bbbb.week != 25 && bbbb.week != 26 && bbbb.week != 27 && bbbb.week != 28 && bbbb.week != 29  && bbbb.week != 30){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade8} LUC</p>
                                      <p>Week1</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade8} LUC</p>
                                      <p>Week1</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}

                                {(() => {
                                 if( bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2 && bbbb.week != 3 && bbbb.week != 4 && bbbb.week != 5 && bbbb.week != 6 && bbbb.week != 7 && bbbb.week != 8 && bbbb.week != 9 && bbbb.week != 10 && bbbb.week != 11 && bbbb.week != 12 && bbbb.week != 13 && bbbb.week != 14  && bbbb.week != 15 && bbbb.week != 16  && bbbb.week != 17 && bbbb.week != 18 && bbbb.week != 19 && bbbb.week != 20  && bbbb.week != 21  && bbbb.week != 22 && bbbb.week != 23 && bbbb.week != 24 && bbbb.week != 25 && bbbb.week != 26 && bbbb.week != 27 && bbbb.week != 28 && bbbb.week != 29 && bbbb.week != 30  && bbbb.week != 31){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade8} LUC</p>
                                      <p>Week2</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade8} LUC</p>
                                      <p>Week2</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}
                                                                   {(() => {
                                 if(bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2 && bbbb.week != 3 && bbbb.week != 4 && bbbb.week != 5 && bbbb.week != 6 && bbbb.week != 7 && bbbb.week != 8 && bbbb.week != 9 && bbbb.week != 10 && bbbb.week != 11 && bbbb.week != 12 && bbbb.week != 13 && bbbb.week != 14  && bbbb.week != 15 && bbbb.week != 16  && bbbb.week != 17 && bbbb.week != 18 && bbbb.week != 19 && bbbb.week != 20  && bbbb.week != 21  && bbbb.week != 22 && bbbb.week != 23 && bbbb.week != 24 && bbbb.week != 25 && bbbb.week != 26 && bbbb.week != 27 && bbbb.week != 28 && bbbb.week != 29 && bbbb.week != 30 && bbbb.week != 31  && bbbb.week != 32){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade8} LUC</p>
                                      <p>Week3</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade8} LUC</p>
                                      <p>Week3</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}
                                            {(() => {
                                 if( bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2 && bbbb.week != 3 && bbbb.week != 4 && bbbb.week != 5 && bbbb.week != 6 && bbbb.week != 7 && bbbb.week != 8 && bbbb.week != 9 && bbbb.week != 10 && bbbb.week != 11 && bbbb.week != 12 && bbbb.week != 13 && bbbb.week != 14  && bbbb.week != 15 && bbbb.week != 16  && bbbb.week != 17 && bbbb.week != 18 && bbbb.week != 19 && bbbb.week != 20  && bbbb.week != 21  && bbbb.week != 22 && bbbb.week != 23 && bbbb.week != 24 && bbbb.week != 25 && bbbb.week != 26 && bbbb.week != 27 && bbbb.week != 28 && bbbb.week != 29 && bbbb.week != 30 && bbbb.week != 31 && bbbb.week != 32  && bbbb.week != 33){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade8} LUC</p>
                                      <p>Week4</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade8} LUC</p>
                                      <p>Week4</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}
                                                                          {(() => {
                                 if( bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2 && bbbb.week != 3 && bbbb.week != 4 && bbbb.week != 5 && bbbb.week != 6 && bbbb.week != 7 && bbbb.week != 8 && bbbb.week != 9 && bbbb.week != 10 && bbbb.week != 11 && bbbb.week != 12 && bbbb.week != 13 && bbbb.week != 14  && bbbb.week != 15 && bbbb.week != 16  && bbbb.week != 17 && bbbb.week != 18 && bbbb.week != 19 && bbbb.week != 20  && bbbb.week != 21  && bbbb.week != 22 && bbbb.week != 23 && bbbb.week != 24 && bbbb.week != 25 && bbbb.week != 26 && bbbb.week != 27 && bbbb.week != 28 && bbbb.week != 29 && bbbb.week != 30 && bbbb.week != 31 && bbbb.week != 32 && bbbb.week != 33  && bbbb.week != 34){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade8} LUC</p>
                                      <p>Week5</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade8} LUC</p>
                                      <p>Week5</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}
  
                                 </div> 
                                 <br/><br/>
                                 <p className="statusdashtitle7"> Earned Profit After Grade 8: <span className="statusdashtitle7span">{(arrG[8]).toFixed(2)}</span></p> 
                               </div>
                             </Grid>
                         
                          </Grid>
                          </div>

                          <div className="tab last"><a href="" className="tab-title">Grade 9</a>
                          <p className="statusetextweek">4 week</p>
                            <p className="statusetextearned">Earned Profit After G9:<span className="statusetextearnedspan">{(arrG[9]).toFixed(2)} </span></p>
                          </div>
                          <div className="tab-content" id="">
                          <Grid className={classes.root2} container spacing={1}> 
                          <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                                 <div>
                                  <p className="statusdashtitle1">Earned Profit</p>
                                  <p className="statusdashtitle2">{(earnedP).toFixed(2)}</p>
                                  

                                              <CircularProgressbar
                                                    value={aaabb}
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
                                        {aaabb}
                                        <br/> <br/>
                                    </Typography>
                                    </div>
                               </div>
                             </Grid>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                               <div>
                                  <p className="statusdashtitle1">Start Date:</p>
                                  <p className="statusdashtitle4">{bbbb.startDate}</p>
                                  <br/><br/><br/>
                                  <p className="statusdashtitle1">New Rewards Avalable In:</p>
                                  <p className="statusdashtitle4">{bbbb.nextDate}</p>
                                  </div>
                               </div>
                             </Grid>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={4} xl={4}>
                               <div className="statusdashdiv">
                               <div>
                                  <p className="statusdashtitle1">Current Balance</p>
                                  <p  className="statusdashtitle2">{all}</p>
                                  <br/><br/><br/><br/><br/><br/><br/>
                                  <img className="statusdashimg" src="/img/staking/Frame.png"/>
                                  </div>
                               </div>
                             </Grid>
                             <br/><br/> <br/><br/>
                             <Grid className="stskingcheck1" item xs={12} sm={12} lg={12} xl={12}>
                             <br/><br/> <br/><br/>
                               <div className="statusdashdiv1">
                               <p className="statusdashtitle6">Grade8</p>
                               <br/><br/>
                                 <div className="statusdashcircleroot">
                    
                                                                          {(() => {
                                 if( bbbb.week != 0 && bbbb.week != 1 && bbbb.week != 2 && bbbb.week != 3 && bbbb.week != 4 && bbbb.week != 5 && bbbb.week != 6 && bbbb.week != 7 && bbbb.week != 8 && bbbb.week != 9 && bbbb.week != 10 && bbbb.week != 11 && bbbb.week != 12 && bbbb.week != 13 && bbbb.week != 14  && bbbb.week != 15 && bbbb.week != 16  && bbbb.week != 17 && bbbb.week != 18 && bbbb.week != 19 && bbbb.week != 20  && bbbb.week != 21  && bbbb.week != 22 && bbbb.week != 23 && bbbb.week != 24 && bbbb.week != 25 && bbbb.week != 26 && bbbb.week != 27 && bbbb.week != 28 && bbbb.week != 29 && bbbb.week != 30 && bbbb.week != 31 && bbbb.week != 32 && bbbb.week != 33 && bbbb.week != 34  && bbbb.week != 35){
                                  return (
                                    <div className="statusdashcircle">
                                    <br/>
                                      <p>{grade9} LUC</p>
                                      <p>Week1</p>
                                      <br/>
                                    </div>
                                    
                                  );
                                }
                                else{
                                   return(
                                    <div className="statusdashcircle2">
                                    <br/>
                                      <p>{grade9} LUC</p>
                                      <p>Week1</p>
                                      <LockIcon/>
                                      <br/>
                                    </div>
                                 
                                );
                                }
                               
                              })()}
  
                                 </div> 
                                 <br/><br/>
                                 <p className="statusdashtitle7"> Earned Profit After Grade 9: <span className="statusdashtitle7span">{(arrG[9]).toFixed(2)}</span></p> 
                               </div>
                             </Grid>
                          </Grid>
                          </div>
                        </div>
 
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
               

        </div>
                 
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

export default StakingStatus;
