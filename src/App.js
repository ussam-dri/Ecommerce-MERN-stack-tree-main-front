import logo from './logo.svg';
import './App.css';
import { Header } from './layouts/Header/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { HomePage } from './components/HomePage';
import  Component  from './components/test';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/vs" element={<Component/>}/>

      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
