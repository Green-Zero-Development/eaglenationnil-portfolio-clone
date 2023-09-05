'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import styled from 'styled-components';
import TestimonialSection from '../components/TestimonialSection.js';
import ShopCta from '../components/ShopCta.js';
import FaqsSection from '../components/FaqsSection.js';
import SupportersSection from '../components/SupportersSection.js';
import WaysToSupportSection from '../components/WaysToSupportSection.js';
import SocialFeed from '../components/SocialFeed.js';
import ReactPlayer from 'react-player';

const videoToggle = (videoElement) => {
    const vidIcon = videoElement.target;
    const ytBox = videoElement.target.parentElement.querySelector('.video');
    vidIcon.style.display = "none";
    ytBox.style.opacity = "1";
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

const Hero = styled.div`
    position: relative;
    height: 100%;
    margin-top: -80px;
    overflow: hidden;
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
    video {
        width: 100%;
        height: 100%;
        max-height: 800px;
        margin: 0 auto;
        object-fit: cover;
    }
    .splide__slide {
        position: relative;
        height: 500px;
        @media (min-width: 768px) {
            height: 800px;
        }
    }
    .slide-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        max-width: 320px;
        font-family: thirsty-script, sans-serif !important;
        font-size: 46px;
        line-height: 1;
        text-align: center;
        color: #FBF9F4;
        padding: 0 16px 0 16px;
        z-index: 5;
        @media (min-width: 400px) {
            max-width: 380px;
            font-size: 56px;
        }
        @media (min-width: 516px) {
            max-width: 480px;
            font-size: 72px;
        }
        @media (min-width: 768px) {
            max-width: 570px;
            font-size: 88px;
        }
    }
    .badge {
        display: none;
        position: absolute;
        top: -250px;
        right: 0;
        transform: rotate(16deg);
        z-index: 2;
        @media (min-width: 768px) {
            display: block;
        }
    }
    @media (min-width: 768px) {
        
    }
`;

const PostHero = styled.div`
    position: relative;
    background-color: #022d52;
    padding: 20px;
    
    z-index: 2;
    .border-box {
        position: relative;
        max-width: 1380px;
        padding: 30px 20px 30px 20px;
        border: 3px solid #EDE6CF;
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
            color: #EDE6CF;
            line-height: 1;
            padding-bottom: 15px;
            @media (min-width: 768px) {
                font-size: 56px;
                padding-bottom: 25px;
            }
            @media (min-width: 992px) {
                font-size: 45px;
                padding-bottom: 0px;
            }
            @media (min-width: 1200px) {
                font-size: 40px;
            }
            @media (min-width: 1440px) {
                font-size: 56px;
            }
        }
        p {
            color: #EDE6CF;
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

const VideoSection = styled.div`
    flex-wrap: wrap;
    align-items: center;
    padding: 100px 0px 100px 0px;
    max-width: 1380px;
    margin: 0 auto;
    overflow: hidden;
    .content {
        width: 100%;
        padding: 0px 25px 0 25px;
        h6 {
            font-family: roboto, sans-serif;
            font-weight: 900;
            color: #9B885B;
            font-size: 16px;
        }
        h2 {
            font-family: fatfrank, sans-serif;
            font-size: 48px;
            color: #022849;
            padding: 15px 0 15px 0;
            line-height: 1;
        }
        p {
            font-family: roboto, sans-serif;
            color: #011424;
            font-size: 18px;
            padding-bottom: 25px;
        }
        .buttons {
            
            align-items: center;
            gap: 20px;
            > * {
                &:last-child {
                    margin-top: 24px;
                    margin-left: 5px;
                    @media (min-width: 992px) {
                        margin-top: 0px;
                        margin-left: 0px;
                    }
                }
            }
            @media (min-width: 992px) {
                display: flex;
            }
        }
        @media (min-width: 768px) {
            width: 45%;
            padding: 0px 15px 0 0px;
        }
        @media (min-width: 1200px) {
            padding: 0px 50px 0 50px;
        }
    }
    .border-box {
        position: relative;
        width: 88%;
        height: 202px;
        margin: 80px auto 0 auto;
        z-index: 2;
        .bk-img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            border-radius: 16px;
        }
        .inner-border-box {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 97%;
            height: 93%;
            border-radius: 16px;
            border: 3px solid #EDE6CF;
            margin: 0 auto;
            pointer-events: none;
            z-index: 2;
            @media (min-width: 768px) {
                height: 96%;
            }
        }
        .video-play-button {
            position: absolute;
            top: 32%;
            left: 39%;
            transition: 0.25s;
            &:hover {
                transform: scale(1.1);
                cursor: pointer;
                transition: 0.25s;
            }
            @media (min-width: 516px) {
                top: 37%;
                left: 42%;
            }
            @media (min-width: 768px) {
                top: 43%;
                left: 45%;
            }
        }
        @media (min-width: 516px) {
           height: 300px;
        }
        @media (min-width: 768px) {
            width: 55%;
            height: 440px;
            margin: 0px auto 0 auto;
        }
    }
    .video-box {
        
        .video {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 16px;
        }
        @media (min-width: 516px) {
            top: 7px;
        }
        @media (min-width: 768px) {
            top: 0;
        }
    }

    @media (min-width: 768px) {
        display: flex;
        padding: 100px 25px 100px 25px;
    }
    
    @media (min-width: 1200px) {
        padding: 100px 50px 100px 50px;
    }
