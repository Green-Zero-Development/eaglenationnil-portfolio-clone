'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import styled from 'styled-components';
import FaqsSection from '../components/FaqsSection.js';
import SocialFeed from '../components/SocialFeed.js';

// #region Styles

const Hero = styled.div`
  position: relative;
  align-items: center;
  width: 100%;
  color: #022849;
  overflow: hidden;
  .wrapper {
      position: relative;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 50px;
      max-width: 1320px;
      margin: 0 auto;
      padding: 140px 16px 140px 16px;
      .content {
        padding-bottom: 80px;
        h6 {
            font-family: roboto, sans-serif;
            font-size: 16px;
            font-weight: 700;
            color: #9B885B;
        }
        h1 {
            font-family: fatfrank, sans-serif;
            font-size: 48px;
            color: #022849;
            padding: 8px 0 20px 0;
        }
        p {
            font-size: 18px;
            color: #011424;
            padding-bottom: 24px;
        }
        @media (min-width: 768px) {
            padding-bottom: 0px;
        }
      }
      form {
        display: flex;
        flex-wrap: wrap;
      }
      .form-section {
        .cog-form__container {
            width: 100%;
        }
        .form-group {
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 20px;
            width: 100%;
            @media (min-width: 516px) {
                display: grid;
            }
        }
        .form-single {
            display: flex;
            flex-wrap: wrap;
            padding: 0 0 16px 0;
            label {
                width: 100%;
            }
            input {
                width: 100%;
            }
        }
        .form-single-full {
            grid-column: span 2;
            display: flex;
            flex-wrap: wrap;
            padding: 0 0 16px 0;
            label {
                width: 100%;
            }
            select {
                width: 100%;
            }
            textarea {
                width: 100%;
            }
        }
        .checkbox-label {
            padding: 15px 0 25px 0;
        }
        .checkbox-group {
            grid-template-columns: repeat(2, 1fr);
            width: 100%;
            padding: 5px 0 0 0;
            @media (min-width: 516px) {
                display: grid;
            }
            .checkbox-single {
                display: flex;
                align-items: center;
                padding-bottom: 15px;
                label {
                    padding: 0 0px 0 6px;
                    line-height: 1;
                }
            }
        }
      }
      @media (min-width: 768px) {
        display: grid;
    }
  }
  .badge {
        position: absolute;
        top: 0;
        right: 0;      
    }

  .social-section {
    padding-top: 15px;
    h5 {
        font-family: roboto, sans-serif;
        font-size: 16px;
        font-weight: 700;
        color: #9B885B;
        padding-bottom: 15px;
    }
    .icons {
        display: flex;
        svg {
            margin-right: 10px;
        }
    }
  }

`;

// #endregion

