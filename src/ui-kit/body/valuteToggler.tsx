'use client'
import { BodyButton } from "@/ui-kit/body/bodyButton"
import type { ToggleBarProps } from "@/types/global"

export const ValuteToggler = ({ activeBtn, onToggle }: ToggleBarProps) => {
    const buttons = [
        { label: "Все", value: 0 },
        { label: "Крипто", value: 1 },
        { label: "Фиат", value: 2 },
    ];

    const handleClick = (index: number) => {
        if (onToggle) {
            onToggle(index);
        }
    };

    return (
        <div className="m-[20px] mt-0">
            {
                buttons.map(({ label, value }) => (
                    <BodyButton
                        key={value}
                        isActive={activeBtn === value ? true : false}
                        onClick={() => handleClick(value)}
                        className="w-[70px] px-[15px] text-[11px]">{label}
                    </BodyButton>
                ))
            }

        </div>
    )
}

//