`;

const WaysToSupport = styled.div`
    position: relative;
    max-width: 1380px;
    margin: 0 auto;
    padding: 100px 0px 100px 0px;
    .bk-img {
        border-radius: 16px;
    }
    .gradient {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgb(211,205,185);
        background: linear-gradient(0deg, rgba(211,205,185,0.7665441176470589) 0%, rgba(211,205,185,1) 80%);
        pointer-events: none;
        z-index: 2;
        @media (min-width: 1440px) {
            border-radius: 16px;
        }
    }
    .heading-content {
        position: relative;
        padding-bottom: 80px;
        padding: 0 16px 0 16px;
        z-index: 2;
        h2 {
            font-family: fatfrank, sans-serif;
            font-size: 48px;
            color: #022849;
        }
        p {
            font-family: roboto, sans-serif;
            color: #011424;
            font-size: 18px;
            padding: 20px 0 80px 0;
        }
    }
    .ways-list {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        max-width: 1380px;
        margin: 0 auto;
        padding: 0 8px 0 8px;
        z-index: 2;
        @media (min-width: 768px) {
            padding: 0 16px 0 16px;
        }
    }
    .ways-single {
        position: relative;
        width: 321px;
        height: 360px;
        margin: 0 auto 25px auto;
        transition: 0.25s;
        &:hover {
            transform: scale(1.03);
            cursor: pointer;
            transition: 0.25s;
        }
        .content {
            position: relative;
            text-align: center;
            padding: 50px 30px 0 30px;
            z-index: 2;
            h4 {
                font-family: fatfrank, sans-serif;
                font-size: 24px;
                color: #022849;
                padding: 15px 0 20px 0;
            }
            p {
                font-family: roboto, sans-serif;
                font-size: 16px;
                color: #011424;
            }
            img {
                margin: 0 auto;
            }
            button {
                margin: 20px auto 0px auto;
            }
        }
    }
    .button-section {
        display: flex;
        padding-top: 10px;
    }
    .arrow-button {
        position: relative;
        margin: 0 auto;
        z-index: 2;
    }
    @media (min-width: 768px) {
        text-align: center;
    }
    
    @media (min-width: 1200px) {
        
    }
`;

const ContributionsSection = styled.div`
    flex-wrap: wrap;
    align-items: center;
    padding: 100px 0px 100px 0px;
    max-width: 1380px;
    margin: 0 auto;
    overflow: hidden;
    .content {
        width: 100%;
        padding: 0px 25px 0 25px;
        h6 {
            font-family: thirsty-script, sans-serif;
            font-weight: 900;
            color: #9B885B;
            font-size: 88px;
        }
        h2 {
            font-family: fatfrank, sans-serif;
            font-size: 32px;
            color: #022849;
            padding: 15px 0 50px 0;
            line-height: 1;
            @media (min-width: 516px) {
                font-size: 40px;
            }
        }
        p {
            font-family: roboto, sans-serif;
            color: #011424;
            font-size: 18px;
        }
        @media (min-width: 768px) {
            width: 50%;
            padding: 0px 15px 0 0px;
        }
        @media (min-width: 1200px) {
            padding: 0px 100px 0 50px;
        }
    }

    .image-box {
        position: relative;
        width: 88%;
        height: 202px;
        margin: 50px auto 0 auto;
        img {
            border-radius: 16px;
        }
        @media (min-width: 416px) {
            width: 94%;
            height: 400px;
         }
        @media (min-width: 768px) {
            width: 50%;
            height: 400px;
            margin: 0px auto 0 auto;
        }
        @media (min-width: 992px) {
            width: 50%;
            height: 600px;
            margin: 0px auto 0 auto;
        }
    }

    @media (min-width: 768px) {
        display: flex;
        padding: 100px 25px 100px 25px;
    }
    
    @media (min-width: 1200px) {
        padding: 100px 50px 100px 50px;
    }
