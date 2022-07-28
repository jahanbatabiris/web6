import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({



    titleroot:{
        width:'100%',
        
        backgroundColor:'#0C0617',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        minHeight: '500px',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
    },
   
    
    root:{
        backgroundColor:'#0C0617',
        paddingTop:'80px',
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
        width:'190px',
        marginTop:'80px'
    },

    back:{

        backgroundImage:'url("/img/header/event box.png")',
        width:'500px',
        height: '530px',
        backgroundSize:'100% 100%',
        padding:'10px 10px 10px 10px',
        position:'relative',
        [theme.breakpoints.down("1530")]: {
            width:'400px',
          },
          [theme.breakpoints.down("450")]: {
            width:'300px',
          },
    },
    back1:{

      backgroundImage:'url("/img/header/event box.png")',
      width:'500px',
      height: '530px',
      backgroundSize:'100% 100%',
      padding:'10px 10px 10px 10px',
      position:'relative',
      [theme.breakpoints.down("1530")]: {
        width:'400px',
      },
      [theme.breakpoints.down("450")]: {
        width:'300px',
      },
  },
  
  title:{
  
    backgroundPosition: 'center center',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  }


}));

function Events() {
    const classes = useStyles();
  return (
    <div  className={classes.titleroot}>
        <div >
            <Typography className="sotitle2">
                 <b>EVEN<span className="title2sospan">TS</span></b>
            </Typography>
            <Typography className="sotitle1">
              <b> EVENTS</b> 
            </Typography>
              
        </div>
        <div className={classes.root}>
                <Grid className={classes.root2} container spacing={1}> 
                        <Grid className={classes.root3} item xs={12} sm={12} lg={4} xl={4}>
                            <div className="containerrr44">
                                <div className="titleee44 title11144">
                                <div className={classes.back1} >
                                            <span className={classes.imgspan}><img className={classes.img} src="/img/events/b2e.png"/></span> 
                                                <p className="usertitle"><a href="/BurnToEarn"><b className={classes.title}>Burn To Earn "25"</b></a></p>
                                        </div>
                                </div>
                            </div>
                            
                        </Grid>
                        <Grid className={classes.root3} item xs={12} sm={12} lg={4} xl={4}>
                        <div className="containerrr44">
                                <div className="titleee44 title11144">
                                <div className={classes.back} >
                                <span className={classes.imgspan}><img className={classes.img} src="/img/events/golden-piggy.png"/></span> 
                                        <p className="usertitle"><a href="/GoldenPiggy"><b className={classes.title}>Golden Piggy "36"</b></a></p>
                                        

                                </div>
                                </div>
                            </div>
                            
                        </Grid>
                        <Grid className={classes.root3} item xs={12} sm={12} lg={4} xl={4}>
                        <div className="containerrr44">
                                <div className="titleee44 title11144">
                                <div className={classes.back1} >
                                <span className={classes.imgspan}><img className={classes.img} src="/img/events/lucbuzz.png"/></span> 
                                        <p className="usertitle"><a  href="/LucBuzz"><b className={classes.title}>Luc Buzz </b></a></p>
                                    
                                </div>
                                </div>
                            </div>
                           
                        
                        </Grid>
                      
                </Grid>   
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
       </div>
        <br/><br/><br/>
    </div>
  );
}

export default Events;
