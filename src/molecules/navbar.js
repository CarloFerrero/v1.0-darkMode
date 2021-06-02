import React, { useState } from 'react';

//Style
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../theme';

// Router link
import {
  Link
} from "react-router-dom";

//Component
import Toggle from '../atoms/toggle'
import Button from '../atoms/button';

//Dark and light theme
const themes = {
  light:lightTheme,
  dark: darkTheme
}

// Style
const Nav = styled.div`
padding: 10px 20px 10px 20px;
display: block;
width: 95%;
margin: 0 auto;
`;
const Ul = styled.ul`
display: flex;
justify-content: center;
list-style-type: none;
text-decoration: none;

`;
const Li = styled.li`
color: ${({ theme }) => theme.fontColor};
font-size: 13px;
text-decoration: none;
text-transform: uppercase;
margin-right: 45px;
`;
const Col1 = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: flex-start;
`;
const Col2 = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: flex-end;
`;
  
const Navbar = () => {

  const [theme, setTheme] = useState("light")

    return (
    <ThemeProvider theme={themes[theme]}>
       <GlobalStyles />
          <Nav>
            <Ul>

              <Col1>
              
                <Link to="/"><Li>Home</Li></Link>
              
              </Col1>

              <Col2>
   
                <Link to="/work"><Li>Work</Li></Link>


                <Link to="/about"><Li>About</Li></Link>
                <Button />
               <Toggle theme={theme} setTheme={setTheme} />

              </Col2>

            </Ul>
          </Nav>

    </ThemeProvider>
    )
}

export default Navbar
