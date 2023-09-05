'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import styled from 'styled-components';
import WaysToSupportSection from '../components/WaysToSupportSection.js';
import SocialFeed from '../components/SocialFeed.js';

function toggleLeaderBio(item) {
    let leaderCard = item.target;
    let beforeHoverName = item.target.querySelector('.before-hover-name');
    let beforeHoverJob = item.target.querySelector('.before-hover-job');
    let bioBox = item.target.querySelector('.bio-box');
    leaderCard .classList.toggle('flipped-bio-card');
    bioBox.classList.toggle('show-bio-box');
    beforeHoverName.classList.toggle('hidden-card-item');
    beforeHoverJob.classList.toggle('hidden-card-item');
}

function hoverLeaderBioOn(item) {
    let leaderCard = item.target;
    leaderCard .classList.add('hover-bio-card');
}

function hoverLeaderBioOff(item) {
    let leaderCard = item.target;
    leaderCard .classList.remove('hover-bio-card');
}

// function toggleLeaderBioOff(item) {
//     let bioBox = item.target;
//     let beforeHoverName = item.target.parentElement.querySelector('.before-hover-name');
//     let beforeHoverJob = item.target.parentElement.querySelector('.before-hover-job');
//     let headshot = item.target.parentElement.querySelector('.headshot');
//     bioBox.classList.remove('show-bio-box');
//     beforeHoverName.classList.remove('hidden');
//     beforeHoverJob.classList.remove('hidden');
//     headshot.classList.remove('hidden');
// }

function getButtonLink(linkToWhere, onSiteLink, offSiteLink, fileLink) {
    switch (linkToWhere) {
      case "A page on this site":
        return (onSiteLink);
      case "Another site":
        return (offSiteLink);
      case "A file":
        return (fileLink);
      default:
        return ('/');
    }
  }

// #region Styles

const Hero = styled.div`
    position: relative;
    align-items: center;
    padding: 101px 0px 100px 0px;
    width: 100%;
    color: #022849;
    text-align: center;
    .wrapper {
        position: relative;
        padding: 80px 16px 0 16px;
        max-width: 600px;
        margin: 0 auto;
    }
    h1 {
        font-family: fatfrank, sans-serif;
        font-size: 56px;
        padding: 0 0 15px 0;
    }
    p {
        font-family: roboto, sans-serif;
        font-size: 18px;
    }
    .badge {
        position: absolute;
        top: 0;
        right: 0;      
    }
`;

const PostHero = styled.div`
    position: relative;
    background-color: #022d52;
    padding: 20px;
    margin-top: 100px;
    z-index: 2;
    .border-box {
        max-width: 1380px;
        padding: 30px 20px 30px 20px;
        border: 3px solid #EDE6CF;
        border-radius: 16px;
        margin: 0 auto;
        @media (min-width: 768px) {
            padding: 60px;
        }
    }
    .content-box {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .heading-content {
            padding-right: 50px;
        }
        .content {
            max-width: 600px;
            @media (min-width: 992px) {
                max-width: 350px;
            }
            @media (min-width: 1200px) {
                max-width: 600px;
            }
        }
        h2 {
            font-family: fatfrank, sans-serif;
            font-size: 48px;
            color: #EDE6CF;
            line-height: 1;
            padding-bottom: 15px;
            white-space: pre-wrap;
            @media (min-width: 768px) {
                font-size: 56px;
                padding-bottom: 25px;
            }
            @media (min-width: 992px) {
                font-size: 45px;
                padding-bottom: 0px;
            }
            @media (min-width: 1200px) {
                font-size: 40px;
            }
            @media (min-width: 1440px) {
                font-size: 56px;
            }
        }
        h4 {
            font-family: roboto, sans-serif;
            font-size: 18px;
            font-weight: 700;
            color: #9B885B;
            padding-bottom: 15px;
        }
        p {
            color: #EDE6CF;
            padding-bottom: 30px;
            white-space: pre-wrap;
        }
        @media (min-width: 992px) {
            flex-wrap: nowrap;
        }
    }
    @media (min-width: 768px) {
        padding: 60px;
    }
`;

