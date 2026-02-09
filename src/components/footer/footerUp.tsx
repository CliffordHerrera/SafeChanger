import Image from "next/image";

const FooterUp = () => {
    const div2list = ["Обмен", "О сервисе", "Тарифы", "База знаний", "Сотрудничество и PR", "Партнерам"];
    const div3list = ["Правила использования", "Политика возвратов", "Политика KYC", "Политика обработки персональных данных"];

    return (
        <div className="flex flex-wrap gap-8 p-6">
            <div className="min-w-[250px]">
                <div className="relative w-[150px] h-[45px] mb-4">
                    <Image
                        src="/Header/logo.jpg"
                        alt="Логотип компании"
                        fill
                        className="object-contain rounded-xl"
                        sizes="150px"
                    />
                </div>
                <div className="flex flex-col">
                    <p className="font-semibold text-[14px] text-gray-800 mb-2">
                        Меняем с 2007 года
                    </p>
                    <p className="text-[#1F7FEB] hover:text-[#7aafeb] text-[14px] cursor-pointer ">
                        support@currencyexchange.com
                    </p>
                </div>
            </div>
            <div className="max-w-[190px]">
                <div className="flex flex-col">
                    <h1 className="text-black font-semibold text-[16px]">Ресурсы</h1>
                    {div2list.map((item, index) => (
                        <p key={index} className="m-[10px] text-[#1F7FEB] hover:text-[#7aafeb] cursor-pointer transition-colors first:mt-0">
                            {item}
                        </p>
                    ))}
                </div>
            </div>

            <div className="max-w-[190px]">
                <div className="flex flex-col">
                    <h1 className="text-black font-semibold text-[16px]">Документы</h1>
                    {div3list.map((item, index) => (
                        <p key={index} className="m-[10px] text-[#1F7FEB] hover:text-[#7aafeb] cursor-pointer transition-colors first:mt-0">
                            {item}
                        </p>
                    ))}
                </div>
            </div>
            <a
                href="https://t.me/Exchangeuapro"
                target="_blank"
                rel="noopener noreferrer"
                className="max-w-[384px] cursor-pointer">
                <div className="border border-gray-300 rounded-lg p-5">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                <svg
                                    className="w-4 h-4 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.57-1.38-.93-2.23-1.5-.98-.65-.34-1.01.21-1.59.14-.14 2.53-2.3 2.57-2.49.01-.03.01-.14-.06-.2-.07-.06-.17-.04-.24-.02-.1.02-1.69 1.09-4.78 3.2-.45.31-.86.46-1.23.45-.41-.01-1.2-.23-1.79-.42-.72-.23-1.29-.36-1.24-.76.03-.24.33-.48.91-.74 3.57-1.55 5.96-2.58 7.14-3.11 3.33-1.4 4.02-1.64 4.47-1.65.1 0 .32.02.46.14.11.1.14.23.16.32.01.1.02.31 0 .5z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-gray-800">Присоединяйтесь к нам в Telegram!</h3>
                        </div>

                        <p className="text-gray-800">
                            Получайте помощь, делитесь идеями и следите за новостями.
                        </p>

                        <p className="flex items-center justify-between text-blue-600 hover:text-blue-800 transition-colors">
                            <span>Перейти в канал</span>
                            <span className="text-lg">→</span>
                        </p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default FooterUp;