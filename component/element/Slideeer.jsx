import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  rooot:{
         marginTop:'100px',
         [theme.breakpoints.down("900")]: {
          backgroundSize:'cover',
        },
  },
}));



function Slideeer() {
  const classes = useStyles();
  return (
    <div className={classes.rooot}>

<iframe
      style={{border:'none !import',outline:'none !import'}}
      id="xxx"
      title="xxx"
      width="100%"
      height="800px"
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
                  
.slider {
	width: 100%;
 
}
.slider input {
	display: none;
}
.testimonials {
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	height: 600px;
	perspective: 1000px;
	overflow: hidden;
}
.testimonials .item {
	top: 0;
	position: absolute;
	box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.192);
  backdrop-filter: blur(4px);
	padding: 30px;
	width: 320px;
	text-align: left;
  
	transition: transform 0.4s;
	-webkit-transform-style: preserve-3d;
	box-shadow: 0 0 10px rgba(0,0,0,0.3);
	user-select: none;
	cursor: pointer;
  height: 600px;
  border-radius: 15px;
}
.testimonials .item img {
	width: 100px;
	border-radius: 50%;

}
.testimonials .item p {
	color: #ddd;
  font-size: 17px;
}
.testimonials .item h2 {
	font-size: 17px;
}
.dots {
	display: flex;
	justify-content: center;
	align-items: center;
}
.dots label {
	display: block;
	height: 5px;
	width: 5px;
	border-radius: 50%;
	cursor: pointer;
	background-color: #413B52;
	margin: 7px;
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
}
#t-1:checked ~ .testimonials label[for="t-2"] {
	transform: translateX(300px) translateZ(-90px) rotateY(-15deg);
	z-index: 3;
}
#t-1:checked ~ .testimonials label[for="t-3"] {
	transform: translateX(600px) translateZ(-180px) rotateY(-25deg);
	z-index: 2;
}
#t-1:checked ~ .testimonials label[for="t-4"] {
	transform: translateX(900px) translateZ(-270px) rotateY(-35deg);
	z-index: 1;
}
#t-1:checked ~ .testimonials label[for="t-5"] {
	transform: translateX(1200px) translateZ(-360px) rotateY(-45deg);
}
#t-1:checked ~ .testimonials label[for="t-6"] {
	transform: translateX(1500px) translateZ(-450px) rotateY(-55deg);
}
#t-1:checked ~ .testimonials label[for="t-7"] {
	transform: translateX(1800px) translateZ(-540px) rotateY(-65deg);
}
#t-1:checked ~ .testimonials label[for="t-8"] {
	transform: translateX(2100px) translateZ(-630px) rotateY(-75deg);
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
	transform: translateX(-300px) translateZ(-90px) rotateY(15deg);
}
#t-2:checked ~ .testimonials label[for="t-2"] {
	z-index: 3;
}
#t-2:checked ~ .testimonials label[for="t-3"] {
	transform: translateX(300px) translateZ(-90px) rotateY(-15deg);
	z-index: 2;
}
#t-2:checked ~ .testimonials label[for="t-4"] {
	transform: translateX(600px) translateZ(-180px) rotateY(-25deg);
	z-index: 1;
}
#t-2:checked ~ .testimonials label[for="t-5"] {
	transform: translateX(900px) translateZ(-270px) rotateY(-35deg);
}
#t-2:checked ~ .testimonials label[for="t-6"] {
	transform: translateX(1200px) translateZ(-360px) rotateY(-45deg);
}
#t-2:checked ~ .testimonials label[for="t-7"] {
	transform: translateX(1500px) translateZ(-450px) rotateY(-55deg);
}
#t-2:checked ~ .testimonials label[for="t-8"] {
	transform: translateX(1800px) translateZ(-540px) rotateY(-65deg);
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
	transform: translateX(-600px) translateZ(-180px) rotateY(25deg);
}
#t-3:checked ~ .testimonials label[for="t-2"] {
	transform: translateX(-300px) translateZ(-90px) rotateY(15deg);
}
#t-3:checked ~ .testimonials label[for="t-3"] {
	z-index: 3;
}
#t-3:checked ~ .testimonials label[for="t-4"] {
	transform: translateX(300px) translateZ(-90px) rotateY(-15deg);
	z-index: 2;
}
#t-3:checked ~ .testimonials label[for="t-5"] {
	transform: translateX(600px) translateZ(-180px) rotateY(-25deg);
}
#t-3:checked ~ .testimonials label[for="t-6"] {
	transform: translateX(900px) translateZ(-270px) rotateY(-35deg);
}
#t-3:checked ~ .testimonials label[for="t-7"] {
	transform: translateX(1200px) translateZ(-360px) rotateY(-45deg);
}
#t-3:checked ~ .testimonials label[for="t-8"] {
	transform: translateX(1500px) translateZ(-450px) rotateY(-55deg);
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
	transform: translateX(-900px) translateZ(-270px) rotateY(35deg);
}
#t-4:checked ~ .testimonials label[for="t-2"] {
	transform: translateX(-600px) translateZ(-180px) rotateY(25deg);
}
#t-4:checked ~ .testimonials label[for="t-3"] {
	transform: translateX(-300px) translateZ(-90px) rotateY(15deg);
	z-index: 2;
}
#t-4:checked ~ .testimonials label[for="t-4"] {
	z-index: 5;
}
#t-4:checked ~ .testimonials label[for="t-5"] {
	transform: translateX(300px) translateZ(-90px) rotateY(-15deg);
  z-index: 4;
}
#t-4:checked ~ .testimonials label[for="t-6"] {
	transform: translateX(600px) translateZ(-180px) rotateY(-25deg);
  z-index: 3;
}
#t-4:checked ~ .testimonials label[for="t-7"] {
	transform: translateX(900px) translateZ(-270px) rotateY(-35deg);
  z-index: 2;
}
#t-4:checked ~ .testimonials label[for="t-8"] {
	transform: translateX(1200px) translateZ(-360px) rotateY(-45deg);
  z-index: 1;
}

