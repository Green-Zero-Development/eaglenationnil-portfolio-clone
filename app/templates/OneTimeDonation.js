'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import styled from 'styled-components';
import TestimonialSection from '../components/TestimonialSection.js';
import FaqsSection from '../components/FaqsSection.js';
import SocialFeed from '../components/SocialFeed.js';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';

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
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
            padding-bottom: 60px;
            h1 {
                font-family: fatfrank, sans-serif;
                font-size: 48px;
                color: #022849;
                padding: 0 0 15px 0;
            }
        }
        .support-items {
            .donation-single {
                grid-template-columns: repeat(12, 1fr);
                align-items: top;
                background-color: #ffffff;
                border-radius: 15px;
                margin-bottom: 100px;
                @media (min-width: 516px) {
                    display: grid;
                }
                @media (min-width: 992px) {
                    max-height: 500px;
                    min-height: 500px;
                }
                .image-box {
                    position: relative;
                    grid-column: 1 / 4;
                    min-height: 350px;
                    max-height: 350px;
                    @media (min-width: 516px) {
                        min-height: 200px;
                        max-height: 200px;
                    }
                    @media (min-width: 768px) {
                        grid-column: 1 / 5;
                        max-height: 300px;
                    }
                    @media (min-width: 992px) {
                        min-height: 500px;
                        max-height: 1000px;
                    }
                    img {
                        border-bottom-right-radius: 0px;
                        border-top-left-radius: 15px;
                        border-top-right-radius: 15px;
                        border-bottom-left-radius: 0px;
                        @media (min-width: 516px) {
                            border-bottom-right-radius: 15px;
                            border-bottom-left-radius: 15px;
                            border-top-right-radius: 0px;
                        }
                        @media (min-width: 992px) {
                            border-bottom-right-radius: 0px;
                        }
                    }
                }
                .content {
                    grid-column: 4 / 13;
                    border-top-right-radius: 15px;
                    border-bottom-right-radius: 15px;
                    min-height: 500px;
                    background-color: #ffffff;
                    padding: 20px;
                    @media (min-width: 516px) {
                        padding: 30px;
                    }
                    @media (min-width: 768px) {
                        grid-column: 5 / 13;
                    }
                    @media (min-width: 1200px) {
                        padding: 50px;
                    }
                    h4 {
                        font-family: fatfrank, sans-serif;
                        font-size: 40px;
                        color: #022d52;
                    }
                    h6 {
                        font-family: roboto, sans-serif;
                        font-size: 20px;
                        font-weight: 600;
                        padding: 18px 0 15px 0;
                        color: #022d52;
                    }
                    p {
                        color: #022D52;
                        padding-bottom: 8px;
                    }
                    .select-p {
                        color: #011424;
                    }
                    ul {
                        color: #022D52;
                        list-style: disc;
                        padding: 15px 30px 25px 30px;
                        width: 100%;
                        @media (min-width: 768px) {
                            width: 90%;
                        }
                    }
                    li {
                        padding-bottom: 3px;
                    }
                    select {
                        margin-bottom: 20px;
                    }
                    a {
                        display: inline-block;
                        width: auto;
                    }
                    .support-button-disabled {
                        pointer-events: none;
                        opacity: 0.5;
                    }
                    .payment-link {
                        display: none;
                    }
                }
            }
        }
    }
`;

const PostHero = styled.div`
    position: relative;
    padding: 20px;
    
    z-index: 2;
    .border-box {
        position: relative;
        max-width: 1380px;
        padding: 30px 20px 30px 20px;
        border: 3px solid #022d52;
        border-radius: 16px;
        margin: 0 auto;
        z-index: -1;
        @media (min-width: 768px) {
            padding: 60px;
        }
    }
    .content-box {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
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
            font-family: thirsty-script, sans-serif;
            font-size: 40px;
            color: #022d52;
            padding-bottom: 15px;
            @media (min-width: 768px) {
                font-size: 56px;
                padding-bottom: 25px;
            }
            @media (min-width: 992px) {
                font-size: 45px;
                padding-bottom: 0px;
                padding-right: 80px;
            }
            @media (min-width: 1200px) {
                font-size: 40px;
            }
            @media (min-width: 1440px) {
                font-size: 56px;
            }
        }
        p {
            color: #022d52;
            padding-bottom: 30px;
        }
        @media (min-width: 992px) {
            flex-wrap: nowrap;
        }
    }
    @media (min-width: 768px) {
        
        padding: 60px;
    }
`;

// #endregion

export default function OneTimeDonation({ pageData, testimonials }) {

    useEffect(() => {

        const lightOrDarkMode = pageData.acf.light_or_dark_mode;

        if (lightOrDarkMode === 'Light') {
            document.getElementById('header').classList.remove('dark-mode-header');
            document.getElementById('header').classList.add('light-mode-header');
        }

    }, []);

    let continuedSupportButtonLink = getButtonLink(pageData.acf.continued_support.button.link_to_where, pageData.acf.continued_support.button.onsite_link, pageData.acf.continued_support.button.offsite_link, pageData.acf.continued_support.button.file_link);

    const testimonialSection = pageData.global_sections[0];
    const faqsSection = pageData.global_sections[2];
    const socialFeed = pageData.global_sections[4];

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
                <div className="support-items">
                    <div className="donation-single">
                        <div className="image-box">
                            <Image className="" src={`${pageData.acf.donation_details.image.url}`} alt={`${pageData.acf.donation_details.image.alt}`} fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div className="content">
                            <h4>{pageData.acf.donation_details.title}</h4>
                            <p>{pageData.acf.donation_details.paragraph}</p>
                            <ul>
                                {pageData.acf.donation_details.list_items.map((item, index) => {
                                    return (
                                        <li key={index}>{item.text}</li>
                                    )
                                })}
                            </ul>
                            <a href={pageData.acf.donation_details.payment_link} id="support-button" className="blue-button" target="_blank">
                                Donate
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </SectionAlt>

        <PostHero>
            <div className="border-box">
                <div className="content-box">
                    <h2>{pageData.acf.continued_support.title}</h2>
                    <div className="content">
                        <p>{pageData.acf.continued_support.paragraph}</p>
                        <a href={continuedSupportButtonLink} className="outline-button-dark">
                            {pageData.acf.continued_support.button.text}
                        </a>
                    </div>
                </div>
            </div>
        </PostHero>

        <TestimonialSection testimonialSection={testimonialSection} testimonials={testimonials} />

        <FaqsSection faqsSection={faqsSection} />

        <SocialFeed socialFeed={socialFeed} />

        </>
    );
}