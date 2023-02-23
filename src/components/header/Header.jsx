import React from 'react'
import TaskPng from "../../assets/TaskPng.jsx";

const Header = () => {
  return (
    <div className='d-flex justify-content-evenly align-items-center bg-danger'>
        <TaskPng/>
        <h1 className='display-5'>TASK TRACKER</h1>
    </div>
  )
}

export default Header