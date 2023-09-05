'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import styled from 'styled-components';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import FaqsSection from '../components/FaqsSection.js';
import SocialFeed from '../components/SocialFeed.js';

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
            text-align: center;
            padding-bottom: 60px;
            h1 {
                font-family: fatfrank, sans-serif;
                font-size: 48px;
                color: #022849;
                padding: 0 0 15px 0;
            }
        }
    }
`;

const TestimonialSectionStyle = styled.div`
    max-width: 1380px;
    margin: 0 auto;
    font-family: roboto, sans-serif;
    padding: 50px 16px 50px 16px;
    .testimonial-list {
        display: none;
        grid-template-columns: repeat(1, 1fr);
        column-gap: 20px;
        @media (min-width: 768px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 992px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media (min-width: 1200px) {
            padding: 30px;
        }
    }
    .mobile-testimonial-list {

        @media (min-width: 768px) {
            display: none;
        }
    }
    .testimonial-single {
        position: relative;
        border: 3px solid #022D52;
        font-size: 16px;
        text-align: left;
        margin-bottom: 20px;
        padding: 20px;
        border-radius: 16px;
        overflow: scroll;
        color: #EDE6CF;
        cursor: pointer;
        ::-webkit-scrollbar {
            display: none;
        }
        .headshot {
            position: relative;
            width: 60px;
            height: 60px;
            border-radius: 6em;
            margin: 25px 0 25px 0;
            img {
                border-radius: 6em;
            }
        }
        h6 {
            padding-bottom: 8px;
        }
        .name {
            font-weight: 900;
        }
        .dark-head {
            color: #EDE6CF;
        }
        .light-head {
            color: #022D52;
        }
    }
    .testimonial-single-short {
        background-color: #022D52;
        @media (min-width: 992px) {
            height: 400px;
        }
    }
    .testimonial-single-tall {
        background-color: #EDE6CF;
        p {
            color: #011424;
        }
        @media (min-width: 992px) {
            height: 600px;
        }
    }
    .testimonial-single-tall-slider {
        background-color: #EDE6CF;
        p {
            color: #011424;
        }
        min-height: 612px;
        @media (min-width: 400px) {
            min-height: 480px;
        }
        @media (min-width: 516px) {
            min-height: 450px;
        }
        @media (min-width: 550px) {
            min-height: 350px;
        }
    }
    .testimonial-second-row-tall {
        
        @media (min-width: 992px) {
            margin-top: -200px;
        }
    }
    .modal-button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-width: 0px;
    }
    @media (min-width: 768px) {
        text-align: center;
        padding: 50px 16px 100px 16px;
    }
