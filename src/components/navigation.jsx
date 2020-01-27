import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

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
    ${(props) => !props.isOpen ? props.theme.paddings.paddingTopRight : null}
    float: right;
    width: 30px;
    ${(props) => props.isOpen ? 'position: absolute; top: 30px; right: 30px;' : null}
`;

const MenuContainer = styled.div`
    text-align: center;
    padding-top: 200px;
    font-size: 60px;
    font-weight: bold;
`;

const ImgDiv = styled.div`
    position: absolute;
    right: 30px;
    bottom: 30px;
    font-size: 30px;
`;

const routes = [
    {path: '/', name: 'Home'},
    {path: '/about', name: 'About'},
    {path: '/cv', name: 'CV'},
    {path: '/experience', name: 'Experience'},
    {path: '/projects', name: 'Projects'},
];

const icons = [
    {url: 'https://github.com/summerliu', src: faGithub, alt: 'GitHub'},
    {url: 'https://www.linkedin.com/in/summer-liu-260b7681/', src: faLinkedin, alt: 'LinkedIn'},
];

function Navigation(props) {
    let location = useLocation();
    console.log(location.pathname);
    
    return (
        <ThemeProvider theme={theme}>
            <NavigationBg isOpen={props.isOpen}>
                {!props.isOpen ?
                <NameDiv>
                    <Link style={{textDecoration: "none", color: location.pathname !== '/' ? theme.colors.black : "white"}} to="/">Summer Liu</Link>
                </NameDiv> :
                <div>
                    <MenuContainer>
                        {routes.map((route, index) => {
                            return (
                                <Link
                                    key={index}
                                    onClick={() => props.setIsOpen(!props.isOpen)}
                                    style={{display: "inline-block", width: "100%", textDecoration: "none", color: theme.colors.black}}
                                    to={route.path}
                                >
                                    {route.name}
                                </Link>
                            );
                        })}
                    </MenuContainer>
                    <ImgDiv>
                        {icons.map((icon, index) => {
                            return (
                                <a rel="noopener noreferrer" target="_blank" key={index} href={icon.url} style={{marginLeft: '20px'}}>
                                    <FontAwesomeIcon icon={icon.src} style={{cursor: 'pointer', color: theme.colors.black}}/>
                                </a>
                            );
                        })}
                    </ImgDiv>
                </div>}
                <IconDiv isOpen={props.isOpen}>
                    <FontAwesomeIcon
                        icon={!props.isOpen ? faBars : faTimes} onClick={() => props.setIsOpen(!props.isOpen)}
                        style={{fontSize: '30px', cursor: 'pointer', color: props.isOpen ? theme.colors.black : location.pathname !== '/' ? theme.colors.black : 'white'}}
                    />
                </IconDiv>
            </NavigationBg>
        </ThemeProvider>
    );
};

export default Navigation;