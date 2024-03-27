import React from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';
import Form from './Form';
import Api from './Api';

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/form' element={<Form/>}/>
            <Route path='/api' element={<Api/>}/>
          </Routes>
        </Router>
      </div>
  )
}

export default App
