'use client'
import { BodyButton } from "@/ui-kit/body/bodyButton"
import type { BanksBarProps } from "@/types/global"
import Image from "next/image"

const Banks = ({ activeBtn, filterType, onBankToggle }: BanksBarProps) => {
    const banksList = [
        { index: 0, label: "Т-Банк", valType: "Fiat", imgPath: "Assets/banks/c-tinkoff.svg" },
        { index: 1, label: "СБП", valType: "Fiat", imgPath: "Assets/banks/c-sbp.svg" },
        { index: 2, label: "Сбербанк", valType: "Fiat", imgPath: "Assets/banks/c-sberbank.svg" },
        { index: 3, label: "Tether TRC20 (USDT)", valType: "Crypto", imgPath: "Assets/banks/c-usdt.svg" },
        { index: 4, label: "ВТБ", valType: "Fiat", imgPath: "Assets/banks/c-vtb.svg" },
        { index: 5, label: "Альфа-Банк", valType: "Fiat", imgPath: "Assets/banks/c-alfa.svg" },
        { index: 6, label: "Tether BEP20 (USDT)", valType: "Crypto", imgPath: "Assets/banks/c-usdt.svg" },
        { index: 7, label: "Bitcoin", imgPath: "Assets/banks/c-btc.svg" },
        { index: 8, label: "Tether ERC20 (USDT)", valType: "Crypto", imgPath: "Assets/banks/c-usdt.svg" },
        { index: 9, label: "Райффайзен", valType: "Fiat", imgPath: "Assets/banks/c-raiffeisen.svg" },
        { index: 10, label: "Visa/MC", valType: "Fiat", imgPath: "Assets/banks/c-card.svg" },
        { index: 11, label: "Tron (TRX)", valType: "Crypto", imgPath: "Assets/banks/c-tron-trx.svg" },
        { index: 12, label: "МИР", valType: "Fiat", imgPath: "Assets/banks/c-mir.svg" },
        { index: 13, label: "Toncoin (TON)", valType: "Crypto", imgPath: "Assets/banks/c-toncoin.svg" },
        { index: 14, label: "Ethereum ETH", valType: "Crypto", imgPath: "Assets/banks/c-eth.svg" },
        { index: 15, label: "BinanceCoin BEP20", valType: "Crypto", imgPath: "Assets/banks/bnb.svg" },
        { index: 16, label: "Litecoin", valType: "Crypto", imgPath: "Assets/banks/c-ltc.svg" },
        { index: 17, label: "Ripple XRP", valType: "Crypto", imgPath: "Assets/banks/c-ripple.svg" },
        { index: 18, label: "Наличные", valType: "Fiat", imgPath: "Assets/banks/c-rub.svg" },
    ]

    const filteredBanks = banksList.filter(bank => {
        if (filterType === 0) return true; // Все
        if (filterType === 1) return bank.valType === "Crypto";
        if (filterType === 2) return bank.valType === "Fiat"; 
        return true;
    });

    const isActiveBankInFilter = filteredBanks.some(bank => bank.index === activeBtn);
    const effectiveActiveBtn = isActiveBankInFilter ? activeBtn : filteredBanks[0]?.index || -1;

    return (
        <div className="flex flex-col relative">
            {
                filteredBanks.map(({ index, label, imgPath }) => (
                    <BodyButton
                        key={index}
                        isActive={effectiveActiveBtn === index}
                        onClick={() => onBankToggle(index)}
                        className="w-[252px] h-[55px] pl-[19px] text-[17px] flex flex-row items-center">
                        <div className="w-6 h-6 mr-3 flex items-center justify-center">
                            <Image
                                src={imgPath}
                                alt={label}
                                width={24}
                                height={24}
                                className="object-contain"
                            />
                        </div>
                        <span className="truncate">{label}</span>
                    </BodyButton>
                ))
            }

            {filteredBanks.length === 0 && (
                <div className="text-gray-500 text-center py-4">
                    Нет доступных банков для выбранного типа
                </div>
            )}
        </div>
    )
}

export default Banks