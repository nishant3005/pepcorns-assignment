import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPageScreen from './pages/LandingPageScreen';
import Navbar from './components/navbar/Nav';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPageScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
