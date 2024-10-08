import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/black-logo.svg"
        alt="logo"
        width={100}
        height={10}
        className="dark:hidden lg:w-16 w-10 pt-4"
      />
      <Image
        src="/silver-logo.svg"
        alt="logo"
        width={100}
        height={10}
        className="hidden dark:block lg:w-16 w-10 pt-4"
      />
    </Link>
  );
};
