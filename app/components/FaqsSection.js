'use client';

import { motion } from "framer-motion";
import styled from 'styled-components';

export default function FaqsSection({ faqsSection }) {
    let buttonLink = getButtonLink(faqsSection.acf.button.link_to_where, faqsSection.acf.button.onsite_link, faqsSection.acf.button.offsite_link, faqsSection.acf.button.file_link);
    return (
        <Section>
            <div className="wrapper">
                <motion.div 
                    initial={{ y: 25 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.25
                    }}
                >
                    <h2>{faqsSection.acf.title}</h2>
                </motion.div>
                <motion.div 
                    initial={{ y: 25 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.50
                    }}
                >
                    <ul className="faq-list">
                        {faqsSection.acf.faqs_list.map((item, index) => {
                            if (index < 6) {
                                return (
                                    <li className="faq-single" key={index} onClick={faqToggle}>
                                        <div className="question">
                                            <h5>{item.question}</h5>
                                            <svg className="faq-icon" width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.53026 9.88389C9.23736 10.1768 8.76256 10.1768 8.46966 9.88389L0.823183 2.23739C0.530293 1.94449 0.530293 1.46969 0.823183 1.17679L1.17674 0.823191C1.46963 0.530291 1.9445 0.530291 2.2374 0.823191L8.99996 7.58579L15.7626 0.823191C16.0555 0.530291 16.5303 0.530291 16.8232 0.823191L17.1768 1.17679C17.4697 1.46969 17.4697 1.94449 17.1768 2.23739L9.53026 9.88389Z" fill="#EDE6CF"/>
                                            </svg>
                                        </div>
                                        <div className="answer" dangerouslySetInnerHTML={{__html: item.answer}}></div>
                                    </li>
                                );
                            }
                        })}
                    </ul>
                </motion.div>
                <motion.div 
                    initial={{ y: 25 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.25
                    }}
                    className="after-section"
                >
                
                    <h3>{faqsSection.acf.after_content_title}</h3>
                    <a href={buttonLink} className="filled-button">
                        {faqsSection.acf.button.text}
                    </a>

                </motion.div>
            </div>
        </Section>
    );
}

const faqToggle = (faqElement) => {
    let answer = faqElement.target.querySelector('.answer');
    let faqIcon = faqElement.target.querySelector('.faq-icon');
    answer.classList.toggle('opened-faq');
    faqIcon.classList.toggle('opened-faq-icon');
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

const Section = styled.div`
    background-color: #022d52;
    padding: 80px 16px 80px 16px;
    .wrapper {
        max-width: 1300px;
        margin: 0 auto;
    }
    h2 {
        font-family: fatfrank, sans-serif;
        font-size: 48px;
        color: #EDE6CF;
        padding: 0 0 30px 0;
    }
    .faq-single {
        border-top: 1.5px solid #EDE6CF;
        border-bottom: 1.5px solid #EDE6CF;
        padding: 25px 5px 25px 5px;
        cursor: pointer;
        &:hover {
            background-color: #02294a;
        }
    }
    .question {
        display: flex;
        justify-content: space-between;
        align-items: start;
        width: 100%;
        font-family: roboto, sans-serif;
        font-weight: 700;
        color: #EDE6CF;
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
        color: #EDE6CF;
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
        padding-top: 40px;
        text-align: center;
        h3 {
            font-family: fatfrank, sans-serif;
            font-size: 32px;
            color: #EDE6CF;
            padding-bottom: 20px;
        }
        p {
            font-family: roboto, sans-serif;
            font-size: 16px;
            line-height: 1.2;
            color: #EDE6CF;
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