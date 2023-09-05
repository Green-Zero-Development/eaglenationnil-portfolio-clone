'use client';

import { useEffect } from 'react';
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
    padding: 200px 16px 200px 16px;
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

    useEffect(() => {

        const lightOrDarkMode = pageData.acf.light_or_dark_mode;

        if (lightOrDarkMode === 'Light') {
            document.getElementById('header').classList.remove('dark-mode-header');
            document.getElementById('header').classList.add('light-mode-header');
        }

    }, []);

    return (
        <>
        <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

        </div>
        <Hero>
          <div className="wrapper">
              <img className="mini-badge" src="https://inside.eaglenationnil.com/wp-content/uploads/2023/04/mobile-logo.svg" alt="Eagle Nation Collective | Mobile Eagle Logo" />
              <h1>{pageData.acf.hero_section.title}</h1>
              <div dangerouslySetInnerHTML={{__html: pageData.acf.hero_section.description}}>

              </div>
          </div>
        </Hero>
        </>
    )
}