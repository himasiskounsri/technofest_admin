import Authenticated from "@/Layouts/AuthenticatedLayout/Layout";
import SidebarLayout from "@/Layouts/SidebarLayout/Layout";
import SidebarNavLink from "@/Layouts/SidebarLayout/SidebarNavLink";

interface Props {
    children: React.ReactNode;
}

export default function UserLayout({ children }: Props) {
    return (
        <Authenticated title="Pengguna">
            <SidebarLayout
                links={
                    <>
                        <SidebarNavLink
                            href={route("managers.index")}
                            method="get"
                            active={route().current("managers.index")}
                            value="Manajer"
                        />
                        <SidebarNavLink
                            href={route("token.index")}
                            method="get"
                            active={route().current("token.index")}
                            value="Token"
                        />
                    </>
                }
            >
                {children}
            </SidebarLayout>
        </Authenticated>
    );
}
