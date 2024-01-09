import React from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Franchise from "./components/Franchise";
import {
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Investor from './components/Investor';

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
          <Route path="/investor" element={<Investor />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
