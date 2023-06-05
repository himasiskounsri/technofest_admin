import React, { Children } from "react";
import { Badge } from "./Badge";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import { Separator } from "./Separator";
import { cn } from "@/lib/utils";

interface ListProps {
    children: React.ReactNode;
    className?: string;
}

export function List({ children, className }: ListProps) {
    return <Card className={className}>{children}</Card>;
}

interface ListHeaderProps {
    children: React.ReactNode;
}

export function ListHeader({ children }: ListHeaderProps) {
    return (
        <>
            <CardHeader className="bg-secondary">{children}</CardHeader>
            <Separator />
        </>
    );
}

interface ListTitleProps {
    children: React.ReactNode;
}

export function ListTitle({ children }: ListTitleProps) {
    return <CardTitle>{children}</CardTitle>;
}

interface ListContentProps {
    children: React.ReactNode;
}

export function ListContent({ children }: ListContentProps) {
    return <div className="divide-y">{children}</div>;
}

interface ListItemProps {
    children: React.ReactNode;
    className?: string;
}

export function ListItem({ children, className }: ListItemProps) {
    return (
        <CardContent className={cn("p-4", className)}>{children}</CardContent>
    );
}
