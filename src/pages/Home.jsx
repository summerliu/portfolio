import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBroom, faPencilRuler, faUsers } from '@fortawesome/free-solid-svg-icons';

const HomeContainer = styled.div`
`;

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
    font-size: 90px;
    margin: 0 auto 10px auto;
    width: 500px;
    line-height: 99px;
`

const SubtitleDiv = styled.div`
    ${(props) => props.theme.fonts.Montserrat}
    font-size: 18px;
    margin: 0 auto;
    width: 500px;
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

const ContentContainer = styled.div`
    
`;

const ContentDiv = styled.div`
    ${(props) => props.title ? props.theme.fonts.Montserrat : props.theme.fonts.OpenSans}
    font-size: ${(props) => props.title ? '38px' : '15px'};
    margin: 100px 150px;
    width: 50%;
`;

const IconContainer = styled.div`
    ${(props) => props.theme.fonts.Montserrat}
    margin-top: 100px;
`;

const IconDiv = styled.div`
    color: white;
    text-align: center;
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
            <HomeContainer className='row'>
                <Top className='col'>
                    <TitleDiv>Web Frontend Developer</TitleDiv>
                    <SubtitleDiv>Turn Your <ItalicSpan>Ideas</ItalicSpan> into <ItalicSpan>Reality</ItalicSpan></SubtitleDiv>
                </Top>
                <Midddle>
                    <IconContainer className='row'>
                        {icons.map((icon, index) => {
                            return (
                                <IconDiv key={index} className='col-lg-3 col-md-6 col-sm-6'>
                                    <FontAwesomeIcon icon={icon.src} style={{fontSize: '100px'}}/>
                                    <div style={{fontSize: '14px', margin: '30px 0'}}>{icon.content}</div>
                                </IconDiv>
                            );
                        })}
                    </IconContainer>
                    <ContentContainer className='row'>
                        <ContentDiv className='col' title={true}>Hi. I’m Summer, a frontend developer from Taiwan. Please take a look around!</ContentDiv>
                        <ContentDiv className='col' title={false}>I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. All of my work is produced locally from Moscow, Idaho. What would you do if you had a software expert available at your fingertips?</ContentDiv>
                    </ContentContainer>
                </Midddle>
            </HomeContainer>
        </ThemeProvider>
    );
};