import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import profle from '../assets/profile.jpg';

const AboutBg = styled.div`
    height: 100vh;

`;

const ImgDiv = styled.div`
    opacity: 0.8;
    width: 50%;
    position: absolute;
    left: 0;
`;

const Img = styled.img.attrs({
    src: profle,
    alt: 'profle',
})`
    width: 100%;
`;

const TextContainer = styled.div`
    background-color: ${(props) => props.theme.colors.white}
    padding: 100px;
    color: ${(props) => props.theme.colors.black}
    width: 50%;
    position: absolute;
    right: 0;
`;

const NameDiv = styled.div`
    ${(props) => props.theme.fonts.PlayfairDisplay}
    font-size: 100px;
`;

const ContentDiv = styled.div`
    ${(props) => props.theme.fonts.OpenSans}
    font-size: 15px;
`;

export default function About(props) {
    return (
        <ThemeProvider theme={theme}>
            <AboutBg>
                <ImgDiv><Img/></ImgDiv>
                <TextContainer>
                    <NameDiv>Summer Liu</NameDiv>
                    <ContentDiv>I am a self-taught, driven, and motivated software developer who is passionate about the use of technology as a tool of design and empowerment. I have done work in software development, front-end/back-end web, database/server management, product/UI/UX design, and video game development.</ContentDiv>
                </TextContainer>
            </AboutBg>
        </ThemeProvider>
    );
};