'use client';

import { motion } from "framer-motion";
import Image from 'next/image';
import styled from 'styled-components';

function toggleNewSupportImg(item) {
    let numberHovered = item.target.id;
    let allSupportImages = document.querySelectorAll('.way-to-support-image');
    for (let i = 0; i < allSupportImages.length; i++) {
        allSupportImages[i].classList.remove('way-to-support-image-initial');
        allSupportImages[i].classList.add('way-to-support-image');
        allSupportImages[i].classList.remove('show-support-image');

        if (numberHovered === allSupportImages[i].id) {
            allSupportImages[i].classList.add('show-support-image');
        }
    }
    console.log(numberHovered);
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
    background-color: #022D52;
    .wrapper {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        max-width: 1320px;
        margin: 0 auto;
        padding: 100px 16px 100px 16px;
        overflow: hidden;
    }
    .content {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        h2 {
            width: 100%;
            font-family: roboto, sans-serif;
            font-size: 16px;
            font-weight: 700;
            color: #9B885B;
            padding-bottom: 20px;
        }
        @media (min-width: 768px) {
            width: 55%;
        }
    }
    .way-to-support-content {
        display: flex;
        width: 100%;
        border-bottom: 1.5px solid #EDE6CF;
        padding: 25px 0 25px 0;
        &:hover {
            cursor: pointer;
            h4 {
                color: #EDE6CF;
                transition: 0.25s;
            }
        }
        h6 {
            font-family: roboto, sans-serif;
            font-size: 20px;
            font-weight: 700;
            color: #EDE6CF;
            pointer-events: none;
        }
        h4 {
            font-family: fatfrank, sans-serif;
            font-size: 32px;
            color: #8FA2B2;
            margin: 0 0 0 24px;
            line-height: 1;
            pointer-events: none;
            transition: 0.25s;
            @media (min-width: 516px) {
                font-size: 40px;
            }
            @media (min-width: 768px) {
                font-size: 32px;
            }
            @media (min-width: 992px) {
                font-size: 48px;
            }
        }
        @media (min-width: 768px) {
            align-items: center;
        }
    }
    .image-box {
        display: none;
        position: relative;
        flex-wrap: wrap;
        width: 45%;
        height: 600px;
        border-radius: 16px;
        img {
            border-radius: 16px;
        }
        @media (min-width: 768px) {
            display: flex;
            height: 500px;
        }
        @media (min-width: 992px) {
            height: 600px;
        }
    }
    .way-to-support-image {
        opacity: 0;
        width: 100%;
        border-radius: 16px;
        transition: 0.25s;
    }
    .way-to-support-image-initial {
        opacity: 1 !important;
        transition: 0.25s;
    }
    .show-support-image {
        opacity: 1 !important;
        transition: 0.25s;
    }
`;

export default function WaysToSupportSection({ waysToSupportSection }) {
    return (
        <Section>
            <div className="wrapper">
                <motion.div 
                    initial={{ x: 25 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.25
                    }}
                    className="content"
                >
                
                    <h2>{waysToSupportSection.acf.title}</h2>
                    {waysToSupportSection.acf.way_to_support.map((item, index) => {
                        let buttonLink = getButtonLink(item.button.link_to_where, item.button.onsite_link, item.button.offsite_link, item.button.file_link);
                        return (
                            <a href={buttonLink} id={item.number} className="way-to-support-content" onMouseOver={toggleNewSupportImg}>
                                <h6>{item.number}</h6>
                                <h4>{item.title}</h4>
                            </a>
                        );
                    })}

                </motion.div>
                <div className="image-box">
                    {waysToSupportSection.acf.way_to_support.map((item, index) => {
                        if (item.number === "01") {
                            return (
                            <div id={item.number} className="way-to-support-image way-to-support-image-initial">
                                <Image className="bk-img" src={`${item.image.url}`} alt={`${item.image.alt}`} fill style={{ objectFit: 'cover' }} />
                            </div>
                            );
                        } else {
                            return (
                                <div id={item.number} className='way-to-support-image'>
                                    <Image className="bk-img" src={`${item.image.url}`} alt={`${item.image.alt}`} fill style={{ objectFit: 'cover' }} />
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </Section>
    );
}