const ExplainationSection = styled.div`
    position: relative;
    max-width: 1380px;
    margin: 0 auto;
    padding: 100px 0px 100px 0px;
    text-align: center;
    .bk-img {
        @media (min-width: 1440px) {
            border-radius: 16px;
        }
    }
    .gradient {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgb(211,205,185);
        background: linear-gradient(0deg, rgba(211,205,185,0.7665441176470589) 0%, rgba(211,205,185,1) 80%);
        pointer-events: none;
        z-index: 2;
        @media (min-width: 1440px) {
            border-radius: 16px;
        }
    }
    .heading-content {
        position: relative;
        padding-bottom: 80px;
        padding: 0 16px 0 16px;
        z-index: 2;
        h2 {
            font-family: fatfrank, sans-serif;
            font-size: 48px;
            color: #022849;
        }
        h4 {
            font-family: roboto, sans-serif;
            font-size: 18px;
            font-weight: 700;
            color: #9B885B;
            padding-bottom: 5px;
        }
        p {
            font-family: roboto, sans-serif;
            color: #022D52;
            font-size: 18px;
            padding: 20px 0 60px 0;
            max-width: 800px;
            margin: 0 auto;
        }
    }
    .explaination-list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        max-width: 1000px;
        margin: 0 auto;
        @media (min-width: 768px) {
            grid-template-columns: repeat(4, 1fr);
        }
    }
    .explaination-step {
        text-align: center;
        padding-bottom: 50px;
        @media (min-width: 768px) {
            padding-bottom: 0px;
        }
        img {
            margin: 0 auto;
        }
        h6 {
            font-family: roboto, sans-serif;
            color: #022D52;
            font-size: 14px;
            padding: 20px 0 00px 0;
        }
    }
   
    
    @media (min-width: 768px) {
        padding: 100px 0px 130px 0px;
    }
    
    @media (min-width: 1200px) {
        
    }
`;

const LeaderList = styled.div`
    max-width: 1320px;
    margin: 0 auto;
    width: 100%;
    padding: 150px 16px 100px 16px;
    overflow: hidden;
    .header-content {
        text-align: center;
        padding-bottom: 50px;
        h2 {
            font-family: fatfrank, sans-serif;
            font-size: 48px;
            color: #022849;
        }
        h6 {
            font-family: roboto, sans-serif;
            font-size: 18px;
            font-weight: 700;
            color: #9B885B;
            padding-bottom: 10px;
        }
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        grid-template-columns: repeat(1, 1fr);
        column-gap: 20px;
        width: 100%;
        justify-content: center;
        @media (min-width: 516px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 992px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media (min-width: 1200px) {
            grid-template-columns: repeat(4, 1fr);
        }
    }
    .leader-single {
        position: relative;
        width: 100%;
        height: 427px;
        background-color: #022d52;
        border-radius: 20px;
        margin-bottom: 20px;
        max-width: 300px;
        cursor: pointer;
        transition: 0.5s;
        .before-hover-name {
            position: relative;
            width: 80%;
            background-color: #ede6cf;
            padding: 18px 20px 15px 10px;
            margin-top: 40px;
            clip-path: polygon(100% 0%, 94% 50%, 100% 100%, 0 100%, 0% 50%, 0 0);
            font-family: fatfrank, sans-serif;
            font-size: 18px;
            color: #022849;
            text-transform: uppercase;
            z-index: 2;
            pointer-events: none;
            transition: transform 0.75s;
        }
        .headshot {
            position: absolute;
            width: 90%;
            height: 80%;
            top: 17px;
            left: 50%;
            transform: translate(-50%, 0);
            pointer-events: none;
            img {
                border: 3px solid #ede6cf;
                border-radius: 16px;
                border-bottom-right-radius: 100px;
            }
        }
        .before-hover-job {
            position: absolute;
            bottom: 0;
            width: 70%;
            padding: 10px 18px 15px 18px;
            font-family: roboto, sans-serif;
            color: #EDE6CF;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            pointer-events: none;
            @media (min-width: 516px) {
                font-size: 10px;
            }
            @media (min-width: 768px) {
                font-size: 12px;
            }
        }
        .bio-box {
            opacity: 0;
            position: absolute;
            width: 90%;
            height: 92%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotateY(180deg);
            background-color: #ede6cf;
            border-radius: 16px;
            padding: 10px;
            pointer-events: none !important;
            .bio-border {
                border: 2px solid #022849;
                border-radius: 6px;
                height: 100%;
                padding: 10px;
                pointer-events: none;
            }
            .bio-text {
                height: 100%;
                font-size: 11px;
                color: #011424;
                white-space: pre-wrap;
                padding-top: 95px;
                @media (min-width: 768px) {
                    font-size: 12px;
                }
            }
            .bio-box-name {
                position: absolute;
                width: 85%;
                top: 0;
                left: 50%;
                transform: translate(-50%, 0);
                text-align: center;
                background-color: #9b885b;
                clip-path: polygon(0 0, 100% 0, 100% 75%, 50% 50%, 0 75%);
                padding: 0px 20px 80px 20px;
                pointer-events: none;
                .after-hover-name {
                    font-family: fatfrank, sans-serif;
                    font-size: 18px;
                    color: #EDE6CF;
                    text-transform: uppercase;
                    padding: 10px 0 0 0;
                    pointer-events: none;
                }
                .after-hover-job {
                    font-family: roboto, sans-serif;
                    color: #EDE6CF;
                    font-size: 10px;
                    font-weight: 700;
                    text-transform: uppercase;
                    padding-top: 5px;
                    pointer-events: none;
                    @media (min-width: 516px) {
                        font-size: 8px;
                    }
                    @media (min-width: 768px) {
                        font-size: 10px;
                    }
                }
            }
        }
    }
    .badge {
        position: absolute;
        bottom: 0;
        right: 8px;
        pointer-events: none;
    }
    .push-leaders-to-middle {
        display: none;
        @media (min-width: 1200px) {
            display: block;
        }
    }
`;

