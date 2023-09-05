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

const Section = styled.div`
    position: relative;
    background-color: transparent;
    color: #022D52;
    .badge {
        position: absolute;
        top: 0;
        right: 0;      
    }
    .wrapper {
        position: relative;
        max-width: 1300px;
        margin: 0 auto;
        padding: 150px 16px 100px 16px;
    }
    .header-content {
        text-align: center;
        padding-bottom: 60px;
    }
    h2 {
        font-family: fatfrank, sans-serif;
        font-size: 48px;
        color: #022849;
        padding: 0 0 15px 0;
    }
    .support-list {
        grid-gap: 10px;
        @media (min-width: 516px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 992px) {
            grid-template-columns: repeat(3, 1fr);
        }
    }
    .support-single {
        position: relative;
        padding: 8px;
        height: 700px;
        margin-bottom: 50px;
        padding-top: 50px;
        .button {
            position: absolute;
            bottom: 80px;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 85%;
            text-align: center;
            z-index: 2;
        }
        .eagle-img {
            margin: 0 auto;
            padding: 0 0 20px 0;
        }
        h4 {
            font-family: fatfrank, sans-serif;
            font-size: 28px;
            color: #022849;
            padding: 0 0 15px 0;
            text-align: center;
            @media (min-width: 992px) {
                font-size: 24px;
            }
            @media (min-width: 1200px) {
                font-size: 32px;
            }
        }
        .border {
            background-color: #AE9966;
            width: 100%;
            height: 2px;
        }
        .inclusion-list {
            padding: 15px 0 0 0;
        }
        .support-item-bk {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-position: top;
            z-index: 1;
        }
        .support-content {
            position: relative;
            width: 80%;
            margin: 0 auto;
            z-index: 3;
        }
        h6 {
            color: #011424;
            font-size: 16px;
        }
        .includes-title {
            font-size: 18px;
            padding-bottom: 10px;
        }
        .inclusion-list {
            padding-bottom: 25px;
        }
        .inclusion {
            display: flex;
            align-items: start;
            padding-bottom: 8px;
            svg {
                min-width: 24px;
            }
            h6 {
                padding-left: 5px;
                @media (min-width: 992px) {
                    font-size: 14px;
                }
            }
        }
        .events-text {
            color: #011424;
            font-size: 14px;
            padding: 15px 0 25px 0;
        }
        @media (min-width: 516px) {
            .support-content {
                width: 90%;
            }
            .button {
                font-size: 12px;
            }
        }
    }
`;

const SupportersSection = styled.div`
    padding: 0px 0 80px 0;
    h2 {
        font-family: roboto, sans-serif;
        font-size: 18px;
        color: #022D52;
        text-align: center;
        padding: 0 0 40px 0;
    }
    .slider {
        max-width: 2000px;
        margin: 0 auto;
        cursor: grab;
    }
`;

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
        padding: 150px 16px 100px 16px;
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

// #endregion

export default function Memberships({ pageData, testimonials }) {

    useEffect(() => {

        const lightOrDarkMode = pageData.acf.light_or_dark_mode;

        if (lightOrDarkMode === 'Light') {
            document.getElementById('header').classList.remove('dark-mode-header');
            document.getElementById('header').classList.add('light-mode-header');
        }

        const supportSelects = document.querySelectorAll('.support-select');

        for (let i = 0; i < supportSelects.length; i++) {
            supportSelects[i].addEventListener("change", (event) => {
                let donationFrequency = event.target.value;
                let donationButton = event.target.parentNode.querySelector('#support-button');
                let monthlyPaymentLink = event.target.parentNode.querySelector('#monthly-link').innerHTML;
                let yearlyPaymentLink = event.target.parentNode.querySelector('#yearly-link').innerHTML;
                if (donationFrequency === 'Monthly') {
                    donationButton.classList.remove('support-button-disabled');
                    donationButton.href = monthlyPaymentLink;
                } else if (donationFrequency === 'Yearly') {
                    donationButton.classList.remove('support-button-disabled');
                    donationButton.href = yearlyPaymentLink;
                } else {
                    donationButton.classList.add('support-button-disabled');
                }
            });
        }

    }, []);

    const testimonialSection = pageData.global_sections[0];
    const faqsSection = pageData.global_sections[2];
    const socialFeed = pageData.global_sections[4];

    const sortedDonationOptions = pageData.acf.donation_option.sort((a, b) => a.weight - b.weight);

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
                    {sortedDonationOptions.map((item, index) => {
                        return (
                            <div className="donation-single">
                                <div className="image-box">
                                    <Image className="" src={`${item.image.url}`} alt={`${item.image.alt}`} fill style={{ objectFit: 'cover' }} />
                                </div>
                                <div className="content">
                                    <h4>{item.title}</h4>
                                    <h6>${item.monthly_price}/month, ${item.yearly_price}/year</h6>
                                    <p>{item.paragraph}</p>
                                    <ul>
                                        {item.list_items.map((item1, index) => {
                                            return (
                                                <li>{item1.text}</li>
                                            )
                                        })}
                                    </ul>
                                    <p className="select-p">Select a donation frequency</p>
                                    <select className="support-select">
                                        <option value="" selected disabled hidden>Select one...</option>
                                        <option value="Monthly">Monthly</option>
                                        <option value="Yearly">Yearly</option>
                                    </select>
                                    <br/>
                                    <a href='' id="support-button" className="blue-button support-button-disabled" target="_blank">
                                        Donate
                                    </a>
                                    <div id="monthly-link" className="payment-link">{item.monthly_payment_link}</div>
                                    <div id="yearly-link" className="payment-link">{item.yearly_payment_link}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </SectionAlt>

        <TestimonialSection testimonialSection={testimonialSection} testimonials={testimonials} />

        <FaqsSection faqsSection={faqsSection} />

        <SocialFeed socialFeed={socialFeed} />

        </>
    );
}