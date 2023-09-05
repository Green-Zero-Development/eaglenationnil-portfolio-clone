'use client';

import { motion } from "framer-motion";
import Image from 'next/image';
import styled from 'styled-components';

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
    position: relative;
    .wrapper {
        max-width: 1320px;
        margin: 0 auto;
        padding: 80px 16px 80px 16px;
        overflow: hidden;
    }
    .inner-box {
        position: relative;
        background-color: #022d52;
        max-width: 600px;
        height: 277px;
        border-radius: 20px;
        padding: 10px;
        margin: 0 auto;
        text-align: center;
        .border-box {
            border: 3px solid #F3EEDF;
            border-radius: 16px;
            width: 100%;
            height: 257px;
            padding: 30px 20px 30px 20px;
            h2 {
                font-family: thirsty-script, sans-serif;
                font-size: 48px;
                color: #F3EEDF;
                padding-bottom: 10px;
            }
            p {
                font-size: 18px;
                color: #F3EEDF;
                padding-bottom: 50px;
            }
            @media (min-width: 768px) {
                width: 580px;
                height: 257px;
                padding: 30px 40px 30px 40px;
            }
        }
        @media (min-width: 992px) {
            margin-left: 0;
            text-align: left;
        }
    }
    @media (min-width: 768px) {
        
    }
`;

export default function ShopCta({ shopCta }) {

    let buttonLink = getButtonLink(shopCta.acf.button.link_to_where, shopCta.acf.button.onsite_link, shopCta.acf.button.offsite_link, shopCta.acf.button.file_link);

    return (
        <Section>
            <Image className="bk-img" src={`${shopCta.acf.background_image.url}`} alt={`${shopCta.acf.background_image.alt}`} fill style={{ objectFit: 'cover' }} />
            <div className="wrapper">
                <motion.div 
                    initial={{ y: 25 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.25
                    }}
                >
                    <div className="inner-box">
                        <div className="border-box">
                            <h2>{shopCta.acf.title}</h2>
                            <p>{shopCta.acf.paragraph}</p>
                            <a href={buttonLink} className="filled-button-dark">
                                <span>{shopCta.acf.button.text}</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}