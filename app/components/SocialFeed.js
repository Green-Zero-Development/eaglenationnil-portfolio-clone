'use client';

import { motion } from "framer-motion";
import styled from 'styled-components';
import { ElfsightWidget } from 'react-elfsight-widget';

const Section = styled.div`
    width: 100%;
    overflow: hidden;
    background-color: #022D52;
    padding: 50px 16px 100px 16px;
    .wrapper {
        max-width: 1380px;
        margin: 0 auto;
    }
    h2 {
        font-family: fatfrank, sans-serif;
        font-size: 48px;
        color: #EDE6CF;
    }
    p {
        font-family: roboto, sans-serif;
        color: #EDE6CF;
        font-size: 18px;
        padding: 10px 0 20px 0;
    }
    @media (min-width: 768px) {
        text-align: center;
    }
`;

export default function SocialFeed({ socialFeed }) {
    return (
        <></>
        // <Section>
        //     <div className="wrapper">
        //         <motion.div 
        //             initial={{ y: 25 }}
        //             whileInView={{ y: 0 }}
        //             viewport={{ once: true }}
        //             transition={{
        //                 duration: 1.25
        //             }}
        //         >
        //             <h2>{socialFeed.acf.title}</h2>
        //             <p>{socialFeed.acf.paragraph}</p>

        //         </motion.div>
        //         <motion.div 
        //             initial={{ y: 25 }}
        //             whileInView={{ y: 0 }}
        //             viewport={{ once: true }}
        //             transition={{
        //                 duration: 1.50
        //             }}
        //         >
        //             <ElfsightWidget widgetID="a28b2050-9767-41d4-b2b0-292d8972dedf" />
        //         </motion.div>
        //     </div>
        // </Section>
    );
}