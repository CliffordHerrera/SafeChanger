'use client'
import MenuIcon from '@mui/icons-material/Menu';

const BurgerMenu = () => {

    return (
        <div className="ml-[20px] w-[40px] h-[40px] block">
            <div className='bg-[#0b2039] rounded-full w-[40px] h-[40px] items-center hover:bg-[#1f7feb] cursor-pointer hover:shadow-lg transition-all duration-300'>
                <MenuIcon className='m-[6px] ml-[8px] mt-[8px]'/>
            </div>
            
        </div>
    )
}

export default BurgerMenu