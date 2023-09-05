'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import styled from 'styled-components';

const faqToggle = (faqElement) => {
    let answer = faqElement.target.querySelector('.answer');
    let faqIcon = faqElement.target.querySelector('.faq-icon');
    answer.classList.toggle('opened-faq');
    faqIcon.classList.toggle('opened-faq-icon');
    console.log(answer);
}

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
        padding: 120px 16px 140px 16px;
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
    .faq-single {
        border-bottom: 2px solid #022D52;
        padding: 25px 5px 25px 5px;
        cursor: pointer;
        &:hover {
            background-color: #d5cfba;
        }
    }
    .faq-list {
        border-top: 2px solid #022D52;
    }
    .question {
        display: flex;
        justify-content: space-between;
        align-items: start;
        width: 100%;
        font-family: roboto, sans-serif;
        font-weight: 700;
        color: #022D52;
        pointer-events: none;
        h5 {
            width: 98%;
            font-size: 16px;
        }
    }
    .answer {
        opacity: 0;
        max-height: 0;
        transform: scaleY(0.5);
        transform-origin: top center;
        font-family: roboto, sans-serif;
        font-size: 14px;
        line-height: 1.2;
        color: #011424;
        pointer-events: none;
        transition: 0.10s;
        ul {
            list-style: disc;
            padding: 15px 0px 0 20px;
        }
        li {
            padding-bottom: 5px;
        }
    }
    svg {
        margin: 0 0px 0 25px;
        pointer-events: none;
        transition: 0.10s;
    }
    .after-section {
        text-align: center;
        padding-top: 40px;
        h3 {
            font-family: fatfrank, sans-serif;
            font-size: 32px;
            padding-bottom: 20px;
        }
        p {
            font-family: roboto, sans-serif;
            font-size: 16px;
            line-height: 1.2;
            padding-bottom: 40px;
        }
    }
    @media (min-width: 768px) {
        .question {
            align-items: center;
            h5 {
                width: 95%;
                font-size: 18px;
            }
        }
        .answer {
            font-size: 16px;
        }
    }
`;

// #endregion

export default function FaqsPage({ pageData }) {

    useEffect(() => {

        const lightOrDarkMode = pageData.acf.light_or_dark_mode;

        if (lightOrDarkMode === 'Light') {
            document.getElementById('header').classList.remove('dark-mode-header');
            document.getElementById('header').classList.add('light-mode-header');
        }

    }, []);

    const faqsSection = pageData.global_sections[2];

    let buttonLink = getButtonLink(faqsSection.acf.button.link_to_where, faqsSection.acf.button.onsite_link, faqsSection.acf.button.offsite_link, faqsSection.acf.button.file_link);

    let askQuestionLink = getButtonLink(pageData.acf.still_have_a_question_section.button.link_to_where, pageData.acf.still_have_a_question_section.button.onsite_link, pageData.acf.still_have_a_question_section.button.offsite_link, pageData.acf.still_have_a_question_section.button.file_link);

    return (
        <>
        <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

        </div>
        <Section>
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
                    <h2>{pageData.acf.hero_section.title}</h2>
                    <p>{pageData.acf.hero_section.paragraph}</p>
                </div>
                <ul className="faq-list">
                    {faqsSection.acf.faqs_list.map((item, index) => {
                        return (
                            <li className="faq-single" key={index} onClick={faqToggle}>
                                <div className="question">
                                    <h5>{item.question}</h5>
                                    <svg className="faq-icon" width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.53026 9.88389C9.23736 10.1768 8.76256 10.1768 8.46966 9.88389L0.823183 2.23739C0.530293 1.94449 0.530293 1.46969 0.823183 1.17679L1.17674 0.823191C1.46963 0.530291 1.9445 0.530291 2.2374 0.823191L8.99996 7.58579L15.7626 0.823191C16.0555 0.530291 16.5303 0.530291 16.8232 0.823191L17.1768 1.17679C17.4697 1.46969 17.4697 1.94449 17.1768 2.23739L9.53026 9.88389Z" fill="#022849"/>
                                    </svg>
                                </div>
                                <div className="answer" dangerouslySetInnerHTML={{__html: item.answer}}></div>
                            </li>
                        );
                    })}
                </ul>
                <div className="after-section">
                    <h3>{pageData.acf.still_have_a_question_section.title}</h3>
                    <a href={askQuestionLink} className="blue-button">
                        {pageData.acf.still_have_a_question_section.button.text}
                    </a>
                </div>
            </div>
        </Section>
        </>
    );
}