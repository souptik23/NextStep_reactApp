
import './App.css';
import Login_page from './components/Login_page';
import Body from './components/Body';
// import LoginPage from './components/Login_page';
import Mainpage from './components/Mainpage';
import Profile from './components/Profile';
import Signup from './components/Signup';

import {
  BrowserRouter as Router,
  Route,
  Routes, // Import Routes instead of Switch
} from 'react-router-dom';

function App() {
  return (
      <>
       <Router>
      <Routes>
        <Route path="/" element={<Mainpage/>} />
        <Route path="/body" element={<Body />} />
        <Route path="/Login" element={<Login_page/>}/>
        <Route path="/myprofile" element = {<Profile/>}/>
        <Route path="/signup" element = {<Signup/>}/>
      </Routes>
    </Router>
    {/* <Categories/> */}
    {/* <Body/> */}
    {/* <Login_page/> */}
    {/* <Mainpage/> */}
    {/* <LoginPage/> */}
      </>
  );
}

export default App;
