'use client'

import Image from "next/image";
import { useState } from "react";
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import ModeCommentTwoToneIcon from '@mui/icons-material/ModeCommentTwoTone';
import LanguageToggler from "@/components/header/languangeToggler";
import BurgerMenu from "@/ui-kit/burgerMenu/burgerMenu";


const Header = () => {


    return (
        <div className="flex flex-col justify-start w-[1140px]">
            <div className="flex flex-row justify-between w-[1140px] h-[74px] relative">
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
            <div className="flex flex-row items-center justify-start h-[118px]">
                <div className="w-[560px] h-[118px] mt-[20px] mr-[10px] flex flex-row justify-between bg-gradient-to-r from-[#f5e0d7] to-[#fac8b4]">
                    <div className="p-[10px]">
                        <p className="text-xl text-[#b1b6ba] font-semibold cursor-pointer">Разыгрываем 25 000 руб. каждую неделю</p>
                        <p className="text-[#b1b6ba] font-semibold cursor-pointer">Оставляй отзыв к обмену, становись участником и получай выигрыш</p>
                    </div>
                    <Image
                        src="/Header/banner1.jpg"
                        alt="banner1"
                        width={190}
                        height={118}
                    />
                </div>
                <div className="w-[560px] h-[118px] mt-[20px] flex flex-row justify-between bg-gradient-to-r from-[#1ce68b] to-[#0584e3]">
                    <div className="p-[10px]">
                        <p className="text-white font-semibold text-xl cursor-pointer">Платежные решения для High-risk проектов</p>
                        <p className="text-white font-semibold cursor-pointer">Процессинг для работы с фиатом и криптоплатежами</p>
                    </div>
                    <Image
                        src="/Header/banner2.png"
                        alt="banner2"
                        width={190}
                        height={118}
                    />
                </div>
            </div>
        </div>
    );
}

export default Header