'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import styled from 'styled-components';
import ShopCta from '../components/ShopCta.js';
import FaqsSection from '../components/FaqsSection.js';
import SupportersSection from '../components/SupportersSection.js';
import WaysToSupportSection from '../components/WaysToSupportSection.js';
import SocialFeed from '../components/SocialFeed.js';

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
    padding: 300px 0 400px 0;
    margin-top: -80px;
    overflow: hidden;
    .bk-img {
        
    }
    .gradient {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgb(2,45,82);
        background: linear-gradient(180deg, rgba(2,45,82,1) 0%, rgba(2,45,82,0.20351890756302526) 10%);
        pointer-events: none;
        z-index: 2;
    }
    
`;

const PostHero = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: rgba(2, 45, 82, 0.25);
    backdrop-filter: blur(6px);
    padding: 50px 16px 50px 16px;
    color: #F8F7F5;
    z-index: 5;
    .content-wrapper {
        position: relative;
        align-items: end;
        justify-content: space-between;
        max-width: 1396px;
        margin: 0 auto;
        z-index: 5;
        .content {
            width: 100%;
            h1 {
                font-family: fatfrank, sans-serif;
                font-size: 48px;
                padding: 0px 0 5px 0;
                @media (min-width: 768px) {
                    font-size: 56px;
                }
            }
            p {
                font-family: roboto, sans-serif;
                font-size: 18px;
                padding-bottom: 50px;
                @media (min-width: 768px) {
                    padding-bottom: 0px;
                }
            }
            .button-box {
                position: relative;
                z-index: 5;
            }
            @media (min-width: 768px) {
                width: 60%;
            }
        }
        @media (min-width: 768px) {
            display: flex;
        }
    }
`;

const EventList = styled.div`
    max-width: 1420px;
    margin: 0 auto;
    padding: 60px 16px 60px 16px;
    h2 {
        font-family: fatfrank, sans-serif;
        font-size: 48px;
        padding: 15px 0 5px 0;
        color: #022849;
        @media (min-width: 768px) {
            font-size: 56px;
        }
    }
    li {
        grid-template-columns: repeat(12, 1fr);
        column-gap: 50px;
        padding: 50px 0 50px 0;
        width: 100%;
        date {
            font-family: roboto, sans-serif;
            font-weight: 900;
            font-size: 16px;
            color: #9B885B;
            padding-bottom: 30px;
            @media (min-width: 768px) {
                grid-column: 1 / 3;
            }
        }
        .event-img {
            position: relative;
            display: none;
            grid-column: 3 / 7;
            height: 100%;
            img {
                border-radius: 16px;
            }
            @media (min-width: 992px) {
                display: block;
            }
        }
        .event-info {
            padding-top: 25px;
            h5 {
                font-family: fatfrank, sans-serif;
                font-size: 32px;
                text-decoration: underline;
                padding: 0 0 15px 0;
                color: #022849;
            }
            h6 {
                font-family: roboto, sans-serif;
                font-weight: 900;
                font-size: 18px;
                color: #9B885B;
                text-transform: uppercase;
                padding: 0 0 20px 0;
            }
            p {
                font-size: 18px;
                color: #011424;
                padding: 0 0 80px 0;
            }
            @media (min-width: 768px) {
                grid-column: 3 / 12;
                padding-top: 0px;
            }
            @media (min-width: 992px) {
                grid-column: 7 / 12;
            }
        }
        @media (min-width: 768px) {
            display: grid;
        }
    }
    @media (min-width: 768px) {
        
    }
`;

// #endregion

export default function EventListing({ pageData, events }) {

    useEffect(() => {

        const lightOrDarkMode = pageData.acf.light_or_dark_mode;

        if (lightOrDarkMode === 'Light') {
            document.getElementById('header').classList.remove('dark-mode-header');
            document.getElementById('header').classList.add('light-mode-header');
        } else if (lightOrDarkMode === 'Dark') {
            document.getElementById('header').classList.remove('light-mode-header');
            document.getElementById('header').classList.add('dark-mode-header');
        }

    }, []);

    const shopCta = pageData.global_sections[1];
    const faqsSection = pageData.global_sections[2];
    const supportersSection = pageData.global_sections[5];
    const waysToSupportSection = pageData.global_sections[3];
    const socialFeed = pageData.global_sections[4];

    return (
        <>
        <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

        </div>
            <Hero>
                <div className="gradient"></div>
                <Image className="bk-img" src={`${pageData.acf.hero_section.background_image.url}`} alt={`${pageData.acf.hero_section.background_image.alt}`} fill style={{ objectFit: 'cover' }} />
                <PostHero>
                    <div className="content-wrapper">
                        <div className="content">
                            <h1>{pageData.acf.hero_section.title}</h1>
                            <p>{pageData.acf.hero_section.paragraph}</p>
                        </div>
                        {/* <div className="button-box">
                            <a href="#" className="filled-button">
                                View More Info
                            </a>
                        </div> */}
                    </div>
                </PostHero>
            </Hero>
            <EventList>
                <h2>Upcoming Events</h2>
                <ul className="event-list-wrapper">
                    {events.map((item, index) => {
                        return (
                            <motion.li 
                                initial={{ y: 25 }}
                                whileInView={{ y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 1.25
                                }}    
                            >
                                <date>{item.acf.start_date}</date>
                                <div className="event-img">
                                    <Image src={((item.acf.event_image) ? item.acf.event_image.url : `https://inside.eaglenationnil.com/wp-content/uploads/2023/04/Lightbox.jpg`)} alt={`event`} fill style={{ objectFit: 'cover' }} />
                                </div>
                                <div className="event-info">
                                    <h5>{item.acf.event_name}</h5>
                                    <h6>{item.acf.location.street_address} {item.acf.location.city}, {item.acf.location.state} {item.acf.location.zip_code}</h6>
                                    <p>{item.acf.brief_description}</p>
                                    <a href={`events/` + item.slug} className="outline-button-dark">
                                        More Info
                                    </a>
                                </div>

                            </motion.li>
                        );
                    })}
                </ul>
            </EventList>

            {/* <ShopCta shopCta={shopCta} /> */}

            <FaqsSection faqsSection={faqsSection} />

            <SupportersSection supportersSection={supportersSection} />

            <WaysToSupportSection waysToSupportSection={waysToSupportSection} />

            <SocialFeed socialFeed={socialFeed} />
        </>
    )
}