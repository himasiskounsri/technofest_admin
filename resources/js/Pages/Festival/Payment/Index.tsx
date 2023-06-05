import { Badge, badgeVariants } from "@/Components/Ui/Badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/Ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/Ui/Tabs";
import Authenticated from "@/Layouts/AuthenticatedLayout/Layout";
import { PageProps } from "@/types";
import { usePage } from "@inertiajs/react";
import FestivalLayout from "../Layout";
import {
    List,
    ListContent,
    ListHeader,
    ListItem,
    ListTitle,
} from "@/Components/Ui/List";
import SectionTitle from "@/Layouts/SidebarLayout/SectionTitle";

export default function PaymentIndex({ auth, payments }: PageProps) {
    const { constants }: any = usePage().props;

    const paymentsNotConfirmed = payments.filter(
        (payment) => payment.status == constants.payment_status.not_confirmed
    );
    const paymentsConfirmed = payments.filter(
        (payment) => payment.status != constants.payment_status.not_confirmed
    );

    const payments_list = [
        { name: "all", items: payments },
        { name: "confirmed", items: paymentsConfirmed },
        { name: "not_confirmed", items: paymentsNotConfirmed },
    ];

    return (
        <FestivalLayout>
            <SectionTitle
                title="Pembayaran"
                description="Konfirmasi pembayaran pendaftar event."
            />
            <Tabs defaultValue="all" className="space-y-4 mt-4 max-w-3xl">
                <TabsList>
                    <TabsTrigger value="all">Semua</TabsTrigger>
                    <TabsTrigger value="not_confirmed">
                        Belum dikonfirmasi
                    </TabsTrigger>
                    <TabsTrigger value="confirmed">Dikonfirmasi</TabsTrigger>
                </TabsList>
                {payments_list.map((payments) => (
                    <TabsContent
                        key={payments.name}
                        value={payments.name}
                        className="space-y-4"
                    >
                        <List>
                            <ListHeader>
                                <ListTitle>Daftar Kompetisi</ListTitle>
                            </ListHeader>
                            <ListContent>
                                {payments.items.map((payment) => (
                                    <ListItem>
                                        <p className="font-medium">
                                            ID: {payment.uid}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {payment.price}
                                        </p>
                                        <div className="flex space-x-1 items-center mt-1">
                                            {payment.status ==
                                                constants.payment_status
                                                    .not_confirmed && (
                                                <Badge variant="warning">
                                                    Belum dikonfirmasi
                                                </Badge>
                                            )}

                                            {payment.status ==
                                                constants.payment_status
                                                    .accepted && (
                                                <Badge variant="success">
                                                    Diterima
                                                </Badge>
                                            )}

                                            {payment.status ==
                                                constants.payment_status
                                                    .rejected && (
                                                <Badge variant="danger">
                                                    Ditolak
                                                </Badge>
                                            )}
                                        </div>
                                    </ListItem>
                                ))}

                                {payments.items.length == 0 && (
                                    <ListItem className="flex items-center justify-center py-10">
                                        <p className="text-muted-foreground">
                                            Tidak ada Pembayaran😥
                                        </p>
                                    </ListItem>
                                )}
                            </ListContent>
                        </List>
                    </TabsContent>
                ))}
            </Tabs>
        </FestivalLayout>
    );
}
