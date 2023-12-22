import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Homepage from './Pages/Homepage';
import NotFoundpage from './Pages/NotFoundpage';

function App() {
  return (
    <div className="App">
      test
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="*" element={<NotFoundpage/>}/>
      </Routes>
    </div>
  );
}

export default App;
