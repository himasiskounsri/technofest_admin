import { Badge } from "@/Components/Ui/Badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/Ui/Card";
import { DataTable } from "@/Components/Ui/DataTable";
import { Separator } from "@/Components/Ui/Separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/Ui/Tabs";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/Layout";
import { columns, registrationColumns } from "@/lib/table";
import { Festival, PageProps, User } from "@/types";
import { Head, usePage } from "@inertiajs/react";
import { CalendarDays, CreditCard, Users } from "lucide-react";

type Props = PageProps & {
    paymentsCount: number;
};

export default function DashboardPage({
    users,
    eventRegistrations,
    paymentsCount,
}: Props) {
    const { flash } = usePage().props as unknown as {
        flash: { current_festival: Festival };
    };

    return (
        <>
            <AuthenticatedLayout title="Dashboard">
                <Tabs defaultValue="overview" className="space-y-4 mt-4">
                    <TabsList>
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="participants">
                            Participants
                        </TabsTrigger>
                        <TabsTrigger value="event-registrations">
                            Event Registrations
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Jumlah Partisipan
                                    </CardTitle>
                                    <Users className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">
                                        {users.length}
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        from 7 June
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Jumlah Pendaftar
                                    </CardTitle>
                                    <CalendarDays className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">
                                        {eventRegistrations.length}
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        Pendaftar event
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Pembayaran
                                    </CardTitle>
                                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">
                                        {paymentsCount}
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        Belum dikonfirmasi
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 min-h-[20rem]">
                            <Card className="col-span-3">
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <span>
                                            {flash.current_festival.name}
                                        </span>
                                        <Badge>
                                            Periode{" "}
                                            {flash.current_festival.period}
                                        </Badge>
                                    </CardTitle>
                                    <CardDescription>
                                        {flash.current_festival.theme}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="text-muted-foreground space-y-4">
                                    <p>{flash.current_festival.description}</p>
                                    <Separator />
                                    <div className="flex flex-col space-y-4 max-w-xl">
                                        <Card>
                                            <CardHeader className="p-4 pb-1">
                                                <CardTitle>
                                                    Mulai Festival
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="text-muted-foreground p-4 pt-0">
                                                {
                                                    flash.current_festival
                                                        .start_date
                                                }
                                            </CardContent>
                                        </Card>
                                        <Card>
                                            <CardHeader className="p-4 pb-1">
                                                <CardTitle>
                                                    Akhir Festival
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="text-muted-foreground p-4 pt-0">
                                                {
                                                    flash.current_festival
                                                        .end_date
                                                }
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                    <TabsContent value="participants">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 min-h-[20rem]">
                            <div className="col-span-3">
                                <DataTable columns={columns} data={users} />
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="event-registrations">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 min-h-[20rem]">
                            <div className="col-span-3">
                                <DataTable
                                    columns={registrationColumns}
                                    data={eventRegistrations}
                                />
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </AuthenticatedLayout>
        </>
    );
}