export default function Contact({ pageData }) {

    useEffect(() => {
        Cognito.load("forms", { id: "69" });
    }, []);

    useEffect(() => {

        const lightOrDarkMode = pageData.acf.light_or_dark_mode;

        if (lightOrDarkMode === 'Light') {
            document.getElementById('header').classList.remove('dark-mode-header');
            document.getElementById('header').classList.add('light-mode-header');
        }

    }, []);

    const faqsSection = pageData.global_sections[2];
    const socialFeed = pageData.global_sections[4];
    const facebook = pageData.site_data[4].acf.value_list[0].value;
    const instagram = pageData.site_data[4].acf.value_list[1].value;
    const twitter = pageData.site_data[4].acf.value_list[2].value;

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
                <div className="content">
                    <h6>{pageData.acf.content_section.subtitle}</h6>
                    <h1>{pageData.acf.content_section.title}</h1>
                    <p>{pageData.acf.content_section.paragraph}</p>
                    <div className="social-section">
                        <h5>{pageData.acf.content_section.follow_us_title}</h5>
                        <div className="icons">
                            <a href={facebook}>
                                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.1247 9.5H21.3747C20.5002 9.5 19.7913 10.2089 19.7913 11.0833V15.8333H26.1247C26.3047 15.8293 26.4755 15.9131 26.5826 16.058C26.6896 16.2029 26.7197 16.3907 26.663 16.5617L25.4913 20.045C25.3834 20.3647 25.0846 20.5808 24.7472 20.5833H19.7913V32.4583C19.7913 32.8955 19.4368 33.25 18.9997 33.25H15.0413C14.6041 33.25 14.2497 32.8955 14.2497 32.4583V20.5833H11.8747C11.4375 20.5833 11.083 20.2288 11.083 19.7917V16.625C11.083 16.1878 11.4375 15.8333 11.8747 15.8333H14.2497V11.0833C14.2497 7.58553 17.0853 4.75 20.583 4.75H26.1247C26.5618 4.75 26.9163 5.10445 26.9163 5.54167V8.70833C26.9163 9.14556 26.5618 9.5 26.1247 9.5Z" fill="#022849"/>
                                </svg>
                            </a>
                            <a href={instagram}>
                                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M25.3333 4.75H12.6667C8.29442 4.75 4.75 8.29442 4.75 12.6667V25.3333C4.75 29.7056 8.29442 33.25 12.6667 33.25H25.3333C29.7056 33.25 33.25 29.7056 33.25 25.3333V12.6667C33.25 8.29442 29.7056 4.75 25.3333 4.75ZM30.4792 25.3333C30.4705 28.1716 28.1716 30.4705 25.3333 30.4792H12.6667C9.8283 30.4705 7.52953 28.1716 7.52083 25.3333V12.6667C7.52953 9.8283 9.8283 7.52953 12.6667 7.52083H25.3333C28.1716 7.52953 30.4705 9.8283 30.4792 12.6667V25.3333ZM26.5208 13.0625C27.3953 13.0625 28.1042 12.3536 28.1042 11.4792C28.1042 10.6047 27.3953 9.89583 26.5208 9.89583C25.6464 9.89583 24.9375 10.6047 24.9375 11.4792C24.9375 12.3536 25.6464 13.0625 26.5208 13.0625ZM19 11.875C15.065 11.875 11.875 15.065 11.875 19C11.875 22.9351 15.065 26.125 19 26.125C22.9351 26.125 26.125 22.9351 26.125 19C26.1293 17.109 25.3799 15.2943 24.0428 13.9572C22.7056 12.6201 20.891 11.8708 19 11.875ZM14.6458 19C14.6458 21.4048 16.5952 23.3542 19 23.3542C21.4048 23.3542 23.3542 21.4048 23.3542 19C23.3542 16.5952 21.4048 14.6458 19 14.6458C16.5952 14.6458 14.6458 16.5952 14.6458 19Z" fill="#022849"/>
                                </svg>
                            </a>
                            <a href={twitter}>
                                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M33.2063 10.6359C32.471 11.6168 31.5822 12.4724 30.574 13.1698C30.574 13.426 30.574 13.6823 30.574 13.9527C30.5821 18.6059 28.7234 23.0677 25.4148 26.338C22.1059 29.6082 17.6238 31.4132 12.9733 31.3483C10.2847 31.3573 7.63055 30.7434 5.21873 29.5547C5.08868 29.4978 5.00481 29.3693 5.0053 29.2272V29.0706C5.0053 28.8662 5.17093 28.7006 5.37525 28.7006C8.01807 28.6134 10.5666 27.6971 12.6603 26.0813C10.2682 26.033 8.11587 24.6159 7.12535 22.4369C7.07534 22.318 7.0909 22.1814 7.16647 22.0767C7.24203 21.9721 7.36665 21.9144 7.4953 21.9246C8.22232 21.9976 8.9566 21.93 9.65805 21.7252C7.01735 21.1771 5.03315 18.9848 4.74918 16.3015C4.7391 16.1728 4.79678 16.0482 4.9014 15.9725C5.00601 15.897 5.14245 15.8813 5.26142 15.9315C5.97006 16.2442 6.73505 16.4089 7.50953 16.4154C5.19565 14.8967 4.1962 12.0081 5.07644 9.38318C5.16731 9.12813 5.3856 8.93969 5.65111 8.88716C5.9166 8.83461 6.19017 8.9257 6.37124 9.12695C9.49369 12.4501 13.784 14.4304 18.3374 14.6503C18.2209 14.1848 18.1636 13.7065 18.1667 13.2267C18.2093 10.7108 19.7661 8.46959 22.1081 7.5523C24.45 6.63502 27.1138 7.22322 28.8525 9.04153C30.0375 8.81577 31.1832 8.41772 32.253 7.86C32.3314 7.81108 32.4308 7.81108 32.5092 7.86C32.5581 7.93841 32.5581 8.03783 32.5092 8.11623C31.991 9.30291 31.1155 10.2982 30.005 10.9633C30.9775 10.8505 31.9329 10.6211 32.8507 10.28C32.928 10.2274 33.0295 10.2274 33.1067 10.28C33.1715 10.3096 33.22 10.3663 33.2391 10.4348C33.2583 10.5034 33.2462 10.577 33.2063 10.6359Z" fill="#022849"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="form-section">
                    <div className="cognito">
                        <div className="loader">Form loading...</div>
                    </div>
                </div>
            </div>
        </Hero>
       
        <FaqsSection faqsSection={faqsSection} />

        <SocialFeed socialFeed={socialFeed} />
        </>
    )
}