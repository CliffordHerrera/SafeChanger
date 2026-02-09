import Image from "next/image";
import Header from "@/components/header/header";
import Body from "@/components/body/body";
import FooterUp from "@/components/footer/footerUp";
import FooterDown from "@/components/footer/footerDown";

export default function Home() {
  return (
    <div className="flex flex-col bg-white justify-center items-center">
      <Header />
      <Body />
      <FooterUp />
      <FooterDown />
    </div>
  );
}
