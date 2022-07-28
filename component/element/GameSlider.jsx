import React from 'react';
import Script from 'next/script';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    root:{
        backgroundImage:'url("/img/game/gamehero.jpg")',
        backgroundSize:'100% 100%',
        height:'120%',
        backgroundPosition: 'center center',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    root2:{
        width:'90%',
    },
    back1:{
        marginTop:'100px',
        backgroundImage:'url("/img/aboutus/about us_box.png")',
        width:'250px',
        height: '270px',
        backgroundSize:'100% 100%',
        padding:'10px 26px 10px 26px',
        position:'relative',
        margin:'30px'
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
      backgroundImage:'url("/img/aboutus/about us_box.png")',
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

    }
     

}));

function GameSlider() {
    const classes = useStyles();
  return (
    <div>
                      <iframe style={{height:'1000px',  backgroundColor: '#1C224600',}}
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
          <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js" integrity="sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
          <style>

  
          @font-face {
            font-family:robo;
            src: url('/fonts/Roboto-Regular.ttf');
          }
          html,body{
            background-color: #0C061700;
          }


          .et-slide {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            text-align: center;
            margin-top:50px;
            border-radius:20px;
            background-color: #0C061700;
          }
 
          .et-hero-tab-slider {
            position: absolute;
            bottom: 0;
            width: 0;
            height: 6px;
            background: #fffefe0e;
            transition: left 0.3s ease;
            padding:50px 50px 50px 50px;
          }
          
          
          .cin{
            display: flex;
          }
          .cin img{
            width: 50%;
            border-radius:16px
          }
          .img1{
            
          }
          .img2{ 
            position:absoloute;
            top:50px;
            right: -80px;
            width: 150px;
          }
          .cin .cpara{
            margin: 0px 20px;
            width: 40%;
            text-align: left;
          }
          .cin .cpara h2{
            color: #fff;
          }
          .cin .cpara  p{
            margin-top:35px;
            text-align: left;
            color: #fff;
            font-size:24px
          }
          .baseforslider{
            background: #fffefe0e;
            min-height: 50vh;
            width: 95%;
            margin-top: 0px;
            padding:60px 20px 20px 20px;
            border-radius:20px;
            overflow-x:hidden
          }
          .carousel-control-prev{
            top:-550px;
            left: -80px;
            position:absoloute;
       
          }
          .carousel-control-next{
            top:-550px;
            right: -80px;
            position:absoloute;
          }
          
          @media (max-width: 1800px) {
            .carousel-control-prev{
              top:-450px;
              left: -80px;
              position:absoloute;
         
            }
            .carousel-control-next{
              top:-450px;
              right: -80px;
              position:absoloute;
            }
          } 
          @media (max-width: 1317px) {
            .carousel-control-prev{
              top:-350px;
              left: -40px;
              position:absoloute;
         
            }
            .carousel-control-next{
              top:-350px;
              right: -40px;
              position:absoloute;
            }
            .cin img{
              width: 57%;
              border-radius:16px
            }
            .cin .cpara{
              margin: 0px 20px;
              width: 33%;
              text-align: left;
            }
            .cin .cpara  p{
              margin-top:30px;
              text-align: left;
              color: #fff;
              font-size:22px
            }
          } 
          @media (max-width: 1200px) {
            .carousel-control-prev{
              top:-200px;
              left: -40px;
              position:absoloute;
         
            }
            .carousel-control-next{
              top:-200px;
              right: -40px;
              position:absoloute;
            }
            .cin{
              display: block;
            }
            .cin img{
              width: 100%;
              height:50%;
            }
            .cin .cpara{
              margin: 0px 0px;
              width: 100%;
              text-align: left;
            }
            .cin .cpara  p{
              margin-top:10px;
              text-align: left;
              color: #fff;
              font-size:22px
            }
            .baseforslider{
              background: #787878;
              min-height: 50vh;
              width: 95%;
              margin-top: 0px;
              padding:20px 20px 20px 20px;
              border-radius:20px;
              overflow-x:hidden
            }
          } 
          
        
          @media (max-width: 700px){
 
            .carousel-control-prev{
              top:-200px;
              left: -20px;
              position:absoloute;
         
            }
            .carousel-control-next{
              top:-200px;
              right: -20px;
              position:absoloute;
            }
            .cin{
              display: block;
            }
            .cin img{
              width: 100%;
              height:50%;
            }
            .cin .cpara{
              margin: 0px 0px;
              width: 100%;
              text-align: left;
            }
            .cin .cpara  p{
              margin-top:10px;
              text-align: left;
              color: #fff;
              font-size:19px
            }
            .baseforslider{
              background: #787878;
              min-height: 50vh;
              width: 95%;
              margin-top: 0px;
              padding:10px 10px 10px 10px;
              border-radius:20px;
              overflow-x:hidden
            }

          
          }
          @media (max-width: 420px){
 
            .carousel-control-prev{
              top:-200px;
              left: -20px;
              position:absoloute;
         
            }
            .carousel-control-next{
              top:-200px;
              right: -20px;
              position:absoloute;
            }
            .cin{
              display: block;
            }
            .cin img{
              width: 100%;
              height:50%;
              border-radius:13px
            }
            .cin .cpara{
              margin: 0px 0px;
              width: 100%;
              text-align: left;
            }
            .cin .cpara  p{
              margin-top:10px;
              text-align: left;
              color: #fff;
              font-size:17px
            }
            .baseforslider{
              background: #787878;
              min-height: 50vh;
              width: 100%;
              margin-top: 0px;
              padding:10px 10px 10px 10px;
              border-radius:16px
            }

          
          }
          
    

      
      </style> 
         </head>
          <body>
            
          <div style="margin-top: 10px;" class="div"  id="root">
          
                    <section class="et-slide" id="tab3">

                
                    <div class="baseforslider">
                        <div id="carouselExampleControls" class="carousel slide p-5" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <div class="cin">
                        <img class="img1" src="/img/game/screen1.png">
                        <div class="cpara">
                        <p>
                        Opening LUCRETIUS.GAMES, the user will face the Log-in page, LUC deposit address needed.
                        However, if you use one of XRPL wallet addresses such as XUMM or D'CENT, please enter 0 instead of tag.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <div class="cin">
                        <img src="/img/game/screen2.jpg">
                        <div class="cpara">
                     
                        <p>
                        By playing web mini-games players earn scores, after receiving 20 scores they could open the first chest winning 1 $LUC token  and the key  for other chests’ area. The same chest would open 4 more times allocating 4 more $LUC tokens .
                        <br/>
                        Billboards placed on the platform contain Lucretius’ web information. Drive the car on “read more” and press Enter  to see billboards’ contents in a full screen mode.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div class="carousel-item">
                   <div class="cin">
                        <img src="/img/game/screen3.jpg">
                        <div class="cpara">
                  
                        <p>
                        Players will start the journey on the Home page. Where they can see leading bottoms which help to earn scores easier. For instance, pressing the Space key functions as a hand break and R will bring the car back to its first place. Likewise, if the car got stuck somewhere or turned upside-down, the problem will be solved by pressing the J & K keys.
                        </p>
                        </div>
                    </div>   
                  </div>
                  <div class="carousel-item">
                  <div class="cin">
                      <img src="/img/game/screen4.jpg">
                      <div class="cpara">
                    
                      <p>
                      The 4 mini games of the map are:
                      <br/>
                      🟣Acrobatic jump


                      </p>
                      </div>
                  </div>
                  </div>
                  <div class="carousel-item">
                  <div class="cin">
                      <img src="/img/game/screen5.jpg">
                      <div class="cpara">
                    
                      <p>
                      Each successful jump will give you 3 scores.
                      <br/>
                      🟣Free kick
                      </p>
                      </div>
                  </div>
                  </div>
                  <div class="carousel-item">
                  <div class="cin">
                      <img src="/img/game/screen6.jpg">
                      <div class="cpara">
                    
                      <p>
                      Each goal will give you 1 score. Don’t forget to avoid hitting the obstacles otherwise no scores will be given.
                      <br/>
                      🟣Bowling
                      </p>
                      </div>
                  </div>
                  </div>
                  <div class="carousel-item">
                  <div class="cin">
                      <img src="/img/game/screen7.jpg">
                      <div class="cpara">
                    
                      <p>
                      The number of collected score is equal to the number of fallen bowlings.
                      <br/>
                      🟣Cross obstacles
                      </p>
                      </div>
                  </div>
                  </div>
                  
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div> 
           
                    </div>
                   
                    </section>

          </div>





          <script>
          window.onscroll = function() {scrollFunction()};

          function scrollFunction() {
           
          // When the user scrolls down 500px from the top of the document, show the button
             if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
              document.getElementById("myBtn").style.display = "block";
            } else {
              document.getElementById("myBtn").style.display = "none"; 
            
            }
          
          }
          // When the user clicks on the button, scroll to the top of the document
          function topFunction() {
           window.scrollTo({top: 0});
          }
          
           class StickyNavigation {
            
            constructor() {
              this.currentId = null;
              this.currentTab = null;
              this.tabContainerHeight = 70;
              let self = this;
              $('.et-hero-tab').click(function() { 
                self.onTabClick(event, $(this)); 
              });
              $(window).scroll(() => { this.onScroll(); });
              $(window).resize(() => { this.onResize(); });
            }
            
            onTabClick(event, element) {
              event.preventDefault();
              let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
              $('html, body').animate({ scrollTop: scrollTop }, 600);
            }
            
            onScroll() {
              this.checkTabContainerPosition();
              this.findCurrentTabSelector();
            }
            
            onResize() {
              if(this.currentId) {
                this.setSliderCss();
              }
            }
            
            checkTabContainerPosition() {
              let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
              if($(window).scrollTop() > offset) {
                $('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
              } 
              else {
                $('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
              }
            }
            
            findCurrentTabSelector(element) {
              let newCurrentId;
              let newCurrentTab;
              let self = this;
              $('.et-hero-tab').each(function() {
                let id = $(this).attr('href');
                let offsetTop = $(id).offset().top - self.tabContainerHeight;
                let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
                if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
                  newCurrentId = id;
                  newCurrentTab = $(this);
                }
              });
              if(this.currentId != newCurrentId || this.currentId === null) {
                this.currentId = newCurrentId;
                this.currentTab = newCurrentTab;
                this.setSliderCss();
              }
            }
            
            setSliderCss() {
              let width = 0;
              let left = 0;
              if(this.currentTab) {
                width = this.currentTab.css('width');
                left = this.currentTab.offset().left;
              }
              $('.et-hero-tab-slider').css('width', width);
              $('.et-hero-tab-slider').css('left', left);
            }
            
          }
          
          new StickyNavigation();
          </script>
          </body>
          </html>
          `}
       />
    </div>
  );
}

export default GameSlider;
