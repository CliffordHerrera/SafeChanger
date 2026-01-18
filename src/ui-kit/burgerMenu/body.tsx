'use client'
import type { BurgerMenuProps } from "@/types/global"


const BurgerBody = ({ isOpen }: BurgerMenuProps) => {
    const listStile = ""
    const links = [
        { key: 1, val: "Обмен" },
        { key: 2, val: "О сервисе" },
        { key: 3, val: "Тарифы" },
        { key: 4, val: "Правила пользования" },
        { key: 5, val: "База знаний" },
        { key: 6, val: "Политика возвратов" },
        { key: 7, val: "Сотрудничество и PR" },
        { key: 8, val: "Партнерам" },
        { key: 9, val: "Политика KYT" },
        { key: 10, val: "Политика обработки персональных данных" },
    ]

    return (
         isOpen &&
        (<div className="w-[220px] h-[391px] bg-[#0b2039] absolute top-[70px] right-0 rounded block items-center">
            {links.map(({ key, val }) => (
                <p
                    key={key}
                    className="text-[#d9e0e8] m-[10px] ml-[25px] hover:text-white cursor-pointer"
                >
                    {val}
                </p>
            ))}
        </div>)
    )
}

export default BurgerBody;