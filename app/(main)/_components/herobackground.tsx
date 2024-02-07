import React from "react";

import { easeInOut, motion } from "framer-motion";
import {
  BackgroundItems,
  BackgroundItems2,
  BackgroundItems3,
} from "./backgrounditems";
export const HeroBackground = () => {
  return (
    <div className="h-[100vh] dark:bg-black w-full overflow-hidden">
    <div className="grid grid-cols-2 gap-[50rem] opacity-60">
      <div className="flex w-full h-[100vh] -rotate-1 animate-scroll">
        <div className="flex-shrink-0 flex items-center opacity-20 ">
          <BackgroundItems />
        </div>
        <div className="flex-shrink-0 flex items-center opacity-20 ">
          <BackgroundItems2 />
        </div>
        <div className="flex-shrink-0 flex items-center opacity-20">
          <BackgroundItems3 />
        </div>
        <div className="flex-shrink-0 flex items-center opacity-20 ">
          <BackgroundItems />
        </div>
        <div className="flex-shrink-0 flex items-center opacity-20 ">
          <BackgroundItems2 />
        </div>
        <div className="flex-shrink-0 flex items-center opacity-20">
          <BackgroundItems3 />
        </div>
      </div>
        </div>
    </div>
  );
};
