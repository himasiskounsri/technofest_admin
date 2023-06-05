import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
    "inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default",
    {
        variants: {
            variant: {
                default:
                    "bg-primary hover:bg-primary/80 border-transparent text-primary-foreground",
                secondary:
                    "bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground",
                destructive:
                    "bg-destructive hover:bg-destructive/80 border-transparent text-destructive-foreground",
                outline: "text-foreground",
                success:
                    "bg-success hover:bg-success/80 border-transparent text-success-foreground",
                info: "bg-info hover:bg-info/80 border-transparent text-info-foreground",
                warning:
                    "bg-warning hover:bg-warning/80 border-transparent text-warning-foreground",
                danger: "bg-danger hover:bg-danger/80 border-transparent text-danger-foreground",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    );
}

export { Badge, badgeVariants };
