import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

const HomeBg = styled.div`
    text-align: center;
    height: 880px;
    color: white;
    padding-top: 300px;
    background-image: url('https://images.unsplash.com/photo-1547954575-855750c57bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80https://images.unsplash.com/photo-1547954575-855750c57bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
    background-size: cover;
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

export default function Home(props) {
    return (
        <ThemeProvider theme={theme}>
            <HomeBg>
                <TitleDiv>Web Frontend Developer</TitleDiv>
                <SubtitleDiv>Turn Your <ItalicSpan>Ideas</ItalicSpan> into <ItalicSpan>Reality</ItalicSpan></SubtitleDiv>
            </HomeBg>
        </ThemeProvider>
    );
};