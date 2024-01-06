import React from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Franchise from "./components/Franchise";
import Contact from './components/Contact';

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const appTheme = createTheme({
  palette: {
    secondary: {
      main: '#123B37', // we are using secondary in about, otherwise the tabs are not taking custom color.
    },
  },
});
function App() {
  //let theme = responsiveFontSizes(appTheme);

  return (
    <ThemeProvider theme={appTheme}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Header />
                <Main />
                <Footer />
              </>
            }
          />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
