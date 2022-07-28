import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Script from 'next/script'

function AvatarSlider() {
  return (
    <div id="root">
      <>
    {/* <iframe className="avatarframe" style={{zIndex:'1000',overflow:'hidden' }}
      id="xxx"
      title="xxx"
      width="100%"
      height="900px"
      frameBorder="value"
      allowTransparency
      srcDoc={`
          <!doctype html>
          <html>
          <head>
              <title>Chat bot</title>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width">
              <link rel="shortcut icon" type="image/x-icon" href="https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico">
              <link rel="mask-icon" href="https://cpwebassets.codepen.io/assets/favicon/logo-pin-8f3771b1072e3c38bd662872f6b673a722f4b3ca2421637d5596661b4e2132cc.svg" color="#111">
              <link rel="canonical" href="https://codepen.io/aybukeceylan/pen/RwrRPoO?editors=0110">
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
              <script src="https://cpwebassets.codepen.io/assets/editor/iframe/iframeConsoleRunner-7549a40147ccd0ba0a6b5373d87e770e49bb4689f1c2dc30cccc7463f207f997.js"></script>
              <script src="https://cpwebassets.codepen.io/assets/editor/iframe/iframeRefreshCSS-4793b73c6332f7f14a9b6bba5d5e62748e9d1bd0b5c52d7af6376f3d1c625d7e.js"></script>
              <script src="https://cpwebassets.codepen.io/assets/editor/iframe/iframeRuntimeErrors-4f205f2c14e769b448bcf477de2938c681660d5038bc464e3700256713ebe261.js"></script>
              <style class="INLINE_PEN_STYLESHEET_ID">
              @import url("https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap");
          html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            background-color:#0C0617
          }
          
   
          
          input[type=radio] {
            display: block;
          }
          
          .card {
            position: absolute;
            width: 60%;
            height: 100%;
            left: 0;
            right: 0;
            margin: auto;
            transition: transform 0.4s ease;
            cursor: pointer;
          }
          
          .container {
            width: 90%;
            max-height: 700px;
            padding-top:50px;
            height: 100%;
            transform-style: preserve-3d;
            background-position: center center;
            margin: auto;
            justify-content: center;
            align-items: center;
            display: flex;
          }
          
          .cards {
            position: relative;
            width: 100%;
            height: 100%;
            margin-bottom: 20px;
          }
          
          img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
            -o-object-fit: cover;
               object-fit: cover;
          }
          
          #item-1:checked ~ .cards #song-3, #item-2:checked ~ .cards #song-1, #item-3:checked ~ .cards #song-2 {
            transform: translatex(-40%) scale(0.8);
            opacity: 0.4;
            z-index: 0;
          }
          
          #item-1:checked ~ .cards #song-2, #item-2:checked ~ .cards #song-3, #item-3:checked ~ .cards #song-1 {
            transform: translatex(40%) scale(0.8);
            opacity: 0.4;
            z-index: 0;
          }
          
          #item-1:checked ~ .cards #song-1, #item-2:checked ~ .cards #song-2, #item-3:checked ~ .cards #song-3 {
            transform: translatex(0) scale(1);
            opacity: 1;
            z-index: 1;
          }
          #item-1:checked ~ .cards #song-1 img, #item-2:checked ~ .cards #song-2 img, #item-3:checked ~ .cards #song-3 img {
          
          }
          
          .player {
            border-radius: 8px;
            width: 100%;
            padding: 16px 10px;
            height:400px
          }
          
          .upper-part {
            position: relative;
            display: flex;
            align-items: center;
            margin-bottom: 12px;
            height: 400px;
            overflow: hidden;
          }
          
          .play-icon {
            margin-right: 10px;
          }
          
          .song-info {
            width: calc(100% - 32px);
            display: block;
            height:400px
          }
          
          .song-info .title {
            font-size: 42px;
            font-weight: 700;
            background-image:linear-gradient(90deg, #542579, #941375, #941375);
            -webkit-background-clip: text;
            color: transparent;

  
          }
          .title2{
            color:white;
            margin-top:40px;
            font-size: 18px;
            line-height:29px
          }
          
          .sub-line {
            display: flex;
            justify-content: space-between;
            width: 100%;
          }
          

          .info-area {
            width: 100%;
            position: absolute;
            top: 0;
            left: 30px;
            transition: transform 0.4s ease-in;
            height:400px
          }
          #item-1{
            display:block !important
          }
          #item-2{
            display:block !important
          }
          #item-3{
            display:block !important
          }
          
          #item-2:checked ~ .player #test {
            transform: translateY(0);
          }
          
          #item-2:checked ~ .player #test {
            transform: translateY(-400px);
          }
          
          #item-3:checked ~ .player #test {
            transform: translateY(-800px);
          }


          @media screen and (max-width: 1250px){
  body {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 10px;
  font-family: 'DM Sans', sans-serif;
  transition: background .4s ease-in;
  
}

.card {
  position: absolute;
  width: 500px;
  height: 100%;
  left: 0;
  right: 0;
  margin: auto;
  transition: transform .4s ease;
  cursor: pointer;
  background-position: center center;
  margin: auto;
  justify-content: center;
  align-items: center;
  display: flex;
}

.container {
  width: 100%;
  max-width: 800px;
  max-height: 1300px;
  height: 100%;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.cards {
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;

  
}

img {
  width: 350px;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
 
}
          }
          @media screen and (max-width: 750px){
            body {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 30px 10px;
            font-family: 'DM Sans', sans-serif;
            transition: background .4s ease-in;
        
            
          
          }
          
          .card {
            position: absolute;
            width: 300px;
            height: 100%;
            left: 0;
            right: 0;
            margin: auto;
            transition: transform .4s ease;
            cursor: pointer;
            background-position: center center;
            margin: auto;
            justify-content: center;
            align-items: center;
            display: flex;
          }
          
          .container {
            width: 100%;
            max-width: 800px;
            max-height: 1300px;
            height: 100%;
            transform-style: preserve-3d;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
          }
          
          .cards {
            position: relative;
            width: 100%;
            height: 100%;
            margin-bottom: 20px;
          
            
          }
          
          img {
            width: 250px;
            height: 100%;
            border-radius: 10px;
            object-fit: cover;
           
          }
                    }
            </style>
          </head>
          <body style="width:auto">
         

          <div class="container">
          
                    <input type="radio" name="slider" id="item-1" checked>
                
                    <input type="radio" name="slider" id="item-2">
                
                    <input type="radio" name="slider" id="item-3">
                    
           
               
            <div class="cards">
                <label class="card" for="item-1" id="song-1">
                <img src="/img/glb/hana.png">
                </label>
                <label class="card" for="item-2" id="song-2">
                <img src="/img/glb/chico.png" alt="song">
                </label>
                <label class="card" for="item-3" id="song-3">
                <img src="/img/glb/ava.png" alt="song">
                </label>
            </div>
            <div class="player">
                <div class="upper-part">

                <div class="info-area" id="test">
                    <label class="song-info" id="song-info-1">
                    <div class="title">Hana</div>
                        <p class="title2">Hi guys!  <br/>
                        Meet #Hana! <br/>
                        She's is a full-time resident of the Lucretius complex. <br/>
                         Hana lives for adventure and entertainment. She's a prolific gamer so you should look out for her in the gaming section of the complex. </p>
                    </label>
                    <label class="song-info" id="song-info-2">
                    <div class="title">Chico</div>
                    <p class="title2">Hi there! <br/>
                    I'm #Chico your favourite buddy from the Lucretius complex. The only thing I love more than sports and staying healthy is making new friends.
                     You know where to find me, I'm always where the fun is happening in the complex.
                     <br/>Don't forget to stay hydrated buddy, see ya! </p>
                   
                    </label>
                    <label class="song-info" id="song-info-3">
                    <div class="title">Ava</div>
                    <p class="title2"> Have you met #Ava? <br/>
                    She's an energetic smart girl who loves shopping and all the other perks of the luxurious lifestyle. <br/>
                    Ava is a true friend, she'll always be there for you. She's also an extrovert, always eager to socialize, so she's amazing company to look forward to in the complex.</p>
                   
                   
                    </label>
                </div>
                </div>

            </div>
            </div>

          <script src="https://cpwebassets.codepen.io/assets/common/stopExecutionOnTimeout-1b93190375e9ccc259df3a57c1abc0e64599724ae30d7ea4c6877eb615f89387.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          
          </body>
          </html>
          `}
       /> */}
      </>
      <iframe className="avatarframe" style={{zIndex:'1000',overflow:'hidden' }}
            id="xxx"
            title="xxx"
            width="100%"
            
            frameBorder="value"
            allowTransparency
            srcDoc={`
                <!doctype html>
                <html>
                <head>
                    <title>Chat bot</title>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width">
                   
                  
                    <style>
                    body {
                      margin: 0;
                      background-color: #fff00;
                      color: #fff;
                      font-family: sans-serif;
                      display: flex;
                      align-items: center;
                      min-height: 100vh;
                    }
                    .slider {
                      width: 100%;
                        background-position: center center;
                      margin: auto;
                      justify-content: center;
                      align-items: center;
                      display: flex;
                    }
                    .slider input {
                      display: none;
                    }
                    .testimonials {
                      display: inline-flex;
                      align-items: center;
                      justify-content: center;
                      position: relative;
                      min-height: 620px;
                      perspective: 1000px;
                      overflow: hidden;
                    }
                    .testimonials1{
                      width: 41%;
                      margin:2%
                    }
                    .testimonials .item {
                      top: 0;
                      position: absolute;
                      box-sizing: border-box;
                      background-color: #0A022000;
                      padding: 30px;
                      width: 450px;
                      text-align: center;
                      transition: transform 0.4s;
                      -webkit-transform-style: preserve-3d;
                      
                      user-select: none;
                      cursor: pointer;
                    }
                    .testimonials .item img {
                      width: 300px;
                 
                    }
                    .testimonials .item p {
                      color: #ddd;
                    }
                    .testimonials .item h2 {
                      font-size: 14px;
                    }
                    .dots {
                      display: inline-block;
                    float:left
                    }
                    .dots label {
                      display: block;
                      height: 9px;
                      width: 9px;
                      border-radius: 50%;
                      cursor: pointer;
                      background-color: #413B52;
                      margin: 15px;
                      transition: transform 0.2s, color 0.2s;
                    }
                    
                    /* First */
                    #t-1:checked ~ .dots label[for="t-1"] {
                      transform: scale(2);
                      background-color: #fff;
                    }
                    #t-1:checked ~ .dots label[for="t-2"] {
                      transform: scale(1.5);
                    }
                    #t-1:checked ~ .testimonials label[for="t-1"] {
                      z-index: 4;
                      transform: scale(1.1);
                    }
                    #t-1:checked ~ .testimonials label[for="t-2"] {
                      transform: scale(.6);
                        opacity:0.2;
                      transform: translateX(370px) translateZ(-90px) rotateY(-15deg);
                      z-index: 3;
                    
                    }
                    #t-1:checked ~ .testimonials label[for="t-3"] {
                      transform: scale(.4);
                      opacity:0.1;
                      transform: translateX(670px) translateZ(-180px) rotateY(-25deg);
                      z-index: 2;
                    }
                    #t-1:checked ~ .testimonials label[for="t-4"] {
                      transform: translateX(900px) translateZ(-270px) rotateY(-35deg);
                      z-index: 1;
                    }
                    #t-1:checked ~ .testimonials label[for="t-5"] {
                      transform: translateX(1200px) translateZ(-360px) rotateY(-45deg);
                    }
                    
                    /* Second */
                    #t-2:checked ~ .dots label[for="t-1"] {
                      transform: scale(1.5);
                    }
                    #t-2:checked ~ .dots label[for="t-2"] {
                      transform: scale(2);
                      background-color: #fff;
                    }
                    #t-2:checked ~ .dots label[for="t-3"] {
                      transform: scale(1.5);
                    }
                    #t-2:checked ~ .testimonials label[for="t-1"] {
                      transform: scale(.5);
                      opacity:0.2;
                      transform: translateX(-370px) translateZ(-90px) rotateY(15deg);
                    }
                    #t-2:checked ~ .testimonials label[for="t-2"] {
                      z-index: 3;
                      transform: scale(1.2);
                    }
                    #t-2:checked ~ .testimonials label[for="t-3"] {
                      transform: scale(.5);
                      opacity:0.2;
                      transform: translateX(370px) translateZ(-90px) rotateY(-15deg);
                      z-index: 2;
                    
                    }
                    #t-2:checked ~ .testimonials label[for="t-4"] {
                      opacity:0.1;
                      transform: scale(.4);
                      transform: translateX(670px) translateZ(-180px) rotateY(-25deg);
                      z-index: 1;
                    }
                    #t-2:checked ~ .testimonials label[for="t-5"] {
                      transform: translateX(900px) translateZ(-270px) rotateY(-35deg);
                    }
                    
                    /* Third */
                    #t-3:checked ~ .dots label[for="t-2"] {
                      transform: scale(1.5);
                    }
                    #t-3:checked ~ .dots label[for="t-3"] {
                      transform: scale(2);
                      background-color: #fff;
                    }
                    #t-3:checked ~ .dots label[for="t-4"] {
                      transform: scale(1.5);
                    }
                    #t-3:checked ~ .testimonials label[for="t-1"] {
                      opacity:0.2;
                      transform: translateX(-700px) translateZ(-180px) rotateY(25deg);
                    }
                    #t-3:checked ~ .testimonials label[for="t-2"] {
                      transform: scale(.5);
                      opacity:0.2;
                      transform: translateX(-370px) translateZ(-90px) rotateY(15deg);
                    }
                    #t-3:checked ~ .testimonials label[for="t-3"] {
                      transform: scale(1.2);
                      
                      z-index: 3;
                    }
                    #t-3:checked ~ .testimonials label[for="t-4"] {
                      transform: scale(.5);
                      opacity:0.2;
                      transform: translateX(370px) translateZ(-90px) rotateY(-15deg);
                      z-index: 2;
                    }
                    #t-3:checked ~ .testimonials label[for="t-5"] {
                      opacity:0.2;
                      transform: translateX(740px) translateZ(-180px) rotateY(-25deg);
                    }
                    
                    /* Fourth */
                    #t-4:checked ~ .dots label[for="t-3"] {
                      transform: scale(1.5);
                    }
                    #t-4:checked ~ .dots label[for="t-4"] {
                      transform: scale(2);
                      background-color: #fff;
                    }
                    #t-4:checked ~ .dots label[for="t-5"] {
                      transform: scale(1.5);
                    }
                    #t-4:checked ~ .testimonials label[for="t-1"] {
                      transform: translateX(-970px) translateZ(-270px) rotateY(35deg);
                    }
                    #t-4:checked ~ .testimonials label[for="t-2"] {
                      transform: translateX(-700px) translateZ(-180px) rotateY(25deg);
                    }
                    #t-4:checked ~ .testimonials label[for="t-3"] {
                      transform: scale(.5);
                      opacity:0.2;
                      transform: translateX(-370px) translateZ(-90px) rotateY(15deg);
                      z-index: 2;
                    }
                    #t-4:checked ~ .testimonials label[for="t-4"] {
                      transform: scale(1.2);
                      z-index: 3;
                    }
                    #t-4:checked ~ .testimonials label[for="t-5"] {
                      transform: scale(.5);
                      opacity:0.2;
                      transform: translateX(370px) translateZ(-90px) rotateY(-15deg);
                    }
                    
                    /* Fifth */
                    #t-5:checked ~ .dots label[for="t-4"] {
                      transform: scale(1.5);
                    }
                    #t-5:checked ~ .dots label[for="t-5"] {
                      transform: scale(2);
                      background-color: #fff;
                    }
                    #t-5:checked ~ .testimonials label[for="t-1"] {
                      transform: translateX(-1200px) translateZ(-360px) rotateY(45deg);
                    }
                    #t-5:checked ~ .testimonials label[for="t-2"] {
                      transform: translateX(-900px) translateZ(-270px) rotateY(35deg);
                      z-index: 1;
                    }
                    #t-5:checked ~ .testimonials label[for="t-3"] {
                      transform: translateX(-700px) translateZ(-180px) rotateY(25deg);
                      z-index: 2;
                    }
                    #t-5:checked ~ .testimonials label[for="t-4"] {
                      transform: scale(.5);
                      opacity:0.2;
                      transform: translateX(-370px) translateZ(-90px) rotateY(15deg);
                      z-index: 3;
                    }
                    #t-5:checked ~ .testimonials label[for="t-5"] {
                      transform: scale(1.2);
                      z-index: 4;
                    }
                     .title {
                      font-size: 44px;
                      font-weight: 700;
                      background-image:linear-gradient(90deg ,#542579, #542579, #941375, #941375);
                      -webkit-background-clip: text;
                      color: transparent;
                      text-align: left;
                      background-position: center center;
                      margin: auto;
                      justify-content: center;
                      align-items: center;
                      
            
                    }
                    .title2{
                      color:white;
                      margin-top:20px;
                      font-size: 18px;
                      line-height:29px;
                      width: 300px;
                      text-align: left;

                    }
                    @media screen and (max-width: 1150px){
                      .slider {
                        width: 100%;
                        background-position: left center;
                        margin: 1px !important;
                        justify-content: left;
                        align-items: center;
                        display: block;
                      }
                      .slider input {
                        display: none;
                      }
                      .testimonials {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        position: relative;
                        min-height: 720px;
                        perspective: 1000px;
                        overflow: hidden;
                      }
                      .testimonials1{
                        width: 97%;
                        margin:0%
                      }
                      .dots {
                        display: block;
                      position:absolute;
                      top:300px;
                      left:10px;
                      z-index:10000

                      }
                      .dots label {
                        display: block;
                        height: 9px;
                        width: 9px;
                        border-radius: 50%;
                        cursor: pointer;
                        background-color: #413B52;
                        margin: 15px;
                        transition: transform 0.2s, color 0.2s;
                      }
                      
                      .title2{
                        color:white;
                        margin-top:20px;
                        font-size: 18px;
                        line-height:29px;
                        width: 250px;
                        text-align: left;
                        margin-left:70px
                      }
                      .title {
                        font-size: 40px;
                        font-weight: 700;
                        background-image:linear-gradient(90deg ,#542579, #542579, #941375, #941375);
                        -webkit-background-clip: text;
                        color: transparent;
                        text-align: left;
                        background-position: center center;
                        margin: auto;
                        justify-content: center;
                        align-items: center;
                        margin-left:70px
              
                      }
                    }
                  </style>
                </head>
                <body style="width:auto">
                <div class="slider">
                <input type="radio" name="testimonial" id="t-1">
                <input type="radio" name="testimonial" id="t-2">
                <input type="radio" name="testimonial" id="t-3" checked>
                <input type="radio" name="testimonial" id="t-4">
                <input type="radio" name="testimonial" id="t-5">
                <div class="dots">
                <label for="t-1"></label>
                <label for="t-2"></label>
                <label for="t-3"></label>
                <label for="t-4"></label>
                <label for="t-5"></label>
              </div>
                <div class="testimonials testimonials1">
                  <label class="item" for="t-1">
                    <img src="/img/glb/ch1.png" alt="picture">
                   
                  </label>
                  <label class="item" for="t-2">
                  <img src="/img/glb/ch2.png" alt="picture">
                  </label>
                  <label class="item" for="t-3">
                  <img src="/img/glb/ch3.png" alt="picture">
                  </label>
                  <label class="item" for="t-4">
                  <img src="/img/glb/ch4.png" alt="picture">
                  </label>
                  <label class="item" for="t-5">
                  <img src="/img/glb/charecter5.png" alt="picture">
                  </label>
                </div>
                  <div class="testimonials testimonials1">
                  <label class="item" for="t-1">
                  <div class="title">Chico</div>
                  <p class="title2">Hi there! <br/>
                  I'm #Chico your favourite buddy from the Lucretius complex. The only thing I love more than sports and staying healthy is making new friends.
                   You know where to find me, I'm always where the fun is happening in the complex.
                   <br/>Don't forget to stay hydrated buddy, see ya! </p>
                  </label>
                  <label class="item" for="t-2">
                  <div class="title">Hana</div>
                  <p class="title2">Hi guys!  <br/>
                  Meet #Hana! <br/>
                  She's is a full-time resident of the Lucretius complex. <br/>
                   Hana lives for adventure and entertainment. She's a prolific gamer so you should look out for her in the gaming section of the complex. </p>
                  </label>
                  <label class="item" for="t-3">
                  <div class="title">Ava</div>
                  <p class="title2"> Have you met #Ava? <br/>
                  She's an energetic smart girl who loves shopping and all the other perks of the luxurious lifestyle. <br/>
                  Ava is a true friend, she'll always be there for you. She's also an extrovert, always eager to socialize, so she's amazing company to look forward to in the complex.</p>
                 
                  </label>
                  <label class="item" for="t-4">
                  <div class="title">Zany</div>
                  <p class="title2">  Hey there!  <br/>
                  Remember me? <br/>
                  I'm the cool guy from the Zany Club NFT collection, the first citizen of the Lucretius complex. If you are looking to play mystery games, or you like dancing and nightclubs, I'm your go to guy. 
                     <br/>
                     See ya!  </p>
                  </label>
                  <label class="item" for="t-5">
                  <div class="title">Tau</div>
                  <p class="title2">Meet #Tau  <br/>
                  He is one of the #Lucretius citizen. He is smart & knows how to do business. he likes gold & seek wealth. <br/>
                  He respects women , A real gentleman. </p>
                  </label>
                </div>

              </div>

                </body>
                </html>
                `}
            />

    </div>
  );
}

export default AvatarSlider;
