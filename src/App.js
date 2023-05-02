import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Auth from './pages/Auth';

import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/auth' element={<Auth/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
