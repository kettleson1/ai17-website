import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

const Home = () => <div className="p-4">Welcome to AI17</div>;
const Solutions = () => <div className="p-4">Solutions page</div>;
const Industries = () => <div className="p-4">Industries page</div>;
const About = () => <div className="p-4">About AI17</div>;
const Contact = () => <div className="p-4">Contact Us</div>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
