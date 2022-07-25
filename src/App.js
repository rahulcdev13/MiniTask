import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NetflixSigninPage from './Netflix/NetflixSigninPage'
import NetflixIndexComponent from './Netflix/NetflixIndexComponent';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NetflixIndexComponent />}></Route>
          <Route path='/NetflixSigninPage' element={<NetflixSigninPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
