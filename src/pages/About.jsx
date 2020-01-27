import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import profle from '../assets/profile.jpg';

const AboutBg = styled.div`
    width: 100%;
`;

const Top = styled.div`
    display: inline-flex;
    max-height: 510px;
`;

const ImgDiv = styled.div`
    width: 90%;
`;

const Img = styled.img.attrs({
    src: profle,
    alt: 'profle',
})`
    width: 100%;
    height: 100%;
`;

const TextContainer = styled.div`
    background-color: ${(props) => props.theme.colors.green};
    padding: 50px 90px;
    color: white;
    width: 50%;
`;

const NameDiv = styled.div`
    ${(props) => props.theme.fonts.PlayfairDisplay}
    font-size: 100px;
    width: 320px;
`;

const ContentDiv = styled.div`
    ${(props) => props.theme.fonts.OpenSans}
    font-size: 15px;
    width: 320px;
`;

const Midddle = styled.div`
    background-color: ${(props) => props.theme.colors.grey};
    color: white;
    padding: 30px;
    margin-top: -30px;
`;

const BannerDiv = styled.div`
    ${(props) => props.theme.fonts.OpenSans}
    font-size: 15px;
    margin: 100px;
`;

const Bottom = styled.div`
    background-color: white;
    display: inline-flex;
    color: ${(props) => props.theme.colors.black};
`;

const Card = styled.div`
    padding: 50px 100px;
`;

const cards = [
    { title: 'Ideas', content: 'Understand the subject matter completely and build on the knowledge related to it, becoming intimately familiar with the subject matter. Determine methods to address the specific needs and requirements.'},
    { title: 'Design', content: 'Misleadingly thought of as the superficial appearance of a product, design actually encompasses a lot more. It is a cross functional process that includes market research, technical research, design of a concept, and prototype mockup.'},
    { title: 'Develop', content: 'Findings from the ideas and design phases are utilized for the production of specific products including materials, systems, and methods. Engineer utilizing the research and designs to produce products.'},
];

const CardTitle = styled.div`
    ${(props) => props.theme.fonts.Montserrat}
    color: ${(props) => props.theme.colors.green};
    font-size: 38px;
    font-weight: 700;
`;

const CardContent = styled.div`
    ${(props) => props.theme.fonts.OpenSans}
    font-size: 15px;
`;

export default function About(props) {
    return (
        <ThemeProvider theme={theme}>
            <AboutBg>
                <Top>
                    <ImgDiv><Img/></ImgDiv>
                    <TextContainer>
                        <NameDiv>Summer Liu</NameDiv>
                        <ContentDiv>I am a self-taught, driven, and motivated software developer who is passionate about the use of technology as a tool of design and empowerment. I have done work in software development, front-end/back-end web, database/server management, product/UI/UX design, and video game development.</ContentDiv>
                    </TextContainer>
                </Top>
                <Midddle>
                    <BannerDiv>
                        I am a self-taught, driven, and motivated software developer who is passionate about the use of technology as a tool of design and empowerment. I have done work in software development, front-end/back-end web, database/server management, product/UI/UX design, and video game development.
                    </BannerDiv>
                </Midddle>
                <Bottom>
                    {cards.map((card, index) => {
                        return (
                            <Card key={index}>
                                <CardTitle><span style={{color: theme.colors.grey, opacity: '.7'}}>0{index + 1}.</span> {card.title}</CardTitle>
                                <CardContent>{card.content}</CardContent>
                            </Card>
                        );
                    })}
                </Bottom>
            </AboutBg>
        </ThemeProvider>
    );
};