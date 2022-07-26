import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NetflixSigninPage from './Netflix/NetflixSigninPage'
import NetflixIndexComponent from './Netflix/NetflixIndexComponent';
import InstagramHome from './Instagram/InstagramHome';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/NetflixIndexComponent' element={<NetflixIndexComponent />}></Route>
          <Route path='/NetflixSigninPage' element={<NetflixSigninPage />}></Route>
          <Route path='/' element={<InstagramHome /> }></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
