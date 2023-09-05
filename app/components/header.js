'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

function toggleDropdownOn(dropTrig) {
  dropTrig.target.nextSibling.classList.add("desktop-menu-toggle");
}

function toggleDropdownOff() {
    const desktopDropdowns = document.querySelectorAll('.desktop-dropdown');
    for (let i = 0; i < desktopDropdowns.length; i++) {
        desktopDropdowns[i].classList.remove("desktop-menu-toggle");
    }
}

function toggleDropdownOffSingle(dropTrig) {
    dropTrig.target.parentElement.classList.remove("desktop-menu-toggle");
}

function toggleMobileDropdown(dropTrig) {
    dropTrig.target.nextSibling.classList.toggle("mobile-menu-toggle");
  }

const mobiletoggle = () => {
  document.getElementById("mobile-menu").classList.toggle("mobile-menu-active");
  document.getElementById("mobile-menu-close").classList.toggle("mobile-menu-close-active");
}

// #region Styles

const HeaderStyle = styled.header`
    position: relative;
    width: 100%;
    background-color: transparent;
    z-index: 50;
    transition: .25s;
    &.dark-mode-header {
        .dark-mode-logo {
            display: none;
        }
        .desktop-menu-link {
            color: #EDE6CF;
        }
        hr {
            color: #EDE6CF;
        }
    }
    &.light-mode-header {
        transition: .25s;
        .light-mode-logo {
            display: none;
        }
        .desktop-menu-link {
            color: #022D52;
        }
        hr {
            color: #022D52;
        }
        
    }
    &.sticky {
        position: sticky;
        top: 0;
        background-color: #022D52;
        .dark-mode-logo {
            display: none !important;
        }
        .light-mode-logo {
            display: block !important;
        }
        .desktop-menu-link {
            color: #EDE6CF;
        }
        hr {
            opacity: 0;
            transition: 0.25s;
        }
        .desktop-menu {
            > * {
                &:last-child {
                   
                   }
                }
            }
        }
    }
`;

const HeaderWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    justify-content: center;
    max-width: 1380px;
    margin: 0 auto;
    padding: 16px 16px 10px 16px;
    @media (min-width: 992px) {
        padding: 20px 16px 10px 16px;
    }
`;

const DesktopLogoLink = styled.a`
    grid-column: span 12 / span 12;
    margin: auto;
    @media (min-width: 992px) {
        grid-column: span 2 / span 2;
        margin-left: 0;
    }
`;

const LightDesktopLogoLink = styled.a`
    grid-column: span 12 / span 12;
    margin: auto;
    @media (min-width: 992px) {
        grid-column: span 2 / span 2;
        margin-left: 0;
    }
`;

const DarkDesktopLogoLink = styled.a`
    grid-column: span 12 / span 12;
    margin: auto;
    @media (min-width: 992px) {
        grid-column: span 2 / span 2;
        margin-left: 0;
    }
`;

const DesktopLogo = styled.img`
    max-width: 180px;
`;

const MobileMenuOpen = styled.div`
    position: fixed;
    bottom: 55px;
    left: auto;
    right: auto;
    width: 100%;
    z-index: 10;
    svg {
        margin: auto;
    }
    @media (min-width: 992px) {
        display: none;
    }
`

const MobileMenuClose = styled.div`
    opacity: 0;
    pointer-events: none;
    position: fixed;
    bottom: 55px;
    left: auto;
    right: auto;
    width: 100%;
    z-index: 999;
    transition: 0.25s;
    svg {
        margin: auto;
    }
`

const DesktopNavi = styled.div`
    grid-column: span 10 / span 10;
    display: flex;
    align-items: center;
    margin-left: auto;
`

const DesktopMenu = styled.ul`
    display: none;
    @media (min-width: 992px) {
        display: flex;
        align-items: center;
    }
    .dropdown-trigger {
        position: relative;
        display: flex;
        align-items: center;
        background-color: #ede6cf;
        color: #022D52 !important;
        font-size: 14px;
        border: 1px solid #022D52;
        padding: 8px 32px 8px 32px;
        border-radius: 6em;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        transition: 0.25s;
        z-index: 999;
        svg {
            margin-top: -2px;
            margin-left: 4px;
        }
    }
