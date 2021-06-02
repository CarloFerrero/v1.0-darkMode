import { createGlobalStyle } from 'styled-components';


//Global style
export const GlobalStyles = createGlobalStyle`

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  *{
    font-family: 'IBM Plex Sans', sans-serif;
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.fontColor};
    transition: all 0.15s linear;
  }
  a {
    text-decoration:none;
    color: ${({ theme }) => theme.fontColor};
  }
  ul {
    padding: 0px;
  }

`;


export const lightTheme = {
    body:'#F5F5F5',
    fontColor:'#12141D'
}

export const darkTheme = {
    body:'#12141D',
    fontColor:'#F5F5F5'
}


