import { cn } from "@/lib/utils";
import { InertiaLinkProps, Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                !active && "text-muted-foreground"
            )}
        >
            {children}
        </Link>
    );
}
