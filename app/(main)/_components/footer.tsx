import { Icon } from "@/components/icon";
import { Logo } from "@/components/ui/logo";
import { SideItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <div className="flex flex-col items-center justify-center mt-24 py-20">
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col gap-10 items-center justify-center">
                    <Logo />
                    <h1 className="text-xl text-[#141C3A] dark:text-[#9e9b9b] mt-6 sm:w-[50%] w-[70%] text-center">Embracing life's adventures, soaking up wisdom, and rising to new challenges with each sunrise.</h1>
                </div>
            </div>
            <div className="sm:hidden gap-3 flex mt-10">
          {SideItems.map((items, index) => (
            <Link
              href={items.link}
              key={index}
              className="dark:text-[#00d4ff] text-blue-800"
            >
              <Icon icon={items.src} />
            </Link>
          ))}
        </div>
        <div className="mt-20 text-[#141C3A] dark:text-[#9e9b9b] dark:hover:text-[#00d4ff] hover:text-blue-800 cursor-pointer">
            <p>Made & built by Favour Sunday</p>
        </div>
        </div>
    )
}