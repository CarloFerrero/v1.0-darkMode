import React, { useState } from 'react';

//Style
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './theme';


//Component

import About from './pages/about';
import Homepage from './pages/homepage';
import Work from './pages/work';
import Navbar from './molecules/navbar';

//React routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//Dark and light theme
const themes = {
  light:lightTheme,
  dark: darkTheme
}


function App() {

  const [theme, setTheme] = useState("light")

  return (
    <ThemeProvider theme={themes[theme]}>
              
       <GlobalStyles />
    

       <Router>
       <Navbar />

          <Switch>
            
            <Route path="/" exact component={Homepage} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />

          </Switch>


      </Router>




    </ThemeProvider>
  )
}

export default App;
