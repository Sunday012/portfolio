"use client"

import {Loader} from "@/components/intro-loader"
import { GlowCursor } from "./_components/cursor";
export default function MainLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <div>
             <Loader />
             <main>
              <GlowCursor />
            {children}
             </main>
        </div>
    );
  }