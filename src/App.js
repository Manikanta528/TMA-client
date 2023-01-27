import { Routes, Route } from 'react-router-dom'
import LandingPage from "./Components/LandingPage";
import Task from "./Components/Task";
import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";

function App() {
  return (
    
    <Routes>
      <Route exact path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
    </Routes>
    
  );
}

export default App;
