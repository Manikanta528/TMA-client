import React from 'react'
import '../styles/NavBar.css'
import { useNavigate } from 'react-router-dom'

import { BiLogOut, BiNote , BiTime, BiListPlus} from 'react-icons/bi'
import {CgListTree} from 'react-icons/cg'
import {RiDashboardLine} from 'react-icons/ri'

const NavBar = (props) => {
    const navigator = useNavigate();
    function handleNav() {
        let exit = prompt("Are you sure you want to Logout? (Y/N)");
        if(exit === "Y" || exit === "y"){ 
          localStorage.removeItem("email");
          navigator('/')
        };    
    }
  return (
    <div className='app-nav-bar'>
        <h3 style={{ "fontWeight": "700", "color": "#111", "cursor": "pointer" }}><CgListTree style={{"position":"relative","top":"3px"}}/> TMA </h3>
        <div className='nav-flex'>
        <div onClick={()=> navigator('/task')} className={ props.index === "1" ? 'active-page' : null }><BiListPlus style={{"position":"relative","top":"3px"}}/> Todo List</div>
        <div onClick={()=> navigator('/pomodoro')} className={ props.index === "2" ? 'active-page' : null }><BiTime style={{"position":"relative","top":"3px"}}/> PomodoroTimer</div>
        <div onClick={()=> navigator('/note')} className={ props.index === "3" ? 'active-page' : null }><BiNote style={{"position":"relative","top":"3px"}}/>  Notes</div>
        <div onClick={()=> navigator('/dashboard')} className={ props.index === "4" ? 'active-page' : null }><RiDashboardLine style={{"position":"relative","top":"3px"}}/>  Dashboard</div>
        <div onClick={handleNav}><BiLogOut style={{"position":"relative","top":"3px"}}/> Logout</div>
        </div>
    </div>
  )
}

export default NavBar