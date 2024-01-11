import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import Info from './Info';
import Details from './Details';
import Strategy from './Strategy';

export default function Home() {
  return (
    <div className='sm:flex sm:flex-col h-screen max-sm:h-full flex-row overflow-hidden rounded-xl bg-[#ffffff]'>
        <div className='flex max-sm:hidden  max-sm:relative flex-col w-[50px] overflow-hidden bg-[#ffffff]'>
            <div className='flex max-sm:hidden flex-col items-center  '>
             
              <div className='flex items-center w-[50px]'><img className='' src='/Images/butterfly.png' height="100px" width="120px" alt='no' /></div>
              <div className='flex h-[40px] w-[40px] rounded-md items-center justify-center hover:bg-[#4a35ff] '><SearchIcon className='text-[#cecece]' /></div>
            </div>
            <div className='flex max-sm:flex-row flex-col max-sm:justify-between  mt-[2rem] items-center'>
            <div className='flex h-[40px] w-[40px] rounded-md mt-[1rem] items-center justify-center bg-[#4a35ff] '><HomeIcon className='text-[#fff]' /></div>
            <div className='flex h-[40px] w-[40px] rounded-md mt-[1rem] items-center justify-center hover:bg-[#4a35ff] '><NewspaperIcon className='text-[#cecece]' /></div>
            <div className='flex h-[40px] w-[40px] rounded-md mt-[1rem] items-center justify-center hover:bg-[#4a35ff] '><ListAltIcon className='text-[#cecece]' /></div>
            <div className='flex h-[40px] w-[40px] rounded-md mt-[1rem] items-center justify-center hover:bg-[#4a35ff] '><PersonIcon className='text-[#cecece]' /></div>
            </div>
            <div className='flex max-sm:flex-row flex-col max-sm:hidden h-screen relative  items-center'>
            <div className='flex h-[40px] w-[40px] rounded-md absolute bottom-12 mb-[1rem] items-center justify-center hover:bg-[#4a35ff] '><NotificationsIcon className='text-[#cecece]' /></div> 
            <div className='flex h-[40px] w-[40px] rounded-md absolute bottom-0 mb-[1rem] items-center justify-center hover:bg-[#4a35ff] '><LogoutIcon className='text-[#cecece]' /></div> 
            </div>
        </div>
        
          <Info />
          <Details />
          <Strategy />

          
    </div>
  )
}
