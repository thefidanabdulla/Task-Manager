import './App.css';
import {Routes, Route} from 'react-router-dom'; 
import Home from './components/home/Home';
import Navbar from './components/navi/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