const FoundingMembers = styled.div`
    max-width: 1380px;
    margin: 0 auto;
    text-align: center;
    padding: 20px 16px 0 16px;
    h2 {
        font-family: fatfrank, sans-serif;
        font-size: 48px;
        color: #022849;
    }
    p {
        max-width: 800px;
        margin: 0 auto;
        font-family: roboto, sans-serif;
        color: #022D52;
        font-size: 18px;
        padding: 15px 0 25px 0;
    }
    ul {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        max-width: 1200px;
        margin: 0 auto;
        padding: 30px 0 100px 0;
        @media (min-width: 516px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 768px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media (min-width: 992px) {
            grid-template-columns: repeat(4, 1fr);
        }
    }
    li {
        font-family: roboto, sans-serif;
        color: #022849;
        font-size: 20px;
        padding-bottom: 10px;
    }
`;

const PledgeSection = styled.div`
    max-width: 1320px;
    margin: 0 auto;
    width: 100%;
    padding: 0px 16px 100px 16px;
    .wrapper {
        background: rgb(211,205,185);
        background: linear-gradient(180deg, rgba(211,205,185,1) 0%, rgba(211,205,185,0.008231792717086885) 100%);
        border-radius: 16px;
        padding: 30px;
        @media (min-width: 516px) {
            padding: 50px;
        }
        h4 {
            font-family: fatfrank, sans-serif;
            font-size: 32px;
            color: #022849;
            text-align: center;
            padding-bottom: 25px;
            @media (min-width: 768px) {
                font-size: 40px;
            }
        }
        ul {
            list-style: disc;
            width: 100%;
            margin: 0 auto;
            padding: 0 0px 0 0px;
            @media (min-width: 516px) {
                width: 85%;
            }
            @media (min-width: 992px) {
                padding: 0 50px 0 50px;
            }
        }
        li {
            font-family: roboto, sans-serif;
            color: #022849;
            font-size: 16px;
            padding-bottom: 10px;
            @media (min-width: 768px) {
                font-size: 20px;
            }
        }
    }
`;

