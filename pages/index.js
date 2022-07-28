import Head from 'next/head'
import Image from 'next/image'
import AvatarSlider from '../component/element/AvatarSlider'
import Footer from '../component/element/Footer'
import Header from '../component/element/Header'
import SocialMedia from '../component/element/SocialMedia'
import styles from '../styles/Home.module.css'
import AboutUs from './AboutUs'
import GoldenPiggy from './GoldenPiggy'
import Docs from './Docs'
import BurnToEarn from './BurnToEarn'
import LucBuzz from './LucBuzz'
import LucBuzzStatus from './LucBuzzStatus'
import TimelinePool from '../component/element/TimelinePool'
import RichList from './RichList'
import Snapshots from './Snapshots'
import TwitterFollowersList from './TwitterFollowersList';
import LUCtoXRPholder from './LUCtoXRPholder'
import XRPLTop100Holders from './XRPLTop100Holders'
import PrivacyPolicy from './PrivacyPolicy'
import TermOfService from './TermOfService'
import Games from './Games'
import HomePage from './HomePage'
import GameSlider from '../component/element/GameSlider'
import RoadMap from '../component/element/RoadMap'
import { StrictMode } from "react";

export default function Home() {
  return (

       <StrictMode>
       <HomePage/>
     </StrictMode>
  
  )
}
