"use client"

import { useEffect, useState, useRef } from "react";

export const GlowCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
        if (!isVisible) setIsVisible(true);
        resetCursorHideTimeout();
    };

    const resetCursorHideTimeout = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setIsVisible(false), 500);
    };

    const handleMouseOut = () => {
        setIsVisible(false);
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <div
            className={`bg-[#00d4ff] pointer-events-none w-52 h-52 fixed rounded-full transition border-[#00d4ff] outline-[#00d4ff] blur-3xl ${isVisible ? 'block' : 'hidden'}`}
            ref={cursorRef}
            style={{
                left: `${position.x - 16}px`,
                top: `${position.y - 16}px`,
            }}
        />
    );
};