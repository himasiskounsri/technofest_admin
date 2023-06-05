import Authenticated from "@/Layouts/AuthenticatedLayout/Layout";
import SidebarLayout from "@/Layouts/SidebarLayout/Layout";
import SidebarNavLink from "@/Layouts/SidebarLayout/SidebarNavLink";
import React from "react";

interface Props {
    children: React.ReactNode;
}

export default function FestivalLayout({ children }: Props) {
    return (
        <Authenticated title="Festival">
            <SidebarLayout
                links={
                    <>
                        <SidebarNavLink
                            href={route("festivals.index")}
                            method="get"
                            active={route().current("festivals.index")}
                            value="Festival"
                        />
                        <SidebarNavLink
                            href={route("events.index")}
                            method="get"
                            active={route().current("events.index")}
                            value="Event"
                        />
                        <SidebarNavLink
                            href={route("registrations.index")}
                            method="get"
                            active={route().current("registrations.index")}
                            value="Pendaftaran"
                        />
                        <SidebarNavLink
                            href={route("participants.index")}
                            method="get"
                            active={route().current("participants.index")}
                            value="Partisipan"
                        />
                        <SidebarNavLink
                            href={route("payments.index")}
                            method="get"
                            active={route().current("payments.index")}
                            value="Pembayaran"
                        />
                        <SidebarNavLink
                            href={route("faqs.index")}
                            method="get"
                            active={route().current("faqs.index")}
                            value="Faqs"
                        />
                    </>
                }
            >
                {children}
            </SidebarLayout>
        </Authenticated>
    );
}
