import { Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Script from 'next/script';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import axios from "axios";
import { useForm } from "react-hook-form";
import swal from 'sweetalert2';

const useStyles = makeStyles((theme) => ({

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
    logo:{
        width:'110px',
        float:'left',
        marginBottom:'40px',
        [theme.breakpoints.down("600")]: {
            width:'80px',
          },
          [theme.breakpoints.down("386")]: {
            width:'52px',
          },
    },
    luctext:{
        color:'white',
        float:'left',
        fontSize:'35px',
        marginTop:'35px',
        marginLeft:'20px',
        letterSpacing: '10px !important',
        [theme.breakpoints.down("1001")]: {
            fontSize:'29px',
            letterSpacing: '9px !important',
          },
          [theme.breakpoints.down("600")]: {
            fontSize:'25px',
            letterSpacing: '9px !important',
            marginTop:'23px',
          },
          [theme.breakpoints.down("386")]: {
            fontSize:'21px',
            letterSpacing: '5px !important',
            marginTop:'16px',
          },
    },
    Divider:{
        color:'white'
    },


}));


function Footer() {
    const classes = useStyles();

    const { register, handleSubmit } = useForm();
  

    const onSubmit = (data) => {

      if(document.getElementById("input1").value === ""){
        swal.fire({
          icon: 'error',
          text: 'Please fill the boxes'
        })
      }else if(document.getElementById("input2").value === ""){
        swal.fire({
          icon: 'error',
          text: 'Please fill the boxes'
        })
     
      }else if(document.getElementById("input3").value === ""){
        
        swal.fire({
          icon: 'error',
          text: 'Please fill the boxes'
        })
      }
      else{
          // console.log(data)
        axios.get(`http://service.lucretius.network/contact/contactUs/${data.email}/${data.Name}/${data.Message}`).then((response) => {
      
          swal.fire({
            icon: 'success',
            text: 'Your message has been send'
          })
        
        });
        
      }
      


    
    };
   
  return (
    <div id="root44" className={classes.root}>
        <div className={classes.root2}>
            <div className={classes.root3}>
                <Grid container spacing={3}>
                <Grid className={classes.imgroot2} item xs={12} sm={12} lg={12} xl={12}>
                    <img  className={classes.logo}  src='/img/exchange/logoo.png'/>
                    <Typography className={classes.luctext} >
                       <b>LUCRETIUS</b> 
                    </Typography>
                    <Divider  className={classes.Divider}/>
                    <br/><br/><br/><br/><br/>
                </Grid>
           
                <Grid item xs={6} sm={6} lg={3} xl={2}>
                        <Typography className="footertitle"><a ><b>Docs</b></a></Typography>
                        <Typography className="footerlink"><a href="#"> Roadmap</a></Typography>
                        <Typography className="footerlink"><a href="/PrivacyPolicy">Privacy Policy</a></Typography>
                        <Typography className="footerlink"><a href="/TermOfService">Term of Service</a></Typography>
                </Grid>
                <Grid item xs={6} sm={6} lg={3} xl={2}>
                        <Typography className="footertitle"><a><b>Feeds</b></a></Typography>
                        <Typography className="footerlink"><a href="/LucBuzz">Luc Buzz</a></Typography>
                        <Typography className="footerlink"><a href="/GoldenPiggy">Golden Piggy "36"</a></Typography>
                        <Typography className="footerlink"><a href="/BurnToEarn">Burn To Earn "25"</a></Typography>
                        <Typography className="footerlink"><a href="/BMP">BMP List</a></Typography>
                </Grid>
                
                <Grid item xs={12} sm={12} lg={6} xl={8}>
                    <p className="modaltext">The Lucretius project is an exciting new metaverse with lots of unique features. In addition to a compelling plot, the game is loaded with lots of activities for players to engage in. an example of these fantastic features is the in-game cross-chain NFT marketplace that allows players to trade their NFTs across various blockchain networks.</p>  
                    <div className="modalsocialmedia">
                              <a href="https://t.me/LucretiusNet"><img className="headersocialicon" src='/img/header/telegram.svg'/></a> 
                              <a href="https://www.youtube.com/channel/UC4gZGGIPaAprfC2vH_-r9cw"><img className="headersocialicon" src='/img/header/icon_youtube.svg'/></a>  
                              <a href='https://twitter.com/LucretiusNet'><img className="headersocialicon" src='/img/header/twitter.svg'/></a>    
                              <a href="https://discord.com/invite/mBErZap2Zr"><img className="headersocialicon" src='/img/header/discord.svg'/></a>   
                    </div> 

                    <button className="footergetintouch" id="sub44">
                      <b>Get In Touch  <ArrowRightAltIcon className="footergetintouchicon"/></b> 
                    </button>

                    <div className="modal-parent" id="modal-parent44">
                      <div className="modalsub">
                      <p className="modalsubtitle">Get In Touch </p> 
                      <p className="modalsubtitle2">We Are Here To Solve Your Problems, Tell Us About It.</p> 
                      <form  onSubmit={handleSubmit(onSubmit)}>
                      <Grid container spacing={1}> 
                          <Grid item xs={12} sm={12} lg={6} xl={6}>
                          <p className="modalsublable">Name :</p>
                          <input id='input1'  {...register("Name")} className="modalsubinputfooter"/>
                          </Grid>
                          <Grid item xs={12} sm={12} lg={6} xl={6}>
                          <p className="modalsublable">E-mail Address :</p>
                          <input className="modalsubinputfooter"
                              {...register("email")}
                              type="email"
                              id='input2'
                          />
                          </Grid>
                          <Grid item xs={12} sm={12} lg={12} xl={12}>
                          <p className="modalsublable">Your Message :</p>
                          <textarea className="modalsubinputfooter"  name="w3review" rows="4" cols="30"
                                       type="text"
                                       {...register("Message")}
                                       id='input3'
                           />
                          </Grid>
                          <input type="submit" value="send" className="modalsubinputsubmit"/>
                      </Grid>
                      </form>   
                        <span className="X" id="X44">&times;</span>
                      </div>
                    </div>
                
                   </Grid>

                
                </Grid> 
                <br/><br/><br/><br/><br/><br/><br/>
            </div>
        </div>
        <Script
              id="stripe-jsaoxowwmnmcxz"
              src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
              onLoad={() => {
                
                let $ = document
                let modalBtn = $.querySelector("#sub44")
                let modal = $.querySelector("#modal-parent44")
                let close = $.querySelector("#X44")
                let section = $.querySelector("#root44")
                
              
                
            
                modalBtn.onclick = function() {
                  modal.style.display = "inline";
                }
                
                
                close.onclick = function() {
                  modal.style.display = "none";
                  section.style.filter = "blur(0px)";
                }
                
                window.addEventListener("keydown",closemodalKeydown)
                function closemodalKeydown (e){
                  if(e.keyCode === 27){
                    closeModal()
                  }
                }

              }}
            />
    </div>
  );
}


export default Footer;
