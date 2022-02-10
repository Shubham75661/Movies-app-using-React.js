import {Routes, Route} from 'react-router-dom';
import Movies from './Movies';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Movies/>}/>
      </Routes>
    </div>
  );
}

export default App;
