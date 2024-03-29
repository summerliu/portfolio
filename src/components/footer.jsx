import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';

const FooterBg = styled.div`
    ${(props) => props.theme.fonts.OpenSans}
    color: ${(props) => props.theme.colors.grey};
    background-color: rgb(43, 43, 43);
    padding: 30px;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
`;

const TextDiv = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
`;

const IconDiv = styled.div`
    font-size: 20px;
`;

const icons = [
    {url: 'https://www.linkedin.com/in/summer-liu-260b7681/', src: faLinkedin, alt: 'LinkedIn'},
    {url: 'https://github.com/summerliu', src: faGithub, alt: 'GitHub'},
    {url: 'https://medium.com/@summer.ycliu', src: faMedium, alt: 'Medium'},
];

function Footer() {
    return (
        <ThemeProvider theme={theme}>
            <FooterBg>
                <TextDiv>
                    <div style={{marginRight: '20px'}}>&copy;	{new Date().getFullYear()} Summer Liu</div>
                    <div style={{marginRight: '20px'}}>summer.ycliu@gmail.com</div>
                </TextDiv>
                <IconDiv>
                    {icons.map((icon, index) => {
                        return (
                            <a rel="noopener noreferrer" target="_blank" key={index} href={icon.url} style={{marginLeft: '20px'}}>
                                <FontAwesomeIcon icon={icon.src} style={{cursor: 'pointer', color: theme.colors.grey}}/>
                            </a>
                        );
                    })}
                </IconDiv>
            </FooterBg>
        </ThemeProvider>
    );
};

export default Footer;