import './App.css';
import NavBar from './components/Navbar';
import Banner from './components/banner/Banner';
import StartProject from './components/startProject/StartProject';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Leading from './components/leading/Leading';
import Contact from './components/contact/Contact';
import Faq from './components/faq/Faq';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App ">
      <div id='banner'>
        <NavBar />
        <Banner />
      </div>
        <StartProject />
        <Portfolio />
        <Services />
        <Leading />
        <Contact />
        <Faq />
        <Footer />

    </div>
  );
}

export default App;
