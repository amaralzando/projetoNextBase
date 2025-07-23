"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="relative w-12 h-12 rounded-full border-2 border-primary/20 bg-primary/10 hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
            <Sun className="h-[1.4rem] w-[1.4rem] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 text-primary" />
            <Moon className="absolute h-[1.4rem] w-[1.4rem] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 text-primary" />
            <span className="sr-only">Alternar tema</span>
        </Button>
    );
}
