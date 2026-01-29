'use client'
import { useState } from "react"
import { ValuteToggler } from "@/ui-kit/body/valuteToggler"
import Banks from "@/ui-kit/body/banks"
import { News } from "./news"
import { LastChanges } from "./lastChanges"
import { Digits } from "./Digits"

const Body = () => {
    // Состояние для левого блока (Отдаете)
    const [leftFilter, setLeftFilter] = useState(0); // 0=Все, 1=Крипто, 2=Фиат
    const [leftActiveBank, setLeftActiveBank] = useState(0);
    
    // Состояние для правого блока (Получаете)
    const [rightFilter, setRightFilter] = useState(0);
    const [rightActiveBank, setRightActiveBank] = useState(0);

    // Обработчики для левого блока
    const handleLeftToggle = (index: number): void => {
        setLeftFilter(index);
    }

    const handleLeftBankToggle = (index: number): void => {
        
        setLeftActiveBank(index);
        console.log("Выбран банк (Отдаете):", index);
    }

    // Обработчики для правого блока
    const handleRightToggle = (index: number): void => {
        setRightFilter(index);
    }

    const handleRightBankToggle = (index: number): void => {
        setRightActiveBank(index);
        console.log("Выбран банк (Получаете):", index);
    }

    return (
        <div className="flex flex-row items-start justify-start relative w-[1140px] h-[1172px] border-2 border-gray-300 mt-[50px]">
            <section className="w-[568px] border-1 border-gray-300">
                <section className="flex flex-col items-start w-[283px]">
                    <h1 className="text-black text-2xl m-[20px]">Отдаете</h1>
                    <ValuteToggler 
                        activeBtn={leftFilter} 
                        onToggle={handleLeftToggle}
                    />
                    <Banks 
                        activeBtn={leftActiveBank}
                        filterType={leftFilter}
                        onBankToggle={handleLeftBankToggle}
                    />
                </section>
                <section className="flex flex-col items-start w-[283px] absolute top-0 left-[238px]">
                    <h1 className="text-black text-2xl m-[20px]">Получаете</h1>
                    <ValuteToggler 
                        activeBtn={rightFilter} 
                        onToggle={handleRightToggle}
                    />
                    <Banks 
                        activeBtn={rightActiveBank}
                        filterType={rightFilter}
                        onBankToggle={handleRightBankToggle}
                    />
                </section>
            </section>
            <section className="w-[568px] border-1 border-gray-300">
                <News />
                <LastChanges />
                <Digits />
            </section>
        </div>
    )
}

export default Body