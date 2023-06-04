import { SidebarNav } from "@/Pages/Setting/components/sidebar-nav";

interface SettingsLayoutProps {
    children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
    return (
        <>
            <div className="space-y-6 min-h-screen">
                <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                    <aside className="-mx-4 p-4 lg:w-1/6 border-r">
                        <SidebarNav />
                    </aside>
                    <div className="flex-1 lg:max-w-2xl py-6">{children}</div>
                </div>
            </div>
        </>
    );
}
