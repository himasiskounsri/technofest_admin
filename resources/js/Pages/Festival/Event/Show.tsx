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
import { usePage } from "@inertiajs/react";
import { MoveLeft } from "lucide-react";
import { useEffect } from "react";
import FestivalLayout from "../Layout";
import formatPrice, { formatDate } from "@/lib/utils";

export default function EventShow({ auth, event }: PageProps) {
    const { toast } = useToast();
    const { flash }: any = usePage().props;

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
                title="Detail Partisipan"
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
                        <ListTitle>{event.name}</ListTitle>
                    </div>
                </ListHeader>
                <ListContent>
                    <ListItem className="space-y-8">
                        <DataDisplay>
                            <DataDisplayHeader>
                                <DataDisplayTitle>
                                    Informasi Event
                                </DataDisplayTitle>
                            </DataDisplayHeader>
                            <DataDisplayContent>
                                <DataDisplayItem keyName="Nama">
                                    {event.name}
                                </DataDisplayItem>
                                <DataDisplayItem keyName="Jenis">
                                    {event.type}
                                </DataDisplayItem>
                                <DataDisplayItem keyName="Deskripsi">
                                    {event.description}
                                </DataDisplayItem>
                                <DataDisplayItem keyName="Dibuka">
                                    {event.is_opened}
                                </DataDisplayItem>
                                <DataDisplayItem keyName="Biaya pendaftaran">
                                    {formatPrice(event.price)}
                                </DataDisplayItem>
                                <DataDisplayItem keyName="Diadakan di">
                                    {event.held_in}
                                </DataDisplayItem>
                                <DataDisplayItem keyName="Diadakan pada">
                                    {formatDate(event.held_on)}
                                </DataDisplayItem>
                                <DataDisplayItem keyName="Dibuat pada">
                                    {formatDate(event.created_at)}
                                </DataDisplayItem>
                            </DataDisplayContent>
                        </DataDisplay>

                        {event.competition && (
                            <DataDisplay>
                                <DataDisplayHeader>
                                    <DataDisplayTitle>
                                        Informasi Kompetisi
                                    </DataDisplayTitle>
                                </DataDisplayHeader>
                                <DataDisplayContent>
                                    <DataDisplayItem keyName="Maksimal peserta dalam pendaftaran">
                                        {event.competition.max_participants}
                                    </DataDisplayItem>

                                    <DataDisplayItem keyName="Jumlah pendaftar">
                                        {event.event_registrations_count}
                                    </DataDisplayItem>
                                </DataDisplayContent>
                            </DataDisplay>
                        )}

                        {event.seminar && (
                            <DataDisplay>
                                <DataDisplayHeader>
                                    <DataDisplayTitle>
                                        Informasi Seminar
                                    </DataDisplayTitle>
                                </DataDisplayHeader>
                                <DataDisplayContent>
                                    {event.seminar.seminar_casts.map(
                                        (seminar_cast) => (
                                            <DataDisplayItem
                                                key={seminar_cast.id}
                                                keyName={seminar_cast.role}
                                            >
                                                {seminar_cast.image}
                                            </DataDisplayItem>
                                        )
                                    )}

                                    <DataDisplayItem keyName="Jumlah pendaftar">
                                        {event.event_registrations_count}
                                    </DataDisplayItem>
                                </DataDisplayContent>
                            </DataDisplay>
                        )}
                    </ListItem>
                </ListContent>
            </List>
        </FestivalLayout>
    );
}
