"use client";

// import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/Components/Ui/Button";
import { Link } from "@inertiajs/react";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {}

export function SidebarNav({ className, ...props }: SidebarNavProps) {
    // const pathname = usePathname();

    return (
        <nav
            className={cn(
                "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1 min-h-screen",
                className
            )}
            {...props}
        >
            <Link
                href={route("settings.festival")}
                method="get"
                className={cn(
                    buttonVariants({ variant: "ghost" }),
                    route().current("settings.festival")
                        ? "bg-muted hover:bg-muted"
                        : "hover:bg-transparent hover:underline",
                    "justify-start"
                )}
            >
                Festival
            </Link>
            <Link
                href={route("settings.account")}
                method="get"
                className={cn(
                    buttonVariants({ variant: "ghost" }),
                    route().current("settings.account")
                        ? "bg-muted hover:bg-muted"
                        : "hover:bg-transparent hover:underline",
                    "justify-start"
                )}
            >
                Akun
            </Link>
        </nav>
    );
}
