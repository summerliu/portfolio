// const size = {
//     mobileS: '320px',
//     mobileM: '375px',
//     mobileL: '425px',
//     tablet: '768px',
//     laptop: '1024px',
//     laptopL: '1440px',
//     desktop: '2560px',
// };
import theme from './theme';

export default {
    mobileS: `(min-width: ${theme.size.mobileS})`,
    mobileM: `(min-width: ${theme.size.mobileM})`,
    mobileL: `(min-width: ${theme.size.mobileL})`,
    tablet: `(min-width: ${theme.size.tablet})`,
    tabletL: `(min-width: ${theme.size.tabletL})`,
    laptopL: `(min-width: ${theme.size.laptopL})`,
    desktop: `(min-width: ${theme.size.desktop})`,
    desktopL: `(min-width: ${theme.size.desktop})`,
};