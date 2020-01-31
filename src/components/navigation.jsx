import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import rwd from '../styles/rwd';
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const NavigationBg = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: ${(props) => props.isOpen ? '100%' : '85px'};
    background-color: ${(props) => props.isOpen ? props.theme.colors.white : 'transparent'};
    z-index: 1;
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
    ${(props) => props.isOpen ? 'position: absolute; top: 30px; right: 30px;' : null}
    float: right;
`;

const MenuContainer = styled.div`
    text-align: center;
    font-size: 60px;
    font-weight: bold;
    @media ${rwd.mobileS} {
        padding-top: 75px;
    }
    @media ${rwd.tabletL} {
        padding-top: 200px;
    }
`;

const ImgDiv = styled.div`
    position: absolute;
    right: 30px;
    bottom: 30px;
    font-size: 30px;
`;

const routes = [
    {path: '/portfolio/', name: 'Home'},
    {path: '/about', name: 'About'},
    {path: '/experience', name: 'Experience'},
    // {path: '/projects', name: 'Projects'},
    // {path: '/cv', name: 'CV'},
];

const icons = [
    {url: 'https://github.com/summerliu', src: faGithub, alt: 'GitHub'},
    {url: 'https://www.linkedin.com/in/summer-liu-260b7681/', src: faLinkedin, alt: 'LinkedIn'},
];

function Navigation(props) {
    let location = useLocation();
    return (
        <ThemeProvider theme={theme}>
            <NavigationBg isOpen={props.isOpen}>
                {!props.isOpen ?
                <NameDiv>
                    <Link style={{textDecoration: "none", color: location.pathname !== '/portfolio/' ? theme.colors.black : "white"}} to="/portfolio/">Summer Liu</Link>
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
                        <a rel="noopener noreferrer" target='_blank'
                            href='https://drive.google.com/file/d/1_F-UcQhN6mA-YTFVmgtvFklNGB0aHYd1/view?usp=sharing'
                            style={{display: "inline-block", width: "100%", textDecoration: "none", color: theme.colors.black}}
                        >
                            CV
                        </a>
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
                        style={{fontSize: '30px', cursor: 'pointer', color: props.isOpen ? theme.colors.black : location.pathname !== '/portfolio/' ? theme.colors.black : 'white'}}
                    />
                </IconDiv>
            </NavigationBg>
        </ThemeProvider>
    );
};

export default Navigation;