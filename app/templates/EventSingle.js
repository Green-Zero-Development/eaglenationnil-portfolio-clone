'use client';

import Image from 'next/image';
import styled from 'styled-components';
import FaqsSection from '../components/FaqsSection.js';
import SocialFeed from '../components/SocialFeed.js';

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
    padding: 300px 0 400px 0;
    margin-top: -80px;
    overflow: hidden;
    .bk-img {
        
    }
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
`;

const PostHero = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: rgba(2, 45, 82, 0.25);
    backdrop-filter: blur(6px);
    padding: 50px 16px 50px 16px;
    color: #F8F7F5;
    z-index: 5;
    .content-wrapper {
        position: relative;
        align-items: end;
        justify-content: space-between;
        max-width: 1396px;
        margin: 0 auto;
        z-index: 5;
        .content {
            width: 100%;
            h6 {
                font-family: roboto, sans-serif;
                font-size: 18px;
                font-weight: 700;

            }
            h1 {
                font-family: fatfrank, sans-serif;
                font-size: 48px;
                padding: 15px 0 5px 0;
                @media (min-width: 768px) {
                    font-size: 56px;
                }
            }
            p {
                font-family: roboto, sans-serif;
                font-size: 18px;
                padding-bottom: 50px;
                @media (min-width: 768px) {
                    padding-bottom: 0px;
                }
            }
            .button-box {
                position: relative;
                z-index: 5;
            }
            @media (min-width: 768px) {
                width: 60%;
            }
        }
        @media (min-width: 768px) {
            display: flex;
        }
    }
`;

const EventData = styled.div`
    max-width: 1420px;
    margin: 0 auto;
    padding: 50px 16px 100px 16px;
    .wrapper {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;
        .wide-column { 
            grid-column: span 4;
            @media (min-width: 992px) {
                grid-column: span 2;
            }
        }
        .databox {
            padding-bottom: 50px;
            h6 {
                font-family: roboto, sans-serif;
                font-size: 16px;
                font-weight: 900;
                color: #9B885B;
                padding-bottom: 8px;
            }
            h5 {
                font-family: roboto, sans-serif;
                font-size: 20px;
                font-weight: 700;
                color: #022849;
            }
            p {
                font-family: roboto, sans-serif;
                font-size: 18px;
                color: #022849;
                padding-bottom: 50px;
            }
        }
        .column {
            grid-column: span 4;
            @media (min-width: 768px) {
                grid-column: span 2;
            }
            @media (min-width: 992px) {
                grid-column: span 1;
            }
        }
        .long-description-box {
            h2 {
                font-family: fatfrank, sans-serif;
                font-size: 24px;
                font-weight: 700;
                color: #022849;
                padding-bottom: 20px;
            }
            h6 {
                font-family: roboto, sans-serif;
                font-size: 16px;
                font-weight: 900;
                color: #9B885B;
                padding-bottom: 8px;
            }
            h5 {
                font-family: roboto, sans-serif;
                font-size: 20px;
                font-weight: 700;
                color: #022849;
                padding-bottom: 8px;
            }
            p {
                font-family: roboto, sans-serif;
                font-size: 18px;
                color: #022849;
                padding-bottom: 50px;
            }
        }
    }
`;

// #endregion

export default function EventSingle({ postData }) {

    const faqsSection = postData.global_sections[2];
    const socialFeed = postData.global_sections[4];
    
    return (
        <>
        <div dangerouslySetInnerHTML={{__html: postData.yoast_head[0]}}>

        </div>
            <Hero>
                <div className="gradient"></div>
                <Image className="bk-img" src={((postData.acf.event_image) ? postData.acf.event_image.url : `https://inside.eaglenationnil.com/wp-content/uploads/2023/04/hero-img-0002.jpg`)} alt={((postData.acf.event_image) ? postData.acf.event_image.alt : `events put on by Eagle NIL`)} fill style={{ objectFit: 'cover' }} />
                <PostHero>
                    <div className="content-wrapper">
                        <div className="content">
                            <h6>{postData.acf.start_date}</h6>
                            <h1>{postData.acf.event_name}</h1>
                            <p>{postData.acf.brief_description}</p>
                        </div>
                        <div className="button-box">
                            <a href={postData.acf.registration_link} target="_blank" className="filled-button">
                                Register
                            </a>
                        </div>
                    </div>
                </PostHero>
            </Hero>
            <EventData>
                <div className="wrapper">
                    <div className="column">
                        {((postData.acf.start_date) ? 

                        <div className="databox">
                            <h6>Starts</h6>
                            <h5>{postData.acf.start_date} {postData.acf.start_time}</h5>
                        </div>
                        
                        : '')}

                        {((postData.acf.end_date) ? 

                        <div className="databox">
                            <h6>Ends</h6>
                            <h5>{postData.acf.end_date} {postData.acf.end_time}</h5>
                        </div>

                        : 
                        
                        <div className="databox">
                            <h6>Ends</h6>
                            <h5>{postData.acf.start_date} {postData.acf.end_time}</h5>
                        </div>
                        
                        )}

                        {((postData.acf.location.street_address) ? 

                        <div className="databox">
                            <h6>Where</h6>
                            <h5>{postData.acf.location.street_address} {postData.acf.location.city}, {postData.acf.location.state} {postData.acf.location.zip_code}</h5>
                        </div>

                        : '')}

                    </div>
                    <div className="column">
                        {((postData.acf.cost_for_non_nil_members || postData.acf.cost_for_nil_members) ? 

                        <div className="databox">
                            <h6>Cost</h6>
                            {((postData.acf.cost_for_non_nil_members) ? 
                            <h5>Cost for non-NIL members: ${postData.acf.cost_for_non_nil_members}</h5>
                            : '')}
                            {((postData.acf.cost_for_nil_members) ? 
                            <h5>Cost for non-NIL members: ${postData.acf.cost_for_nil_members}</h5>
                            : '')}
                        </div>

                        : '')}
                        
                    </div>
                    <div className="wide-column">

                    {((postData.acf.long_description || postData.acf.registration_link) ? 

                    <div className="databox">
                        {((postData.acf.long_description) ? 
                            <div dangerouslySetInnerHTML={{__html: postData.acf.long_description}} className="long-description-box"></div>
                        : '')}
                        {((postData.acf.registration_link) ? 
                            <a href={postData.acf.registration_link} target="_blank" className="outline-button-dark">
                                Register
                            </a>
                        : '')}
                    </div>

                    : '')}

                    </div>
                </div>
            </EventData>

            <FaqsSection faqsSection={faqsSection} />

            <SocialFeed socialFeed={socialFeed} />
        </>
    )
}