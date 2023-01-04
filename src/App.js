
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Features from './component/Features'
import Clubs from './component/Clubs';
import Shop from './component/Shop';
import PersonalTraining from './component/PersonalTraining';
import Contact from './component/Contact';
import Gallery from './component/Gallery';
import Footer from './component/Footer'
import Register from './component/Register';
import About from './component/About';
function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/personalTraining" element={<PersonalTraining />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
