import { StaticImageData } from "next/image";

export type BurgerMenuProps = {
    isOpen: boolean;
}

export type BodyButtonProps = {
    children: React.ReactNode;
    defaultActive?: boolean;
    isActive: boolean;
    onShow?: boolean;
    onToggle?: (isActive: boolean) => void;
    className?: string;
    // Другие стандартные пропсы кнопки, которые хотим поддержать
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    // Остальные пропсы собираем в rest
    [key: string]: any;
}

export type ToggleBarProps = {
    activeBtn: number,
    onToggle: (index: number) => void,
}

export type BanksBarProps = {
    activeBtn: number; // активный банк
    filterType: number; // 0=Все, 1=Крипто, 2=Фиат
    onBankToggle: (index: number) => void; // колбек при выборе банка
}

export type Changes = {
    value1: string,
    valute1: string,
    value2: string,
    valute2: string,
    time: number
}

export type GridItem = {
    id: number;
    image: StaticImageData | string;
    title: string;
    description: string;
}