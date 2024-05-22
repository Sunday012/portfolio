import { ModeToggle } from "@/components/mode-toggle";
import { Logo } from "@/components/ui/logo";
import { RxHamburgerMenu } from "react-icons/rx";


 export const Header = () => {
  
  
  return (
    <div className="flex items-center justify-between px-6">
     <Logo />
      <ModeToggle />
    </div>
  );
};
