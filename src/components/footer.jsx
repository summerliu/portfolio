import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

const FooterBg = styled.div`
    ${(props) => props.theme.fonts.OpenSans}
    position: relative;
    bottom: 0;
    width: 100%;
    background-color: rgb(43, 43, 43);
    color: ${(props) => props.theme.colors.grey};
    font-size: 12px;
    display: flex;
    align-items: center;
    padding: 20px 30px;
`;

function Footer() {
    return (
        <ThemeProvider theme={theme}>
            <FooterBg>
                <div>&copy;	2020 Summer Liu</div>
                <div>LinkedIn</div>
                <div>GitHub</div>
                <div>Gmail</div>
            </FooterBg>
        </ThemeProvider>
    );
};

export default Footer;