`

const DesktopMenuSingle = styled.li`
    font-family: fatfrank, sans-serif;
    color: #EDE6CF;
    font-size: 16px;
    margin-left: 48px;
    letter-spacing: 1.5px;
    a {
        &:hover {
            text-decoration: underline;
            color: #9B885B !important;
        }
    }
    .desktop-dropdown {
        opacity: 0;
        pointer-events: none;
        position: absolute;
        max-width: 147px;
        display: flex;
        flex-wrap: wrap;
        background-color: #D2CCB8;
        border: 1px solid #022D52;
        padding: 25px 0 10px 0;
        margin-top: -20px;
        border-radius: 16px;
        z-index: 998;
        > * {
            &:last-child {
                border-bottom: 0px;
            }
        }
        a {
            width: 90%;
            margin: 0 auto;
            text-align: center;
            color: rgba(2, 45, 82, 0.80);
            padding: 10px 0 10px 0;
            border-bottom: 1px solid #69665C;
            &:hover {
                color: rgba(2, 45, 82, 1);
            }
        }
    }
`

const MobileMenu = styled.div`
    position: fixed;
    inset: 0;
    overflow-y: scroll;
    pointer-events: none;
    opacity: 0;
    transform: scale(1.1);
    background-color: #f3eedf;
    padding: 50px 0px 0px 0px;
    margin-top: 65px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    z-index: 999;
    transition: .25s;
`

const MobileItems = styled.div`
    position: relative;
    padding: 0 10px 200px 10px;
    text-align: center;
    z-index: 998;
`

const MobileMenuHeader = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    justify-content: center;
    padding: 6px 6px 6px 6px;
`

const MobileMenuList = styled.ul`
    padding-top: 1.5rem;
    @media (min-width: 992px) {
        
    }
`

const MobileMenuSingle = styled.li`
    font-family: fatfrank, sans-serif;
    font-size: 40px;
    color: #022849;
    padding-bottom: 30px !important;
    line-height: 1;
    letter-spacing: 1px;
    margin-bottom: 0rem;
    @media (min-width: 516px) {
        font-size: 48px;
    }
`

const MobileMenuSingleDrop = styled.li`
    font-size: 16px;
    padding-bottom: 22px !important;
    margin-bottom: 1.5rem;
    .desktop-trigger {
        display: grid;
    }
    svg {
        pointer-events: none;
        width: 12px;
    }
`

const MobileMenuDropTitle = styled.div`
    pointer-events: none;
`

const HeaderLines = styled.div`
    position: absolute;
    bottom: -10px;
    width: 100%;
    height: 10px;
    left: 0;
    padding: 0 16px 0 16px;
    hr {
        margin-bottom: 4px;
        transition: 0.5s;
    }
`

const SocialIcons = styled.div`
    display: flex;
    align-items: center;
    max-width: 300px;
    padding: 100px 0 0 0;
    margin: 0 auto;
    a {
        margin: 0 auto;
    }
`

// #endregion

