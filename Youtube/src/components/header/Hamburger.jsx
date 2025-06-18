import React from 'react'
import { toggleMenu } from '../../utils/redux/appSlice'
import { useDispatch } from 'react-redux'
import hamburger from '../../assets/hamburger.svg'
const Hamburger = () => {

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <div>
      <img src={hamburger} alt="Hamburger Logo" 
      onClick={toggleMenuHandler} className="w-6 h-6 cursor-pointer" />
    </div>
  )
}

export default Hamburger