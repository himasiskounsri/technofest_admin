import { SidebarNav } from "@/Layouts/SidebarLayout/SidebarNav";
import React from "react";

interface SettingsLayoutProps {
    children: React.ReactNode;
    links: React.ReactNode;
}

export default function SidebarLayout({
    children,
    links,
}: SettingsLayoutProps) {
    return (
        <>
            <div className="space-y-6 min-h-screen">
                <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                    <aside className="-mx-4 p-4 lg:w-1/6 border-r">
                        <SidebarNav links={links} />
                    </aside>
                    <div className="flex-1 lg:max-w-2xl py-6">{children}</div>
                </div>
            </div>
        </>
    );
}
