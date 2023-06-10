import { Button } from "@/Components/Ui/Button";
import {
    DataDisplay,
    DataDisplayContent,
    DataDisplayHeader,
    DataDisplayItem,
    DataDisplayTitle,
} from "@/Components/Ui/DataDisplay";
import {
    List,
    ListContent,
    ListHeader,
    ListItem,
    ListTitle,
} from "@/Components/Ui/List";
import { useToast } from "@/Components/Ui/use-toast";
import SectionTitle from "@/Layouts/SidebarLayout/SectionTitle";
import { PageProps } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import { MoveLeft } from "lucide-react";
import { useEffect } from "react";
import FestivalLayout from "../Layout";

export default function PaymentShow({ auth, payment }: PageProps) {
    const { toast } = useToast();
    const { flash }: any = usePage().props;

    console.log(payment);

    useEffect(() => {
        if (flash.message) {
            toast({
                description: flash.message,
                variant: "success",
            });
        }
    }, [flash]);

    return (
        <FestivalLayout>
            <SectionTitle
                title="Detail Pembayaran"
                description="Kelola partisipan festival."
            />
            <div className="mb-2">
                <Button
                    onClick={() => history.back()}
                    variant="link"
                    className="font-bold text-muted-foreground hover:text-primary"
                >
                    <MoveLeft />
                    &nbsp;Kembali
                </Button>
            </div>
            <List className="max-w-3xl">
                <ListHeader>
                    <div className="flex items-center space-x-2">
                        <ListTitle>
                            Pembayaran {payment.event_registration.uid}
                        </ListTitle>
                    </div>
                </ListHeader>
                <ListContent>
                    <ListItem className="space-y-8">
                        <DataDisplay>
                            <DataDisplayHeader>
                                <DataDisplayTitle>
                                    Informasi Pembayaran
                                </DataDisplayTitle>
                            </DataDisplayHeader>
                            <DataDisplayContent>
                                <DataDisplayItem keyName="UID">
                                    {payment.event_registration.uid}
                                </DataDisplayItem>
                                <DataDisplayItem keyName="Bukti pembayaran">
                                    <a
                                        href={payment.payment_proof}
                                        target="_blank"
                                        className="hover:underline"
                                    >
                                        {payment.payment_proof}
                                    </a>
                                </DataDisplayItem>
                                <DataDisplayItem keyName="Diupload pada">
                                    {payment.uploaded_at}
                                </DataDisplayItem>
                                <DataDisplayItem keyName="Status">
                                    {payment.status}
                                </DataDisplayItem>
                            </DataDisplayContent>
                        </DataDisplay>
                        <DataDisplay>
                            <DataDisplayHeader>
                                <DataDisplayTitle>
                                    Informasi Pendaftaran
                                </DataDisplayTitle>
                            </DataDisplayHeader>
                            <DataDisplayContent>
                                <DataDisplayItem keyName="Nama event">
                                    {payment.event_registration.event.name}
                                </DataDisplayItem>
                                <DataDisplayItem keyName="Harga pendaftaran">
                                    {payment.event_registration.event.price}
                                </DataDisplayItem>
                                <DataDisplayItem keyName="Pendaftar">
                                    <ol className="list-decimal">
                                        {payment.event_registration.users.map(
                                            (user) => (
                                                <li key={user.id}>
                                                    <Link
                                                        href={route(
                                                            "participants.show",
                                                            user.id
                                                        )}
                                                        method="get"
                                                        className="hover:underline"
                                                    >
                                                        {user.name}
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </ol>
                                </DataDisplayItem>
                            </DataDisplayContent>
                        </DataDisplay>
                    </ListItem>
                </ListContent>
            </List>
        </FestivalLayout>
    );
}
