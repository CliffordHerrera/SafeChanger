

export const News = () => {

    return (
        <div className="flex flex-col items-center justify-start w-[568px] h-[201px] mb-[50px]">
            <div className="flex flex-row items-start justify-between w-[528px] my-[20px]">
                <h1 className="text-black text-[26px]">Новости</h1>
                <p className="text-[#1f7feb] cursor-pointer hover:underline">Все</p>
            </div>
            <div className="flex flex-row items-center justify-evenly bg-gray-100 hover:bg-gray-200 cursor-pointer transition-all duration-300 ease-in-out rounded-lg w-[528px] h-[82px] m-[10px]">
                <div className="flex flex-col items-start w-[60px] h-[36px] text-black text-[15px] m-[10px] mr-[30px]">
                    <p className="w-[60px]">06 нояб.</p>
                    <p className="text-gray-500">2025</p>
                </div>
                <p className="text-[15px] text-blue-400 m-[10px]">Домен нашего обменного сервиса Safelychange.com был разблокирован РКН на территории РФ. Меняйте смело!</p>
            </div>
            <div className="flex flex-row items-center bg-gray-100 hover:bg-gray-200 cursor-pointer transition-all duration-300 ease-in-out rounded-lg w-[528px] h-[82px]">
                <div className="flex flex-col items-start w-[60px] h-[36px] text-black text-[15px] m-[10px] mr-[30px]">
                    <p className="w-[60px]">09 окт.</p>
                    <p className="text-gray-500">2025</p>
                </div>
                <p className="text-[15px] text-blue-400 m-[10px]">Блокировка сайта РКН на территории РФ</p>
            </div>
        </div>
    )
}