import React from 'react'
import Hamburger from './Hamburger'
import SearchBar from './SearchBar'
import Logo from './Logo'
import UserIcon from './UserIcon'


const Head = () => {
  return (
    <div className='flex justify-between items-center bg-gray-400 p-2'>
      <div className='flex gap-8'>
      <Hamburger/>
      <Logo/>
      </div>
      <SearchBar/>
      <UserIcon/>
      
    </div>
  )
}

export default Head