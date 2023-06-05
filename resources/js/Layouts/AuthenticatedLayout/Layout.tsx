import type { User } from "@/types";
import { Head, usePage } from "@inertiajs/react";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
    children: React.ReactNode;
    title: string;
}

export default function Authenticated({ children, title }: Props) {
    const { auth }: any = usePage().props;
    const user: User = auth.user;

    return (
        <>
            <Header user={user} />
            <main className="flex-1 px-8 pt-6 min-h-screen">
                <Head title="Dashboard" />
                <div className="flex items-center justify-between space-y-2 border-b pb-6">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">
                            {title}
                        </h2>
                        <p className="text-muted-foreground">
                            Manage your account settings and set e-mail
                            preferences.
                        </p>
                    </div>
                </div>
                {children}
            </main>
            <Footer />
        </>
    );
}
