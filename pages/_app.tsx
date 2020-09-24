import type { AppProps /*, AppContext */ } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { device } from '../utils/breakpoints';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-color: #222;
    /* background: url("../assets/hero.jpg") no-repeat center center/cover; */
  }

  
  @media ${device.mobileMin} {
    h1 {
      font-size: 18px;
      margin-bottom: 0.8rem;
    }
  }

  @media ${device.mobileS} {
    h1 {
      font-size: 30px;
      margin-bottom: 0.8rem;
    }
  }

  @media ${device.mobileM} {
    h1 {
      font-size: 36px;
    }
  }
  

  @media ${device.tablet} {
    h1{
      font-size: 75px;
    }

    p{
      font-size: 32px;
    }
  }
  
`;

const theme = {
  colors: {
    primaryWhite: '#FFFFFF',
    secondaryWhite: '#E5E5E5',
    tertiaryWhite: '#A6A6A6',

    primaryBlue: '#0498D8',

    primaryDark: '#222222',
    secondaryDark: '#2D2D2D',
  },

  fonts: {
    spartan: "'Spartan', sans-serif",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
