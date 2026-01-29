'use client'
import type { BodyButtonProps } from "@/types/global"


export const BodyButton = ({
    children,
    defaultActive = false,
    isActive,
    onToggle,
    className = '',
    ...props
}: BodyButtonProps) => {


    return (
        <button
            className={`
        rounded
        transition-all 
        duration-200
        border-1
        focus:outline-none 
        focus:ring-2 
        focus:ring-offset-2
        cursor-pointer
        ${isActive
                    ? 'bg-[#0b2039] text-white hover:bg-blue-700 border-transparent focus:ring-blue-500'
                    : 'bg-white text-gray-900 border-gray-300 hover:bg-[#1c508f] hover:text-white focus:ring-gray-400'
                }
        ${className}
      `}
            aria-pressed={isActive}
            {...props}
        >
            {children}
        </button>
    );
};