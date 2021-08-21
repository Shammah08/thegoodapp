import logo from './logo.svg'
import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import About from './components/About'
import Quote from './components/Quote';
import Partners from './components/Partners';
import Services from './components/Services'
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <About />
      <Quote />
      <Partners />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
