import { Badge } from "@/Components/Ui/Badge";
import { Button } from "@/Components/Ui/Button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/Ui/Card";
import { Separator } from "@/Components/Ui/Separator";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/Layout";
import { currentFestival, formatDate } from "@/lib/utils";
import { PageProps } from "@/types";
import { Link } from "@inertiajs/react";
import { CalendarDays, CreditCard, Users } from "lucide-react";

interface Props {
    participants_count: number;
    registrations_count: number;
    payments_count: number;
}

export default function DashboardPage({
    participants_count,
    registrations_count,
    payments_count,
}: Props) {
    const festival = currentFestival();

    return (
        <>
            <AuthenticatedLayout title="Dashboard">
                <div className="space-y-4 mt-4">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Partisipan
                                </CardTitle>
                                <Users className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    {participants_count}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Sejak 7 Juni
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Pendaftar
                                </CardTitle>
                                <CalendarDays className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    {registrations_count}
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
                                    {payments_count}
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
                                <CardTitle className="flex items-center space-x-2 text-2xl">
                                    <span>{festival.name}</span>
                                    <Badge>Periode {festival.period}</Badge>
                                </CardTitle>
                                <CardDescription className="text-base">
                                    {festival.theme}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-muted-foreground space-y-4">
                                <p>{festival.description}</p>
                                <div>
                                    <Link href={route("festivals.index")}>
                                        <Button>Kelola festival</Button>
                                    </Link>
                                </div>
                                <Separator />
                                <div className="flex flex-col space-y-4 max-w-xl">
                                    <Card>
                                        <CardHeader className="p-4 pb-1">
                                            <CardTitle>
                                                Mulai Festival
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="text-muted-foreground p-4 pt-0">
                                            {formatDate(festival.start_date)}
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader className="p-4 pb-1">
                                            <CardTitle>
                                                Akhir Festival
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="text-muted-foreground p-4 pt-0">
                                            {formatDate(festival.end_date)}
                                        </CardContent>
                                    </Card>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
