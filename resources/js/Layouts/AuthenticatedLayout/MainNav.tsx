import { Link } from "@inertiajs/react";

import { cn } from "@/lib/utils";
import NavLink from "./NavLink";

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav
            className={cn(
                "flex items-center space-x-4 lg:space-x-6",
                className
            )}
            {...props}
        >
            <NavLink
                href={route("dashboard")}
                method="get"
                active={route().current("dashboard")}
            >
                Dashboard
            </NavLink>

            <NavLink
                href={route("festivals.index")}
                method="get"
                active={
                    route().current("festivals.*") ||
                    route().current("events.*") ||
                    route().current("registrations.*") ||
                    route().current("participants.*") ||
                    route().current("payments.*") ||
                    route().current("faqs.*")
                }
            >
                Festival
            </NavLink>

            <NavLink
                href={route("managers.index")}
                method="get"
                active={route().current("managers.index")}
            >
                Pengguna
            </NavLink>

            <NavLink
                href={route("account.index")}
                method="get"
                active={route().current("account.index")}
            >
                Pengaturan
            </NavLink>
        </nav>
    );
}
