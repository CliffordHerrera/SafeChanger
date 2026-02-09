'use client'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import BurgerBody from './body';
import { useState } from "react";

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="ml-[20px] w-[40px] h-[40px] block relative">
            {isOpen ? 
            <div 
            onClick={() => setIsOpen(false)}
            className='bg-[#0b2039] rounded-full w-[40px] h-[40px] items-center hover:bg-[#1f7feb] cursor-pointer hover:shadow-lg transition-all duration-300 ease-in-out'>
                <CloseIcon className='m-[6px] ml-[8px] mt-[8px] transition-all duration-300 text-white'/>
            </div>
            :
            <div 
            onClick={() => setIsOpen(true)}
            className='bg-[#0b2039] rounded-full w-[40px] h-[40px] items-center hover:bg-[#1f7feb] cursor-pointer hover:shadow-lg transition-all duration-300 ease-in-out'>
                <MenuIcon className='m-[6px] ml-[8px] mt-[8px] transition-all duration-300 text-white'/>
            </div>
            }
            <BurgerBody isOpen={isOpen}/>
        </div>
    )
}

export default BurgerMenu

/**
 * <MenuIcon className='m-[6px] ml-[8px] mt-[8px]'/>
 * <CloseIcon className='m-[6px] ml-[8px] mt-[8px]'/>
 */