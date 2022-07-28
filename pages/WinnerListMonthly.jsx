import React from 'react'
import Grid from '@mui/material/Grid';
import { Typography, Divider } from '@material-ui/core';
import Head from "next/head";

function WinnerListMonthly() {
  return (
    <div style={{backgroundColor:'#0C0617'}}>
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
          <title>Monthly Winners</title>
        </Head>
        <br/><br/> 
           <Typography className='p111' variant='h2'>
            Winners Of The Drawing
            </Typography>

                <div style={{border:'solid 4px #9B58AD',padding:'5px 5px',backgroundColor:'#262248',margin:'5%',borderRadius:'15px'}}>
               <br/>
            <Typography className='p1111' variant='h5'>
            01 July ⏱
            </Typography>
            <br/><br/>
            <Grid style={{width:'100%',
           backgroundPosition: 'center center',
           margin: 'auto',
           justifyContent: 'center',
          }} container spacing={1}>
          <Grid item xs={0} sm={0} md={1} lg={1} xl={1}>
          
          </Grid>
            <Grid item xs={10} sm={5} md={3} lg={3} xl={3}>
                <div className="aaaa">
                <span style={{backgroundColor:'#8d8d8d00',fontSize:'22px'}}  className="bbb">🥇</span>
                <br/>
                <span className="ccc">7103467  </span>
                {/* <span className="ddd">rhv3cTCuPFAuajJoiujNBZnsGd2ZfMZMRo</span>
                <span style={{color:'#ff8ec700',visibility:'hidden'}} className="ddd">:11621542</span> */}
                </div>
            </Grid>
            <Grid item xs={10} sm={5} md={3} lg={3} xl={3}>
            <div className="aaaa">
                <span style={{backgroundColor:'#8d8d8d00',fontSize:'22px'}}  className="bbb">🥈</span>
                <br/>
                <span className="ccc">3108325 </span>
                {/* <span className="ddd">rUtvDfHYxzW452DiAVnW9dUFU22q6suD5o</span>
                <span className="ddd" style={{color:'#ff8ec700',visibility:'hidden'}}>:11621542</span> */}
                </div>  
            </Grid>
            <Grid item xs={10} sm={5} md={3} lg={3} xl={3}>
            <div className="aaaa">
                <span style={{backgroundColor:'#8d8d8d00',fontSize:'22px'}}  className="bbb">🥉</span>
                <br/>
                <span className="ccc">1109649 </span>
                {/* <span className="ddd">rMfUT6kCZ5Xy5CeXMWK5AY6vGg4rRnr9c1</span>
                <span style={{color:'#ff8ec700',visibility:'hidden'}} className="ddd">fffffff</span> */}
                </div>
            </Grid>
            <Grid item xs={0} sm={0} md={1} lg={1} xl={1}>
          
            </Grid>


            </Grid>
                <br/><br/>
                </div>



                <br/>

          <Divider style={{borderColor:'white'}}/>
          <br/>
          <div style={{border:'solid 4px #9B58AD',padding:'5px 5px',backgroundColor:'#262248',margin:'5%',borderRadius:'15px'}}>
               <br/>
            <Typography className='p1111' variant='h5'>
            01 August ⏱
            </Typography>
            <br/><br/>
            <Grid style={{width:'100%',
           backgroundPosition: 'center center',
           margin: 'auto',
           justifyContent: 'center',
          }} container spacing={1}>
          <Grid item xs={0} sm={0} md={1} lg={1} xl={1}>
          
          </Grid>
            <Grid item xs={10} sm={5} md={3} lg={3} xl={3}>
                <div className="aaaa">
                <span style={{backgroundColor:'#8d8d8d00',fontSize:'22px'}}  className="bbb">🥇</span>
                <br/>
                <span className="ccc">3103902  </span>
                <span className="ddd">rUDjC2WCpXBxgbRT3HtZpK9L7PUEaHe8Kp</span>
                <span style={{color:'#ff8ec700',visibility:'hidden'}} className="ddd">:11621542</span>
                </div>
            </Grid>
            <Grid item xs={10} sm={5} md={3} lg={3} xl={3}>
            <div className="aaaa">
                <span style={{backgroundColor:'#8d8d8d00',fontSize:'22px'}}  className="bbb">🥈</span>
                <br/>
                <span className="ccc">2100974 </span>
                <span className="ddd">rHqdteo9YYMKokmrkFPfkbZiHUQFS8PXc4</span>
                <span className="ddd" style={{color:'#ff8ec700',visibility:'hidden'}}>:11621542</span>
                </div>  
            </Grid>
            <Grid item xs={10} sm={5} md={3} lg={3} xl={3}>
            <div className="aaaa">
                <span style={{backgroundColor:'#8d8d8d00',fontSize:'22px'}}  className="bbb">🥉</span>
                <br/>
                <span className="ccc">5115571 </span>
                <span className="ddd">rK3Y7JZmuTbRJ7ZaiYD4UBS6rKN1ehLmbF </span>
                <span style={{color:'#ff8ec700',visibility:'hidden'}} className="ddd">fffffff</span>
             </div>
            </Grid>
            <Grid item xs={0} sm={0} md={1} lg={1} xl={1}>
          
            </Grid>


            </Grid>
                <br/><br/>
                </div>
                
          <br/><br/><br/><br/>
    </div>
  )
}

export default WinnerListMonthly;