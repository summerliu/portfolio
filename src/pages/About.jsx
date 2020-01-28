import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import rwd from '../styles/rwd';
import profle from '../assets/profile.jpg';

const AboutBg = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Top = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const ImgDiv = styled.div`
    width: 90%;
    padding: 0;
    opacity: .85;
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
    color: white;
    width: 50%;
    text-align: left;

    @media ${rwd.mobileS} {
        padding: 25px 45px;
    }
    @media ${rwd.tabletL} {
        padding: 50px 90px;
    }
`;

const NameDiv = styled.div`
    ${(props) => props.theme.fonts.PlayfairDisplay}

    @media ${rwd.mobileS} {
        font-size: 50px;
    }
    @media ${rwd.mobileL} {
        font-size: 60px;
    }
    @media ${`(min-width: 790px)`} {
        font-size: 80px;
    }
    @media ${rwd.tabletL} {
        font-size: 100px;
    }
`;

const ContentDiv = styled.div`
    ${(props) => props.theme.fonts.OpenSans}
    font-size: 15px;
`;

const Midddle = styled.div`
    background-color: ${(props) => props.theme.colors.grey};
    color: white;
    padding: 30px;
`;

const BannerDiv = styled.div`
    ${(props) => props.theme.fonts.OpenSans}
    font-size: 15px;
    text-align: center;

    @media ${rwd.mobileS} {
        padding: 25px 45px;
    }
    @media ${rwd.tabletL} {
        padding: 50px 90px;
    }
`;

const Bottom = styled.div`
    background-color: white;
    color: ${(props) => props.theme.colors.black};
`;

const Card = styled.div`
    @media ${rwd.mobileS} {
        padding: 25px 75px;
    }
    @media ${rwd.tabletL} {
        padding: 50px 100px;
    }
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
                    <ImgDiv className='col-12 col-md-6'><Img/></ImgDiv>
                    <TextContainer className='col-12 col-md-6'>
                        <NameDiv>Summer Liu</NameDiv>
                        <ContentDiv>I am a self-taught, driven, and motivated software developer who is passionate about the use of technology as a tool of design and empowerment. I have done work in software development, front-end/back-end web, database/server management, product/UI/UX design, and video game development.</ContentDiv>
                    </TextContainer>
                </Top>
                <Midddle>
                    <BannerDiv>
                        I am a self-taught, driven, and motivated software developer who is passionate about the use of technology as a tool of design and empowerment. I have done work in software development, front-end/back-end web, database/server management, product/UI/UX design, and video game development.
                    </BannerDiv>
                </Midddle>
                <Bottom className='row'>
                    {cards.map((card, index) => {
                        return (
                            <Card className='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4' key={index}>
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