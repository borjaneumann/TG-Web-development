import './App.css';
import NavBar from './components/navbar/NavBar' 
import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import ContactOwn from './components/contactOwn/Contact_own'
import Footer from './components/footer/Footer'



function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <ContactOwn />
      <Footer /> 
    </div>
  );
}

export default App;
