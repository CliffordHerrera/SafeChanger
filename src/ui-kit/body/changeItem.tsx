import type { Changes } from "@/types/global";
export const ChangeItem = ({ change }: { change: Changes }) => {
    return (
        <div className="bg-white w-[234px] p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow relative">
            <div className="flex justify-between items-start mb-3 relative">
                <div>
                    <p className="font-bold text-lg text-black">{change.value1}</p>
                    <p className="text-sm text-gray-500">{change.valute1}</p>
                </div>
                <div className="text-center">
                    <span className="text-gray-400">→</span>
                </div>
                <div>
                    <p className="font-bold text-lg text-black">{change.value2}</p>
                    <p className="text-sm text-gray-500">{change.valute2}</p>
                </div>
            </div>
            <div className="text-center text-sm text-gray-400 border-t pt-2 absolute bottom-0 left-0 right-0">
                {change.time} мин назад
            </div>
        </div>
    )
}