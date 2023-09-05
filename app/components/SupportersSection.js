'use client';

import { motion } from "framer-motion";
import styled from 'styled-components';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';

const Section = styled.div`
    background-color: #022D52;
    padding: 50px 0 25px 0;
    h2 {
        font-family: roboto, sans-serif;
        font-size: 18px;
        color: #EDE6CF;
        text-align: center;
        padding: 0 0 40px 0;
    }
    .slider {
        max-width: 2000px;
        margin: 0 auto;
        cursor: grab;
    }
`;

export default function SupportersSection({ supportersSection }) {
   
    return (
        <Section>
            {/* <div className="wrapper">
                <motion.div 
                    initial={{ y: 25 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.25
                    }}
                >
                    <h2>{supportersSection.acf.title}</h2>
                </motion.div>
                <motion.div 
                    initial={{ y: 25 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.50
                    }}
                >
                    <div className="slider">
                        <Splide hasTrack={ false }
                            options={ {
                                type: 'loop',
                                perPage: 8,
                                gap: '20px',
                                drag: 'free',
                                rewind: false,
                                arrows: false,
                                pagination: false,
                                snap: false,
                                flickPower: 0,
                                flickMaxPages: 6,
                                padding: '0px',
                                keyboard: 'global',
                                breakpoints: {
                                    416: {
                                        perPage: 2,
                                        padding: '100px',
                                    },
                                    516: {
                                        perPage: 3,
                                        padding: '100px',
                                    },
                                    768: {
                                        perPage: 4,
                                        padding: '100px',
                                    },
                                    992: {
                                        perPage: 5,
                                        padding: '100px',
                                    },
                                    1200: {
                                        perPage: 6,
                                        padding: '100px',
                                    },
                                    1440: {
                                        perPage: 7,
                                        padding: '100px',
                                    },
                                    2000: {
                                        perPage: 8,
                                        padding: '100px',
                                    }
                                }
                            }
                            }
                            >
                            <SplideTrack className="pt-4">
                                {supportersSection.acf.support_logos.map((item, index) => {
                                    return (
                                    <SplideSlide key={index} className="splide__slide">
                                        <img src={item.logo.url} />
                                    </SplideSlide>
                                    );
                                })}
                                
                            </SplideTrack>
                        </Splide>
                    </div>
                </motion.div>
            </div> */}
        </Section>
    );
}