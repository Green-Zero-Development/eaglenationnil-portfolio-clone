'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import styled from 'styled-components';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import FaqsSection from '../components/FaqsSection.js';
import SocialFeed from '../components/SocialFeed.js';

function getButtonLink(linkToWhere, onSiteLink, offSiteLink, fileLink) {
    switch (linkToWhere) {
      case "Onsite":
        return (onSiteLink);
      case "Offsite":
        return (offSiteLink);
      case "File":
        return (fileLink.url);
      default:
        return ('/');
    }
}

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

// #region Styles

const SectionAlt = styled.div`
    .badge {
        position: absolute;
        top: 0;
        right: 0;
    }
    .wrapper {
        position: relative;
        max-width: 1300px;
        margin: 0 auto;
        padding: 150px 16px 0px 16px;
        .header-content {
            text-align: center;
            padding-bottom: 60px;
            h1 {
                font-family: fatfrank, sans-serif;
                font-size: 48px;
                color: #022849;
                padding: 0 0 15px 0;
            }
        }
    }
`;

const LeaderList = styled.div`
    max-width: 1320px;
    margin: 0 auto;
    width: 100%;
    padding: 20px 16px 100px 16px;
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

// #endregion

export default function StudentTestimonialsPage({ pageData, testimonials }) {

    const faqsSection = pageData.global_sections[2];
    const socialFeed = pageData.global_sections[4];

    testimonials.sort((a, b) => {
        const nameA = a.acf.last_name.toUpperCase();
        const nameB = b.acf.last_name.toUpperCase();
      
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
    });

    useEffect(() => {

        const lightOrDarkMode = pageData.acf.light_or_dark_mode;

        if (lightOrDarkMode === 'Light') {
            document.getElementById('header').classList.remove('dark-mode-header');
            document.getElementById('header').classList.add('light-mode-header');
        }

    }, []);

    return (
        <>
        <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

        </div>
        <SectionAlt>
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
                <div className="header-content">
                    <h1>{pageData.acf.hero_section.title}</h1>
                    <p>{pageData.acf.hero_section.paragraph}</p>
                </div>
            </div>
        </SectionAlt>

        <LeaderList>
            <motion.div 
                initial={{ y: 25 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1.50
                }}
            >
            <ul>
                {testimonials.map((item, index) => {
                    if (item.acf.relationship_to_school === "Student") {
                        return (
                            <li className="leader-single" key={index} onMouseOver={hoverLeaderBioOn} onMouseOut={hoverLeaderBioOff} onClick={toggleLeaderBio}>
                                <h5 className="before-hover-name">{item.acf.first_name} {item.acf.last_name}</h5>
                                <div className="headshot">
                                    {(((item.acf.headshot.url) 
                                        ? <Image src={item.acf.headshot.url} alt={item.acf.headshot.alt} fill style={{ objectFit: 'cover' }} />
                                        : <Image src={'https://inside.eaglenationnil.com/wp-content/uploads/2023/07/default-test-image-0003.png'} alt="testimonial has no headshot" fill style={{ objectFit: 'cover' }} />
                                    ))}
                                </div>
                                <h6 className="before-hover-job">
                                {(((item.acf.sport && item.acf.sports_position) 
                                    ? item.acf.sport + " | " + item.acf.sports_position 
                                    : item.acf.sport 
                                    ? item.acf.sport 
                                    : item.acf.relationship_to_school))}
                                    
                                </h6>
                                <Image className="badge" src={`https://inside.eaglenationnil.com/wp-content/uploads/2023/04/staff-badge.png`} alt="Eagle Nation Collective | Staff Badge Icon" width={111} height={147} style={{ objectFit: 'contain' }} />
                                <div className="bio-box">
                                    <div className="bio-border">
                                        <div className="bio-text">{item.acf.text}</div>
                                    </div>
                                    <div className="bio-box-name">
                                        <h5 className="after-hover-name">{item.acf.first_name} {item.acf.last_name}</h5>
                                        <h6 className="after-hover-job">
                                        {(((item.acf.sport && item.acf.sports_position) 
                                            ? item.acf.sport + " | " + item.acf.sports_position 
                                            : item.acf.sport 
                                            ? item.acf.sport 
                                            : item.acf.relationship_to_school))}
                                            
                                        </h6>
                                    </div>
                                </div>
                            </li>
                        );
                    } else {
                        return (
                            null
                        );
                    }
                })}
            </ul>
            </motion.div>
        </LeaderList>

        <FaqsSection faqsSection={faqsSection} />

        <SocialFeed socialFeed={socialFeed} />

        </>
    );
}