/* Fifth */
#t-5:checked ~ .dots label[for="t-4"] {
	transform: scale(1.5);
}
#t-5:checked ~ .dots label[for="t-5"] {
	transform: scale(2);
	background-color: #fff;
}
#t-5:checked ~ .dots label[for="t-6"] {
	transform: scale(1.5);
}
#t-5:checked ~ .testimonials label[for="t-1"] {
	transform: translateX(-1200px) translateZ(-360px) rotateY(45deg);
}
#t-5:checked ~ .testimonials label[for="t-2"] {
	transform: translateX(-900px) translateZ(-270px) rotateY(35deg);

}
#t-5:checked ~ .testimonials label[for="t-3"] {
	transform: translateX(-600px) translateZ(-180px) rotateY(25deg);

}
#t-5:checked ~ .testimonials label[for="t-4"] {
	transform: translateX(-300px) translateZ(-90px) rotateY(15deg);
	
}
#t-5:checked ~ .testimonials label[for="t-5"] {
	z-index: 4;
}
#t-5:checked ~ .testimonials label[for="t-6"] {
  transform: translateX(300px) translateZ(-90px) rotateY(-15deg);
	z-index: 3;
}
#t-5:checked ~ .testimonials label[for="t-7"] {
   transform: translateX(600px) translateZ(-180px) rotateY(-25deg);
	z-index: 2;
}
#t-5:checked ~ .testimonials label[for="t-8"] {
   transform: translateX(900px) translateZ(-270px) rotateY(-35deg);
	z-index: 1;
}


/* sixth */
#t-6:checked ~ .dots label[for="t-5"] {
	transform: scale(1.5);
}
#t-6:checked ~ .dots label[for="t-6"] {
	transform: scale(2);
	background-color: #fff;
}
#t-6:checked ~ .dots label[for="t-7"] {
	transform: scale(1.5);
}
#t-6:checked ~ .testimonials label[for="t-1"] {
	transform: translateX(-1500px) translateZ(-450px) rotateY(55deg);
}
#t-6:checked ~ .testimonials label[for="t-2"] {
	transform: translateX(-1200px) translateZ(-360px) rotateY(45deg);
  z-index: 1;
}
#t-6:checked ~ .testimonials label[for="t-3"] {
transform: translateX(-900px) translateZ(-270px) rotateY(35deg);
	z-index: 2;
}
#t-6:checked ~ .testimonials label[for="t-4"] {
	transform: translateX(-600px) translateZ(-180px) rotateY(25deg);
	z-index: 3;
}
#t-6:checked ~ .testimonials label[for="t-5"] {
	transform: translateX(-300px) translateZ(-90px) rotateY(15deg);
	z-index: 3;
}
#t-6:checked ~ .testimonials label[for="t-6"] {
	z-index: 4;
}
#t-6:checked ~ .testimonials label[for="t-7"] {
  transform: translateX(300px) translateZ(-90px) rotateY(-15deg);
	z-index: 3;
}
#t-6:checked ~ .testimonials label[for="t-8"] {
  transform: translateX(600px) translateZ(-180px) rotateY(-25deg);
	z-index: 2;
}


