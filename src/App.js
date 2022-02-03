import './App.css';
import Homepage from './pages/homepage/homepage.component';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
