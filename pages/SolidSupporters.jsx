import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import Head from "next/head";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    backgroundPosition: 'center center',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  root2: {
    width: '100%',
    backgroundPosition: 'center center',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  title2: {
    color: 'white',
    textShadow: '2px -2px 0px #8728B5',
    fontSize: '33px',
    textAlign: 'center',
    [theme.breakpoints.down("960")]: {
      fontSize: '25px',
    },
  },
  rootdivmodal222: {

    height: '300px',

  },
  divrooot: {
    backgroundPosition: 'center center',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    [theme.breakpoints.down("594")]: {
      marginLeft: '50px'
    },
    [theme.breakpoints.down("445")]: {
      marginLeft: '30px'
    },
  }

}));

function SolidSupporters() {
  const classes = useStyles();
  return (
    <div style={{  backgroundColor:'#0C0617', height: '100%' }}>
      <div className={classes.root} >

        <div>
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
            <title>Solid Supporters</title>
          </Head>
          <br />
          <Typography className="bmptitle">
            <br />
            Solid Supporters
          </Typography>
          <br /> <br /> <br />
          <Grid className={classes.divrooot} container spacing={0}>
            <br /> <br /> <br />
            {itemData.map((item) => (
              <Grid className={classes.rootdivmodal222} item xl={2} lg={3} md={4} sm={6} xs={12} key={item}>
                <br /> <br /> <br />
                <div className={classes.divrooot}>
                  <div className="SolidSupportersroot" >
                    <div>
                      <img style={{ zIndex: '100 !important' }} className="SolidSupportersprof" src={item.src} alt={item.alt} />
                    </div>
                    <div className="SolidSupportersoutdiv">
                      <div className="SolidSupportersindiv">
                        <a className="SolidSupportersindiva" href={'http://twitter.com/' + item.text} target="_blank" rel="noreferrer">
                          {item.text}
                        </a>

                      </div>
                    </div>

                  </div>
                </div>
              </Grid>
            ))}


          </Grid>
          <br /><br /><br /><br />
          {/* <div className="SolidSupportersroot" >
            <div>
                <img style={{zIndex:'100 !important'}} className="SolidSupportersprof" src='/img/total/1.2.jpg'/>
            </div>
            <div className="SolidSupportersoutdiv">
                <div className="SolidSupportersindiv">
                        @lucretiuse.network
                </div> 
            </div>

        </div> */}

        </div>
      </div>
    </div>
  );
}


const itemData = [
  {
    src: "/img/twiiter/@fps_Timberguy.jpg", text: "fps_Timberguy", alt: "profpic"
  },
  {
    src: "/img/twiiter/@010_51572957.jpg", text: "010_51572957", alt: "profpic"
  },
  {
    src: "/img/twiiter/@CarterNies.jpg", text: "CarterNies", alt: "profpic"
  },
  {
    src: "/img/twiiter/@BenCryptoX.jpg", text: "BenCryptoX", alt: "profpic"
  },
  {
    src: "/img/twiiter/@KlydeKurt.jpg", text: "KlydeKurt", alt: "profpic"
  },
  {
    src: "/img/twiiter/@lattemaestro.jpg", text: "lattemaestro", alt: "profpic"
  },
  {
    src: "/img/twiiter/@rabbit3419.jpg", text: "rabbit3419", alt: "profpic"
  },
  {
    src: "/img/twiiter/@reiwa_now.jpg", text: "reiwa_now", alt: "profpic"
  },
  {
    src: "/img/twiiter/@R1Mueller.jpg", text: "R1Mueller", alt: "profpic"
  },
  {
    src: "/img/twiiter/@yassanxrp.jpg", text: "yassanxrp", alt: "profpic"
  },
  {
    src: "/img/twiiter/@ShiningMan0925.jpg", text: "ShiningMan0925 ", alt: "profpic"
  },
  {
    src: "/img/twiiter/@Robert15504839.jpg", text: "Robert15504839", alt: "profpic"
  },
  {
    src: "/img/twiiter/@Cuse1997.jpg", text: "cuse1997", alt: "profpic"
  },
  {
    src: "/img/twiiter/@Pay_day25.jpg", text: "pay_day25", alt: "profpic"
  },
  {
    src: "/img/twiiter/@chu3000.jpg", text: "chu3000", alt: "profpic"
  },
  {
    src: "/img/twiiter/@bym02130.jpg", text: "bym02130", alt: "profpic"
  },
  {
    src: "/img/twiiter/@Spikesuzy.jpg", text: "SpikeSuzy", alt: "profpic"
  },
  {
    src: "/img/twiiter/@KgobisiD.jpg", text: "KgobisiD", alt: "profpic"
  },
  {
    src: "/img/twiiter/@Khalednasro6.jpg", text: "Khalednasro6", alt: "profpic"
  },


];

export default SolidSupporters;