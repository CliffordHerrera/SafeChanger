'use client'

import { useState } from 'react';
import {
    Box,
    Menu,
    MenuItem,
    IconButton,
    Typography,
    Fade
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

const LanguageToggler = () => {
    const [isLanguageHovered, setIsLanguageHovered] = useState(false);
        const [currentLanguage, setCurrentLanguage] = useState('Ru');
    
        const languages = [
            { code: 'Ru', name: 'Русский', flag: '/Assets/russia-flag.png' },
            { code: 'En', name: 'English', flag: '/Assets/uk-flag.png' },
        ];

        return (
            <div className="relative">
                        {currentLanguage === "Ru" ?
                            <div
                                className="flex flex-row items-center justify-start w-[100px] h-[40px] py-[10px] pr-[9px] cursor-pointer"
                                onMouseEnter={() => setIsLanguageHovered(true)}
                                onMouseLeave={() => setIsLanguageHovered(false)}
                            >
                                <img
                                    src="/Assets/russia-flag.png"
                                    alt="russia-flag"
                                    className="rounded-[4px] w-6 h-4"
                                />
                                <p className="font-semibold m-[5px] text-black">Ru</p>
                                <div className={`transition-transform duration-200 ${isLanguageHovered ? 'rotate-180' : 'rotate-0'}`}>
                                    <ExpandMore fontSize="small" className="text-black" />
                                </div>
                            </div>
                            :
                            <div
                                className="flex flex-row items-center justify-start w-[100px] h-[40px] py-[10px] pr-[9px] cursor-pointer"
                                onMouseEnter={() => setIsLanguageHovered(true)}
                                onMouseLeave={() => setIsLanguageHovered(false)}
                            >
                                <img
                                    src="/Assets/uk-flag.png"
                                    alt="UK flag"
                                    className="rounded-[4px] w-6 h-4"
                                />
                                <p className="font-semibold m-[5px] text-black">En</p>
                                <div className={`transition-transform duration-200 ${isLanguageHovered ? 'rotate-180' : 'rotate-0'}`}>
                                    <ExpandMore fontSize="small" className="text-black" />
                                </div>
                            </div>
                        }

                        {isLanguageHovered && (
                            <div
                                className="absolute top-full right-0 mt-4 w-[100px] bg-[#0b2039] text-white rounded-lg shadow-xl overflow-hidden z-50"
                                onMouseLeave={() => setIsLanguageHovered(false)}
                                style={{
                                    animation: 'fadeIn 0.2s ease-out'
                                }}
                            >
                                {currentLanguage === "Ru" ?
                                    <div
                                        onMouseEnter={() => setIsLanguageHovered(true)}

                                        className="flex items-center gap-3 p-3 cursor-pointer hover:bg-[#1a4062] transition-colors duration-150"
                                        onClick={() => {
                                            setCurrentLanguage('En');
                                            setIsLanguageHovered(false);
                                        }}
                                    >
                                        <img
                                            src="/Assets/uk-flag.png"
                                            alt="UK flag"
                                            className="rounded-[4px] w-6 h-4"
                                        />
                                        <span className="font-medium">En</span>
                                    </div>
                                    :
                                    <div
                                        onMouseEnter={() => setIsLanguageHovered(true)}

                                        className="flex items-center gap-3 p-3 cursor-pointer hover:bg-[#1a4062] transition-colors duration-150"
                                        onClick={() => {
                                            setCurrentLanguage('Ru');
                                            setIsLanguageHovered(false);
                                        }}
                                    >
                                        <img
                                            src="/Assets/russia-flag.png"
                                            alt="russia-flag"
                                            className="rounded-[4px] w-6 h-4"
                                        />
                                        <span className="font-medium">Ru</span>
                                    </div>
                                }
                            </div>
                        )}
                    </div>
        )
}

export default LanguageToggler