const SoaringSection = styled.div`
    max-width: 1320px;
    margin: 0 auto;
    width: 100%;
    padding: 0px 16px 100px 16px;
    .wrapper {
        border-radius: 16px;
        padding: 30px;
        @media (min-width: 516px) {
            padding: 50px;
        }
        h4 {
            font-family: fatfrank, sans-serif;
            font-size: 32px;
            color: #022849;
            text-align: center;
            padding-bottom: 25px;
            @media (min-width: 768px) {
                font-size: 40px;
            }
        }
        ul {
            list-style: disc;
            width: 100%;
            margin: 0 auto;
            padding: 0 0px 0 0px;
            @media (min-width: 516px) {
                width: 85%;
            }
            @media (min-width: 992px) {
                padding: 0 50px 0 50px;
            }
        }
        li {
            font-family: roboto, sans-serif;
            color: #022849;
            font-size: 16px;
            padding-bottom: 10px;
            @media (min-width: 768px) {
                font-size: 20px;
            }
        }
    }
`;

// #endregion

export default function About({ pageData, leaders }) {

    useEffect(() => {

        const lightOrDarkMode = pageData.acf.light_or_dark_mode;

        if (lightOrDarkMode === 'Light') {
            document.getElementById('header').classList.remove('dark-mode-header');
            document.getElementById('header').classList.add('light-mode-header');
        }

    }, []);

    const waysToSupportSection = pageData.global_sections[3];
    const socialFeed = pageData.global_sections[4];

    return (
        <>
        <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

        </div>
        <Hero>
            <motion.div 
                initial={{  y: -50 }}
                animate={{ y: -130 }}
                transition={{
                    duration: 0.4
                }}
            >
                <Image className="badge" src={`https://inside.eaglenationnil.com/wp-content/uploads/2023/04/badge-till-super-large.png`} alt="Eagle Nation Collective | Transparent Badge" width={700} height={668} style={{ objectFit: 'contain' }} />
            </motion.div>
            <div className="wrapper">
                <h1>{pageData.acf.hero_section.title}</h1>
                <p>{pageData.acf.hero_section.paragraph}</p>
            </div>
        </Hero>

        <PostHero>
            <div className="border-box">
                <div className="content-box">
                    <div className="heading-content">
                        <h4>{pageData.acf.blue_box_section.subtitle}</h4>
                        <h2>{pageData.acf.blue_box_section.title}</h2>
                    </div>
                    <div className="content">
                        <p>{pageData.acf.blue_box_section.paragraph}</p>
                    </div>
                </div>
            </div>
        </PostHero>

        <div className="spacer"></div>

        <motion.div 
            initial={{ y: 25 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 1.25
            }}    
        >

        <ExplainationSection>
            <Image className="bk-img" src={`${pageData.acf.behind_the_flag_section.background_image.url}`} alt={`${pageData.acf.behind_the_flag_section.background_image.alt}`} fill style={{ objectFit: 'cover' }} />
            <div className="gradient"></div>
            <div className="heading-content">
                <h4>{pageData.acf.behind_the_flag_section.subtitle}</h4>
                <h2>{pageData.acf.behind_the_flag_section.title}</h2>
                <p>{pageData.acf.behind_the_flag_section.paragraph}</p>
                <ul className="explaination-list">
                    {pageData.acf.behind_the_flag_section.explanation_steps.map((item, index) => {
                        return (
                            <li className="explaination-step">
                                <Image className="badge" src={item.image.url} alt={item.image.alt} width={120} height={60} style={{ objectFit: 'contain' }} />
                                <h6>{item.title}</h6>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </ExplainationSection>

        </motion.div>

        <LeaderList>
            <motion.div 
                initial={{ y: 25 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1.25
                }}
                className="header-content"
            >
                
                    <h6>{pageData.acf.leaders_section.subtitle}</h6>
                    <h2>{pageData.acf.leaders_section.title}</h2>

            </motion.div>
            <motion.div 
                initial={{ y: 25 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1.50
                }}
            >
            <ul>
                {leaders.map((item, index) => {
                    if (item.acf.headshot) {
                        return (
                            <li className="leader-single" key={index} onMouseOver={hoverLeaderBioOn} onMouseOut={hoverLeaderBioOff} onClick={toggleLeaderBio}>
                                <h5 className="before-hover-name">{item.acf.name}</h5>
                                <div className="headshot">
                                    <Image src={item.acf.headshot.url} alt={item.acf.headshot.alt} fill style={{ objectFit: 'cover' }} />
                                </div>
                                <h6 className="before-hover-job">{item.acf.job_title}</h6>
                                <Image className="badge" src={`https://inside.eaglenationnil.com/wp-content/uploads/2023/04/staff-badge.png`} alt="Eagle Nation Collective | Staff Badge Icon" width={111} height={147} style={{ objectFit: 'contain' }} />
                                <div className="bio-box">
                                    <div className="bio-border">
                                        <div className="bio-text">{item.acf.bio}</div>
                                    </div>
                                    <div className="bio-box-name">
                                        <h5 className="after-hover-name">{item.acf.name}</h5>
                                        <h6 className="after-hover-job">{item.acf.job_title}</h6>
                                    </div>
                                </div>
                            </li>
                        );
                    } else {
                        return (
                            <li className="leader-single" key={index} onMouseOver={hoverLeaderBioOn} onMouseOut={hoverLeaderBioOff} onClick={toggleLeaderBio}>
                                <h5 className="before-hover-name">{item.acf.name}</h5>
                                <div className="headshot">
                                    <Image src={'https://inside.eaglenationnil.com/wp-content/uploads/2023/04/ways-to-support-img.jpg'} alt="leader has no headshot" fill style={{ objectFit: 'cover' }} />
                                </div>
                                <h6 className="before-hover-job">{item.acf.job_title}</h6>
                                <Image className="badge" src={`https://inside.eaglenationnil.com/wp-content/uploads/2023/04/staff-badge.png`} alt="Eagle Nation Collective | Staff Badge Icon" width={111} height={147} style={{ objectFit: 'contain' }} />
                                <div className="bio-box">
                                    <div className="bio-border">
                                        <div className="bio-text">{item.acf.bio}</div>
                                    </div>
                                    <div className="bio-box-name">
                                        <h5 className="after-hover-name">{item.acf.name}</h5>
                                        <h6 className="after-hover-job">{item.acf.job_title}</h6>
                                    </div>
                                </div>
                            </li>
                        );
                    }
                })}
            </ul>
            </motion.div>
        </LeaderList>

        <FoundingMembers>
            <motion.div 
                initial={{ y: 25 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1.25
                }}
            >

            <h2>{pageData.acf.founding_members_list.title}</h2>
            <p>{pageData.acf.founding_members_list.paragraph}</p>

            </motion.div>

            <motion.div 
                initial={{ y: 25 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1.50
                }}
            >
            <ul>
                {pageData.acf.founding_members_list.founding_member.map((item, index) => {
                    return (
                        <li>
                            {item.name}
                        </li>
                    );
                })}
            </ul>
            </motion.div>

        </FoundingMembers>

        <PledgeSection>
            <motion.div 
                initial={{ y: 25 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1.25
                }}
                className="wrapper"
            >

                <h4>{pageData.acf.pledge_section.title}</h4>
                <ul>
                    {pageData.acf.pledge_section.list_items.map((item, index) => {
                        return (
                            <li>
                                {item.list_item}
                            </li>
                        );
                    })}
                </ul>
            </motion.div>
        </PledgeSection>

        <SoaringSection>
            <motion.div 
                initial={{ y: 25 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1.25
                }}
                className="wrapper"
            >

                <h4>{pageData.acf.soaring_partnership_section.title}</h4>
                <ul>
                    {pageData.acf.soaring_partnership_section.list_items.map((item, index) => {
                        return (
                            <li>
                                {item.list_item}
                            </li>
                        );
                    })}
                </ul>
            </motion.div>
        </SoaringSection>

        <WaysToSupportSection waysToSupportSection={waysToSupportSection} />

        <SocialFeed socialFeed={socialFeed} />
        </>
    )
}