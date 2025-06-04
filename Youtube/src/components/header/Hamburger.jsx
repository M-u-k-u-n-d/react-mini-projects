import React from 'react'
import { toggleMenu } from '../../utils/appSlice'
import { useDispatch } from 'react-redux'

const Hamburger = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <div>
      <img src="src/assets/hamburger.svg" alt="Hamburger Logo" 
      onClick={toggleMenuHandler} className="w-6 h-6 cursor-pointer" />
    </div>
  )
}

export default Hamburger