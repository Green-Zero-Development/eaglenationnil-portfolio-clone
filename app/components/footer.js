'use client';

import styled from 'styled-components';

function getYear() {
    return new Date().getFullYear();
}

const FooterStyle = styled.footer`
    position: relative;
    background-color: #022d52;
    color: #ede6cf;
    .footer-logo {
        display: none;
    }
    .light-logo {
        img {
            margin: auto;
            padding-bottom: 25px;
        }
    }
    @media (min-width: 768px) {
        .footer-logo {
            display: block;
        }
        .light-logo {
            display: none;
        }
    }
`;

const FooterBox = styled.div`
   max-width: 1380px;
   margin: auto;
   padding: 0px 16px 80px 16px;
`;

const FooterData = styled.div`
    border-bottom: 1px solid #EDE6CF;
    padding: 100px 0px 50px 0px;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        padding: 130px 0px 50px 0px;
    }
    @media (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const FooterMenu = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    width: 100%;
    text-align: center;
    padding-bottom: 25px;
    li {
        font-family: fatfrank, sans-serif;
    }
    @media (min-width: 768px) {
        margin-right: 0;
        padding-bottom: 0px;
        flex-wrap: nowrap;
    }
`;

const FooterLi = styled.li`
    margin: auto;
    padding: 15px;
    text-align: center;
    color: #EDE6CF;
    letter-spacing: 1.5px;
    a {
        &:hover {
            text-decoration: underline;
            color: #9B885B !important;
        }
    }
    @media (min-width: 768px) {
        margin: 0 15px 0 15px;
        padding: 0px;
    }
`

const SocialIcons = styled.div`
    display: flex;
    margin-left: auto;
    justify-content: space-evenly;
    svg {
        width: 24px;
        height: 24px;
    }
    a {
        margin-right: 20px;
    }
    @media (min-width: 768px) {
        width: 100%;
        padding: 50px 0 0 0;
        justify-content: start !important;
    }
    @media (min-width: 992px) {
        width: auto !important;
        padding: 0px 0 0 0;
    }
`

const FooterLines = styled.div`
    position: absolute;
    top: 0px;
    max-width: 1380px;
    width: 100%;
    height: 10px;
    left: 0;
    right: 0;
    padding: 70px 16px 0 16px;
    margin: auto;
    hr {
        color: #EDE6CF;
        margin-bottom: 4px;
        transition: 0.5s;
    }
`

const CopyrightBox = styled.div`
    max-width: 1380px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 30px 0px 30px 0px;
    border-bottom: 1px solid #EDE6CF;
    img {
        margin: auto;
        padding-top: 25px;
        @media (min-width: 768px) {
            margin-right: 0;
            padding-top: 0px;
            min-width: 140px;
        }
    }
    @media (min-width: 768px) {
        display: flex;
    }
`

const CopyrightData = styled.div`

    align-items: center;
    @media (min-width: 768px) {
        display: flex;
    }
`

const CopyrightText = styled.p`
    font-family: roboto, sans-serif;
    font-size: 14px;
    text-align: center;
    padding-bottom: 25px;
    @media (min-width: 768px) {
        text-align: left;
        padding-bottom: 0px;
    }
`

const CopyrightLinks = styled.ul`
    display: flex;
    flex-wrap: wrap;
    font-family: roboto, sans-serif;
    font-size: 12px;
    text-align: center;
    a {
        width: 100%;
        padding-bottom: 25px;
        text-decoration: underline;
    }
    @media (min-width: 768px) {
        a {
            width: auto;
            margin-left: 25px;
            padding-bottom: 0px;
        }
    }
    @media (min-width: 992px) {
        font-size: 14px;
    }
`

export default function Footer({logos, socialMedia, footerMenu}) {

    const lightLogo = logos[0].acf.light_logo.url;
    const footerLogo = logos[0].acf.footer_logo.url;
    const facebook = socialMedia[0].acf.value_list[0].value;
    const instagram = socialMedia[0].acf.value_list[1].value;
    const twitter = socialMedia[0].acf.value_list[2].value;

    return (
        <FooterStyle>
            <FooterLines>
                <hr></hr>
                <hr></hr>
                <hr></hr>
            </FooterLines>
            <FooterBox>
                <FooterData>
                    <a href="/" className="footer-logo">
                        <img src={footerLogo} alt="Eagle Nation Collective | Vertical Light Logo" />
                    </a>
                    <a href="/" className="light-logo">
                        <img src={lightLogo} alt="Eagle Nation Collective | Light Logo" />
                    </a>
                    <FooterMenu>
                        {footerMenu.map((item) => {
                        if (item.children) {
                            return (
                                <FooterLi key={item.id}>
                                    <a href={item.url}>{item.title}</a>
                                </FooterLi>
                            )
                        } else {
                            return (
                                <FooterLi key={item.id}>
                                    <a href={item.url}>{item.title}</a>
                                </FooterLi>
                            )
                        }
                        })}
                    </FooterMenu>
                    <SocialIcons>
                        <a href={facebook}>
                            <svg fill="#EDE6CF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                        </a>
                        <a href={instagram}>
                            <svg fill="#EDE6CF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                        </a>
                        <a href={twitter}>
                            <svg fill="#EDE6CF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                        </a>
                    </SocialIcons>
                </FooterData>
                <CopyrightBox>
                    <CopyrightData>
                        <CopyrightText>&copy; {getYear()} Eagle Nation. All Rights Reserved.</CopyrightText>
                        {/* <CopyrightLinks>
                            <a href="/student-testimonials">
                                Student Testimonials
                            </a>
                        </CopyrightLinks> */}
                    </CopyrightData>
                    <a href="https://madebypioneer.com/">
                        <img src="https://inside.eaglenationnil.com/wp-content/uploads/2023/06/Group-8272.svg" alt="Pioneer Design and Marketing Beige Logo" />
                    </a>
                </CopyrightBox>
            </FooterBox>
        </FooterStyle>
    );
}