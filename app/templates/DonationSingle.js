'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import styled from 'styled-components';
import FaqsSection from '../components/FaqsSection.js';

function toggleForm() {
    const toggleSwitch = document.getElementById('form-toggle-switch');
    const monthlyForm = document.getElementById('monthly-form');
    const annualForm = document.getElementById('annual-form');
    if (toggleSwitch.checked === true) {
        monthlyForm.style.display = 'none';
        annualForm.style.display = 'block';
    } else {
        annualForm.style.display = 'none';
        monthlyForm.style.display = 'block';
    }
}

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
        padding-bottom: 32px;
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
        ul {
            grid-template-columns: repeat(2, 1fr);
            @media (min-width: 516px) {
                display: grid;
            }
        }
        li {
            display: flex;
            align-items: start;
            font-size: 16px;
            color: #011424;
            padding: 0 16px 24px 0;
        }
        svg {
            min-width: 24px;
            padding-right: 5px;
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

  .toggle-section {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    padding: 0 0 20px 0;
    display: none;
    h6 {
        color: #000000;
        font-size: 14px;
        font-weight: 700;
        padding: 0 8px 0 8px;
    }
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 48px;
    height: 24px;
    border-radius: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #D2CCB8;
    transition: .4s;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 3px;
    bottom: 2px;
    background-color: #022D52;
    transition: .4s;
    border-radius: 50%;
  }

  input:checked + .slider:before {
    transform: translateX(22px);
  }

`;

// #endregion

export default function DonationSingle({ pageData }) {

    useEffect(() => {
        Cognito.load("forms", { id: "68" });
    }, []);

    useEffect(() => {

        const lightOrDarkMode = pageData.acf.light_or_dark_mode;

        if (lightOrDarkMode === 'Light') {
            document.getElementById('header').classList.remove('dark-mode-header');
            document.getElementById('header').classList.add('light-mode-header');
        }

        const toggleSwitch = document.getElementById('toggle-section');
        const path = window.location.pathname;
        const slug = path.split('/').pop();
        const annualForm = document.getElementById('annual-form');
        if (annualForm) {
            annualForm.style.display = 'none';
        }

        if (slug === 'monthly-or-annual-contribution') {
            toggleSwitch.style.display = 'flex';
        }

    }, []);

    const faqsSection = pageData.global_sections[2];

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
                    <h6>Support Options / {pageData.title}</h6>
                    <h1>{pageData.acf.content_section.title}</h1>
                    <p>{pageData.acf.content_section.paragraph}</p>
                    {((pageData.acf.content_section.feature_list) ? 

                        <ul>
                        {pageData.acf.content_section.feature_list.map((item, index) => {
                            return (
                                <li>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4343_8442)"><path d="M9.99999 15.7794L19.192 6.58643L20.607 8.00043L9.99999 18.6074L3.63599 12.2434L5.04999 10.8294L9.99999 15.7794Z" fill="#AE9966"/></g><defs><clipPath id="clip0_4343_8442"><rect width="24" height="24" fill="white" transform="translate(0 0.607422)"/></clipPath></defs></svg>
                                    {item.feature}
                                </li>
                            );
                        })}
                        </ul>

                    : '')}
                </div>
                <div className="form-section">
                    <div className="cognito">
                        <div className="loader">Form loading...</div>
                    </div>
                </div>
            </div>
        </Hero>

        <FaqsSection faqsSection={faqsSection} />

        </>
    )
}