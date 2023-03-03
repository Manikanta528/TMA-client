import { Routes, Route } from 'react-router-dom';
import LandingPage from "./Components/LandingPage";
import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";
import Task from "./Components/Task";
import NotFound from "./Components/NotFound";
import PomodoroTimer from './Components/PomodoroTimer';
import Note from './Components/Note';
import Dashboard from './Components/Dashboard';

function App() {

  return (
    
    <Routes>
      <Route exact path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>

      <Route path='/task' element={<Task/>}/>
      <Route path='/pomodoro' element={<PomodoroTimer/>}/>
      <Route path='/note' element={<Note/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>

      <Route path='*' element={<NotFound/>}/>    
    </Routes>
    
  );
}

export default App;
