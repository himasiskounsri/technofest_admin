import React, { Children, ElementType, HTMLAttributes } from "react";
import { Badge } from "./Badge";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import { Separator } from "./Separator";
import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { VariantProps, cva } from "class-variance-authority";

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

interface ListItemTitleProps {
    children: React.ReactNode;
}

export function ListItemTitle({ children }: ListItemTitleProps) {
    return <p className="font-medium">{children}</p>;
}

interface ListItemDescriptionProps {
    children: React.ReactNode;
}

export function ListItemDescription({ children }: ListItemDescriptionProps) {
    return (
        <div className="text-xs text-muted-foreground flex items-center space-x-1.5">
            {children}
        </div>
    );
}

interface ListItemDescriptionItemProps extends HTMLAttributes<LucideIcon> {
    icon?: ElementType;
    value: any;
}

export function ListItemDescriptionItem({
    icon: Tag,
    value,
}: ListItemDescriptionItemProps) {
    return (
        <span className="flex items-center space-x-1">
            {Tag && <Tag size={14} strokeWidth={2.3} />}
            <span>{value}</span>
        </span>
    );
}

interface ListItemContentProps {
    children: React.ReactNode;
}

export function ListItemContent({ children }: ListItemContentProps) {
    return <div className="flex space-x-1 items-center mt-1">{children}</div>;
}
