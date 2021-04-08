/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Navigator from '../components/Navigator';
import Footer from '../components/Footer';
import { Switch } from "react-router-dom";
import routes from '../router/routes';
import RouterCheck from '../components/RouterCheck';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';


const transCorlor = 'white';
function LayoutModal() {
    const [navBg, setNavBg] = useState('transprant');

    useEffect(() => {
        window.addEventListener('scroll', () => {
            detectScroll();
        });
    }, []);

    const detectScroll = () => {
        if (window.pageYOffset >= 100 && navBg !== transCorlor) {
            setNavBg(transCorlor);
        } else {
            setNavBg('transprant');
        }
    };
    return (
        <ThemeProvider theme={theme}>
            <div minHeight='100vh' overflowX='hidden'>
                <Navigator navBg={navBg} />
                <div style={{position: 'relative', minHeight: 600, mb: 230}} pt={[95, 95, 95, 95, 95, 95, 150]}>
                    {/* <LandingAnime/> */}
                    <Switch >
                        {routes.map((route, index) => {
                            return (
                                <RouterCheck
                                    exact
                                    key={index}
                                    route={route}
                                    permission={route.permission}
                                    path={route.path}
                                    component={route.component}
                                    backto={route.backto}
                                />
                            );
                        })}
                    </Switch>
                </div>
                <Footer/>
            </div>
        </ThemeProvider>
    );
}

export default LayoutModal;
