import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ImageGrid from './components/ImageGrid';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ImageGrid />
      <MapSection />
      <Footer />
    </div>
  );
}

export default App;
