import React from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';
import Registration from './Registration';

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/registration' element={<Registration/>}/>
          </Routes>
        </Router>
      </div>
  )
}

export default App
