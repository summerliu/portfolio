import React from 'react';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import rwd from '../styles/rwd';
import theme from '../styles/theme';

interface NavigationProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface NavigationBgProps {
    isOpen: boolean;
}

interface IconDivProps {
    isOpen: boolean;
}

interface RouteLink {
    path: string;
    name: string;
}

interface SocialIcon {
    url: string;
    src: IconDefinition;
    alt: string;
}

const NavigationBg = styled.div.withConfig({
    shouldForwardProp: (prop: PropertyKey) => prop !== 'isOpen'
})<NavigationBgProps>`
    position: fixed;
    top: 0;
    width: 100%;
    height: ${(props) => (props.isOpen ? '100%' : '85px')};
    background-color: ${(props) => (props.isOpen ? props.theme.colors.white : 'transparent')};
    z-index: 1;
`;

const NameDiv = styled.div`
    ${(props) => props.theme.fonts.OpenSans}
    font-weight: 600;
    font-size: 22px;
    ${(props) => props.theme.paddings.paddingTopLeft}
    float: left;
`;

const IconDiv = styled.div.withConfig({
    shouldForwardProp: (prop: PropertyKey) => prop !== 'isOpen'
})<IconDivProps>`
    ${(props) => (!props.isOpen ? props.theme.paddings.paddingTopRight : null)}
    ${(props) => (props.isOpen ? 'position: absolute; top: 30px; right: 30px;' : null)}
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

const routes: RouteLink[] = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    // {path: '/experience', name: 'Experience'},
    // {path: '/projects', name: 'Projects'},
];

const icons: SocialIcon[] = [
    { url: 'https://www.linkedin.com/in/summer-liu-260b7681/', src: faLinkedin, alt: 'LinkedIn' },
    { url: 'https://github.com/summerliu', src: faGithub, alt: 'GitHub' },
    { url: 'https://medium.com/@summer.ycliu', src: faMedium, alt: 'Medium' },
];

const Navigation: React.FC<NavigationProps> = ({ isOpen, setIsOpen }) => {
    const location = useLocation();

    const handleToggle = () => setIsOpen((prev) => !prev);

    return (
        <ThemeProvider theme={theme}>
            <NavigationBg isOpen={isOpen}>
                {!isOpen ? (
                    <NameDiv>
                        <Link
                            style={{
                                textDecoration: 'none',
                                color: location.pathname !== '/' ? theme.colors.black : 'white',
                            }}
                            to="/"
                        >
                            Summer Liu
                        </Link>
                    </NameDiv>
                ) : (
                    <div>
                        <MenuContainer>
                            {routes.map((route) => (
                                <Link
                                    key={route.path}
                                    onClick={handleToggle}
                                    style={{
                                        display: 'inline-block',
                                        width: '100%',
                                        textDecoration: 'none',
                                        color: theme.colors.black,
                                    }}
                                    to={route.path}
                                >
                                    {route.name}
                                </Link>
                            ))}
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://drive.google.com/file/d/1VxylXI7z7ObyPm48iZ71ebPbfCv_RRgN/view?usp=sharing"
                                style={{
                                    display: 'inline-block',
                                    width: '100%',
                                    textDecoration: 'none',
                                    color: theme.colors.black,
                                }}
                            >
                                CV
                            </a>
                        </MenuContainer>

                        <ImgDiv>
                            {icons.map((icon) => (
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    key={icon.url}
                                    href={icon.url}
                                    style={{ marginLeft: '20px' }}
                                >
                                    <FontAwesomeIcon
                                        icon={icon.src}
                                        title={icon.alt}
                                        style={{ cursor: 'pointer', color: theme.colors.black }}
                                    />
                                </a>
                            ))}
                        </ImgDiv>
                    </div>
                )}

                <IconDiv isOpen={isOpen}>
                    <FontAwesomeIcon
                        icon={!isOpen ? faBars : faTimes}
                        onClick={handleToggle}
                        style={{
                            fontSize: '30px',
                            cursor: 'pointer',
                            color: isOpen ? theme.colors.black : location.pathname !== '/' ? theme.colors.black : 'white',
                        }}
                    />
                </IconDiv>
            </NavigationBg>
        </ThemeProvider>
    );
};

export default Navigation;
