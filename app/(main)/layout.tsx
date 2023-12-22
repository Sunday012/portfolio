"use client"

import {Loader} from "@/components/intro-loader"
export default function MainLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <div>
             <Loader />
             <main>
            {children}
             </main>
        </div>
    );
  }