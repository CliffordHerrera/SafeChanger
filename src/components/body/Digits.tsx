import type { GridItem } from "@/types/global"
import Image from "next/image";

export const Digits = () => {
    const items: GridItem[] = [
        { id: 1, image: 'Assets/inDigits/main-stat-best.svg', title: '89 060', description: 'Отзывов на BestChange' },
        { id: 2, image: 'Assets/inDigits/main-stat-new-clients.svg', title: '259', description: 'Новых клиентов за сутки' },
        { id: 3, image: 'Assets/inDigits/main-stat-ex.svg', title: '625', description: 'Обменов за сутки' },
        { id: 4, image: 'Assets/inDigits/main-stat-pm.svg', title: '2033.9', description: 'PM TS' },
        { id: 5, image: 'Assets/inDigits/main-stat-reserve.svg', title: '$788 тыс', description: 'Резервы' },
    ];

    return (
        <div className="p-4">
            <h2 className="text-2xl text-black font-bold mb-6">
                Currency Exchange в цифрах
            </h2>

            {/* Сетка 2 колонки x 3 строки */}
            <div className="grid grid-cols-2 gap-4">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                        {/* Картинка посередине слева */}
                        <div className="relative w-16 h-16 mr-4 flex-shrink-0">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover rounded"
                                sizes="64px"
                            />
                        </div>

                        {/* Текстовый блок справа от картинки */}
                        <div className="flex flex-col justify-center">
                            {/* Первый параграф */}
                            <p className="font-semibold text-gray-800 text-sm mb-1 line-clamp-1 text-[26px]">
                                {item.title}
                            </p>

                            {/* Второй параграф */}
                            <p className="text-gray-600 text-xs line-clamp-2 text-[15px]">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}