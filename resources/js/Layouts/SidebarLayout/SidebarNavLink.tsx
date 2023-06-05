import { buttonVariants } from "@/Components/Ui/Button";
import { cn } from "@/lib/utils";
import { InertiaLinkProps, Link } from "@inertiajs/react";

export default function SidebarNavLink({
    active = false,
    className = "",
    value,
    ...props
}: InertiaLinkProps & {
    active: boolean;
}) {
    return (
        <Link
            {...props}
            className={cn(
                buttonVariants({ variant: "ghost" }),
                active
                    ? "bg-muted hover:bg-muted"
                    : "hover:bg-transparent hover:underline",
                "justify-start"
            )}
        >
            {value}
        </Link>
    );
}
