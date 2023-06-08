import { Badge } from "@/Components/Ui/Badge";
import {
    List,
    ListContent,
    ListHeader,
    ListItem,
    ListItemDescription,
    ListItemDescriptionItem,
    ListItemDropdown,
    ListItemTitle,
    ListTitle,
} from "@/Components/Ui/List";
import {
    Tabs,
    TabsContent,
    TabsHeader,
    TabsList,
    TabsTrigger,
} from "@/Components/Ui/Tabs";
import SectionTitle from "@/Layouts/SidebarLayout/SectionTitle";
import { PageProps } from "@/types";
import { usePage } from "@inertiajs/react";
import { Flag, PlusCircle, Wallet } from "lucide-react";
import FestivalLayout from "../Layout";
import { DropdownMenuItem } from "@/Components/Ui/DropdownMenu";
import { Button } from "@/Components/Ui/Button";

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
                <TabsHeader>
                    <TabsList>
                        <TabsTrigger value="all">Semua</TabsTrigger>
                        <TabsTrigger value="not_confirmed">
                            Belum dikonfirmasi
                        </TabsTrigger>
                        <TabsTrigger value="confirmed">
                            Dikonfirmasi
                        </TabsTrigger>
                    </TabsList>
                </TabsHeader>
                {payments_list.map((payments) => (
                    <TabsContent
                        key={payments.name}
                        value={payments.name}
                        className="space-y-4"
                    >
                        <List>
                            <ListHeader>
                                <ListTitle>Data Pembayaran</ListTitle>
                            </ListHeader>
                            <ListContent>
                                {payments.items.map((payment) => (
                                    <ListItem key={payment.id}>
                                        <ListItemTitle>
                                            ID: {payment.uid}
                                        </ListItemTitle>
                                        <ListItemDescription>
                                            <ListItemDescriptionItem
                                                icon={Flag}
                                                value={
                                                    payment.event_registration
                                                        .event.name
                                                }
                                            />
                                            <ListItemDescriptionItem
                                                icon={Wallet}
                                                value={`Rp${payment.event_registration.event.price}`}
                                            />
                                        </ListItemDescription>
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

                                        <ListItemDropdown>
                                            <DropdownMenuItem>
                                                Edit
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="text-danger focus:text-danger focus:bg-danger-foreground/50">
                                                Hapus
                                            </DropdownMenuItem>
                                        </ListItemDropdown>
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
