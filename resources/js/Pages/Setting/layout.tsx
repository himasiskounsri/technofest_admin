import Authenticated from "@/Layouts/AuthenticatedLayout/Layout";
import { PageProps } from "@/types";
import SidebarLayout from "@/Layouts/SidebarLayout/Layout";
import { router } from "@inertiajs/react";
import SidebarNavLink from "@/Layouts/SidebarLayout/SidebarNavLink";
import React from "react";

interface Props {
    children: React.ReactNode;
}

export default function SettingLayout({ children }: Props) {
    return (
        <Authenticated title="Pengaturan">
            <SidebarLayout
                links={
                    <>
                        <SidebarNavLink
                            href={route("account.index")}
                            method="get"
                            active={route().current("account.index")}
                            value="Akun"
                        />
                    </>
                }
            >
                {children}
            </SidebarLayout>
        </Authenticated>
    );
}
