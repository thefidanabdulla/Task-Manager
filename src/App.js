import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navi/Navbar';
import Sidebar from './components/sidebar/Sidebar';


function App() {
  return (
    <div className=' bg-green-300'>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