export default function Header({ logos, mainMenu, mobileMenu, socialMedia }) {

    useEffect(() => {

        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                document.getElementById('header').classList.add('sticky');
            } else {
                document.getElementById('header').classList.remove('sticky');
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const lightLogo = logos[0].acf.light_logo.url;
    const darkLogo = logos[0].acf.dark_logo.url;
    const mobileLogo = logos[0].acf.mobile_menu_logo.url;
    const facebook = socialMedia[0].acf.value_list[0].value;
    const instagram = socialMedia[0].acf.value_list[1].value;
    const twitter = socialMedia[0].acf.value_list[2].value;

    return (
        <>
        <HeaderStyle id="header" className="dark-mode-header">
            <HeaderWrapper>
            <LightDesktopLogoLink href="/" className="light-mode-logo">
                <DesktopLogo src={lightLogo} alt="Eagle Nation Collective | Light Logo" />
            </LightDesktopLogoLink>
            <DarkDesktopLogoLink href="/" className="dark-mode-logo">
                <DesktopLogo src={darkLogo} alt="Eagle Nation Collective | Dark Logo" />
            </DarkDesktopLogoLink>
        <DesktopNavi onMouseLeave={toggleDropdownOff}>
            <DesktopMenu className="desktop-menu" onMouseLeave={toggleDropdownOff}>
                {mainMenu.map((item) => {
                    if (item.children) {
                        return (
                            <DesktopMenuSingle key={item.id} onMouseLeave={toggleDropdownOff}>
                                <div id="dropdown-trigger" onMouseOver={toggleDropdownOn} className="dropdown-trigger">
                                    {item.title}
                                    <svg width="12" height="12" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25942L6.28134 8L0.56269 2.28195L2.18879 0.650001L6.35513 4.81634L10.4477 0.707711L12 2.25942Z" fill="#022D52"/>
                                    </svg>
                                </div>
                                <div id="dropdown" className="desktop-dropdown" onMouseLeave={toggleDropdownOffSingle}>
                                {Object.keys(item.children).map((key, index) => {
                                    return (
                                        <Link key={index} href={item.children[key].url}>{item.children[key].title}</Link>
                                    );
                                })}
                                </div>
                            </DesktopMenuSingle>
                        )
                    } else {
                        return (
                            <DesktopMenuSingle key={item.id}>
                                <Link href={item.url} className="desktop-menu-link">{item.title}</Link>
                            </DesktopMenuSingle>
                        )
                    }
                })}
            </DesktopMenu>
        </DesktopNavi>
          <MobileMenu id="mobile-menu">
            <MobileItems id="mobile-items">
                <MobileMenuHeader>
                    <DesktopLogoLink href="/">
                        <DesktopLogo src={mobileLogo} alt="Eagle Nation Collective | Mobile Eagle Logo" />
                    </DesktopLogoLink>
                </MobileMenuHeader>
                <MobileMenuList className="pt-12 px-6">
                {mobileMenu.map((item) => {
                    if (item.children) {
                        return (
                            <MobileMenuSingleDrop key={item.id}>
                                <div id="dropdown-trigger" className="dropdown-trigger" onClick={toggleMobileDropdown}>
                                    <MobileMenuDropTitle>{item.title}</MobileMenuDropTitle>
                                    <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                                </div>
                                <DesktopDropdown className="dropdown">
                                {Object.keys(item.children).map((key, index) => {
                                    return (
                                        <Link key={index} href={item.children[key].url} onClick={mobiletoggle}>{item.children[key].title}</Link>
                                    );
                                })}
                                </DesktopDropdown>
                            </MobileMenuSingleDrop>
                        )
                    } else {
                        return (
                            <MobileMenuSingle key={item.id}>
                                <Link href={item.url} className="" onClick={mobiletoggle} >{item.title}</Link>
                            </MobileMenuSingle>
                        )
                    }
                })}
                </MobileMenuList>
                <SocialIcons>
                    <a href={facebook}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.2248 9.9002H22.2748C21.3635 9.9002 20.6248 10.6389 20.6248 11.5502V16.5002H27.2248C27.4124 16.496 27.5904 16.5834 27.702 16.7343C27.8135 16.8853 27.8449 17.081 27.7858 17.2592L26.5648 20.8892C26.4523 21.2223 26.1409 21.4476 25.7893 21.4502H20.6248V33.8252C20.6248 34.2808 20.2554 34.6502 19.7998 34.6502H15.6748C15.2192 34.6502 14.8498 34.2808 14.8498 33.8252V21.4502H12.3748C11.9192 21.4502 11.5498 21.0808 11.5498 20.6252V17.3252C11.5498 16.8696 11.9192 16.5002 12.3748 16.5002H14.8498V11.5502C14.8498 7.90511 17.8048 4.9502 21.4498 4.9502H27.2248C27.6804 4.9502 28.0498 5.31956 28.0498 5.7752V9.0752C28.0498 9.53083 27.6804 9.9002 27.2248 9.9002Z" fill="#57738C"/>
                        </svg>
                    </a>
                    <a href={instagram}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.8006 4.9502H13.6006C9.04424 4.9502 5.35059 8.64385 5.35059 13.2002V26.4002C5.35059 30.9565 9.04424 34.6502 13.6006 34.6502H26.8006C31.3569 34.6502 35.0506 30.9565 35.0506 26.4002V13.2002C35.0506 8.64385 31.3569 4.9502 26.8006 4.9502ZM32.1631 26.4002C32.154 29.358 29.7584 31.7536 26.8006 31.7627H13.6006C10.6427 31.7536 8.24714 29.358 8.23809 26.4002V13.2002C8.24714 10.2423 10.6427 7.84675 13.6006 7.8377H26.8006C29.7584 7.84675 32.154 10.2423 32.1631 13.2002V26.4002ZM28.0381 13.6127C28.9494 13.6127 29.6881 12.874 29.6881 11.9627C29.6881 11.0514 28.9494 10.3127 28.0381 10.3127C27.1268 10.3127 26.3881 11.0514 26.3881 11.9627C26.3881 12.874 27.1268 13.6127 28.0381 13.6127ZM20.2006 12.3752C16.0999 12.3752 12.7756 15.6995 12.7756 19.8002C12.7756 23.9009 16.0999 27.2252 20.2006 27.2252C24.3013 27.2252 27.6256 23.9009 27.6256 19.8002C27.63 17.8296 26.8491 15.9385 25.4557 14.5451C24.0622 13.1517 22.1712 12.3708 20.2006 12.3752ZM15.6631 19.8002C15.6631 22.3062 17.6946 24.3377 20.2006 24.3377C22.7066 24.3377 24.7381 22.3062 24.7381 19.8002C24.7381 17.2942 22.7066 15.2627 20.2006 15.2627C17.6946 15.2627 15.6631 17.2942 15.6631 19.8002Z" fill="#57738C"/>
                        </svg>
                    </a>
                    <a href={twitter}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M34.6048 11.4839C33.8385 12.5061 32.9122 13.3978 31.8617 14.1245C31.8617 14.3915 31.8617 14.6585 31.8617 14.9404C31.8701 19.7895 29.9331 24.4392 26.4851 27.8471C23.037 31.255 18.3661 33.136 13.5198 33.0684C10.718 33.0778 7.95211 32.4381 5.43875 31.1993C5.30322 31.14 5.21582 31.006 5.21633 30.858V30.6949C5.21633 30.4818 5.38894 30.3093 5.60185 30.3093C8.35595 30.2183 11.0118 29.2635 13.1936 27.5797C10.7008 27.5293 8.45787 26.0526 7.42565 23.7819C7.37352 23.6579 7.38974 23.5155 7.4685 23.4065C7.54723 23.2974 7.67711 23.2374 7.81117 23.2479C8.5688 23.324 9.334 23.2535 10.065 23.0402C7.3131 22.4689 5.24535 20.1844 4.94942 17.3881C4.93891 17.254 4.99902 17.1241 5.10806 17.0452C5.21707 16.9665 5.35925 16.9502 5.48323 17.0025C6.22171 17.3284 7.0189 17.5 7.826 17.5067C5.41469 15.9242 4.37316 12.9139 5.29046 10.1785C5.38516 9.91266 5.61264 9.7163 5.88933 9.66155C6.166 9.60679 6.45109 9.70171 6.63978 9.91144C9.8937 13.3746 14.3646 15.4382 19.1098 15.6673C18.9883 15.1823 18.9286 14.6839 18.9319 14.1838C18.9763 11.562 20.5986 9.22639 23.0393 8.27048C25.4798 7.31459 28.2557 7.92755 30.0676 9.82242C31.3025 9.58715 32.4964 9.17234 33.6113 8.59115C33.693 8.54016 33.7966 8.54016 33.8783 8.59115C33.9293 8.67285 33.9293 8.77646 33.8783 8.85816C33.3382 10.0948 32.4259 11.132 31.2686 11.8251C32.2821 11.7076 33.2777 11.4685 34.2342 11.1131C34.3147 11.0582 34.4205 11.0582 34.501 11.1131C34.5685 11.1439 34.619 11.2029 34.6389 11.2744C34.6589 11.3459 34.6464 11.4225 34.6048 11.4839Z" fill="#57738C"/>
                        </svg>
                    </a>
                </SocialIcons>
            </MobileItems>
        </MobileMenu>

        <HeaderLines>
            <hr></hr>
            <hr></hr>
            <hr></hr>
        </HeaderLines>

            </HeaderWrapper>
        </HeaderStyle>
        <MobileMenuOpen id="mobile-menu-open" onClick={mobiletoggle}>
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="28" cy="28" r="28" fill="#AE9966"/><g clip-path="url(#clip0_4066_10017)"><path d="M33 34C33.5523 34 34 34.4477 34 35C34 35.5523 33.5523 36 33 36H23C22.4477 36 22 35.5523 22 35C22 34.4477 22.4477 34 23 34H33ZM36 27C36.5523 27 37 27.4477 37 28C37 28.5523 36.5523 29 36 29H20C19.4477 29 19 28.5523 19 28C19 27.4477 19.4477 27 20 27H36ZM33 20C33.5523 20 34 20.4477 34 21C34 21.5523 33.5523 22 33 22H23C22.4477 22 22 21.5523 22 21C22 20.4477 22.4477 20 23 20H33Z" fill="#F3EEDF"/></g><defs><clipPath id="clip0_4066_10017"><rect width="24" height="24" fill="white" transform="translate(16 16)"/></clipPath></defs></svg>
        </MobileMenuOpen>
        <MobileMenuClose id="mobile-menu-close" onClick={mobiletoggle}>
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="28" cy="28" r="28" fill="#AE9966"/><g clip-path="url(#clip0_4392_12615)"><path d="M27.9997 26.5862L32.9497 21.6362L34.3637 23.0502L29.4137 28.0002L34.3637 32.9502L32.9497 34.3642L27.9997 29.4142L23.0497 34.3642L21.6357 32.9502L26.5857 28.0002L21.6357 23.0502L23.0497 21.6362L27.9997 26.5862Z" fill="#EDE6CF"/></g><defs><clipPath id="clip0_4392_12615"><rect width="24" height="24" fill="white" transform="translate(16 16)"/></clipPath></defs></svg>
        </MobileMenuClose>
        </>
    );
}