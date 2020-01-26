import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

const AboutBg = styled.div`
    height: 100vh;
`;

export default function About(props) {
    // console.log(props);
    
    return (
        <ThemeProvider theme={theme}>
            <AboutBg>About</AboutBg>
        </ThemeProvider>
    );
};