'use client';

import Image from 'next/image';
import styled from 'styled-components';

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
    background-color: #022849;
    padding: 200px 16px 400px 16px;
    width: 100%;
    color: #FBF9F4;
    text-align: center;
    margin-top: -80px;
    .wrapper {
        position: relative;
        padding: 80px 0 0 0;
        max-width: 500px;
        margin: 0 auto;
    }
    h1 {
        font-family: thirsty-script, sans-serif;
        font-size: 50px;
        padding: 0 0 25px 0;
        @media (min-width: 768px) {
          font-size: 88px;
      }
    }
    p {
        font-family: roboto, sans-serif;
        font-size: 18px;
        padding-bottom: 40px;
    }
    .filled-button {
      width: 300px;
      margin: 0 auto;
    }
    .badge {
        position: absolute;
        top: -130px;
        right: 0;      
    }
    .mini-badge {
      margin: 0 auto;
      padding: 0 0 8px 0;
    }
`;

// #endregion

export default function FourOFourLayout({ pageData }) {

    let heroButtonLink = getButtonLink(pageData.acf.hero_section.button.link_to_where, pageData.acf.hero_section.button.onsite_link, pageData.acf.hero_section.button.offsite_link, pageData.acf.hero_section.button.file_link);

    return (
        <>
        <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

        </div>
        <Hero>
            <Image className="badge" src={`https://inside.eaglenationnil.com/wp-content/uploads/2023/04/404-badge.png`} alt="Eagle Nation Collective | Navy Badge Logo" width={700} height={668} style={{ objectFit: 'contain' }} />
            <div className="wrapper">
                <img className="mini-badge" src="https://inside.eaglenationnil.com/wp-content/uploads/2023/04/mobile-logo.svg" alt="Eagle Nation Collective | 404 Eagle Logo" />
                <h1>{pageData.acf.hero_section.title}</h1>
                <p>{pageData.acf.hero_section.description}</p>
                <a href={heroButtonLink}>
                  <div className="filled-button">{pageData.acf.hero_section.button.text}</div>
                </a>
            </div>
        </Hero>
        </>
    )
}