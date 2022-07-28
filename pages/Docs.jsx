import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Script from 'next/script';
import Head from "next/head";


const useStyles = makeStyles((theme) => ({

    root:{
        backgroundColor:'#0C0617',
       
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
    stskingsectn3:{
        backgroundPosition: 'center center',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    stskingsectn5:{
      width:'90%',
      backgroundPosition: 'center center',
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    },
    left:{
        marginLeft:'28%',
        [theme.breakpoints.down("1620")]: {
            marginLeft:'32%',
          },
          [theme.breakpoints.down("1376")]: {
            marginLeft:'37%',
          },
          [theme.breakpoints.down("1198")]: {
            marginLeft:'46%',
          },
          [theme.breakpoints.down("927")]: {
            marginLeft:'5%',
            marginTop:'100px',
          },
    }
     

}));


function Docs() {
    const classes = useStyles();
  return (
    <div style={{ backgroundColor:'#0C0617'}}>
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
        <title>Docs</title>
       </Head>
       <div className={classes.root2}>
       <a href="/HomePage"><img id="img" className="headerluclogohome" src='/img/exchange/logoo.png'/></a> 
                <button  className="headerbtnmodalstaking" id="myBtn">
                <span className="headerbtnmodalspan1"></span>
                <span className="headerbtnmodalspan2"></span>
                <span className="headerbtnmodalspan2"></span>
                </button>
                <div id="myModal" className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                    <span className="close">&times;</span>
                    <h2>
                        <img className="modallogoluc" src='/img/exchange/logoo.png'/>
                    </h2>
                    </div>
                    <div className="modal-header">
                    <Grid container spacing={3}> 
                    <Grid className={classes.modalgrid} item xs={4} sm={4} lg={5} xl={5}>
                        <ul className="modalul">
                            <li><a href="/HomePage">Home</a></li>
                            <br/>
                            <li><a href="/Docs">Docs</a></li>
                            <br/>
                            <li><a href="/LucToken">Luc Token</a></li>
                            <br/>
                            <li><a href="/AboutUs">About Us</a></li>
                            <br/>
                            <li><a href="/Games">Games</a></li>
                        </ul>
                    </Grid>
                    <Grid className={classes.modalgrid} item xs={8} sm={8} lg={6} xl={6}>
                            <div className="modaltext">
                             The Lucretius project is an exciting new metaverse with lots of unique features. In addition to a compelling plot, the game is loaded with lots of activities for players to engage in. an example of these fantastic features is the in-game cross-chain NFT marketplace that allows players to trade their NFTs across various blockchain networks.
                            </div>  
                            <div className="modalsocialmedia">
                              <a href="https://t.me/LucretiusNet"><img className="headersocialicon" src='/img/header/telegram.svg'/></a> 
                              <a href="https://www.youtube.com/channel/UC4gZGGIPaAprfC2vH_-r9cw"><img className="headersocialicon" src='/img/header/icon_youtube.svg'/></a>  
                              <a href='https://twitter.com/LucretiusNet'><img className="headersocialicon" src='/img/header/twitter.svg'/></a>    
                              <a href="https://discord.com/invite/mBErZap2Zr"><img className="headersocialicon" src='/img/header/discord.svg'/></a>   
                            </div>      
                    </Grid>
                    <Grid className={classes.modalgrid} item xs={12} sm={12} lg={12} xl={12}>
                            <Typography className="modalluc">
                               <b> LUCRETIUS</b> 
                            </Typography>
                            <Typography className="modalluc2">
                               <b>  LUCRET<span className="modalluc2span">IUS</span></b>
                            </Typography>
                    </Grid>
                    </Grid>
                    </div>
                </div>
            </div>

            <br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/>


       <Grid container spacing={3}>
        <Grid id="myULgrid" item xs={12} sm={12} lg={4} xl={3}>
       
        <ul id="myUL">
        <li className="docsli"><a href='#Abstract'>Abstract</a></li>
        <li className="docsli"><span className="caret">Introducing Lucretiuse</span>
            <ul className="nested">
            <li className="docsli2"><a href='#GameOverview'>Game Overview</a></li>
            <li className="docsli2"><a href='#BusinessObjectives'>Business objectives & targets</a></li>
            <li className="docsli2"><a href="#Goals">Goals</a>  </li>  
            </ul>
        </li>
        <li className="docsli"><span className="caret">Key Game Features </span>
            <ul className="nested">
            <li className="docsli2"><span className="caret">Key Features</span>
                <ul className="nested">
                <li className="docsli3"><a href="#PlayingArea">The playing area</a></li>
                <li className="docsli3"><a href="#CommunicationArea">The communication area</a></li>
                <li className="docsli3"><a href="#Clubbing">The clubbing/concert/conference area</a></li>
                <li className="docsli3"><a href="#MiddleArea">The middle area</a></li>
                <li className="docsli3"><a href="#SecondFloor">The second floor</a></li>
                </ul>
            </li>  
            <li className="docsli2"><span className="caret">Other Features</span>
                <ul className="nested">
                <li className="docsli3"><a href='#Avatar'>Avatar</a></li>
                <li className="docsli3"><a href='#GameAssets'>In-game assets</a></li>
                <li className="docsli3"><a href='#ReputationSystem'>Reputation system</a></li>
                <li className="docsli3"><a href='#CommunityEvents'>Shared quests and community events</a></li>
                </ul>
            </li>  
            <li className="docsli2"><span className="caret">Coming Soon</span>
                <ul className="nested">
                <li className="docsli3"><a href='#CrossChainMarketplace'>In-game cross-chain marketplace</a></li>
                <li className="docsli3"><a href='#MoreGamesAdded'>More games added to the complex</a></li>
                </ul>
            </li>  
            </ul>
        </li>
        <li className="docsli"><span className="caret">Blockchain Features </span>
            <ul className="nested">
            <li className="docsli2"><a href='#GameCurrency'>Game currency, the LUC token</a></li>
            <li className="docsli2"><a href='#XLS-20/XRPL'>XLS-20/XRPL compatibility</a></li>
            <li className="docsli2"><span className="caret">Game Assets</span>
                <ul className="nested">
                <li className="docsli3"><a href='#Collectiblesandscarcity'>Collectibles and scarcity</a></li>
                <li className="docsli3"><a href='#FullyDecentralizedAssets'>Fully decentralized assets</a></li>
                </ul>
            </li> 
            <li className="docsli2"><a href='#MarketplacesAndTrading'>Marketplaces and Trading</a></li> 
            <li className="docsli2"><span className="caret">An ever-expanding world</span>
                <ul className="nested">
                <li className="docsli3"><a href='#NFTCreator'>NFT Creator</a></li>
                <li className="docsli3"><span className="caret">Game creator</span>
                    <ul className="nested">
                    <li className="docsli4"><a href='#Terrain'>Terrain</a></li>
                    <li className="docsli4"><a href='#ProgrammerInterfaceAndScripting'>Programmer interface and scripting</a></li>
                    </ul>
                </li>
                </ul>
            </li> 
            <li className="docsli2"><a href='#GameCore'>Game core</a></li>
            <li className="docsli2"><a href='#GameEconomy'>Game economy</a></li>
            <li className="docsli2"><a href='#GovernanceDAO'>Governance DAO</a></li>
            </ul>
        </li>
        <li className="docsli"><span className="caret">Tokenomics</span>
            <ul className="nested">
            <li className="docsli2"><a href='#TokenInformation'>Token information</a></li>
            <li className="docsli2"> <a href='#TokenUtility'>Token utility</a></li>
            <li className="docsli2"><a href='#TokenAllocation'>Token allocation</a></li>
            </ul>
        </li>
        <li className="docsli"><span className="caret"> BM <span className="docslismallspan">(Burning Mechanism)</span></span>
            <ul className="nested">
            <li className="docsli2"><a href="#AssetsSale">Assets sale</a></li>
            <li className="docsli2"><a href="#TransactionFees">Transaction Fees</a></li>
            <li className="docsli2"><a href="#EventsCosts">Events Costs</a></li>
            </ul>
        </li>
        <li className="docsli"><span className="caret">BMP<span className="docslismallspan">(Burning Mechanism Partner )</span></span>
            <ul className="nested">
            <li className="docsli2"><a href='#XRPLTop100Holders'>XRPL Top 100 Holders</a></li>
            <li className="docsli2"><a href='#LucretiusAmbassadors'>Lucretius Ambassadors</a></li>
            <li className="docsli2"><a href='#SolidSupporters'>Solid Supporters</a></li>
            <li className="docsli2"><a href='#SolidPlayers'>Solid Players</a></li>
            <li className="docsli2"><a href='#TournamentsWinners'>Tournaments Winners</a></li>
            <li className="docsli2"><a href='#LucretiusCitizens'>Lucretius Citizens</a></li>
            </ul>
        </li>
        <li className="docsli"><span className="caret">DeFi Component</span>
            <ul className="nested">
            <li className="docsli2"><a href='#Incentives'>Incentives</a></li>
            <li className="docsli2"><a href='#StakingYield'>Staking Yield</a></li>
            <li className="docsli2"><a href='#NFTCollateral'>NFT Collateral</a></li>
            <li className="docsli2"><a href='#RentingNFTs'>Renting NFTs</a></li>
            </ul>
        </li>
        <li className="docsli"><a href='#BurnToEarn'>Burn to Earn "25"</a></li>
        <li className="docsli"><a href='#GoldenPiggy'>Golden Piggy "36"</a></li>
        <li className="docsli"><a href='#RoadMap'>RoadMap</a></li>
        <li className="docsli"><a href='#Summary'>Summary</a></li>
        <br/>  <br/>  <br/>  <br/>
        </ul>
        
        </Grid>
        <Grid className={classes.left}  item xs={12} sm={12} lg={12} xl={12}>

    <div id="Abstract">
        <p className="docstitle">Abstract</p>
        <p className="docstext">
            Lucretius is a fully decentralized metaverse web-based game that is filled with endless fun and adventure.
            It is an exciting new complex where you can connect with other users,make new friends, participate in community events, win contests,
            exchange NFTs at the marketplace, and many other fun activities.
        </p>

        <p className="docstext">
            In Lucretius, the fun never ends. You can participate in auction events, art exhibitions, concerts and even get paid
            for having fun with Play & Earn. It is a web-based game that stands out because it offers the best of two worlds. It provides an exhilarating
            gameplay experience and a platform for players who want to acquire and trade NFTs, even if they have no idea what an NFT is.
        </p>

        <p className="docstext">
            Lucretius was not created as a game for only blockchain players. It is aimed at a segment of the gaming community which
            can be quickly onboarded from other mainstream platforms. Our unique angle offers an exciting way to connect a compelling game narrative with the
            metaverse and underlying blockchain technology.
        </p>

        <p className="docstext">
            With these features, the Lucretius complex can attract millions of gamers to the blockchain ecosystem and create multiple income generation
            streams in the process. The project leverages the XRPL, which facilitates advanced and in-game DeFi features.
        </p>
    </div>

    <div id="IntroducingLucretius">
        <p className="docstitle">Introducing Lucretius</p>

        <p id="GameOverview" className="docstitle2">Game Overview</p>

        <p className="docstext">
            Welcome to the Lucretius complex - a grand complex where you can make friends and work together to organize
            auctions, exhibitions, contests, and other community events. By interacting with other players and participating in community events,
            you can earn rewards. Players can then use these rewards in exchange for in-game assets.
        </p>

        <p className="docstext">
            The Lucretius complex is an excellent attempt to create a genuinely public application with an exciting plot that
            would attract a large portion of the gaming community, blockchain enthusiasts, and DeFi nerds. The map of the Lucretius complex was inspired
            by the XRP logo. The first version of the game will launch on almost 300,000 square feet of space. The complex will spread across two floors
            and contain 27 shops (27 on the first floor and 3 on the second floor.)
        </p>

        <p className="docstext">
            The game features a fluid, intuitive and attractive interface with many features to explore. As a player, you are in
            complete control, and you determine how much you want to interact with the game’s decentralized features and DeFi. Furthermore, we built the Lucretius
            project with a narrative that cannot expire; it is continuous and will live forever.
        </p>

        <p id="BusinessObjectives" className="docstitle2">
            Business Objectives, Market, And Target Audience
        </p>

        <p className="docstext">
            Lucretius is not to be seen as a game for only blockchain players. It does not require any prior knowledge about
            cryptocurrencies or blockchain technology in general. The main target is the adventurous segment of the gaming community. Our target audience
            is slightly bigger than the blockchain gaming community and, by extension, has more potential for revenue.
        </p>

        <p id="Goals" className="docstitle2">Goals</p>

        <p className="docstext">
            The Lucretius complex is a unique game with an inspiring background story, an exciting plot, fun features and other
            characteristics. On the basis of these qualities and considering the segment of the gaming industry the game is targeting, we are confident
            that the Lucretius complex can compete on the global scene and reach one million players within a short period.
        </p>

        <p className="docstext">
            The primary reason is because enjoying the game does not require any prior interest, knowledge or experience with these types of games.
            The plan is to fully develop the potentials of the XRPL blockchain technology while shielding players from all the complexity that comes
            with it.
        </p>

    </div>

    <div id="KeyGameFeatures">
        <p className="docstitle">Key Game Features</p>
        <p className="docstitle2">Key Features</p>
        <p className="docstext">
            The Lucretius complex is loaded with many features that make it fun, interactive, and easy to navigate. It is divided into three core
            areas highlighted below:
        </p>

        <p id="PlayingArea" className="docstitle3">The Playing Area:</p>

        <p className="docstext">
            You can join other players and play different games like billiards, bowling, and poker. More games will be added in
            the future versions of the game. Some include a kids' playground, a rally racetrack, adventure games and an entire golf course outside the
            complex.
        </p>

        <p id="CommunicationArea" className="docstitle3">The Communication Area:</p>

        <p className="docstext">
            The communication area is where you will find the communication, trade, and auction hall. Here, all players can truly
            interact and connect. You can trade your avatars items or other in-game assets with other players. The gallery also allows creators to launch
            auctions, presale events and giveaways for their products.
        </p>

        <p id="Clubbing" className="docstitle3">The Clubbing/Concert/Conference Area:</p>

        <p className="docstext">
            This multipurpose area can be used for all kinds of social activities. Players can rent this area for various
            activities, including clubbing, conferences, AMA sessions, etc. Big DJs, record producers, and music artists can rent the space for concerts
            and sell tickets right there in the complex.
        </p>

        <p id="MiddleArea" className="docstitle3">The Middle Area:</p>

        <p className="docstext">
            In the first version of the game, the middle of the complex has 27 shops that players and other users can buy and use to
            display their products. 24 of these shops are on the first floor while the remaining 3 are on the second floor. These shops are minted as NFTs so
            there will be 27 tokens for all the shops. The owner of the token owns the shop and has full authority to rent it out or sell or use for its products.
            Players and other users will be able to see the all details concerning the shops and their owners. There is a details section at the bottom that users can
            click to see the link to their website and al their social media pages.
        </p>

        <p className="docstext">
            NB: 6 of the 27 shops available in the Lucretius have been reserved by the Moon Light Night platform.
        </p>

        <p id="SecondFloor" className="docstitle3">The Second Floor:</p>

        <p className="docstext">
            the complex's second floor is where the hall is. It is a large hall that will serve as the gallery by default. The walls are covered with
            exquisite artwork, and everyone can see information about the artist by clicking on them. All MLN verified artists have the right to showcase their artworks here
            and put the link of their collection in the marketplace. It has limitation for artists that will be announced at launch. The hall will also be used to host exhibition
            events. The creator will be in charge of running the exhibition.
        </p>

        <p id="Otherfeatures" className="docstitle2">Other features</p>

        <p className="docstext">
            Other essential parts of the game include:
        </p>

        <p id="Avatar" className="docstitle3">Avatar:</p>

        <p className="docstext">
            Every player will be represented in the game with an avatar. Your avatar is what you will use to interact with other players. You can change your avatar's appearance by
            adding different assets to it. Project creators can order their NFT avatars to add it in the game. The price of order will depend on the time of order.
        </p>

        <p id="GameAssets" className="docstitle3">In-Game Assets:</p>

        <p className="docstext">
            items that can be bought within the complex and deployed. Some in- game purchases include avatars, shops, concert tickets, artworks from the gallery/exhibition hall, and
            so on. These assets are minted as NFTs and players can trade them with each other inside the Lucretius complex. However, some assets (like concert tickets) come with an
            expiry date and cannot be used outside of the complex.
        </p>

        <p id="ReputationSystem" className="docstitle3">Reputation System:</p>

        <p className="docstext">
            The game will also feature a reputation system that rewards active players with exclusive benefits based on their level of participation/activity. For example, we implement
            a three-tier reputation system where players can upgrade their status by being active in the complex and interacting with other players.
        </p>

        <p id="CommunityEvents" className="docstitle3">Shared Quests And Community Events:</p>

        <p className="docstext">
            The primary purpose of the Lucretius complex is to create an atmosphere that will develop a sense of community among all players. The complex will make it possible for
            players to come together and organize community events.
        </p>

        <p id="ComingSoon" className="docstitle2">Coming Soon</p>

        <p className="docstext">
            Other exciting features coming in future versions of the game include:
        </p>

        <p id="CrossChainMarketplace" className="docstitle3">In-Game Cross-Chain Marketplace:</p>

        <p className="docstext">
            The NFT marketplace will play a chief part of the Lucretius experience. The marketplace will be based on the XRPL ledger and will grant players immutable ownership of
            the assets they purchase in it. We expect it to be a central hub of activity where players flock to as a part of their Lucretius experience. Players can sell their NFTs
            across different blockchain networks like XRPL, Ethereum, and Solana.
        </p>

        <p id="MoreGamesAdded" className="docstitle3">More Games Added To The Complex:</p>

        <p className="docstext">
            Many more games will be added to the complex to add variety to its offering. Games like rally racing, golf and other adventure/mystery games will be added. As such, we will
            build an entire golf course, a rally racetrack, and a kids' playground outside the complex. In the same vein, the town around the complex will develop with more shops around
            each game.
        </p>
    </div>

    <div id="BlockchainFeatures">
        <p className="docstitle">Blockchain Features</p>

        <p id="GameCurrency" className="docstitle2">Game Currency, The LUC Token</p>

        <p className="docstext">
            The native currency of the game is the LUC token. It is mirrored as a cryptocurrency that operates on the XRPL network. It allows you to play, invest,
            and become a part of the complex. The total supply of LUC tokens is 1,000,000,000 and below are some of its uses:
        </p>

        <ul style={{listStyleType:'circle'}} className="docstext">
            <li>It can be used as a medium of exchange between players.</li>

            <li>NFTs and other digital assets can be purchased from the complex using LUC tokens.</li>

            <li>LUC staking can offer a reward to players.</li>

            <li>The complex can reward active users with LUC tokens for completing tasks and winning competitions.</li>

        </ul>

        <p id="XLS-20/XRPL" className="docstitle2">XLS-20/XRPL Compatibility</p>

        <p className="docstext">
            Ethereum was the first blockchain network to support NFTs functionalities. i.e., on Ethereum, you can easily mint, trade, and even burn NFTs.
            The shortcoming of the Ethereum network is that it can easily get congested during times of high traffic. This congestion leads to very sluggish transaction speeds and very high
            transaction fees. XRPL, on the other hand, is an ultra-efficient blockchain-based payment processing platform that guarantees lightning-fast transactions (three to five seconds) and
            low transaction fees. In other words, it is a decentralized public blockchain that is extremely fast, reliable, and requires minimal energy.
        </p>

        <p className="docstext">
            The inherent advantages (speed and cost) of the XRPL make it a perfect alternative to the Ethereum network as a platform for minting, trading, and burning NFTs. The XRPL can process
            thousands of transactions simultaneously without getting congested like the Ethereum blockchain network.
        </p>

        <p className="docstext">
            The NFT industry is expanding rapidly, and its growth is coming to the XRPL network. In Sept 2021, XRPL’s parent company, Ripple Labs, released a $250 million fund for developers,
            content creators, artists, and brands to develop and implement new use cases for the XRPL.
        </p>

        <p className="docstext">
            More recently, on January 12, 2022, RippleX released the XLS-20-based NFT-Devnet for users to test XRPL's blockchain's capacity for NFTs. Now, developers and other members of the XRPL
            community can mint NFTs for the first time on the blockchain.
        </p>

        <p className="docstext">
            The Lucretius complex is XLS-20 compatible. In other words, Lucretius will implement the full capabilities and functionalities of NFTs on the XRPL.
        </p>

        <p className="docstitle3">Game Assets</p>

        <p id="Collectiblesandscarcity" className="docstitle3">Collectibles And Scarcity</p>

        <p className="docstext">
            Scarcity and collectible items are fundamental in games, and the Lucretius complex is no different. It contains several limited-edition items, scarce NFTs, and so on. It will also include
            lots of user-generated content.
        </p>

        <p className="docstext">
            The complex is very transparent and will display every relevant piece of information, for example, how many units of an asset exist in the ecosystem. The game adopts a decentralized structure
            which helps to improve the overall experience.
        </p>

        <p id="FullyDecentralizedAssets" className="docstitle3">Fully Decentralized Assets</p>

        <p className="docstext">
            Most blockchain-based games deploy NFTs as small amounts of binary data that signifies ownership of an asset. In Lucretius, NFTs will have more functionalities and characteristics. You will
            enjoy complete control of each NFT and how it looks, its non- physical qualities (like speed, strength, etc.), and the game logic of implementing the asset.
        </p>

        <p className="docstext">
            In most blockchain games, this information is often stored elsewhere, not under the player's control and instead under the complete control of the game company. At Lucretius, we strive to
            improve on this as much as possible. Lucretius stores much more data about items on-chain. Also, the logic of things will be defined in a free/libre/open- source game, running on-chain.
        </p>

        <p id="MarketplacesAndTrading" className="docstitle2">Marketplaces And Trading</p>

        <p className="docstext">
            A consequence of the decentralized ownership of assets in the complex is that you can seamlessly trade your holdings across different marketplaces. This feature will incentivize players to
            acquire more in-game purchases. You can sell these items in several marketplaces.
        </p>

        <p className="docstitle2">An Ever-Expanding World</p>

        <p id="NFTCreator" className="docstitle3">NFT Creator</p>

        <p className="docstext">
            The Lucretius NFT Creator is a unique feature that allows players to build their in-game assets based on specific constraints defined by an outline. Depending on the uniqueness of the design,
            a lot of materials may be required to create an NFT.
        </p>

        <p className="docstext">
            The bigger the outline, the more materials will be used to craft the NFT. Lucretius reserves the right to impose constraining rules and review steps for NFT creation to prevent abuse. The NFT
            creator will be gradually rolled out to users, either through competitions or by selling the feature for LUC tokens.
        </p>

        <p id="GameCreator" className="docstitle3">Game Creator</p>

        <p className="docstext">
            The Lucretius game creator allows users to create their mini-games, quests, contests, and so much more. Some of its key features are highlighted below:
        </p>

        <p id="Terrain" className="docstitle4">Terrain:</p>

        <p className="docstext">
            Players will be able to create their obstacle course. The process is so simple that all the player has to do to position items in a terrain. Players will develop their mazes obstacle courses
            by building and using terrain features. The game's first version will organize community-created events like mazes, racetracks, dancehalls, parties, etc. You can develop lotteries and competitions
            that require in-game assets to take part in. There are endless opportunities for monetization; you can even organize concerts and sell tickets just as you would in real life.
        </p>

        <p id="ProgrammerInterfaceAndScripting" className="docstitle4">Programmer Interface Ind Scripting:</p>

        <p className="docstext">
            We are exploring to make the game extensible by exposing an API to developers and integrating a scripting language. This could open up creative possibilities for players within Lucretius and developers.
        </p>

        <p id="GameCore" className="docstitle2">Game Core</p>

        <p className="docstext">
            Backend: XRPL
        </p>

        <p className="docstext">
            The first layer to the Lucretius project is the backend infrastructure for the game.
            Every part of the ecosystem was developed to run on the XRPL. In other words, the
            ecosystem will leverage XRPL to operate user accounts, token transfers, relational
            data, player progress etc.
        </p>

        <p className="docstext">
            As such, the game will inherit the ultra-fast speeds of the network and deliver a
            seamless immersive experience for players. The unique qualities of the XRPL provides
            Lucretius with ability to do complex backend logic on the blockchain at lightning-fast
            speeds. As such, players will enjoy an immersive, responsive and seamless gameplay
            experience every time.
        </p>

        <p className="docstext">
            Frontend: Unity
        </p>

        <p className="docstext">
            The client area is the second layer to the Lucretius complex and it is developed in
            unity. The primary concerns for this layer revolve around aspects such as gameplay
            loops and daily activities that will promote player retention in the long run.
        </p>

        <p className="docstext">
            To this effect, this layer is designed to be fun for all types of players and up to par
            with the most rated games. It is also the layer that connects the backend with the
            frontend, login-registration edge cases as well as stability and stability for multiplayer
            features.
        </p>

        <p id="GameEconomy" className="docstitle2">Game Economy</p>

        <p className="docstext">
            The third area of the Lucretius complex is the economic infrastructure. It covers
            aspects of the game such as NFT trading, shop selling and renting, and LUC token
            transactions.
        </p>
        <p className="docstext">
            Backend: XRPL
        </p>

        <p className="docstext">
            The entire Lucretius complex experience (the gaming, the NFT marketplace and
            auction logic) is done on the XRPL.
        </p>

        <p className="docstext">
            Frontend: Web and Unity
        </p>

        <p className="docstext">
            The frontend to marketplaces and auctions can be accessed as a web application
            embedded into the game. Parts of the user experience might also be done directly in
            Unity.
        </p>


        <p id="GovernanceDAO" className="docstitle2">Governance DAO</p>

        <p className="docstext">
            The Lucretius project will not create only a game but also the structure for a fully-
            fledged Decentralized Autonomous Organization called the Lucretius council.
        </p>

        <p className="docstext">
            Backend: XRPL
        </p>

        <p className="docstext">
            Voting and rules of governance in the Lucretius council can easily be implemented in
            XRPL. The network is capable of handling all governance related tasks swiftly.
        </p>

        <p className="docstext">
            Frontend: Web
        </p>

        <p className="docstext">
            The DAO interface will be a web application, outside of the Lucretius complex.
        </p>

    </div>

    <div id="IntroducingLucretius">

        <p className="docstitle">Tokenomics</p>

        <p id="TokenInformation" className="docstitle2">Token Information</p>

        <p className="docstext">
            The Lucretius token LUC is the native currency of the Lucretius ecosystem. It will allow
            players entry into the complex, participate in activities, and ultimately become a part of the Lucretius ecosystem.
        </p>
        <table className="docstable">
        <tr>
            <th>Name</th>
            <th>Lucretius token</th>
        </tr>
        <tr>
            <td>Ticker</td>
            <td>$LUC</td>
        </tr>
        <tr>
            <td>Blockchain network</td>
            <td>XRPL</td>
        </tr>
        <tr>
            <td>Total supply</td>
            <td>1,000,000,000 tokens</td>
        </tr>
        <tr>
            <td>Max supply</td>
            <td>1,000,000,000 tokens</td>
        </tr>
        
        </table>

        <p id="TokenUtility" className="docstitle2">Token Utility</p>

        <p className="docstext">
            The LUC token will enjoy a wide range of utilities in the Lucretius ecosystem. Some are highlighted below:
        </p>
        <table className="docstable">
        <tr>
            <th>Payments</th>
            <th>The LUC token is all users' currency to purchase items inside the Lucretius complex.</th>
        </tr>
        <tr>
            <td>DeFi</td>
            <td>The Lucretius complex allows users to participate in its staking program to lend their LUC tokens and receive interest in return. Users who participate in the staking program will also receive rewards because a certain percentage of the revenue generated will be distributed as staking rewards. In other words, we will distribute a portion of the revenue generated from asset sales, transaction fees, shop sales, etc., among users who took part in the staking program. Additionally, all NFTs in the complex will come with DeFi features like buybacks and collateralization.</td>
        </tr>
        <tr>
            <td>Play to Earn</td>
            <td>Users can also earn LUC tokens for completing tasks, winning contests, and participating in other activities in the Lucretius complex. It will incentivize user participation and maintain traction in the complex.</td>
        </tr>
        
        </table>

        <p id="TokenAllocation" className="docstitle2">Token Allocation</p>
            <br/><br/>
        <img className="docsimg" src="/img/docs/chart.png"/>

        <table className="docstable">
        <tr>
            <th>Purpose</th>
            <th>Allocation (LUC tokens)</th>
        </tr>
        <tr>
            <td>Total Initial Offering</td>
            <td>200,000,000</td>
        </tr>
        <tr>
            <td>User Incentives</td>
            <td>50,000,000</td>
        </tr>
        <tr>
            <td>Platform rewards</td>
            <td>100,000,000</td>
        </tr>
        <tr>
            <td>Ecosystem</td>
            <td>150,000,000</td>
        </tr>
        <tr>
            <td>Airdrop</td>
            <td>100,000,000</td>
        </tr>
        <tr>
            <td>Airdrop (Twitter)</td>
            <td>50,000,000</td>
        </tr>
        <tr>
            <td>Team and Advisors</td>
            <td>150,000,000</td>
        </tr>
        <tr>
            <td>Reserved for staking</td>
            <td>200,000,000</td>
        </tr>
        
        </table>
        <br/><br/>

        <p className="docstext">
            The total supply of LUC tokens is 1,000,000,000.
        </p>

        <p className="docstext">
            1. 200,000,000 (20%) is for the total initial offering events. There will be a total of four sale events in February.
        </p>

        <ul style={{listStyleType:'circle'}} className="docstext">
            <li>5th-7thFebruary: First round of private sale of 25,000,000 (2.5%) LUC tokens at 0.008 XRP each.</li>

            <li>10th February-14th March: Initial DEX Offering (IDO) of 50,000,000 (5%) LUC tokens at 0.012 XRP each.</li>

            <li>LUC staking can offer a reward to players.</li>

            <li>Initial Exchange Offering (IEO) of 100,000,000 (10%) LUC tokens. Date and exchange details will be announced when the exchanges get confirmed.</li>

        </ul>

        <p className="docstext">
            2. 50,000,000 (5%) is for our various user incentive programs. It will also encourage user participation and maintain game traction.
        </p>

        <p className="docstext">
            3. 100,000,000 (10%) is for our Platform rewards programs. We will use them to reward players who participate in competitions and other activities inside the complex.
        </p>

        <p className="docstext">
            4. 150,000,000 (15%) is for the Lucretius ecosystem. These tokens will be used for various ecosystem-development initiatives, new features, updates, and related purposes.
        </p>

        <p className="docstext">
            5. 100,000,000 (10%) is for our airdrop events. Our airdrop events will be held in several batches to create liquidity in the market. LUC tokens will be distributed to trustlines whenever the team detects that the market needs liquidity.
        </p>

        <p className="docstext">
            A total of 100k trustlines will be eligible to receive LUC tokens during our airdrop events based on the amount of XRP and LUC tokens they hold. 75,000,000 LUC tokens will be distributed to LUC holders, while 25,000,000 tokens will be distributed to XRP holders. Snapshot for the airdrop event will take place on the 25th of April 2022. Distribution will take between 3-6 months starting from May 2022. Distribution will also take place in response to the demand for liquidity in the market.
        </p>


        <p className="docstext">
            NB: Lucretius has right to change number of qualified trustlines if the number
            of LUC holders grows beyond 100K.
        </p>

        <p className="docstext">
            6. 50,000,000 (5%) is for our Twitter airdrop event. We will distribute 1000 LUC
            tokens to our first 50,000 Twitter followers during this event. Each of them will
            receive 1000 LUC tokens.
        </p>

        <p className="docstext">
            7. 150,000,000 (15%) is reserved for the Lucretius team (founding & non-founding
            team members) and our advisors.
        </p>


        <p className="docstext">
            8. 200,000,000 (20%) is reserved for our staking program rewards. Any user can
            participate in the program by staking their tokens to reduce the volume in circulation and earn rewards in return.
        </p>

    </div>

    <div id="BurningMechanism">

        <p className="docstitle">Burning Mechanism (BM)</p>

        <p id="AssetsSale" className="docstitle2">Assets Sale</p>

        <p className="docstext">
            We will automatically burn 50% of all Avatar assets, Game assets, and MetaVerse assets sales. We will share 40% between all Burning Mechanism Partners
            (BMP) and recycle the remaining 10% into the ecosystem.
        </p>

        <p id="TransactionFees" className="docstitle2">Transaction Fees</p>

        <p className="docstext">
            Every NFT asset transaction will attract a 0.02% fee. We will burn the accumulation of the fees as follows:
        </p>
        <ul style={{listStyleType:'circle'}} className="docstext">

            <li>automatically burn 50%</li>
            <li> share 40% between Burning Mechanism Partners (BMP)</li>
            <li>automatically burn 50%</li>

        </ul>
        <p id="EventsCosts" className="docstitle2">Events Costs</p>

        <p className="docstext">
            The rental fee collected from all Creators and Planners will go into the Burning Mechanism and will be allocated as follows:
        </p>
        <ul style={{listStyleType:'circle'}} className="docstext">

            <li>automatically burn 50%</li>
            <li> share 40% between Burning Mechanism Partners (BMP)</li>
            <li>automatically burn 50%</li>

        </ul>
    </div>

    <div id="BurningMechanismPartner">

        <p className="docstitle">Burning Mechanism Partner(BMP)</p>

        <p id="XRPLTop100Holders" className="docstitle2">XRPL Top 100 Holders</p>

        <p  className="docstext">
            Our BMP list will comprise the top 100 holders each month.
        </p>

        <p className="docstext">
            We will rank the top 100 holders and reward them with their BMP shares based on their average balance during our two snapshot periods.
        </p>

        <p className="docstext">
            The first snapshot period will take place from 10th - 15th while the second snapshot period will take place from 25th - 30th of each month.
        </p>

        <p id="LucretiusAmbassadors" className="docstitle2">Lucretius Ambassadors</p>

        <p className="docstext">
            There are so many benefits that come with being a Lucretius ambassador. Ambassador wallets will appear on our BMP list and they'll also get to run Lucretius giveaway events on their page.
        </p>

        <p className="docstext">
            You can apply to become a Lucretius ambassador by sending a message to us on Twitter. Pages are required to meet certain requirements to qualify and get approval to be Lucretius ambassadors.
        </p>

        <p className="docstext">
            Send in your application today.
        </p>

        <p id="SolidSupporters" className="docstitle2">Solid Supporters</p>

        <p className="docstext">
            We will name our solid supporters every week on Twitter. Solid supporters will be selected based on engagements with our posts including following, sharing, and commenting on our social media posts and Lucretius events.
        </p>

        <p className="docstext">
            Those who are announced as solid supporters on Twitter will have their wallet addresses included in the BMP list and will receive the equivalent rewards.
        </p>

        <p id="SolidPlayers" className="docstitle2">Solid Players</p>

        <p className="docstext">
            Solid players are those who constantly connect their wallets to our games and MetaVerse. Players in the top 5% will have their wallets included on the Lucretius BMP list and receive the equivalent rewards.
        </p>

        <p id="TournamentsWinners" className="docstitle2">Tournaments Winners</p>

        <p className="docstext">
            Winners of the Lucretius games tournament will have their wallets posted on the BMP list. The top three winners from each tournament will spend three consecutive months on the BMP list.
        </p>

        <p id="LucretiusCitizens" className="docstitle2">Lucretius Citizens</p>

        <p className="docstext">
            We have defined various types of permanent employment opportunities for Lucretius users. Users whose wallet addresses own lands, shops or have jobs in the Lucretius city are the bonafide citizens of Lucretius. As such, they will be included in the BMP list.
        </p>

        <p className="docstext">
            Burning Mechanism will commence after the official launch of our MetaVerse in early 2023 but we will reward BMPs even before then.
            We will distribute two million $LUC tokens to BMPs over a six month period from July to December 2022.
        </p>

    </div>

    <div id="DefiComponent">

        <p className="docstitle">DeFi Component</p>

        <p id="Incentives" className="docstitle2">Incentives</p>

        <p className="docstext">
            One of our strategies is to provide abundant monetary incentives for the most active and motivated players. We will handsomely reward these players for their commitment and dedication.
        </p>

        <p id="StakingYield" className="docstitle2">Staking Yield</p>

        <p className="docstext">
            Based on our staking and rewards projections, we will reserve a fair amount of LUC tokens for staking rewards. This reward will incentivize players to hold their tokens, especially in the early phases of the project, where most of the features are still in development. Our staking programs will reduce as these features are being completed and released.
        </p>

        <p id="NFTCollateral" className="docstitle2">NFT Collateral</p>

        <p className="docstext">
            When a player purchases an NFT in the Lucretius complex, a portion of the price goes into a particular collateral account linked with the NFT. It enables the player to sell (burn) the NFT to the complex in exchange for the value of the locked collateral (or some part of it).
        </p>

        <p id="RentingNFTs" className="docstitle2">Renting NFTs</p>

        <p className="docstext">
            In the Lucretius complex, you can rent out your NFTs to other players through the use of smart contracts. Smart contracts will ensure that the NFT returns to the owner and that the borrowing player cannot re-sell or destroy the object.
        </p>

        <p className="docstext">
            Lucretius aims to become a truly player-owned game with its own Decentralized organization called the Lucretius Council governed by the community of players. The council will over time take over the majority of decision-making powers within the game. The Lucretius Council will become a crucial element of the game ecosystem which will address both in-game issues as well as the proposals connected to development of the complex and future funding.
        </p>

    </div>

    <div id="BurnToEarn">

        <p className="docstitle">Burn To Earn'25'</p>

        <p className="docstext">
            UP to 1040% APY
        </p>

        <p className="docstext">
            At Lucretius, we have designed the Burn to Earn "25" program to support our early investors and loyal followers before we launch our Lucretius metaverse. The program is aimed at members of the XRPL community; as such, exchange wallets will be ineligible to participate.
        </p>

        <p className="docstext">
            Please read the full information below to gain a deeper understanding of the program.
        </p>

        <p className="docstext">
            To participate in the program, you will buy $LUC tokens from the market and send them to the wallet address provided below:
        </p>

        <p className="docstext">
            "rK6oxn1UBPRSyjFPgw9HmRdGQNwku55Wg6"
        </p>
        <p className="docstext">
            The tokens will be burnt automatically upon arrival at the address. Participants must submit their wallet address, the transaction hash for buying tokens, and the transaction hash for transferring tokens to the burn wallet address.
        </p>

        <p className="docstext">
            For example:
        </p>

        <p className="docstext">
            If you buy a total of 100,000 $LUC from the market through four transactions, you will have four different transaction hashes:
        </p>

        <p className="docstext">
            ABB1234...
        </p>

        <p className="docstext">
            B2233HH...
        </p>

        <p className="docstext">
            C3456AA...
        </p>

        <p className="docstext">
            DTED44...
        </p>

        <p className="docstext">
            Then you send all the 100,000 $LUC to the wallet address provided to burn, and you get another transaction hash:
        </p>

        <p className="docstext">
            ETH321BBB...
        </p>

        <p className="docstext">
            To participate in the Burn to Earn “25” program, you must submit your wallet address, the four transaction hashes for buying the $LUC tokens, and the transaction hash for transferring tokens to the burn wallet address into the provided form fields.
        </p>

        <p className="docstext">
            The first week of the incentive program will commence twenty-four hours after submission. Participants will enjoy the following APY percentages:
        </p>

        <p className="docstext">
            G1 (4 weeks)  =>  1040% APY
        </p>

        <p className="docstext">
            G1 (4 weeks)  =>  1040% APY
        </p>

        <p className="docstext">
            G2 (4 weeks)  =>  520% APY
        </p>

        <p className="docstext">
            G3 (4 weeks)  =>  260% APY
        </p>

        <p className="docstext">
            G4 (13 Weeks)  =>  240% APY
        </p>

        <p className="docstext">
            Continuing based on the example above, you participated in the program with 100,000 $LUC. Below is a breakdown of your rewards for 25 weeks of the program:
        </p>

        <p className="docstext">
            First 4 weeks
        </p>

        <p className="docstext">
            1040% APY  =  1,040,000/52  =  20,000  =>  80,000 Receivable for 4 weeks
        </p>

        <p className="docstext">
            Second 4 weeks
        </p>

        <p className="docstext">
            520% APY  =  520,000/52  =  10,000  =>  40,000 Receivable for 4 weeks
        </p>

        <p className="docstext">
            Third 4 weeks
        </p>


        <p className="docstext">
            260% APY  =  260,000/52  =  5,000  =>  20,000 Receivable for 4 weeks
        </p>


        <p className="docstext">
            Last 13 weeks
        </p>


        <p className="docstext">
            240% APY  =  240,000/52  =  4,616  =>  60,000 Receivable for 13 weeks
        </p>

        <p className="docstext">
            Total reward for 25 weeks: 200,000
        </p>

        <p className="docstext">
            <b>NB:</b>
        </p>

        <p className="docstext">
            1. The Burn to Earn “25” program is designed for members of the XRPL community; exchange wallets will be ineligible to participate.
        </p>

        <p className="docstext">
            2. The program will commence on Friday 1st July 2022, and participation will stay open until 100,000,000 $LUC tokens are burned. In other words, the Burn to Earn “25” program will end when that amount is reached.
        </p>

        <p className="docstext">
            3. The reward deposits in less than 24h
        </p>

        <p className="docstext">
            4. Rewards will be distributed weekly starting 1st July
        </p>


        <p className="docstext">
            5. Lucretius will accept only successful transactions on XRPL DEXs for participation in the program.
        </p>

    </div>

    <div id="GoldenPiggy">

        <p className="docstitle">Golden Piggy '36'</p>

        <p className="docstext">
            We have created the Golden Piggy "36" program to support $LUC investors and holders until the launch of our MetaVerse. The program is built around 36 weeks of rewards where token holders will enjoy APY of between 30% and 520%.
        </p>

        <p className="docstext">
            Please check the rewards and percentages below for better understanding :
        </p>

        <p className="docstext">
            36 Weeks Rewards
        </p>

        <p className="docstext">
            1st Grade 4 week : Weekly 30% APY
        </p>

        <p className="docstext">
            2nd Grade 4 week : Weekly 50% APY
        </p>

        <p className="docstext">
            3rd Grade 5 week : Weekly 70% APY
        </p>

        <p className="docstext">
            4th Grade 4 week : Weekly 100 % APY
        </p>

        <p className="docstext">
            5th Grade 4 week : Weekly 130% APY
        </p>

        <p className="docstext">
            6th Grade 5 week : Weekly 180% APY
        </p>

        <p className="docstext">
            7th Grade 4 week : Weekly 250% APY
        </p>

        <p className="docstext">
            8th Grade 5 week : Weekly 350% APY
        </p>

        <p className="docstext">
            9th Grade 1 week : Weekly 520% APY
        </p>

        <p className="docstext">
            Example: 100K LUC
        </p>

        <p className="docstext">
            1st = 30000/52 weekly => 577(4)= 2307 For 1st Grade
        </p>

        <p className="docstext">
            2nd = 50000/52 weekly => 962(4)= 3846 For 2nd Grade
        </p>

        <p className="docstext">
            3rd = 70000/52 weekly => 1346(5)= 6731 For 3rd Grade
        </p>

        <p className="docstext">
            4th = 100000/52 weekly => 1923(4)= 7692 For 4th Grade
        </p>

        <p className="docstext">
            5th = 130000/52 weekly => 2500(4)= 10000 For 5th Grade
        </p>

        <p className="docstext">
            6th = 180000/52 weekly => 3462(5)= 17308 For 6th Grade
        </p>

        <p className="docstext">
            7th = 250000/52 weekly => 4808(4)= 19230 For 7th Grade
        </p>

        <p className="docstext">
            8th = 350000/52 weekly => 6731(5)= 33654 For 8th Grade
        </p>

        <p className="docstext">
            9th  =  520000/52 Weekly => 10000(1)= 10000 For 9th Grade
        </p>

        <p className="docstext">
            Total reward for 36 weeks = 100,769
        </p>

        <p className="docstext">
            <b>NB:</b>
        </p>

        <p className="docstext">
            1. To participate in the Golden Piggy '36' program, you'll subscribe using your wallet address and the number of turns you want to participate with.
        </p>

        <p className="docstext">
            2. Your rewards will be automatically canceled the day your holding amount falls below your subscription amount. For example, if you subscribe with 100k LUC, you are required to keep your holding balance above 100k. If your holding balance drops to 99,999, your subscription will be canceled automatically and you will lose out on the rewards of the remaining weeks.
        </p>

        <p className="docstext">
            3. You can increase your subscription amount by adding to your holding balance. You must subscribe the program for an additional amount and your rewards will be coming after the first week and it'll be calculated separately from the previous rewards.
        </p>

        <p className="docstext">
            4. Minimum holding amount to participate is 1000LUC, maximum is 1,000,000LUC.
        </p>

        <p className="docstext">
            5. The Golden Piggy '36' will commence on Monday 20th June 2022.
        </p>

        <p className="docstext">
            6. Subscription period begins 1st June and ends July 31st. (May be extended)
        </p>

    </div>
    <div id="RoadMap">

        <p className="docstitle">RoadMap</p>

        <div className="docstext">
          The Lucretius complex project is still in its early stages. Below is a breakdown of our
            roadmap for the journey ahead.
            <br/><br/>
            
               
                <b>Q1 2022</b>
                <ul style={{ listStyleType: 'none',}}>
                                <li>15<sup>th</sup> January 
                                        <ul style={{ listStyleType: 'none',}}>
                                        <li>
                                        Launch the temporary version of the Lucretius website,
                                        </li>
                                        <li>
                                        Issue LUC tokens, 
                                        </li>
                                        <li>
                                        Start building the Lucretius community and spreading the news
                                        </li>
                                        </ul>
                          
                                </li>
                                <li>5<sup>th</sup> February
                                        <ul style={{ listStyleType: 'none',}}>
                                        <li>
                                        Commence the first round of the private sale on the website (5<sup>th</sup> February 10AM UTC to 7<sup>th</sup> February 10AM UTC)
                                        </li>
                                        <li>
                                        Release the first version of the Lucretius whitepaper
                                        </li>
                                        <li>
                                        Release the update for the Lucretius website
                                        </li>

                                        </ul>
                          
                                </li>
                                <li>7<sup>th</sup> February 
                                        <ul style={{ listStyleType: 'none',}}>
                                        <li>
                                        Commence the second round of the private sale on the Lucretius
                                            website.(7<sup>th</sup>-10<sup>th</sup> February)
                                        </li>

                                        </ul>
                          
                                </li>
                                <li>10<sup>th</sup> February
                                <ul style={{ listStyleType: 'none',}}>
                                        <li>
                                        IDO (10<sup>th</sup> February 2PM UTC to 14<sup>th</sup> February 2PM UTC)
                                        </li>
                                        
                                        </ul>  
                                </li>
                                <li>15<sup>th</sup> February
                                <ul style={{ listStyleType: 'none',}}>
                                        <li>
                                        Distribution for private sale.
                                        </li>
                                      
                                        </ul>
                                </li>
                                <li>25<sup>th</sup> February
                                <ul style={{ listStyleType: 'none',}}>
                                        <li>
                                        List LUC tokens on CEX
                                        </li>
                                        <li>
                                        Release website update
                                        </li>
                                        
                                        </ul>
                                </li>
                                <li>5<sup>th</sup> March
                                <ul style={{ listStyleType: 'none',}}>
                                        <li>
                                        Release the map of Lucretius world and plot of complex
                                        </li>
                                        
                                        </ul>
                                </li>
                                <li>15<sup>th</sup>-25<sup>th</sup> March
                                <ul style={{ listStyleType: 'none',}}>
                                        <li>
                                        Show game starter avatars. 
                                        </li>
                                      
                                        </ul>
                                </li>
                                </ul>

               
               
                <b>Q2 2022</b>
                <ul style={{ listStyleType: 'none',}}>
                                <li>25<sup>th</sup> March-25<sup>th</sup> April 
                                        <ul style={{ listStyleType: 'none',}}>
                                        <li>
                                        List the LUC token on five major Centralized Exchanges (CEX)
                                        </li>
                                      
                                        </ul>
                          
                                </li>
                                <li>April 20
                                        <ul style={{ listStyleType: 'none',}}>
                                        <li>
                                        Release teaser for the Lucretius complex and game
                                        </li>

                                        </ul>
                          
                                </li>
                                <li>April 25 
                                        <ul style={{ listStyleType: 'none',}}>
                                        <li>
                                        Release more details about the staff, features, avatars, lots, shops, and
                                            NFTs.
                                        </li>
                                        <li>
                                        Snapshot for first 100K trustlines
                                        </li>
                                        <li>
                                        Snapshot for 50K Twitter followers
                                        </li>

                                        </ul>
                          
                                </li>
                                <li>25<sup>th</sup> April-25<sup>th</sup> June
                                <ul style={{ listStyleType: 'none',}}>
                                        <li>
                                        Spread the news by leveraging crypto-influencers and hosting multiple
                                          <br/>  Ask Me Anything (AMA) sessions with major Centralized Exchanges
                                            (CEX)
                                        </li>
                                        
                                        </ul>  
                                </li>
            
                                <li>May to September
                                <ul style={{ listStyleType: 'none',}}>
                                        <li>
                                        Systematically double the volume of liquidity by distributing tokens
                                        during airdrop events. 
                                        </li>
                                      
                                        
                                        </ul>
                                </li>
                              
                                </ul>

               
                <b>Q3 2022</b> 
                <ul style={{ listStyleType: 'none',}}>
                                        <li>
                                        Continue to expand community globally
                                        </li>
                                        <li>
                                        Mint all the assets in Lucretius Complex as NFTs 
                                        </li>
                                        <li>
                                        Continue creating more liquidity 
                                        </li>
                                        <li>
                                        Finalize the blockchain API 
                                        </li>
                                        
                                        </ul>
                
              
                <b>Q4 2022</b>  
                  <ul style={{ listStyleType: 'none',}}>
                                        <li>
                                        Launch game demo (test-net)

                                        </li>
                                        <li>
                                        Finalize the blockchain API to integrate with Lucretius game
                                        </li>
                                        <li>
                                        Test the game
                                        </li>
                                        
                                        </ul>
               
               <b>Q1 2023</b>
                <ul style={{ listStyleType: 'none',}}>
                                        <li>
                                        Launch the first version of the Lucretius Complex
                                        </li>
                                        <li>
                                        Incentive users 
                                        </li>
                                        <li>
                                        DeFi components
                                        <ul style={{ listStyleType: 'none',}}>
                                        <li>
                                        - develop web-based Lucretius game
                                        </li>
                                        </ul>
                                        </li>
                                        
                                        </ul>
               
                <b>Q2 2023</b>
                <ul style={{ listStyleType: 'none',}}>
                                        <li>
                                        Develop and launch IOS and android versions of Lucretius
                                        <ul style={{ listStyleType: 'none',}}>
                                      <li>
                                        - add features, expand the complex spaces
                                        </li>
                                        </ul>
                                        </li>
                                        
                                        </ul>
                
                <b>Q3 2023</b>
                <ul style={{ listStyleType: 'none',}}>
                                        <li>
                                        Add more games to the metaverse to make more interactions
                                        <ul style={{ listStyleType: 'none',}}>
                                        <li>
                                        - expand complex to metaverse City
                                        </li>
                                        </ul>
                                        </li>
                                        
                                        </ul>
                
           

                      </div>
    </div>

    <div id="Summary">

        <p className="docstitle">Summary</p>

        <p className="docstext">
            The Lucretius project is an exciting new metaverse with lots of unique features. In addition to a compelling plot, the game is loaded with lots of activities for players to engage in. an example of these fantastic features is the in-game cross-chain NFT marketplace that allows players to trade their NFTs across various blockchain networks. The game is heavily incentivized, and as such, active and dedicated players will be rewarded with points and LUC tokens.
        </p>

        <p className="docstext">
            The LUC token is the native currency of the Lucretius complex, and it's the only accepted means of payment. Players can use their LUC tokens to acquire NFTs and other in-game assets within the Lucretius complex.
        </p>

        <p className="docstext">

            The game is built on the ultra-efficient XRPL ledger and provides the player with an incredibly immersive gameplay experience. The interface is visually appealing and extremely easy to navigate, making it an enjoyable game to play anytime, any day.
        </p>
    </div>

        </Grid>
      </Grid>
      <Script
            id="jq-jsssjkreijaazx"
            src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"
            onLoad={() => {
                var toggler = document.getElementsByClassName("caret");
                var i;
                
                for (i = 0; i < toggler.length; i++) {
                    toggler[i].addEventListener("click", function() {
                    this.parentElement.querySelector(".nested").classList.toggle("active");
                    this.classList.toggle("caret-down");
                  });
                }

            }}
        
        /> 
          <Script
              id="stripe-jsaoxowwmbgvcd"
              src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
              onLoad={() => {
                
                var modal = document.getElementById("myModal");

                var btn = document.getElementById("myBtn");

                var span = document.getElementsByClassName("close")[0];

                btn.onclick = function() {
                modal.style.display = "block";
                }

                span.onclick = function() {
                modal.style.display = "none";
                }

                window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
                }

              }}
            />



             
         </div> 
    </div>
  );
}

export default Docs;
