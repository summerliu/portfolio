import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

function Experience() {
    return (
        <ThemeProvider theme={theme}>
            <div>Experience</div>
        </ThemeProvider>
    );
}

export default Experience;