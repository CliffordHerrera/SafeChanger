'use client'

import Image from "next/image";
import { useState } from "react";
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import ModeCommentTwoToneIcon from '@mui/icons-material/ModeCommentTwoTone';
import LanguageToggler from "@/ui-kit/languangeToggler";
import BurgerMenu from "@/ui-kit/burgerMenu/burgerMenu";


const Header = () => {
    

    return (
        <div className="flex flex-col justify-start">
            <div className="flex flex-row justify-between w-[1140px] h-[74px]">
                <Image
                    src="/Header/logo.jpg"
                    alt="logo"
                    width={208}
                    height={45}
                    className="rounded-xl mt-[20px] p-[5px]"
                />
                <div className="flex flex-row justify-end items-center w-[442.22] h-[45px] m-[20px] p-[5px]">
                    <button className="flex flex-row justify-evenly items-center bg-[#0b2039] m-[10px] rounded w-[221px] h-[40px] font-semibold hover:bg-[#23527c] cursor-pointer hover:shadow-lg transition-all duration-300">
                        <ModeCommentTwoToneIcon />
                        Тех. поддержка 24/7
                    </button>
                    <div className="flex flex-row justify-center items-center w-[50px] h-[40px] m-[5px]">
                        <AccountCircleSharpIcon sx={{ width: 30, height: 30 }} className="cursor-pointer text-blue-500 hover:text-blue-700 transition-colors duration-200 hover:scale-110" />
                    </div>
                    <LanguageToggler />
                    <BurgerMenu />
                </div>
            </div>
        </div>
    );
}

export default Header