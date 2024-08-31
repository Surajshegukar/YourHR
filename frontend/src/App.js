import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';

import { BrowserRouter as Router, Route,Routes,
  
 } from 'react-router-dom';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
