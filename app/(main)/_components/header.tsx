import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image"
 export const Header = () => {
  return (
    <div className="flex items-center justify-between px-6">
        <Image 
        src="/white-portfolio.svg"
        alt="logo"
        width={100}
        height={10}
        className="dark:hidden w-20"
        />
        <Image 
        src="/dark-portfolio.svg"
        alt="logo"
        width={100}
        height={10}
        className="hidden dark:block w-20"
        />
      <h1 className="">Home</h1>
      <ModeToggle />
    </div>
  );
};
