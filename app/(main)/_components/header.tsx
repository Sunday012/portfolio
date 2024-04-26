import { ModeToggle } from "@/components/mode-toggle";
import { Logo } from "@/components/ui/logo";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image"
 export const Header = () => {
  return (
    <div className="flex items-center justify-between px-6">
     <Logo />
     <div className="lg:flex hidden items-center gap-6 dark:text-[silver] text-black">
      <h1 className="">Home</h1>
      <h1 className="">Experience</h1>
      <h1 className="">Projects</h1>
      <h1 className="">Contact</h1>
     </div>
      <ModeToggle />
      <RxHamburgerMenu className="flex lg:hidden" size={24}/>
    </div>
  );
};