`;

// #endregion

export default function StudentTestimonialsPage({ pageData, testimonials }) {

    const faqsSection = pageData.global_sections[2];
    const socialFeed = pageData.global_sections[4];

    useEffect(() => {

        const lightOrDarkMode = pageData.acf.light_or_dark_mode;

        if (lightOrDarkMode === 'Light') {
            document.getElementById('header').classList.remove('dark-mode-header');
            document.getElementById('header').classList.add('light-mode-header');
        }

    }, []);

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);
    const modalButtonRef = useRef(null);
    const modalContainerRef = useRef(null);

    const openModal = (testimonial) => {
        setSelectedTestimonial(testimonial);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedTestimonial(null);
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
        max-width: 600px;
        margin: 0 auto;
        .wrapper {
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            text-align: center;
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

    const Modal = ({ isOpen, onClose, testimonial }) => {
        const modalRef = useRef(null);

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
                modalRef.current.focus();
            }
        }, [isOpen]);

        return isOpen ? (
            <ModalContainer onClick={backdropClick} ref={modalContainerRef}>
                <ModalContent ref={modalRef} tabIndex={-1}>
                    <div className="wrapper">
                        <h4>{testimonial.acf.name}</h4>
                        <p>"{testimonial.acf.text}"</p>
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

    let studentIndex = 0;

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
                <Image className="badge" src={`https://inside.eaglenationnil.com/wp-content/uploads/2023/04/badge-till-super-large.png`} width={700} height={668} style={{ objectFit: 'contain' }} />
            </motion.div>
            <div className="wrapper">
                <div className="header-content">
                    <h1>{pageData.acf.hero_section.title}</h1>
                    <p>{pageData.acf.hero_section.paragraph}</p>
                </div>
            </div>
        </SectionAlt>

            <TestimonialSectionStyle>
            <ul className="testimonial-list">
                {testimonials.map((item, index) => {
                    if (item.acf.relationship_to_school === "Student") {
                        if (studentIndex % 2 === 0) {
                            studentIndex++;
                            if (item.acf.text.length <= 220) {
                                var truncatedText = item.acf.text;
                            } else {
                                var truncatedText = item.acf.text.substr(0, 220) + " ...";
                            }
                            return (
                                <motion.div 
                                    initial={{ y: 25 }}
                                    whileInView={{ y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 1.25
                                    }}
                                    className="testimonial-single testimonial-single-short" key={index}
                                >
                                        <button className="modal-button" ref={modalButtonRef} onClick={() => openModal(item)}></button>
                                        <p>"{truncatedText}"</p>
                                        <div className="headshot">
                                            <Image src={(item.acf.headshot) ? item.acf.headshot : 'https://inside.eaglenationnil.com/wp-content/uploads/2023/06/android-chrome-192x192-1.png'} fill style={{ objectFit: 'cover' }} />
                                        </div>
                                        <h6 className="name dark-head">{item.acf.name}</h6>
                                        {/* <h6 className="dark-head">{item.acf.position}, {item.acf.company}</h6>
                                        <h6 className="dark-head">{item.acf.relationship_to_school}</h6> */}
                                        
                                </motion.div>
                                
                            );
                        } else if (studentIndex === 1) {
                            studentIndex++;
                            if (item.acf.text.length <= 450) {
                                var truncatedText = item.acf.text;
                            } else {
                                var truncatedText = item.acf.text.substr(0, 450) + " ...";
                            }
                            return (
                                <motion.div 
                                    initial={{ y: 55 }}
                                    whileInView={{ y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 1.25
                                    }}
                                    className="testimonial-single testimonial-single-tall" key={index}
                                >
                                    <button className="modal-button" ref={modalButtonRef} onClick={() => openModal(item)}></button>
                                    <p>"{truncatedText}"</p>
                                    <div className="headshot">
                                        <Image src={(item.acf.headshot) ? item.acf.headshot : 'https://inside.eaglenationnil.com/wp-content/uploads/2023/06/android-chrome-192x192-1.png'} fill style={{ objectFit: 'cover' }} />
                                    </div>
                                    <h6 className="name light-head">{item.acf.name}</h6>
                                    {/* <h6 className="light-head">{item.acf.position}, {item.acf.company}</h6>
                                    <h6 className="light-head">{item.acf.relationship_to_school}</h6> */}
    
                                </motion.div>
                                
                            );
                        } else if ((studentIndex - 7) % 6 === 0) {
                            studentIndex++;
                            if (item.acf.text.length <= 450) {
                                var truncatedText = item.acf.text;
                            } else {
                                var truncatedText = item.acf.text.substr(0, 450) + " ...";
                            }
                            return (
                                <motion.div 
                                    initial={{ y: 55 }}
                                    whileInView={{ y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 1.25
                                    }}
                                    className="testimonial-single testimonial-single-tall" key={index}
                                >
                                    <button className="modal-button" ref={modalButtonRef} onClick={() => openModal(item)}></button>
                                    <p>"{truncatedText}"</p>
                                    <div className="headshot">
                                        <Image src={(item.acf.headshot) ? item.acf.headshot : 'https://inside.eaglenationnil.com/wp-content/uploads/2023/06/android-chrome-192x192-1.png'} fill style={{ objectFit: 'cover' }} />
                                    </div>
                                    <h6 className="name light-head">{item.acf.name}</h6>
                                    {/* <h6 className="light-head">{item.acf.position}, {item.acf.company}</h6>
                                    <h6 className="light-head">{item.acf.relationship_to_school}</h6> */}
    
                                </motion.div>
                                
                            );
                        } else {
                            studentIndex++;
                            if (item.acf.text.length <= 450) {
                                var truncatedText = item.acf.text;
                            } else {
                                var truncatedText = item.acf.text.substr(0, 450) + " ...";
                            }
                            return (
                                <motion.div 
                                    initial={{ y: 55 }}
                                    whileInView={{ y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 1.25
                                    }}
                                    className="testimonial-single testimonial-single-tall testimonial-second-row-tall" key={index}
                                >
                                    <button className="modal-button" ref={modalButtonRef} onClick={() => openModal(item)}></button>
                                    <p>"{truncatedText}"</p>
                                    <div className="headshot">
                                        <Image src={(item.acf.headshot) ? item.acf.headshot : 'https://inside.eaglenationnil.com/wp-content/uploads/2023/06/android-chrome-192x192-1.png'} fill style={{ objectFit: 'cover' }} />
                                    </div>
                                    <h6 className="name light-head">{item.acf.name}</h6>
                                    {/* <h6 className="light-head">{item.acf.position}, {item.acf.company}</h6>
                                    <h6 className="light-head">{item.acf.relationship_to_school}</h6> */}
    
                                </motion.div>
                                
                            );
                        } 
                    } else {
                        return null;
                    }
                })}
            </ul>
            
            <ul className="mobile-testimonial-list">
                <Splide hasTrack={ false }
                    options={ {
                        type: 'slide',
                        perPage: 1,
                        gap: '20px',
                        arrows: false,
                        pagination: false,
                        padding: '0px',
                        keyboard: 'global'
                    }
                    }
                    >
                    <SplideTrack className="pt-4">
                        {testimonials.map((item, index) => {
                            if (item.acf.relationship_to_school === "Student") {
                                if (item.acf.text.length <= 450) {
                                    var truncatedText = item.acf.text;
                                } else {
                                    var truncatedText = item.acf.text.substr(0, 450) + " ...";
                                }
                                return (
                                <SplideSlide className="splide__slide">
                                    <div className="testimonial-single testimonial-single-tall-slider" key={index}>
                                        <button className="modal-button" ref={modalButtonRef} onClick={() => openModal(item)}></button>
                                        <p>"{truncatedText}"</p>
                                        <div className="headshot">
                                            <Image src={(item.acf.headshot) ? item.acf.headshot : 'https://inside.eaglenationnil.com/wp-content/uploads/2023/06/android-chrome-192x192-1.png'} fill style={{ objectFit: 'cover' }} />
                                        </div>
                                        <h6 className="name light-head">{item.acf.name}</h6>
                                        {/* <h6 className="light-head">{item.acf.position}, {item.acf.company}</h6>
                                        <h6 className="light-head">{item.acf.relationship_to_school}</h6> */}
                                        
                                    </div>
                                </SplideSlide>
                                );
                            }
                        })}
                        
                    </SplideTrack>
                </Splide>
            </ul>
        </TestimonialSectionStyle>
        {modalOpen && (
            <Modal isOpen={modalOpen} onClose={closeModal} testimonial={selectedTestimonial} />
        )}

            <FaqsSection faqsSection={faqsSection} />

            <SocialFeed socialFeed={socialFeed} />
        </>
    );
}