import Image from "next/image";
import Header from "@/components/header";
import Body from "@/components/body/body";

export default function Home() {
  return (
    <div className="flex flex-col bg-white justify-center items-center">
      <Header />
      <Body />
    </div>
  );
}
