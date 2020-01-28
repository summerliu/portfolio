import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import rwd from '../styles/rwd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBroom, faPencilRuler, faUsers } from '@fortawesome/free-solid-svg-icons';

const Top = styled.div`
    text-align: center;
    color: white;
    padding: 300px 0;
    background-image: url('https://images.unsplash.com/photo-1547954575-855750c57bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80https://images.unsplash.com/photo-1547954575-855750c57bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
    background-size: cover;
    height: 90%;
`;

const TitleDiv = styled.div`
    ${(props) => props.theme.fonts.PlayfairDisplay}
    margin: 0 auto 10px auto;

    @media ${rwd.mobileS} {
        font-size: 50px;
        width: 300px;
        line-height: 50px;
    }
    @media ${`(min-width: 411px)`} {
        font-size: 70px;
        width: 300px;
        line-height: 99px;
    }
    @media ${rwd.tablet} {
        font-size: 90px;
        width: 500px;
        line-height: 99px;
    }
`

const SubtitleDiv = styled.div`
    ${(props) => props.theme.fonts.Montserrat}
    font-size: 18px;
    margin: 0 auto;
    font-weight: 700;
`;

const ItalicSpan = styled.span`
    ${(props) => props.theme.fonts.PlayfairDisplay}
    font-style: italic;
    font-weight: 500;
`;

const Midddle = styled.div`
    background-color: ${(props) => props.theme.colors.green};
    color: white;
    padding: 30px;
    width: 100%;
`;

const ContentDiv = styled.div`
    ${(props) => props.title ? props.theme.fonts.Montserrat : props.theme.fonts.OpenSans}
    @media ${rwd.mobileS} {
        padding: 10px;
        font-size: ${(props) => props.title ? '24px' : '15px'};
        text-align: center;
    }
    @media ${rwd.mobileL} {
        text-align: center;
    }
    @media ${rwd.tablet} {
        font-size: ${(props) => props.title ? '28px' : '15px'};
    }
    @media ${rwd.tabletL} {
        padding: 100px 30px;
        font-size: ${(props) => props.title ? '32px' : '15px'};
        text-align: ${(props) => props.title ? 'right' : 'left'};
    }
    @media ${rwd.laptopL} {
        padding: 100px 50px;
    }
`;

const IconContainer = styled.div`
    ${(props) => props.theme.fonts.Montserrat}
    margin-top: 100px;
`;

const IconDiv = styled.div`
    color: white;
    text-align: center;
    @media ${rwd.mobileS} {
        font-size: 50px;
    }
    @media ${rwd.tablet} {
        font-size: 75px;
    }
    @media ${rwd.laptopL} {
        font-size: 100px;
    }
`;

const IconText = styled.div`
    font-size: 14px;
    margin: 30px 0;
`;

const icons = [
    {content: 'User Friendly', src: faUsers},
    {content: 'Well Design', src: faPencilRuler},
    {content: 'Clean Code', src: faBroom},
    {content: 'Made with Heart', src: faHeart},
];

export default function Home(props) {
    return (
        <ThemeProvider theme={theme}>
            <div className='row'>
                <Top className='col'>
                    <TitleDiv>Web Frontend Developer</TitleDiv>
                    <SubtitleDiv>Turn Your <ItalicSpan>Ideas</ItalicSpan> into <ItalicSpan>Reality</ItalicSpan></SubtitleDiv>
                </Top>
                <Midddle>
                    <IconContainer className='row'>
                        {icons.map((icon, index) => {
                            return (
                                <IconDiv key={index} className='col-6 col-sm-6 col-md-6 col-lg-3'>
                                    <FontAwesomeIcon icon={icon.src}/>
                                    <IconText>{icon.content}</IconText>
                                </IconDiv>
                            );
                        })}
                    </IconContainer>
                    <div className='row'>
                        <ContentDiv className='col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6' title={true}>Hi. I’m Summer, a frontend developer from Taiwan. Please take a look around!</ContentDiv>
                        <ContentDiv className='col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6' title={false}>I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. All of my work is produced locally from Moscow, Idaho. What would you do if you had a software expert available at your fingertips?</ContentDiv>
                    </div>
                </Midddle>
            </div>
        </ThemeProvider>
    );
};