import React from 'react'
import Sidebar from './Sidebar'
import ButtonList from './ButtonList'
import { useSelector } from 'react-redux';
import MainContainer from './MainContainer';

const Body = () => {
  const isMenuOpen = useSelector((state) => state.app1.isMenuOpen);
  return (
    <div className=''>
      <ButtonList/>
      {
      isMenuOpen && <Sidebar/>
      }
      {
        !isMenuOpen &&
         <div className="w-60 h-screen bg-transparent p-4 space-y-2"></div> 
      }
      <div className='absolute top-32 z-0'>
      <MainContainer/>
      </div>
    </div>
  )
}

export default Body