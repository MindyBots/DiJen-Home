import About from '../components/About';
import Services from '../components/Services';
import Teams from './Teams';

function Main() {
  return (
    <>
      <main style={{backgroundColor:'#fffde7'}}>
        <Services />
        <br></br>
        <About />
        <Teams />
        <br></br>
      </main>
    </>
  );
}
export default Main;
