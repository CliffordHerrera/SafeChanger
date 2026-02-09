'use client'

import { useState } from 'react';
import { ExpandMore } from '@mui/icons-material';

const LanguageToggler = () => {
    const [isLanguageHovered, setIsLanguageHovered] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('Ru');

    const languages = [
        { code: 'Ru', name: 'Русский', flag: '/Assets/russia-flag.png' },
        { code: 'En', name: 'English', flag: '/Assets/uk-flag.png' },
    ];

    return (
        <div 
            className="relative"
            onMouseEnter={() => setIsLanguageHovered(true)}
            onMouseLeave={() => setIsLanguageHovered(false)}
        >
            {/* Кнопка переключателя */}
            <div className="flex flex-row items-center justify-start w-[100px] h-[40px] py-[10px] pr-[9px] cursor-pointer">
                <img
                    src={currentLanguage === "Ru" ? "/Assets/russia-flag.png" : "/Assets/uk-flag.png"}
                    alt={currentLanguage === "Ru" ? "russia-flag" : "UK flag"}
                    className="rounded-[4px] w-6 h-4"
                />
                <p className="font-semibold m-[5px] text-black">{currentLanguage}</p>
                <div className={`transition-transform duration-200 ${isLanguageHovered ? 'rotate-180' : 'rotate-0'}`}>
                    <ExpandMore fontSize="small" className="text-black" />
                </div>
            </div>

            {/* Выпадающее меню */}
            {isLanguageHovered && (
                <div className="absolute top-[40px] right-0 w-[100px] bg-[#0b2039] text-white rounded-lg shadow-xl overflow-hidden z-50">
                    <div className="absolute -top-2 right-4 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-[#0b2039]"></div>
                    
                    {languages
                        .filter(lang => lang.code !== currentLanguage)
                        .map((lang) => (
                            <div
                                key={lang.code}
                                className="flex items-center gap-3 p-3 cursor-pointer hover:bg-[#1a4062] transition-colors duration-150"
                                onClick={() => {
                                    setCurrentLanguage(lang.code);
                                    setIsLanguageHovered(false);
                                }}
                            >
                                <img
                                    src={lang.flag}
                                    alt={`${lang.name} flag`}
                                    className="rounded-[4px] w-6 h-4"
                                />
                                <span className="font-medium">{lang.code}</span>
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default LanguageToggler;