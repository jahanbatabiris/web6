import React from 'react';
import { Typography,Grid } from '@material-ui/core';
import Head from "next/head";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '90%',
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    },
    root1:{
      backgroundPosition: 'center center',
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    },

    title2:{
      color:'white',
      textShadow: '2px -2px 0px #8728B5',
      fontSize:'33px',
      textAlign:'center',
      [theme.breakpoints.down("960")]: {
          fontSize:'25px',
        },
    },
    rootdivmodal222:{
     
      height:'300px',
      [theme.breakpoints.down("680")]: {
        height:'350px',
      },

    },
    rootdivmodal221:{
     
      height:'400px',
      [theme.breakpoints.down("680")]: {
        height:'350px',
      },


    },
    divrooot:{
      backgroundPosition: 'center center',
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      [theme.breakpoints.down("594")]: {
        marginLeft:'50px'
      },
      [theme.breakpoints.down("445")]: {
        marginLeft:'30px'
      },
    }

  }));

function LucretiusAmbassadors() {
    const classes = useStyles();
    return (
        <div className={classes.root1}  style={{ backgroundColor:'#0C0617', height: '130%'}} >
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
        <title>Lucretius Ambassadors</title>
      </Head>
        <img className="SolidSupportersback1" src="/img/twiiter/back1.png"/>
        <img className="SolidSupportersback2" src="/img/twiiter/back2.png"/>
      <div  className={classes.root} >

          <div>
         
                 <br/><br/><br/><br/><br/><br/><br/><br/>
          <Typography className="bmptitle">
          Lucretius Ambassadors
          <br/><br/>
          </Typography>
          <br/><br/><br/><br/><br/><br/>
          <Grid className={classes.divrooot} container spacing={3}>  
                <Grid className={classes.rootdivmodal221} item xl={2} lg={3} md={4} sm={6} xs={12}>
                  <div className="Ambassadorsroot" >
                      <div>
                          <img style={{zIndex:'100 !important'}} className="Ambassadorsprof" src='/img/ambassedor/@DukeOfAirdrop.jpg'/>
                      </div>
                      <div className="Ambassadorsoutdiv">
                      <a className="SolidSupportersindivaa" href='http://twitter.com/DukeOfAirdrop' target="_blank" rel="noreferrer">
                             @DukeOfAirdrop
                             </a>
                      </div>
                  </div>
                </Grid>
                <Grid className={classes.rootdivmodal222} item xl={2} lg={3} md={4} sm={6} xs={12}>
                <div className="Ambassadorsroot" >
                      <div>
                          <img style={{zIndex:'100 !important'}} className="Ambassadorsprof" src='/img/ambassedor/@wixx_kerbie.jpg'/>
                      </div>
                      <div className="Ambassadorsoutdiv">
                      <a className="SolidSupportersindivaa" href='http://twitter.com/wixx_kerbie' target="_blank" rel="noreferrer">
                      @wixx_kerbie
                        </a>
                        
                      </div>
                  </div>
                </Grid>
                <Grid className={classes.rootdivmodal221} item xl={2} lg={3} md={4} sm={6} xs={12}>
                  <div className="Ambassadorsroot" >
                      <div>
                          <img style={{zIndex:'100 !important'}} className="Ambassadorsprof" src='/img/ambassedor/@sakuranbon50.jpg'/>
                      </div>
                      <div className="Ambassadorsoutdiv">
                      <a className="SolidSupportersindivaa" href='http://twitter.com/sakuranbon50' target="_blank" rel="noreferrer">
                      @sakuranbon50
                        </a>
                        
                      </div>
                  </div>
                </Grid>
                <Grid className={classes.rootdivmodal222} item xl={2} lg={3} md={4} sm={6} xs={12}>
                  <div className="Ambassadorsroot" >
                      <div>
                          <img style={{zIndex:'100 !important'}} className="Ambassadorsprof" src='/img/ambassedor/@GabUndertaker.jpg'/>
                      </div>
                      <div className="Ambassadorsoutdiv">
                      <a className="SolidSupportersindivaa" href='http://twitter.com/GabUndertaker' target="_blank" rel="noreferrer">
                      @GabUndertaker
                        </a>
                           
                      </div>
                  </div>
                </Grid>
                <Grid className={classes.rootdivmodal221} item xl={2} lg={3} md={4} sm={6} xs={12}>
                  <div className="Ambassadorsroot" >
                      <div>
                          <img style={{zIndex:'100 !important'}} className="Ambassadorsprof" src='/img/ambassedor/@iamkenchux.jpg'/>
                      </div>
                      <div className="Ambassadorsoutdiv">
                      <a className="SolidSupportersindivaa" href='http://twitter.com/iamkenchux' target="_blank" rel="noreferrer">
                      @iamkenchux
                        </a>
                      
                      </div>
                  </div>
                </Grid>
                <Grid className={classes.rootdivmodal222} item xl={2} lg={3} md={4} sm={6} xs={12}>
                  <div className="Ambassadorsroot" >
                      <div>
                          <img style={{zIndex:'100 !important'}} className="Ambassadorsprof" src='/img/ambassedor/@XummerDrop.jpg'/>
                      </div>
                      <div className="Ambassadorsoutdiv">
                      <a className="SolidSupportersindivaa" href='http://twitter.com/XummerDrop' target="_blank" rel="noreferrer">
                      @XummerDrop
                        </a>
                      
                      </div>
                  </div>
                </Grid>
                <Grid className={classes.rootdivmodal222} item xl={2} lg={3} md={4} sm={6} xs={12}>
                  <div className="Ambassadorsroot" >
                      <div>
                          <img style={{zIndex:'100 !important'}} className="Ambassadorsprof" src='/img/ambassedor/@XRPMingren.jpg'/>
                      </div>
                      <div className="Ambassadorsoutdiv">
                      <a className="SolidSupportersindivaa" href='http://twitter.com/XRPMingren' target="_blank" rel="noreferrer">
                      @XRPMingren
                        </a>
                            
                      </div>
                  </div>
                </Grid>
                <Grid className={classes.rootdivmodal221} item xl={2} lg={3} md={4} sm={6} xs={12}>
                  <div className="Ambassadorsroot" >
                      <div>
                          <img style={{zIndex:'100 !important'}} className="Ambassadorsprof" src='/img/ambassedor/@mikan3_orange3.jpg'/>
                      </div>
                      <div className="Ambassadorsoutdiv">
                      <a className="SolidSupportersindivaa" href='http://twitter.com/mikan3_orange3' target="_blank" rel="noreferrer">
                      @mikan3_orange3
                        </a>
                     
                      </div>
                  </div>
                </Grid>
                <Grid className={classes.rootdivmodal222} item xl={2} lg={3} md={4} sm={6} xs={12}>
                  <div className="Ambassadorsroot" >
                      <div>
                          <img style={{zIndex:'100 !important'}} className="Ambassadorsprof" src='/img/ambassedor/@Yaegar23.jpg'/>
                      </div>
                      <div className="Ambassadorsoutdiv">
                      <a className="SolidSupportersindivaa" href='http://twitter.com/Yaegar23' target="_blank" rel="noreferrer">
                      @Yaegar23
                        </a>
                      
                      </div>
                      
                  </div>
               
                </Grid>
                <br/><br/><br/><br/>
          </Grid>

          </div>
      </div>
      </div>
    );
}

export default LucretiusAmbassadors;