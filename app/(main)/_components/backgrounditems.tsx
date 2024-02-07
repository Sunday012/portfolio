import Image from "next/image";
import React from "react";

export const BackgroundItems = () => {
  return (
    <div className="my-4 grid ">
      <Image src="/next2.png" alt="next.js" width={600} height={100} className="hidden dark:flex"/>
      <Image src="/Next-white.png" alt="next.js" width={500} height={100} className="dark:hidden"/>
      <Image src="/react2.png" alt="react" width={500} height={100} className="hidden dark:flex"/>
      <Image src="/react-white.png" alt="react" width={400} height={100} className="dark:hidden"/>
    </div>
  );
};
export const BackgroundItems2 = () => {
  return (
    <div className="grid gap-32">
      <Image src="/github.jpg" alt="next.js" width={500} height={100} className="hidden dark:flex"/>
      <Image src="/white-github.png" alt="next.js" width={500} height={100} className="dark:hidden"/>
      <div className="flex items-center justify-center">
        <h1 className="text-5xl font-bold uppercase">Functions</h1>
      </div>
    </div>
  );
};
export const BackgroundItems3 = () => {
  return (
    <div className="grid gap-32">
      <div className="flex items-center justify-center">
        <h1 className="text-5xl font-bold">ALGORITHM</h1>
      </div>
      
      <div className="flex items-center justify-start">
        <p>
          "id": 1,<br></br> "title": "2024",<br /> "author": "Sunday",<br /> "genre":
          "Science" <br /><br /> "id": 2,<br /> "title": "Make my own api",<br /> "author":
          "Favour",<br /> "genre": "Realistic"
        </p>
      </div>
    </div>
  );
};