/* seventh */
#t-7:checked ~ .dots label[for="t-6"] {
	transform: scale(1.5);
}
#t-7:checked ~ .dots label[for="t-7"] {
	transform: scale(2);
	background-color: #fff;
}
#t-7:checked ~ .dots label[for="t-8"] {
	transform: scale(1.5);
}
#t-7:checked ~ .testimonials label[for="t-1"] {
	transform: translateX(-1800px) translateZ(-540px) rotateY(65deg);
}
#t-7:checked ~ .testimonials label[for="t-2"] {
	transform: translateX(-1500px) translateZ(-450px) rotateY(55deg);
  
}
#t-7:checked ~ .testimonials label[for="t-3"] {
transform: translateX(-1200px) translateZ(-360px) rotateY(45deg);
	
}
#t-7:checked ~ .testimonials label[for="t-4"] {
	transform: translateX(-900px) translateZ(-270px) rotateY(35deg);
	
}
#t-7:checked ~ .testimonials label[for="t-5"] {
	transform: translateX(-600px) translateZ(-180px) rotateY(25deg);

}
#t-7:checked ~ .testimonials label[for="t-6"] {
   transform: translateX(-300px) translateZ(-90px) rotateY(15deg);

}
#t-7:checked ~ .testimonials label[for="t-7"] {
	z-index: 4;
}
#t-7:checked ~ .testimonials label[for="t-8"] {
  transform: translateX(300px) translateZ(-90px) rotateY(-15deg);
	z-index: 3;
}


/* 8th */
#t-8:checked ~ .dots label[for="t-7"] {
	transform: scale(1.5);
}
#t-8:checked ~ .dots label[for="t-8"] {
	transform: scale(2);
	background-color: #fff;
}

