import './App.css';
import {Routes, Route} from 'react-router-dom'; 
import Home from './pages/home/Home';
import Navbar from './components/navi/Navbar';

// import './../dist/output.css'

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
