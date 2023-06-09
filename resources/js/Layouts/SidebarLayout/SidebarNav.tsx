"use client";

// import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/Components/Ui/Button";
import { Link } from "@inertiajs/react";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
    links: React.ReactNode;
}

export function SidebarNav({ className, links, ...props }: SidebarNavProps) {
    return (
        <nav
            className={cn(
                "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1 min-h-screen",
                className
            )}
            {...props}
        >
            {links}
        </nav>
    );
}
