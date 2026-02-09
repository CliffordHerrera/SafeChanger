

const FooterDown = () => {
    const footDownItems = [
        "Сайт не предоставляет возможности зачисления иностранной валюты на счета валютных резидентов РФ.",
        "Сайт не проводит операции с ЦФА для физ. лиц на территории РФ.",
        "Сайт предназначен только для лиц старше 18 лет."
    ]
    return (
        <div className="flex flex-col items-start">
            <span className="w-[1140px] h-[1px] bg-gray-300 mb-[10px]"></span>
            <div className="mb-[20px]">
                {footDownItems.map((item, index) => (
                    <p key={index} className="text-[#607D8B] text-[14px]">{item}</p>
                ))}
            </div>

        </div>
    )
}

export default FooterDown;