import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    welcomediv:{
        border:'solid 2px white',
        borderRadius:'15px',
        backgroundColor:'#1208276b',
        backdropFilter: 'blur(10PX)',
        padding:'20px 20px 20px 20px',
        backgroundPosition: 'center center',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        height:'400px',
        color:'white',
        fontSize:'39px',
        transition:' 2s',
        cursor:'pointer',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        minHeight: '500px',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        [theme.breakpoints.down("980")]: {
            fontSize:'34px',
          },
          [theme.breakpoints.down("710")]: {
            fontSize:'30px',
          },
          [theme.breakpoints.down("376")]: {
            fontSize:'26px',
          },
    },


    titleroot:{
        width:'100%',
        position:'relative',
        backgroundColor:'#0C0617',
    },
    imgroot:{
        width:'85%',
        backgroundPosition: 'center center',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    imgroot2:{
        position:'relative',
    },
    title:{
        width:'100%',
        borderRadius:'17px',
        [theme.breakpoints.down("1280")]: {
           marginTop:'50px'
          },
    }


}));

function SocialMedia() {
    const classes = useStyles();
  return (
    <div  className={classes.titleroot}>
        <div >
            <Typography className="sotitle2">
                 <b>SOCIAL ME<span className="title2sospan">DIA</span></b>
            </Typography>
            <Typography className="sotitle1">
              <b> SOCIAL MEDIA</b> 
            </Typography>
                <br/><br/><br/>
        </div>
        <div className={classes.imgroot} >
            <Grid container spacing={3}>
            <Grid item xs={12} sm={12} lg={6} xl={6}>
                <video
                className={classes.title}
                loop
                controls
                poster="/img/teaser/Captureaa.PNG"
                >
                <source src={'/img/teaser/06.mp4'} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                    <Typography className="vidsotext">
                    Lucretius Teaser - 20% Development
                    </Typography>
                </Grid> 
                <Grid item xs={12} sm={12} lg={6} xl={6}>
                <video
                className={classes.title}
                loop
                controls
                poster="/img/teaser/Capture11.PNG"
                >
                <source src={'/img/teaser/meta60.mp4'} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                    <Typography className="vidsotext">
                    Lucretius Teaser - 60% Development
                    </Typography>
                </Grid> 
            </Grid> 
        </div>
        <br/><br/><br/>
    </div>
  );
}

export default SocialMedia;
