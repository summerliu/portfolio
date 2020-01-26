import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import menuBar from '../assets/menuBar.png';
import crossIcon from '../assets/crossIcon.png';
import { Link } from "react-router-dom";

const NavigationBg = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: ${(props) => props.isOpen ? '100vh' : '85px'};
    background-color: ${(props) => props.isOpen ? props.theme.colors.white : 'transparent'};
`;

const NameDiv = styled.div`
    ${(props) => props.theme.fonts.OpenSans}
    font-weight: 600;
    font-size: 22px;
    ${(props) => props.theme.paddings.paddingTopLeft}
    float: left;
`

const IconDiv = styled.div`
    ${(props) => props.theme.paddings.paddingTopRight}
    float: right;
    width: 30px;
`;

const Icon = styled.img.attrs((props) => ({
    src: props.isOpen ? crossIcon : menuBar,
    alt: props.isOpen ? 'crossIcon' : 'menuBar',
}))`
    width: 100%;
    cursor: pointer;
`;

const MenuContainer = styled.div`
    text-align: center;
    padding-top: 300px;
    font-size: 60px;
    font-weight: bold;
`;

function Navigation(props) {
    return (
        <ThemeProvider theme={theme}>
            <NavigationBg isOpen={props.isOpen}>
                {!props.isOpen ?
                <NameDiv>
                    <Link style={{textDecoration: "none", color: "white"}} to="/">Summer Liu</Link>
                </NameDiv>
                : null}

                <IconDiv>
                    <Icon onClick={() => props.setIsOpen(!props.isOpen)} isOpen={props.isOpen}/>
                </IconDiv>

                {props.isOpen ?
                <MenuContainer>
                    <Link onClick={() => props.setIsOpen(!props.isOpen)} style={{display: "inline-block", width: "100%", textDecoration: "none", color: theme.colors.black}} to="/">Home</Link>
                    <Link onClick={() => props.setIsOpen(!props.isOpen)} style={{display: "inline-block", width: "100%", textDecoration: "none", color: theme.colors.black}} to="/about">About</Link>
                    <Link onClick={() => props.setIsOpen(!props.isOpen)} style={{display: "inline-block", width: "100%", textDecoration: "none", color: theme.colors.black}} to="/cv">CV</Link>
                </MenuContainer>
                : null}
            </NavigationBg>
        </ThemeProvider>
    );
};

export default Navigation;