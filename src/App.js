import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NetflixSigninPage from './Netflix/NetflixSigninPage'
import NetflixIndexComponent from './Netflix/NetflixIndexComponent';
import InstagramHome from './Instagram/InstagramHome';
// import Header from './Components/Header';
import Contact from './Instagram/Contact';
// import SearchFilter from './ReactTask/SearchFilter';
import TaskList from './ReactTask/TaskList';


function App() {
    return (
        <div>
            
            <BrowserRouter>
            <TaskList />
            {/* <SearchFilter /> */}
            {/* <Header /> */}
                <Routes>
                    <Route path='/NetflixIndexComponent' element={<NetflixIndexComponent />} />
                    <Route path='/contactus' element={<Contact />} />
                    <Route path='/NetflixSigninPage' element={<NetflixSigninPage />} />
                    <Route path='/InstagramHome' element={<InstagramHome />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;