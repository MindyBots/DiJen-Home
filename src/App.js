import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';


function App() {

  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <>
    <ThemeProvider theme={theme}>
    <Navbar />
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
    </>
  );
}

export default App;
