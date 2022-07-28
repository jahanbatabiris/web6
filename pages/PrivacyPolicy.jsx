import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Script from 'next/script'
import Head from "next/head";

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
 

}));

function PrivacyPolicy() {
  return (
    <div style={{ backgroundColor:'#0C0617',paddingLeft:'5%',paddingRight:'5%'}}>
       <Head>
          <link rel="icon" type="/img/total/logot.ico" sizes="32x32" href="/img/total/logot.ico" />
          <link rel="icon" type="/img/total/logot.ico" sizes="16x16" href="/img/total/logot.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/img/total/logot.ico" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="title" content="Lucretius"/>
          <meta name="description" content="Lucretius"/>
          <meta name="robots" content="index, follow" />
          <title>Privacy Policy</title>
        </Head>

         <br/>
        <h1 className="tPrivacy">Lucretius Privacy Policy</h1>
        <p className="t2Privacy" >(Last Updated: March 19th, 2022)</p>
        <br/><br/>
        <p className="pPrivacy" >
           
        LUCRETIUS (“LUCRETIUS,” “we”, “us”, or “our”) is committed to protecting your privacy.
        We have prepared this Privacy Policy to describe to you our practices regarding the Data (as defined below) we collect, 
        use, and share in connection with the LUCRETIUS website, mobile app, and other software provided on or in connection with our services, 
        as described in our Terms of Service (collectively, the “Service”). “NFT” in this Privacy Policy means a non-fungible token or similar digital 
        item implemented on a blockchain (such as the XRP Ledger), which uses smart contracts to link to or otherwise be associated with certain content or data.
        </p>
        <br/>
        <br/>
        <h2 className="t3Privacy">
            1.0 Types of Data We Collect 
        </h2>
        <br/>
        <p className="pPrivacy" >
            "Personal Data" means data that allows someone to identify you individually, including, for example, your wallet address, 
            as well as any other non-public information about you that is associated with or linked to any of the preceding. "Anonymous Data" means data,
            including aggregated and de-identified data that is not associated with or linked to your Personal Data; Anonymous Data does not permit the identification of individual persons.
            We collect Personal Data and Anonymous Data as described below.
        </p>
        <br/>
        <br/>
        <h2 className="t3Privacy" >
            2.0 Information You Provide Us
        </h2>
        <br/>
        <p className="pPrivacy">
            When you access Lucretius, update your account profile, or contact us, we may collect Personal Data from you, such as email address, 
            first and last name, user name, and other information you provide. We also collect your wallet address, which may become associated with Personal Data when using our Service.
            <br/>Our Service lets you store preferences like how your content is displayed, notification settings, and favorites. We may associate these choices with your ID, browser, or mobile device.
            <br/> If you provide us with feedback or contact us, we will collect your name and contact information and any other content included in the message.
            <br/>We may also collect Personal Data at other points in our Service where you voluntarily provide it or where we state that Personal Data is being collected.

        </p>
        <br/>
        <br/>
        <h2 className="t3Privacy" >
            3.0 Information Collected via Technology
        </h2>
        <br/>
        <p className="pPrivacy">
            As you navigate through and interact with Lucretius, we may use automatic data collection technologies to collect certain information about your equipment, browsing actions, and patterns, including:
        </p>
        <br/>
        <br/>
        <h2 className="t3Privacy" >
            4.0 Information Collected by Our Servers 
        </h2>
        <br/>
        <p className="pPrivacy">
            To provide our Service and make it more useful to you, we (or a third-party service provider) collect information from you, including,
            but not limited to, your browser type, operating system, Internet Protocol ("IP") address, mobile device ID, blockchain address, wallet type, and date/time stamps.
        </p>
        <br/>
        <br/>
        <h2 className="t3Privacy">
            5.0 Log Files
        </h2>
        <br/>
        <p className="pPrivacy">
            As is true of most websites and applications, we gather certain information automatically and store it in log files.
            This information includes IP addresses, browser type, Internet service provider ("ISP"),
            referring/exit pages, operating system, date/time stamps, and clickstream data. 
            We use this information to analyze trends, administer the Service, track users' movements around the Service,
            and better tailor our Services to our users' needs. For example, some of the information may be collected so that when you visit the Service, 
            it will recognize you, and we can use the information to personalize your experience.
        </p>
        <br/>
        <br/>
        <h2 className="t3Privacy">
            6.0 Cookies 
        </h2>
        <br/>
        <p className="pPrivacy">
            Like many online services, we use cookies to collect information. We may use both session Cookies (which expire once you close your web browser) and persistent Cookies
            (which stay on your computer until you delete them) to analyze how users interact with our Service, improve our product quality, and provide users with a more personalized experience.
        </p>
        <br/>
        <br/>
        <h2 className="t3Privacy">
            7.0 Pixel Tag
        </h2>
        <br/>
        <p className="pPrivacy">
            In addition, we use “Pixel Tags” (also referred to as clear Gifs, Web beacons, or Web bugs).
            Pixel Tags allow us to analyze how users find our Service, make the Service more useful to you, and tailor your experience with us to meet your particular interests and needs.
        </p>
        <br/>
        <br/>
        <h2 className="t3Privacy">
            8.0 How We Respond to Do Not Track Signals.
        </h2>
        <br/>
        <p className="pPrivacy">
            Our systems do not currently recognize "do not track" signals or other mechanisms that might enable Users to opt-out of tracking on our site.
        </p>
        <br/>
        <br/>
        <h2 className="t3Privacy">
            9.0 Analytics Services

        </h2>
        <br/>
        <p className="pPrivacy">
            In addition to the tracking technologies we place like Cookies and Pixel Tags, other companies may set their cookies or similar tools when you visit our Service.
            It includes third-party analytics services ("Analytics Services") that we engage to help analyze how users use the Service. The information generated by the Cookies 
            or other technologies about your use of our Service (the "Analytics Information") is transmitted to the Analytics Services. The Analytics Services use Analytics Information to
            compile reports on user activity, which we may receive on an individual or aggregate basis. We use the information we get from Analytics Services to improve our Service. 
            The Analytics Services may also transfer information to third parties where required to do so by law or where such third parties process Analytics Information on their behalf. 
            Each Analytics Services’ ability to use and share Analytics Information is restricted by such Analytics Services’ terms of use and privacy policy. By using our Service, 
            you consent to the processing of data about you by Analytics Services in the manner and for the purposes set out above.
        </p>
        <br/>
        <br/>
        <h2 className="t3Privacy">
            10.0 Information Collected from Third-Party Companies
        </h2>
        <br/>
        <p className="pPrivacy">
            We may receive Personal and/or Anonymous Data about you from companies that offer their products and/or services for use in 
            conjunction with our Service or whose products and/or services may be linked from our Service. For example, third-party wallet providers 
            provide us with your blockchain address and certain other information you choose to share with those wallets providers. We may add this to
            the data we have already collected from or about you through our Service.
        </p>
        <br/>
        <br/>
        <h2 className="t3Privacy">
            11.0 Public Information Observed from Blockchains
        </h2>
        <br/>
        <p className="pPrivacy">
            We collect data from publicly visible and/or accessible activity on blockchains. 
            It may include blockchain addresses and information regarding purchases, sales, or transfers of NFTs,
            which may be associated with other data you have provided to us.
        </p>
        <br/>
        <br/>
        <h2 className="t3Privacy">
            12.0 Use of Your Personal Data
        </h2>
        <br/>
        <p className="pPrivacy">
            We process your Personal Data to run our business, provide the Service, personalize your experience on the Service, and improve the Service. Specifically, we use your Personal Data to:
            <br/>•	facilitate the creation of and secure your account;
           <br/> •	identify you as a user in our system;
          <br/>  •	provide you with our Service, including, but not limited to, helping you view, explore, play games and create NFTs using our tools and, at your discretion, connect directly with others to purchase,
          sell, or transfer NFTs on public blockchains;
          <br/> •	improve the administration of our Service and quality of experience when you 
          interact with our Service, including, but not limited to, by analyzing how you and other users find and interact with the Service;
          <br/> •	provide customer support and respond to your requests and inquiries;
          <br/>  •	investigate and address conduct that may violate our Terms of Service;
          <br/>  •	detect, prevent, and address fraud, violations of our terms or policies, and/or other harmful or unlawful activity;
          <br/> •	send you administrative notifications, such as security, support, and maintenance advisories;
          <br/> •	send you notifications related to actions on the Service, including notifications of offers on your NFTs;
          <br/>  •	respond to your inquiries related to employment opportunities or other requests;
          <br/>  •	comply with applicable laws, cooperate with investigations by law enforcement or other authorities of suspected violations of law,
          and/or to pursue or defend against legal threats and/or claims; and
          <br/>  •	Act in any other way we may describe when you provide the Personal Data.
          
        </p>
        <br/>
        <br/>
        <h2 className="t3Privacy">
            13.0 We may create Anonymous Data records from Personal Data
        </h2>
        <br/>
        <p className="pPrivacy">
            We use this Anonymous Data to analyze request and usage patterns so that we may improve our 
            Services and enhance Service navigation. We reserve the right to use Anonymous Data for any purpose and to disclose Anonymous Data to third parties without restriction.
        </p>
        <br/>
        <br/>
        <h2 className="t3Privacy">
            14.0 Disclosure of Your Personal Data
        </h2>
        <br/>
        <p className="pPrivacy">
            We disclose your Personal Data as described below and elsewhere in this Privacy Policy.
        </p>
        <br/>
        <br/>
        <h2 className="t3Privacy">
            15.0 Third-Party Service Providers
        </h2>
        <br/>
        <p className="pPrivacy">
            We may share your Personal Data with third-party service providers to provide technical infrastructure services;
            conduct quality assurance testing; analyze how our Service is used; prevent, detect, and respond to unauthorized activities; provide technical and customer support;
            and/or provide other support to the Service and us.
        </p>
        <br/>
        <br/>
        <h2 className="t3Privacy">
            16.0 Affiliates
        </h2>
        <br/>
        <p className="pPrivacy">
            We may share some or all of your Personal Data with any subsidiaries, joint ventures, or other companies under our common control ("Affiliates").
            We will require our Affiliates to honor this Privacy Policy.
        </p>
        <br/>
        <br/>
        <h2 className="t3Privacy">
            17.0 Legal Rights
        </h2>
        <br/>
        <p className="pPrivacy">
            Regardless of any choices you make regarding your Personal Data (as described below), Lucretius may disclose Personal Data 
            if it believes in good faith that such disclosure is necessary: (a) in connection with any legal investigation;
            (b) to comply with relevant laws or to respond to subpoenas, warrants, or other legal process served on Lucretius; 
            (c) to protect or defend the rights or property of Lucretius or users of the Service; and/or (d) to investigate or assist in preventing any
            violation or potential violation of the law, this Privacy Policy, or our Terms of Service.
        </p>
        <br/>
        <br/>
        <h2 className="t3Privacy">
            18.0 Other Disclosures
        </h2>
        <br/>
        <p className="pPrivacy">
            We may also disclose your Personal Data: to fulfill the purpose for which you provide it; for any other purpose disclosed by us when you provide it; or with your consent.
        </p>
        <br/>
        <br/>
        <h2 className="t3Privacy">
            19.0 Third-Party Websites
        </h2>
        <br/>
        <p className="pPrivacy">
            Our Service may contain links to third-party websites. When you click on a link to any other website or location, you will leave our Service and go to another site,
            and another entity may collect Personal Data from you. We have no control over, do not review, and cannot be responsible for these third-party websites or their content.
            Please be aware that the terms of this Privacy Policy do not apply to these third-party websites or their content or any collection of your Personal Data after you click
            on links to such third-party websites. We encourage you to read the privacy policies of every website you visit.
            Any links to third-party websites or locations are for your convenience and do not signify our endorsement of such third parties or their products, content, or websites.
        </p>
        <br/>
        <br/>
        <h2 className="t3Privacy">
            20.0 Your Choices Regarding Information
        </h2>
        <br/>
        <p className="pPrivacy">
            You have several choices regarding the use of information on our Services:<br/>
            Suppose you decide that you no longer wish to accept cookies from our Service for any of the purposes described above.
            In that case, you can instruct your browser, by changing its settings, to stop accepting Cookies or to prompt you before accepting
            a cookie from the websites you visit. Consult your browser's technical information. However, if you do not accept cookies,
            you may not be able to use all portions of the Service or all functionality of the Service.      
        </p>
        <br/>
        <br/>
        <h2 className="t3Privacy">
            21.0 Data Access and Control
        </h2>
        <br/>
        <p className="pPrivacy">
            If you are a user in the European Economic Area or the United Kingdom, you have certain rights under the respective European and UK General Data Protection Regulations ("GDPR"). 
            These include the right to (i) request access and obtain a copy of your data; (ii) request rectification or erasure; (iii) object to or restrict the processing of your data; and 
            (iv) request portability of your data. Additionally, if we have collected and processed your data with your consent, you have the right to withdraw your consent at any time.<br/>
            If you are a California resident, you have certain rights under the California Consumer Privacy Act (“CCPA”). These include the right to (i) request access to, details regarding,
            and a copy of the personal information we have collected about you and/or shared with third parties; (ii) request deletion of the personal information that we have collected about you;
            and (iii) the right to opt-out of the sale of your personal information. As the terms are defined under the CCPA, we do not "sell” your “personal information.”<br/>
            If you wish to exercise your rights under the GDPR, CCPA, or other applicable data protection or privacy laws, don't hesitate to get in touch with us by using the "Submit a request"
            link here or at the address provided in Section 27 below, specify your request, and reference the applicable law. We may ask you to verify your identity or ask for
            more information about your request. We will consider and act upon any above request per applicable law. We will not discriminate against you for exercising any of these rights.<br/>
            Notwithstanding the above, we cannot edit or delete any information stored on a blockchain, for example, the XRP Ledger, as we do not have custody or control over 
            any blockchain. The information stored on the blockchain may include purchases, sales, and transfers related to your blockchain address and NFTs held at that address.
        </p>
        <br/>
        <br/>
        <h2 className="t3Privacy">
            22.0 Data Retention
        </h2>
        <br/>
        <p className="pPrivacy">
            We may retain your Data as long as you continue to use the Service, have an account with us, or for as long as is necessary to fulfill the purposes outlined in this Privacy Policy.
            We may continue to retain your Data even after you deactivate your account and/or cease to use the Service if such retention is reasonably necessary to comply with our legal obligations,
            to resolve disputes, prevent fraud and abuse, enforce our Terms or other agreements, and/or protect our legitimate interests. Where your Personal Data is no longer required for these purposes,
            we will delete it.
        </p>
        <br/>
        <br/>
        <h2 className="t3Privacy">
            23.0 Data Protection
        </h2>
        <br/>
        <p className="pPrivacy">
            We care about the security of your information and use physical, administrative, and technological safeguards to preserve the
            integrity and security of information collected through our Service. However, no security system is impenetrable, and we cannot guarantee the security of our systems. Suppose any information under our custody and control is compromised due to a breach of security. In that case, we will take steps to investigate and remediate the situation and, per applicable laws and regulations, notify those individuals whose information may have been compromised.
            You are responsible for the security of your digital wallet, and we urge you to take steps to ensure it is and remains secure. 
            If you discover an issue related to your wallet, please contact your wallet provider.
            
        </p>
        <br/>
        <br/>
        <h2 className="t3Privacy">
            24.0 Minors 
        </h2>
        <br/>
        <p className="pPrivacy">
            We do not intentionally gather Personal Data from visitors under the age of 13. Our Terms of Service require all users to be at
            least 18 years old. Minors who are at least 13 years old but are under 18 years old may use a parent or guardian's LUCRETIUS account,
            but only with the involvement of the account holder. If a child under 13 submits Personal Data to LUCRETIUS and we learn that the Personal Data is
            the information of a child under 13, we will attempt to delete the information as soon as possible. If you believe that we might have any Personal
            Data from a child under 13, please contact us by using the “Submit a request” link here or at the address indicated in Section 27 below.
        </p>
        <br/>
        <br/>
        <h2 className="t3Privacy">
            25.0 Users Outside of the United States
        </h2>
        <br/>
        <p className="pPrivacy">
            Suppose you are a non-U.S. user of the Service by visiting the Service and providing us with data. In that case, you acknowledge 
            and agree that we may process your Data for the purposes identified in the Privacy Policy. In addition, your Personal Data may 
            be processed in the country in which it was collected and in other countries, including the United States, where laws regarding
            the processing of Personal Data may be less stringent than the laws in your country. By providing your Personal Data, you consent to such transfer.
        </p>
        <br/>
        <br/>
        <h2 className="t3Privacy">
            26.0 Changes to This Privacy Policy
        </h2>
        <br/>
        <p className="pPrivacy">
            We may update this Privacy Policy from time to time for any reason. We will notify you of any changes to our Privacy Policy by posting 
            the new Privacy Policy at<a href="https://lucretius.games/Privacypolicy">https://lucretius.games/Privacypolicy</a> . 
            The date the Privacy Policy was last revised is identified at the beginning of this Privacy Policy. You are responsible for periodically
            visiting our Service and this Privacy Policy to check for any changes.
        </p>
        <br/>
        <br/>
        <h2 className="t3Privacy">
            27.0 Questions/Contacting Lucretius/Reporting Violations
        </h2>
        <br/>
        <p className="pPrivacy">
            If you have any questions or concerns, or complaints about our Privacy Policy or our data collection 
            or processing practices, or if you want to report any security violations to us, don't hesitate to get in
            touch with us by using the "Submit a request" link here or at the following address: 50480 Kuala Lumpur,
            Federal Territory of Kuala Lumpur, Malaysia. 
        </p>
        <br/><br/>
    </div>
  );
}

export default PrivacyPolicy;