#t-8:checked ~ .testimonials label[for="t-1"] {
	transform: translateX(-2100px) translateZ(-630px) rotateY(75deg);
}
#t-8:checked ~ .testimonials label[for="t-2"] {
	transform: translateX(-1800px) translateZ(-540px) rotateY(65deg);
}
#t-8:checked ~ .testimonials label[for="t-3"] {
transform: translateX(-1500px) translateZ(-450px) rotateY(55deg);
}
#t-8:checked ~ .testimonials label[for="t-4"] {
	transform: translateX(-1200px) translateZ(-360px) rotateY(45deg);	
}
#t-8:checked ~ .testimonials label[for="t-5"] {
	transform: translateX(-900px) translateZ(-270px) rotateY(35deg);
	z-index: 1;
}
#t-8:checked ~ .testimonials label[for="t-6"] {
   transform: translateX(-600px) translateZ(-180px) rotateY(25deg);
	z-index: 2;
}
#t-8:checked ~ .testimonials label[for="t-7"] { 
  transform: translateX(-300px) translateZ(-90px) rotateY(15deg);
	z-index: 3;
}
#t-8:checked ~ .testimonials label[for="t-8"] {
	z-index: 4;
}
p{
  font-family: Arial, Helvetica, sans-serif;
}
              </style>
          </head>
          <body style="width:auto;">
          
          <div class="slider">
          <input type="radio" name="testimonial" id="t-1"/>
          <input type="radio" name="testimonial" id="t-2"/>
          <input type="radio" name="testimonial" id="t-3" />
          <input type="radio" name="testimonial" id="t-4"checked/>
          <input type="radio" name="testimonial" id="t-5" />
          <input type="radio" name="testimonial" id="t-6"/>
          <input type="radio" name="testimonial" id="t-7"/>
          <input type="radio" name="testimonial" id="t-8"/>
          <br/><br/><br/><br/><br/>
          <div class="testimonials">
            <label class="item" for="t-1">
            <div class="mycard">
                <img src="/img/total/1reserved.png" alt="reserved" class="cardimg" />
                <p style="color:#95DBFD;font-size:23px" class="cardtitle">Reserved for staking	</p>
                <div>
                <p class="carddescription">is reserved for our staking program rewards. Any user can participate in the program by staking their tokens to reduce the volume in circulation and earn rewards in return.</p>
                </div>
             </div>
            </label>
            <label class="item" for="t-2">
            <div class="mycard">
              <img src="/img/total/6platform.png" alt="nivel5" class="cardimg1" />
                <p style="color:#729BDB;font-size:23px" class="cardtitle1">Platform rewards</p>
                <div>
                <p class="carddescription1">is for our Platform rewards programs. They will be used to reward players who participate in competitions and other activities inside the complex.</p>
                </div>
             </div>
            </label>
            <label class="item" for="t-3">
            <div class="mycard">
              <img src="/img/total/3ecosystem.png" alt="nivel5" class="cardimg" />
              <p style="color:#D893D8;font-size:23px" class="cardtitle">Ecosystem</p>
              <div>
                <p class="carddescription">is for the Lucretius ecosystem. These tokens will be used for various ecosystem-development initiatives, new features, updates and all related purposes.</p>
              </div>
            </div>
            </label>
            <label class="item" for="t-4">
            <div class="mycard">
              <img src="/img/total/4team.png" alt="nivel5" class="cardimg1" />
                <p style="color:#60B8BB;font-size:23px" class="cardtitle1">Team and Advisors	</p>
                <div>
                <p class="carddescription1">is reserved for the Lucretius team (founding & non-founding team members) and our advisors.</p>
              </div>
            </div>
            </label>
            <label class="item" for="t-5">
            <div class="mycard">
              <img src="/img/total/8user.png" alt="nivel5" class="cardimg1" />
                <p style="color:#3EF2E9;font-size:23px" class="cardtitle1">User Incentives		</p>
                <div>
                <p class="carddescription1">is for our various user incentive programs. It will also encourage user participation and maintain game traction.</p>
              </div>
            </div>
            </label>
                <label class="item" for="t-6">
                <div class="mycard">
                  <img src="/img/total/7airdropt.png" alt="nivel5" class="cardimg1" />
                    <p style="color:#DB7378;font-size:23px" class="cardtitle1">Airdrop (Twitter)</p>
                    <div>
                    <p class="carddescription1">is for our twitter airdrop event. During this event, we will distribute 1000 LUC tokens to our first 50,000 twitter followers. Each of them will receive 1000 LUC tokens.</p>
                  </div>
                </div>
                </label>
                <label class="item" for="t-7">
                <div class="mycard">
                  <img src="/img/total/TotalInitialOffering.png" alt="reserved" class="cardimg" />
                  <p style="color:#AC9BFE;font-size:23px" class="cardtitle">Total Initial Offering</p>
                  <div>
                  <p class="carddescription">

                  is for the total initial offering events.
                  <br/>
                There will be a total of four sale events between February and March. 
                <br/>
                  • 5th-7th February: Private sale of 25,000,000 (2.5%) LUC tokens at 0.008 XRP each. 
                  <br/>
                  • 7th-10th February: Private sale of 25,000,000 (2.5%) LUC tokens at 0.01 XRP each. 
                  <br/>
                  • 10th-14th February: Initial DEX Offering (IDO) of 50,000,000 (5%) LUC tokens at 0.012 each. 
                  <br/>
                  • 25th February-15th March: Initial Exchange Offering (IEO) of 100,000,000 (10%) LUC tokens.
                  </p>
                </div>
                </div>
                </label>
                <label class="item" for="t-8">
                <div class="mycard">
                 <img src="/img/total/5airdrop.png" alt="nivel5" class="cardimg" />
                    <p style="color:#F6708F;font-size:23px" class="cardtitle">Airdrop</p>
                  <div>
                    <p class="carddescription">is for our airdrop events. Our airdrop events will be held in several batches to create liquidity in the market. LUC tokens will be distributed among members of the community whenever the team detects that the market needs liquidity. A total of 100k trustlines will be eligible to receive LUC tokens during our airdrop events based on the amount of XRP and/or LUC tokens they hold. 75,000,000 LUC tokens will be distributed to LUC holders while 25,000,000 tokens will be distributed to XRP holders. The maximum amount receivable by each trustline is 1000 LUC tokens.</p>
                  </div>
                </div>
               </label>
      
          </div>
          <br/><br/>
          <div class="dots">
              <label for="t-1"></label>
              <label for="t-2"></label>
              <label for="t-3"></label>
              <label for="t-4"></label>
              <label for="t-5"></label>
              <label for="t-6"></label>
              <label for="t-7"></label>
              <label for="t-8"></label>
          </div>
        </div>

          </body>
          </html>
          `}
       />

    </div>
  );
}

export default Slideeer;
