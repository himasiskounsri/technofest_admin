"use client";

import { Badge } from "@/Components/Ui/Badge";
import { EventRegistration, User } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "uid",
        header: "UID",
    },
    {
        accessorKey: "name",
        header: "Nama",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "event_registrations_count",
        header: "Jumlah pendaftaran",
    },
];

export const registrationColumns: ColumnDef<EventRegistration>[] = [
    {
        accessorKey: "uid",
        header: "Nama event",
    },
    {
        accessorKey: "name",
        header: "Pendaftar",
    },
    {
        accessorKey: "status",
        header: "Status pembayaran",
        cell: ({ row }) => {
            if (row.getValue("status")) {
                return (
                    <Badge variant="outline">{row.getValue("status")}</Badge>
                );
            }

            return <Badge variant="outline">Tidak ada</Badge>;
        },
    },
    {
        accessorKey: "event_registrations_count",
        header: "Mendaftar pada",
    },
];
