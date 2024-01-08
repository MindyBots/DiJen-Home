import About from '../components/About';
import Services from '../components/Services';
import Teams from './Teams';
import Contact from './Contact';

function Main() {
  return (
    <>
      <main>
        <Services />
        <br></br>
        <About />
        <Teams />
        <br />
        <Contact />
        <br></br>
      </main>
    </>
  );
}
export default Main;
