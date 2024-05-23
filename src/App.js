import './App.css';
import itemsData from './itemsData.json';
import PlantCard from './components/PlantCard';
import Navbar from './pages/Navbar';
import HomePage from './pages/HomePage';
import Shop from './pages/Shop';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Navbar />
          <Routes>
             <Route path='/' element={<HomePage />} />
             <Route path='/shop' element={<Shop />} />
        </Routes>
     </BrowserRouter>

   
      
       </div> 
  );
}

export default App;



