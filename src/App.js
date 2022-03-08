import './App.css';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import Testimonials from './Components/Testimonials';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
