import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import menuBar from '../assets/menuBar.png';

const NavigationBg = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 85px;
    background-color: transparent;
`;

const NameDiv = styled.div`
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 22px;
    padding-left: 30px;
    padding-top: 30px;
    float: left;
`

const NameLink = styled.a.attrs({
     href: '/',
})`
    text-decoration: none;
    color: white;
`;

const BarDiv = styled.div`
    padding-right: 30px;
    padding-top: 30px;
    float: right;
    width: 30px;
`;

const BarImg = styled.img.attrs({
    src: menuBar,
    alt: 'menuBar',
})`
    width: 100%;
`;

function Navigation() {
    return (
        <ThemeProvider theme={theme}>
            <NavigationBg>
                <NameDiv>
                    <NameLink>Summer Liu</NameLink>
                </NameDiv>
                <BarDiv>
                    <BarImg/>
                </BarDiv>
            </NavigationBg>
        </ThemeProvider>
    )
}

export default Navigation;