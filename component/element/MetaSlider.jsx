import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({


      iframe:{
        height:'900px',
        [theme.breakpoints.down("600")]: {
          height:'600px',
        },
      },


    titleroot:{
        width:'100%',
        position:'relative',
        backgroundColor:'#0C0617',
        
    },
   
    
    root:{
        backgroundColor:'#0C0617',
        paddingTop:'80px',
    },
    root2:{
        width:'90%',
   
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
        width:'110px',
        marginTop:'150px'
    },

    back:{

        backgroundImage:'url("/img/header/event box.png")',
        width:'500px',
        height: '530px',
        backgroundSize:'100% 100%',
        padding:'10px 10px 10px 10px',
        position:'relative'
    },
    back1:{

      backgroundImage:'url("/img/header/event box.png")',
      width:'500px',
      height: '530px',
      backgroundSize:'100% 100%',
      padding:'10px 10px 10px 10px',
      position:'relative'
  },
  
  title:{
  
    backgroundPosition: 'center center',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  }


}));

function MetaSlider() {
  const classes = useStyles();
  return (
    <div>
{/* 
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
          
            <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
        
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
          />
          
          <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
            <style>


          .slider_wrapper{
            position: absolute;
            left: -50%;
            width: 200%;
          }
          .slider_nav{
            position: relative;
            z-index: 9;
          }
          
          .slider_wrapper .swiper-slide{
            position: relative;
            height: auto;
            width: 300px;
         
            border-radius: 50px;
          }
          .slider_wrapper .swiper-slide img{
            width: 100%;
            border-radius: 35px;
            transition: border-radius .45s;
          }
          
          .slider_wrapper .swiper-slide .description{
            position: absolute;
            top: 100%; left: 0;
            height: 25%; width: 100%;
            margin-top: -5px;
            text-align: center;
            font-family: Arial;
            color: #fff;
            background: #00713d00;
            box-sizing: border-box;
            transition: all .45s;
          }
          .slider_wrapper .swiper-slide .description span{
            position: relative;
            display: block;
            font-size: 20px;
            top: calc(50% - 10px);
          }
          
          .slider_wrapper .swiper-wrapper > .swiper-slide{opacity: 0.2;}
          .slider_wrapper .swiper-slide.swiper-slide-next,
          .slider_wrapper .swiper-slide.swiper-slide-prev{opacity: 0.5;}
          .slider_wrapper .swiper-slide.swiper-slide-active{opacity: 1;}
          
          .slider_wrapper .swiper-wrapper > .swiper-slide .description{
            top: calc(100% - 100px);
            opacity: 0;
          }
          .slider_wrapper .swiper-slide.swiper-slide-active .description{
            top: 100%;
            opacity: 1;
          }
          .slider_wrapper .swiper-slide.swiper-slide-active img{border-radius: 35px 35px 0 0;}
          
          .slider_navigation {
            position: absolute;
            top: 20%;
            left: 0;
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 100%;
          }
          .slider_navigation .slider_nav {
            height: 30px;
            width: 30px;
            border: 0;
            cursor: pointer;
          }
          .slider_navigation .slider_nav:hover {
            color: #fff;
            background: rgba(0,0,0,0.0);
          }
          
          
          
          
          
          
          @import url('https://fonts.googleapis.com/css?family=Roboto');
          body {
              align-items: center;
              min-height: 250px;
              padding-top: 20px;
              font-weight: bold;
              background: #0C0617;
            overflow: hidden;
          }
          .infos {
            position: relative;
            left: 50%;
            top: 350px;
              width: 300px;
              text-align: center;
              font-family: 'Roboto', Arial;
              font-size: 14px;
              line-height: 16px;
              margin-top: 50px;
              color: #000;
            transform: translateX(-20%);
          }
          .infos a {
              color: #555;
              text-decoration: none;
          }
          .infos a:hover {color: #999;}

          .swiper-slide swiper-slide-visible{
            height:300px !important;
          }

    

      
      </style> 
         </head>
          <body>
            
          <div class="slider_wrapper">
  <div class="swiper-wrapper">
    <a  class='swiper-slide'>
      <img src="/img/metaslider/cofee shop 1.png" alt="" />
      <div class="description"><span>Bean there</span></div>
    </a>
    <a href="#" class='swiper-slide'>
      <img src="/img/metaslider/cofee shop 2.png" alt="" />
      <div class="description"><span>Haven Cafe</span></div>
    </a>
    <a href="#" class='swiper-slide'>
      <img src="/img/metaslider/flower garden.png" alt="" />
      <div class="description"><span>Moon Flower</span></div>
    </a>
    <a href="#" class='swiper-slide'>
      <img src="/img/metaslider/kiosk 1.png" alt="" />
      <div class="description"><span>Red Revolution</span></div>
    </a>
    <a href="#" class='swiper-slide'>
      <img src="/img/metaslider/kiosk 2.png" alt="" />
      <div class="description"><span>Jasper Wind</span></div>
    </a>
    <a href="#" class='swiper-slide'>
      <img src="/img/metaslider/kiosk 3.png" alt="" />
      <div class="description"><span>Sunrise</span></div>
    </a>
    <a href="#" class='swiper-slide'>
      <img src="/img/metaslider/kiosk 4.png" alt="" />
      <div class="description"><span>Rosette Nebula</span></div>
    </a>
    <a href="#" class='swiper-slide'>
      <img src="/img/metaslider/kiosk 5.png" alt="" />
      <div class="description"><span>Involute Square</span></div>
    </a>
    <a href="#" class='swiper-slide'>
      <img src="/img/metaslider/kiosk 6.png" alt="" />
      <div class="description"><span>Wheaten Shop</span></div>
    </a>
    <a href="#" class='swiper-slide'>
        <img src="/img/metaslider/kiosk 7.png" alt="" />
        <div class="description"><span>Sapphire Surge</span></div>
    </a>
    <a  class='swiper-slide'>
    <img src="/img/metaslider/kiosk 8.png" alt="" />
    <div class="description"><span>Ocean Algae</span></div>
  </a>
  <a href="#" class='swiper-slide'>
    <img src="/img/metaslider/kiosk 9.png" alt="" />
    <div class="description"><span>Blooming Spring</span></div>
  </a>
  <a href="#" class='swiper-slide'>
    <img src="/img/metaslider/kiosk 10.png" alt="" />
    <div class="description"><span>Zany Shop</span></div>
  </a>
  <a href="#" class='swiper-slide'>
    <img src="/img/metaslider/kiosk 11.png" alt="" />
    <div class="description"><span>Blue Signal</span></div>
  </a>
  <a href="#" class='swiper-slide'>
    <img src="/img/metaslider/kiosk 12.png" alt="" />
    <div class="description"><span>Green Gables</span></div>
  </a>
  <a href="#" class='swiper-slide'>
    <img src="/img/metaslider/kiosk 13.png" alt="" />
    <div class="description"><span>Berry</span></div>
  </a>
  <a href="#" class='swiper-slide'>
    <img src="/img/metaslider/kiosk 14.png" alt="" />
    <div class="description"><span>Purple Trapezoid</span></div>
  </a>
  <a href="#" class='swiper-slide'>
    <img src="/img/metaslider/kiosk 15.png" alt="" />
    <div class="description"><span>Viola</span></div>
  </a>
  <a href="#" class='swiper-slide'>
    <img src="/img/metaslider/kiosk 16.png" alt="" />
    <div class="description"><span>Ruby</span></div>
  </a>
  <a href="#" class='swiper-slide'>
      <img src="/img/metaslider/kiosk 17.png" alt="" />
      <div class="description"><span>Green Revolution</span></div>
  </a>
  <a  class='swiper-slide'>
  <img src="/img/metaslider/kiosk 18.png" alt="" />
  <div class="description"><span>test</span></div>
</a>
<a href="#" class='swiper-slide'>
  <img src="/img/metaslider/kiosk 19.png" alt="" />
  <div class="description"><span>test</span></div>
</a>
<a href="#" class='swiper-slide'>
  <img src="/img/metaslider/kiosk 20.png" alt="" />
  <div class="description"><span>Deep Sky</span></div>
</a>
<a href="#" class='swiper-slide'>
  <img src="/img/metaslider/kiosk 21.png" alt="" />
  <div class="description"><span>Sylvan</span></div>
</a>
<a href="#" class='swiper-slide'>
  <img src="/img/metaslider/kiosk 22.png" alt="" />
  <div class="description"><span>test</span></div>
</a>
<a href="#" class='swiper-slide'>
  <img src="/img/metaslider/kiosk 23.png" alt="" />
  <div class="description"><span>Carbon</span></div>
</a>
<a href="#" class='swiper-slide'>
  <img src="/img/metaslider/kiosk 24.png" alt="" />
  <div class="description"><span>Orion Nebula</span></div>
</a>
<a href="#" class='swiper-slide'>
  <img src="/img/metaslider/pool.png" alt="" />
  <div class="description"><span>Blue Bottle</span></div>
</a>
<a href="#" class='swiper-slide'>
  <img src="/img/metaslider/Roof garden coffeeshop.png" alt="" />
  <div class="description"><span>jadid</span></div>
</a>

<a href="#" class='swiper-slide'>
    <img src="/img/metaslider/sitting area.png" alt="" />
    <div class="description"><span>Sound & Fog</span></div>
</a>
<a href="#" class='swiper-slide'>
    <img src="/img/metaslider/sunshade.png" alt="" />
    <div class="description"><span>Haven Cafe</span></div>
</a>
  </div>
</div>
<div class="slider_navigation">
  <button class="slider_nav prev"><</button>
  <button class="slider_nav next">></button>

<script>
$(document).ready(function(){
  
    var swiper_slider = new Swiper('.slider_wrapper', {
      prevButton: '.slider_nav.prev',
      nextButton: '.slider_nav.next',
      slidesPerView: 9,
      centeredSlides: true,
      effect: 'coverflow',
      slidesOffsetBefore: 0,
      speed: 800,
      coverflow: {
        rotate: 0,
        stretch: -10,
        depth: 100,
        modifier: 3,
        slideShadows : false
      },
      breakpoints: {
        320:{slidesPerView: 10},
        640:{slidesPerView: 5},
        1024:{slidesPerView: 7}
      },
      simulateTouch: true
    });
    
    var nb_slides = swiper_slider.params.slidesPerView;
    swiper_slider.slideTo(Math.floor(nb_slides / 2));
    
    $('.swiper-wrapper a').on('click', function(e){
      e.preventDefault();
      console.log($(this).index());
      swiper_slider.slideTo($(this).index());
      return false;
    });
  });
  </script>


          </body>
          </html>
          `}
       /> */}

       
<iframe style={{  backgroundColor: '#0C0617',}}
className={classes.iframe}
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
          
            <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
        
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />




            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.5.8/swiper-bundle.css"/>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.5.8/swiper-bundle.min.js"></script>
            <style>

            @font-face {
              font-family: "HelveticaNow"; 
                src: url(https://assets.codepen.io/5286152/HelveticaNowText-Regular.ttf);
              }
              body{
                overflow:hidden
              }
              
              .introcontainer {
                width: 100%;
                height: 97%;
                margin: auto;
                overflow:hidden
              }
              .swiper-container {
                width: 97%;
                height: 100vh;
                background: #0C0617 ;
                overflow:hidden
              }
              .swiper-slide {
                width: 600px ;
                height: 100%;
                display: flex;
                margin: auto;
                align-items: center;
                justify-content: center;
                background: #0C0617;
                overflow:hidden
              }
              .cards {
                width: 600px;
                height: auto;
                display: flex;
                position: relative;
                align-items: center;
                justify-content: center;
              }
              .card img {
                object-fit: cover;
               
                border-radius: 5px;
                width: 500px;
                height: auto;
                min-height: 50vh;
                padding: 0;
                margin: 0;
              }
              
              .card.two img {
                filter: sepia(100%) hue-rotate(190deg) saturate(300%);
              }
              .card.three img {
                height: 50vh;
              }
              .card.four img {
                filter: invert(4%) sepia(75%) saturate(500%) hue-rotate(356deg) brightness(70%) contrast(103%);
              }
              .text {
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                bottom: 0px;
                max-width: 100%;
                width: 500px;
                
              }
              
              .title-box {
                display: flex;
                text-align: left;
                width:300px ;
                flex-direction: column;
                flex-wrap: nowrap;
                position: absolute;
                top: 120%;
                left: 30%;
                right: 0 !important;
                bottom: 50px;
                justify-content: center;
                color: #fff;
                opacity: 0;
                z-index: 15;
              }
              .title-box h1 {
                display: block;
                font-family: "Futura";
                font-weight: 700;
                line-height: normal;
                width: 300px;
                font-size: 3vmin;
              }
              .title-box p {
                font-family: "HelveticaNow";
                font-size: 2vmin;
                padding-top: 0;
                margin: 0;
                padding-left: 1%;
                width: 300px;
              }
              .card .title-box .seperator {
                height: 1px;
                width:10%;
                background: white;
                position: absolute;
                content: "";
                left: -15%;
                top: 50%;  
              }
              .swiper-slide .title-box{
                transform: translateX(-50%);
                transition: all .7s ease .3s;
              }
              .swiper-slide-active .title-box {
                transform: translateX(0%);
                opacity: 1;
                transition: all .7s ease;
                
              }
              
              .swiper-scrollbar {
                background: white;
              }
              
              .swiper-slide .card img {
                transition: filter .7s ease;
                filter: grayscale(100%);
                transform:scale(0.8,0.8);
                transition: all .7s ease;
              }
              .swiper-slide-active .card img {
                filter: grayscale(0%) brightness(60%);
                transform:scale(1.4,1.4);
                transition: all .7s ease;
              }
              
              .swiper-pagination-bullet-active {
                background: white !important;
                width: 25px !important;
                height: 5px !important;
                border-radius: 0 !important;
              }
              .swiper-pagination-bullet {
                background: whitesmoke !important;
                width: 25px !important;
                height: 5px !important;
                border-radius: 0!important;
              }
              .swiper-arrows {
                width: 100%;
                height: 60px;
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                bottom: 20%;
              }
              .swiper-button-prev,
              .swiper-button-next {
                width: 60px !important;
                height: 60px;
                background-image: none !important;
                display: flex;
                align-items: center;
                justify-content: center;
                top: 0;
                bottom: 0;
                margin: 0;
                border-radius: 5px;
                transition: all 0.3s ease;
              }
              .swiper-button-prev {
                left: 0px !important;
                right: auto !important;
                background-color: rgba(255, 255, 255, 0.7);
              }
              .swiper-button-next {
                right: 0px !important;
                background-color: rgba(255, 255, 255, 0.8);
              }
              .swiper-button-prev span,
              .swiper-button-next span {
                width: 7px;
                height: 7px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: transparent;
                position: absolute;
                border: solid 2px #666;
                border-left: 0;
                border-bottom: 0;
                transition: all 0.1s ease;
              }
              .swiper-button-prev span {
                transform: rotate(-135deg);
                left: 49%;
              }
              .swiper-button-next span {
                transform: rotate(45deg);
                right: 49%;
              }
              .swiper-button-prev:hover span,
              .swiper-button-next:hover span {
                width: 5px;
                height: 5px;
              }
              .swiper-button-prev:after,
              .swiper-button-next:after {
                width: 0px;
                height: inherit;
                content: "";
                position: absolute;
                border-radius: 5px;
                background-color: white;
                transition: all 0.4s ease-in-out;
                z-index: -1;
                opacity: 0.8;
              }
              .swiper-button-prev:after {
                right: 0;
              }
              .swiper-button-next:after {
                left: 0;
              }
              .swiper-button-prev:hover:after,
              .swiper-button-next:hover:after {
                width: inherit;
              }
              .swiper-button-disabled {
                opacity: 1 !important;
              }
              .swiper-button-disabled.swiper-button-prev span,
              .swiper-button-disabled.swiper-button-next span {
                opacity: 0.2;
              }
              @media screen and (max-width: 1500px) {
                .card img {
                  object-fit: cover;
                 
                  border-radius: 5px;
                  width: 500px;
                  height: auto;
                  min-height: 50vh;
                  padding: 0;
                  margin: 0;
                }
                .swiper-slide .card img {
                  transition: filter .7s ease;
                  filter: grayscale(100%);
                  transform:scale(0.6,0.6);
                  transition: all .7s ease;
                }
                .swiper-slide-active .card img {
                  filter: grayscale(0%) brightness(60%);
                  transform:scale(1.1,1.1);
                  transition: all .7s ease;
                }
              }
              @media screen and (max-width: 1200px) {
                .swiper-slide {
                  width: 400px ;
                  height: 100%;
                  display: flex;
                  margin: auto;
                  align-items: center;
                  justify-content: center;
                  background: #0C0617;
                  overflow:hidden
                }
                .cards {
                  width: 400px;
                  height: auto;
                  display: flex;
                  position: relative;
                  align-items: center;
                  justify-content: center;
                }
                .card img {
                  object-fit: cover;
                 
                  border-radius: 5px;
                  width: 500px !important;
                  height: auto;
             
                  padding: 0;
                  margin: 0;
                }
                .swiper-slide .card img {
                  transition: filter .7s ease;
                  filter: grayscale(100%);
                  transform:scale(0.6,0.6);
                  transition: all .7s ease;
                }
                .swiper-slide-active .card img {
                  filter: grayscale(0%) brightness(60%);
                  transform:scale(1,1);
                  transition: all .7s ease;
                }
              }
      
              @media screen and (max-width: 1000px) {
                .swiper-pagination-bullet-active {
                  background: white !important;
                  width: 25px !important;
                  height: 5px !important;
                  border-radius: 0 !important;
                  display:none
                }
                .swiper-pagination-bullet {
                  background: whitesmoke !important;
                  width: 25px !important;
                  height: 5px !important;
                  border-radius: 0!important;
                  display:none
                }
              }
              @media screen and (max-width: 900px) {
                      
              .title-box {
                display: flex;
                text-align: left;
                width:300px ;
                flex-direction: column;
                flex-wrap: nowrap;
                position: absolute;
                top: 70%;
                left: 35%;
                right: 0 !important;
                bottom: 50px;
                justify-content: center;
                color: #fff;
                opacity: 0;
                z-index: 15;
                font-size:40px
              }
                .swiper-arrows {
                  width: 100%;
                  height: 50px;
                  position: absolute;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  bottom: 50%;
                }
                .swiper-button-prev,
                .swiper-button-next {
                  width: 50px !important;
                  height: 50px;
                  background-image: none !important;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  top: 0;
                  bottom: 0;
                  margin: 0;
                  border-radius: 5px;
                  transition: all 0.3s ease;
                }
                .card img {
                  object-fit: cover;
                 
                  border-radius: 5px;
                  width: 450px;
                  height: auto;
             
                  padding: 0;
                  margin: 0;
                }
                .swiper-slide .card img {
                  transition: filter .7s ease;
                  filter: grayscale(100%);
                  transform:scale(0.4,0.4);
                  transition: all .7s ease;
                }
                .swiper-slide-active .card img {
                  filter: grayscale(0%) brightness(60%);
                  transform:scale(0.8,0.8);
                  transition: all .7s ease;
                }
              }
              @media screen and (max-width: 700px) {
                .card img {
                  object-fit: cover;
                 
                  border-radius: 5px;
                  width: 400px;
                  height: auto;
             
                  padding: 0;
                  margin: 0;
                }
                .swiper-slide .card img {
                  transition: filter .7s ease;
                  filter: grayscale(100%);
                  transform:scale(0.2,0.2);
                  transition: all .7s ease;
                }
                .swiper-slide-active .card img {
                  filter: grayscale(0%) brightness(60%);
                  transform:scale(0.6,0.6);
                  transition: all .7s ease;
                }
              }
              @media screen and (max-width: 700px) {
                .card img {
                  object-fit: cover;
                 
                  border-radius: 5px;
                  width: 350px;
                  height: auto;
             
                  padding: 0;
                  margin: 0;
                }
                .swiper-slide .card img {
                  transition: filter .7s ease;
                  filter: grayscale(100%);
                  transform:scale(0.1,0.1);
                  transition: all .7s ease;
                }
                .swiper-slide-active .card img {
                  filter: grayscale(0%) brightness(60%);
                  transform:scale(0.4,0.4);
                  transition: all .7s ease;
                }
              }
              @media screen and (max-width: 512px) {
                .swiper-arrows {
                  width: 100%;
                  height: 30px;
                  position: absolute;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  bottom: 50%;
                }
                .swiper-button-prev,
                .swiper-button-next {
                  width: 30px !important;
                  height: 30px;
                  background-image: none !important;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  top: 0;
                  bottom: 0;
                  margin: 0;
                  border-radius: 5px;
                  transition: all 0.3s ease;
                }
                .swiper-button-prev,
                .swiper-button-next {
                  width: 60px;
                  height: 60px;
                  bottom: 0;
                }
            
                .swiper-button-prev {
                  right: 60px;
                }
                .swiper-button-prev span {
                  left: 45%;
                }
                .swiper-button-next span {
                  right: 45%;
                }
              }
              .swiper-button-next::after, .swiper-container-rtl .swiper-button-prev::after {
                content: "attr" !important;
              }
              .swiper-button-prev::after, .swiper-container-rtl .swiper-button-prev::after {
               content: "attr" !important;
              }
    

      
      </style> 
         </head>
          <body>
            
          <div class="introcontainer">
          <!-- Slider main container -->
          <div class="swiper-container">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
              <!-- Slides -->
              <div class="swiper-slide">
                <div class="cards">
                  <div class="card ong">
                    <img src="/img/metaslider/cofee shop 1.png"/>
                    <div class="text">
                      </div>
                  <div class="title-box">
                    <h1>Bean There</h1>
                  
                    <div class="seperator"></div>
                  </div>
                    </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="cards">
                  <div class="card two">
                    <img src="/img/metaslider/cofee shop 2.png" alt="" />
                  <div class="text">
                      </div>
                  <div class="title-box">
                    <h1>Haven Cafe</h1>
                  
                    <div class="seperator"></div>
                  </div>
                </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="cards">
                  <div class="card three">
                    <img src="/img/metaslider/flower garden.png" alt="" />
                    <div class="text">
                      </div>
           
                  <div class="title-box">
                    <h1>Moon Flower</h1>
                  
                    <div class="seperator"></div>
                  </div>
                </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="cards">
                  <div class="card four">
                    <img src="/img/metaslider/kiosk 1.png" alt="" />
                    <div class="text">
                      </div>
        
                  <div class="title-box">
                    <h1>Red Revoloution</h1>
                  
                    <div class="seperator"></div>
                  </div>
                </div>
                </div>
              </div>
              <div class="swiper-slide">
              <div class="cards">
                <div class="card ong">
                  <img src="/img/metaslider/kiosk 2.png"/>
                  <div class="text">
                    </div>
                <div class="title-box">
                  <h1>Jasper Wind</h1>
            
                  <div class="seperator"></div>
                </div>
                  </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="cards">
                <div class="card two">
                  <img src="/img/metaslider/kiosk 3.png" alt="" />
                <div class="text">
                    </div>
                <div class="title-box">
                  <h1>Sunrise</h1>
                
                  <div class="seperator"></div>
                </div>
              </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="cards">
                <div class="card three">
                  <img src="/img/metaslider/kiosk 4.png" alt="" />
                  <div class="text">
                    </div>
         
                <div class="title-box">
                  <h1>Rossete Nebula</h1>
                  <div class="seperator"></div>
                </div>
              </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="cards">
                <div class="card four">
                  <img src="/img/metaslider/kiosk 5.png" alt="" />
                  <div class="text">
                    </div>
      
                <div class="title-box">
                  <h1>Involute Square</h1>
              
                  <div class="seperator"></div>
                </div>
              </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="cards">
                <div class="card ong">
                  <img src="/img/metaslider/kiosk 6.png"/>
                  <div class="text">
                    </div>
                <div class="title-box">
                  <h1>Wheaten Shop</h1>
              
                  <div class="seperator"></div>
                </div>
                  </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="cards">
                <div class="card two">
                  <img src="/img/metaslider/kiosk 7.png" alt="" />
                <div class="text">
                    </div>
                <div class="title-box">
                  <h1>Sapphire Surge</h1>
                  
                  <div class="seperator"></div>
                </div>
              </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="cards">
                <div class="card three">
                  <img src="/img/metaslider/kiosk 8.png" alt="" />
                  <div class="text">
                    </div>
         
                <div class="title-box">
                  <h1>Ocean Aglae</h1>
               
                  <div class="seperator"></div>
                </div>
              </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="cards">
                <div class="card four">
                  <img src="/img/metaslider/kiosk 9.png" alt="" />
                  <div class="text">
                    </div>
      
                <div class="title-box">
                  <h1>Blooming Spring</h1>
                 
                  <div class="seperator"></div>
                </div>
              </div>
              </div>
            </div>
            <div class="swiper-slide">
            <div class="cards">
              <div class="card ong">
                <img src="/img/metaslider/kiosk 10.png"/>
                <div class="text">
                  </div>
              <div class="title-box">
                <h1>Zany Shop</h1>
 
                <div class="seperator"></div>
              </div>
                </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="cards">
              <div class="card two">
                <img src="/img/metaslider/kiosk 11.png" alt="" />
              <div class="text">
                  </div>
              <div class="title-box">
                <h1>Blue Signal</h1>
                
                <div class="seperator"></div>
              </div>
            </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="cards">
              <div class="card three">
                <img src="/img/metaslider/kiosk 12.png" alt="" />
                <div class="text">
                  </div>
       
              <div class="title-box">
                <h1>Green Gables</h1>
          
                <div class="seperator"></div>
              </div>
            </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="cards">
              <div class="card four">
                <img src="/img/metaslider/kiosk 13.png" alt="" />
                <div class="text">
                  </div>
    
              <div class="title-box">
                <h1>Berry</h1>
             
                <div class="seperator"></div>
              </div>
            </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="cards">
              <div class="card ong">
                <img src="/img/metaslider/kiosk 14.png"/>
                <div class="text">
                  </div>
              <div class="title-box">
                <h1>Purple Trapezoid</h1>
   
                <div class="seperator"></div>
              </div>
                </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="cards">
              <div class="card two">
                <img src="/img/metaslider/kiosk 15.png" alt="" />
              <div class="text">
                  </div>
              <div class="title-box">
                <h1>Viola</h1>
         
                <div class="seperator"></div>
              </div>
            </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="cards">
              <div class="card three">
                <img src="/img/metaslider/kiosk 16.png" alt="" />
                <div class="text">
                  </div>
       
              <div class="title-box">
                <h1>Ruby</h1>
        
                <div class="seperator"></div>
              </div>
            </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="cards">
              <div class="card four">
                <img src="/img/metaslider/kiosk 17.png" alt="" />
                <div class="text">
                  </div>
    
              <div class="title-box">
                <h1>Green Revolution</h1>
               
                <div class="seperator"></div>
              </div>
            </div>
            </div>
          </div>
          <div class="swiper-slide">
          <div class="cards">
            <div class="card ong">
              <img src="/img/metaslider/kiosk 18.png"/>
              <div class="text">
                </div>
            <div class="title-box">
              <h1>CREATIVE COLLECTIVE.</h1>

              <div class="seperator"></div>
            </div>
              </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="cards">
            <div class="card two">
              <img src="/img/metaslider/kiosk 19.png" alt="" />
            <div class="text">
                </div>
            <div class="title-box">
              <h1>FOR ARTISTS.</h1>
              
              <div class="seperator"></div>
            </div>
          </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="cards">
            <div class="card three">
              <img src="/img/metaslider/kiosk 20.png" alt="" />
              <div class="text">
                </div>
     
            <div class="title-box">
              <h1>Deep Sky</h1>
          
              <div class="seperator"></div>
            </div>
          </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="cards">
            <div class="card four">
              <img src="/img/metaslider/kiosk 21.png" alt="" />
              <div class="text">
                </div>
  
            <div class="title-box">
              <h1>Sylvan</h1>
           
              <div class="seperator"></div>
            </div>
          </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="cards">
            <div class="card ong">
              <img src="/img/metaslider/kiosk 22.png"/>
              <div class="text">
                </div>
            <div class="title-box">
              <h1>CREATIVE COLLECTIVE.</h1>
           
              <div class="seperator"></div>
            </div>
              </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="cards">
            <div class="card two">
              <img src="/img/metaslider/kiosk 23.png" alt="" />
            <div class="text">
                </div>
            <div class="title-box">
              <h1>Carbon</h1>
           
              <div class="seperator"></div>
            </div>
          </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="cards">
            <div class="card three">
              <img src="/img/metaslider/kiosk 24.png" alt="" />
              <div class="text">
                </div>
     
            <div class="title-box">
              <h1>Orion Nebula</h1>
             
              <div class="seperator"></div>
            </div>
          </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="cards">
            <div class="card four">
              <img src="/img/metaslider/pool.png" alt="" />
              <div class="text">
                </div>
  
            <div class="title-box">
              <h1>Blue Bottle</h1>
         
              <div class="seperator"></div>
            </div>
          </div>
          </div>
        </div>
        <div class="swiper-slide">
        <div class="cards">
          <div class="card ong">
            <img src="/img/metaslider/sitting area.png"/>
            <div class="text">
              </div>
          <div class="title-box">
            <h1>Sound & Fog</h1>
         
            <div class="seperator"></div>
          </div>
            </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="cards">
          <div class="card two">
            <img  src="/img/metaslider/Roof garden coffeeshop.png" alt="" />
          <div class="text">
              </div>
          <div class="title-box">
            <h1>FOR ARTISTS.</h1>
        
            <div class="seperator"></div>
          </div>
        </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="cards">
          <div class="card three">
            <img src="/img/metaslider/sunshade.png"  alt="" />
            <div class="text">
              </div>
   
          <div class="title-box">
            <h1>Haven Cafe</h1>
          
            <div class="seperator"></div>
          </div>
        </div>
        </div>
      </div>

            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>
        
            <!-- If we need navigation buttons -->
             <div class="swiper-arrows">
            <div class="swiper-button-prev"><span></span></div>
            <div class="swiper-button-next"><span></span></div>
          </div>
        
            <!-- If we need scrollbar -->
          </div>
        </div>

  <script>
  const swiper = new Swiper('.swiper-container', {
   speed: 500,
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
   centeredSlides: true,
   paginationClickable: true,
   watchSlidesProgress: true,
    loop: true,
   slidesPerView: 2,
   spaceBetween: 30,
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 });
 </script>

          </body>
          </html>
          `}
       />



    </div>
  )
}

export default MetaSlider