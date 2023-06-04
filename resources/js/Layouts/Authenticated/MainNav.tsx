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
                href={route("events.index")}
                method="get"
                active={route().current("events.index")}
            >
                Event
            </NavLink>

            <NavLink
                href={route("payments.index")}
                method="get"
                active={route().current("payments.index")}
            >
                Pembayaran
            </NavLink>

            <NavLink
                href={route("faqs.index")}
                method="get"
                active={route().current("faqs.index")}
            >
                Faqs
            </NavLink>

            <NavLink
                href={route("users.index")}
                method="get"
                active={route().current("users.index")}
            >
                Pengguna
            </NavLink>

            <NavLink
                href={route("settings.index")}
                method="get"
                active={
                    route().current("settings.index") ||
                    route().current("settings.festival") ||
                    route().current("settings.account")
                }
            >
                Pengaturan
            </NavLink>
        </nav>
    );
}
