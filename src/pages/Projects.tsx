import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

const Projects: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <div>Projects</div>
        </ThemeProvider>
    );
};

export default Projects;