`;

// #endregion

export default function Home({ pageData, testimonials }) {

    const [modalOpen, setModalOpen] = useState(false);
    const modalButtonRef = useRef(null);
    const modalContainerRef = useRef(null);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        modalButtonRef.current.focus();
    };

    const backdropClick = (event) => {
        if (event.target === modalContainerRef.current) {
            closeModal();
        }
    };

    // Modal component code

    const ModalContainer = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 16px 0 16px;
        z-index: 9999;
    `;

    const ModalContent = styled.div`
        position: relative;
        background-color: white;
        padding: 8px;
        border-radius: 16px;
        min-height: 700px;
        height: 40%;
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        @media (min-width: 516px) {
            height: 60%;
        }
        .wrapper {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 8px;
            text-align: center;
            height: 100%;
            @media (min-width: 516px) {
                padding: 80px;
            }
            h4 {
                font-family: thirsty-script, sans-serif;
                font-weight: 900;
                font-size: 32px;
                color: #022d52;
            }
            p {
                font-family: roboto, sans-serif;
                font-size: 16px;
                color: #011424;
                padding: 20px 0 20px 0;
            }
            .modal-button {
                margin-top: 40px;
                @media (min-width: 516px) {
                    margin-top: 20px;
                }
            }
        }
        .close-modal {
            display: none;
            position: absolute;
            top: 0;
            right: 0;
            align-items: center;
            font-family: fatfrank, sans-serif;
            font-size: 14px;
            font-weight: 400;
            color: #022D52;
            padding: 20px 30px 0 0;
            border-width: 0px;
            @media (min-width: 516px) {
                display: flex;
            }
            svg {
                width: 15px;
                height: 15px;
                padding-left: 6px;
            }
        }
    `;

    const Modal = ({ isOpen, onClose }) => {
        const modalVideoRef = useRef(null);

        useEffect(() => {
            const handleKeydown = (event) => {
                if (event.key === 'Escape') {
                    onClose();
                }
            };

            document.addEventListener('keydown', handleKeydown);

            return () => {
                document.removeEventListener('keydown', handleKeydown);
            };
        }, [onClose]);

        useEffect(() => {
            if (isOpen) {
                modalVideoRef.current.focus();
            }
        }, [isOpen]);

        return isOpen ? (
            <ModalContainer onClick={backdropClick} ref={modalContainerRef}>
                <ModalContent ref={modalVideoRef} tabIndex={-1}>
                    <div className="wrapper">
                        <ReactPlayer
                            playing={true}
                            controls={true}
                            playsinline={true}
                            width='100%'
                            height='100%'
                            url={pageData.acf.video_section.video_link.url}
                            className="video"
                        />
                        {/* <iframe className="video" width="100%" height="100%" src={videoLink + '?autoplay=1'} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                        <button className="modal-button filled-button-dark" onClick={closeModal}>Close</button>
                        <button className="close-modal" onClick={closeModal}>
                            Close
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#022D52"><path d="M378.4 71.4c8.5-10.1 7.2-25.3-2.9-33.8s-25.3-7.2-33.8 2.9L192 218.7 42.4 40.6C33.9 30.4 18.7 29.1 8.6 37.6S-2.9 61.3 5.6 71.4L160.7 256 5.6 440.6c-8.5 10.2-7.2 25.3 2.9 33.8s25.3 7.2 33.8-2.9L192 293.3 341.6 471.4c8.5 10.1 23.7 11.5 33.8 2.9s11.5-23.7 2.9-33.8L223.3 256l155-184.6z"/></svg>
                        </button>
                    </div>
                </ModalContent>
            </ModalContainer>
        ) : null;
    };

    useEffect(() => {

        const lightOrDarkMode = pageData.acf.light_or_dark_mode;

        if (lightOrDarkMode === 'Light') {
            document.getElementById('header').classList.remove('dark-mode-header');
            document.getElementById('header').classList.add('light-mode-header');
        }

    }, []);

    const testimonialSection = pageData.global_sections[0];
    const shopCta = pageData.global_sections[1];
    const faqsSection = pageData.global_sections[2];
    const supportersSection = pageData.global_sections[5];
    const waysToSupportSection = pageData.global_sections[3];
    const socialFeed = pageData.global_sections[4];

    let postHeroButtonLink = getButtonLink(pageData.acf.post_hero_section.button.link_to_where, pageData.acf.post_hero_section.button.onsite_link, pageData.acf.post_hero_section.button.offsite_link, pageData.acf.post_hero_section.button.file_link);

    let videoSectionFilledButtonLink = getButtonLink(pageData.acf.video_section.filled_button.link_to_where, pageData.acf.video_section.filled_button.onsite_link, pageData.acf.video_section.filled_button.offsite_link, pageData.acf.video_section.filled_button.file_link);

    let videoSectionArrowButtonLink = getButtonLink(pageData.acf.video_section.text_button.link_to_where, pageData.acf.video_section.text_button.onsite_link, pageData.acf.video_section.text_button.offsite_link, pageData.acf.video_section.text_button.file_link);

    return (
        <>
            <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

            </div>
            <Hero>

                {((pageData.acf.hero_section.video) ? 
                
                <div className="splide__slide">
                    <div className="gradient" />
                    <h2 className="slide-text">{pageData.acf.hero_section.text_over_video}</h2>
                    <ReactPlayer
                        playing={true}
                        muted={true}
                        playsinline={true}
                        width='100%'
                        height='100%'
                        loop
                        url={pageData.acf.hero_section.video.url}
                    />
                    {/* <video autoplay="autoplay" muted loop id="myVideo">
                        <source src={pageData.acf.hero_section.video.url} type="video/webm" />
                        <source src='https://inside.eaglenationnil.com/wp-content/uploads/2023/06/NIL-Banner-Lo-Res.mp4' type="video/mp4" />
                    </video> */}
                </div>

            :
            
                <Splide hasTrack={ false }
                            options={ {
                                type: 'loop',
                                perPage: 1,
                                arrows: false,
                                pagination: false,
                                autoplay: true,
                                interval: 10000
                            }
                            }
                            >
                        <SplideTrack className="">
                            {pageData.acf.hero_section.slide.map((item, index) => {
                                return (
                                    <SplideSlide key={index} className="splide__slide">
                                        <div className="gradient" />
                                        <h2 className="slide-text">{item.slide_text}</h2>
                                        <Image className="" src={`${item.slide_image.url}`} alt={`${item.slide_image.alt}`} fill style={{ objectFit: 'cover' }} unoptimized />
                                    </SplideSlide>
                                );
                            })}
                        </SplideTrack>
                    </Splide>
            
                )}
                
                <PostHero>
                    <motion.div 
                        initial={{ x: 100, y: 0 }}
                        animate={{ x: 50, y: -50 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.4
                        }}
                    >
                        <Image className="badge" src={`${pageData.acf.hero_section.badge_image.url}`} alt={`${pageData.acf.hero_section.badge_image.alt}`} width={402} height={344} style={{ objectFit: 'contain' }} />
                    </motion.div>
                    
                        <div className="border-box">
                            <div className="content-box">
                                <h2>{pageData.acf.post_hero_section.title}</h2>
                                <div className="content">
                                    <p>{pageData.acf.post_hero_section.paragraph}</p>
                                    <Link href={postHeroButtonLink} className="outline-button">
                                        {pageData.acf.post_hero_section.button.text}
                                    </Link>
                                </div>
                            </div>
                        </div>

                </PostHero>
            </Hero>
            <VideoSection>

                <motion.div 
                    initial={{ x: -15 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.25
                    }}
                    className="content"
                >

                <h6>{pageData.acf.video_section.subtitle}</h6>
                <h2>{pageData.acf.video_section.title}</h2>
                <p>{pageData.acf.video_section.paragraph}</p>
                <div className="buttons">
                    <Link href={videoSectionFilledButtonLink} className="blue-button">
                        {pageData.acf.video_section.filled_button.text}
                    </Link>
                    <Link href={videoSectionArrowButtonLink} className="arrow-button">
                        {pageData.acf.video_section.text_button.text}
                    </Link>
                </div>

                </motion.div>

                <motion.div 
                        initial={{ x: 15 }}
                        whileInView={{ x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1.25
                        }}
                        className="border-box"
                >
                    
                    <div className="video-box">
                        <ReactPlayer
                            id="promo-video"
                            playing={true}
                            controls={true}
                            playsinline={true}
                            light={<><img className="bk-img" src={pageData.acf.video_section.video_poster_image.url} alt={pageData.acf.video_section.video_poster_image.alt} /><div className="inner-border-box"></div></>}
                            playIcon={<Image id="video-play-button" className="video-play-button" src='https://inside.eaglenationnil.com/wp-content/uploads/2023/04/Play-Button.svg' alt="Eagle Nation Collective | Play Icon" width={64} height={64} style={{ objectFit: 'contain' }} />}
                            width='93%'
                            height='97%'
                            url={pageData.acf.video_section.video_link.url}
                            className="video"
                        />
                    </div>

                </motion.div>
            </VideoSection>

            <div id="support"></div>

            <motion.div 
                initial={{ y: 25 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1.25
                }}
                className="border-box"
            >

                <WaysToSupport>
                    <Image className="bk-img" src={`${pageData.acf.ways_to_support_section.background_image.url}`} alt={`${pageData.acf.ways_to_support_section.background_image.alt}`} fill style={{ objectFit: 'cover' }} />
                    <div className="gradient"></div>
                    <div className="heading-content">
                        <h2>{pageData.acf.ways_to_support_section.title}</h2>
                        <p>{pageData.acf.ways_to_support_section.paragraph}</p>
                    </div>
                    <div className="ways-list">
                        {pageData.acf.ways_to_support_section.support_method_box.map((item) => {
                            return (
                                <Link className="ways-single" href={item.link}>
                                    <Image src={`https://inside.eaglenationnil.com/wp-content/uploads/2023/04/pennet.png`} alt="Eagle Nation Collective | Beige Pennant with Logo" fill style={{ objectFit: 'fill', objectPosition: 'top' }} />
                                    <div className="content">
                                        <img src="https://inside.eaglenationnil.com/wp-content/uploads/2023/04/tiny-badge.png" alt="Eagle Nation Collective | Tiny Badge Icon" />
                                        <h4>{item.title}</h4>
                                        <p>{item.paragraph}</p>
                                        <button className="blue-button">{item.button_text}</button>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </WaysToSupport>

            </motion.div>

            <ContributionsSection>
                <motion.div 
                    initial={{ x: -15 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.25
                    }}
                    className="content"
                >
                    
                    <h6>{pageData.acf.contributions_section.percentage}</h6>
                    <h2>{pageData.acf.contributions_section.title}</h2>
                    <div dangerouslySetInnerHTML={{__html: pageData.acf.contributions_section.paragraph}}></div>

                </motion.div>

                <motion.div 
                    initial={{ x: 15 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.25
                    }}
                    className="image-box"
                >

                    <Image className="bk-img" src={`${pageData.acf.contributions_section.image.url}`} alt={`${pageData.acf.contributions_section.image.alt}`} fill style={{ objectFit: 'cover' }} loading='eager' />

                </motion.div>

            </ContributionsSection>

            <TestimonialSection testimonialSection={testimonialSection} testimonials={testimonials} />

            {/* <ShopCta shopCta={shopCta} /> */}

            <FaqsSection faqsSection={faqsSection} />

            <SupportersSection supportersSection={supportersSection} />

            <WaysToSupportSection waysToSupportSection={waysToSupportSection} />

            <SocialFeed socialFeed={socialFeed} />

            {modalOpen && (
                <Modal isOpen={modalOpen} onClose={closeModal} />
            )}
        </>
    );
}