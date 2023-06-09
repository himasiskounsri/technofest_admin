import { Avatar, AvatarFallback, AvatarImage } from "@/Components/Ui/Avatar";
import { Button } from "@/Components/Ui/Button";
import { Card, CardHeader, CardTitle } from "@/Components/Ui/Card";
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
import { formatDate, getFirstLetters } from "@/lib/utils";
import { PageProps } from "@/types";
import { usePage } from "@inertiajs/react";
import { MoveLeft } from "lucide-react";
import { useEffect } from "react";
import FestivalLayout from "../Layout";

export default function ParticipantShow({ auth, participant }: PageProps) {
    const { toast } = useToast();
    const { flash }: any = usePage().props;

    console.log(participant);

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
                        <Avatar className="h-10 w-10 rounded-full">
                            <AvatarImage
                                className="bg-slate-200"
                                src={participant.avatar.image}
                                alt={participant.name}
                            />
                            <AvatarFallback>
                                {getFirstLetters(
                                    participant.name
                                ).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                        <ListTitle>{participant.name}</ListTitle>
                    </div>
                </ListHeader>
                <ListContent>
                    <ListItem className="space-y-8">
                        <DataDisplay>
                            <DataDisplayHeader>
                                <DataDisplayTitle>
                                    Informasi Akun
                                </DataDisplayTitle>
                            </DataDisplayHeader>
                            <DataDisplayContent>
                                <DataDisplayItem keyName="UID">
                                    {participant.uid}
                                </DataDisplayItem>
                                <DataDisplayItem keyName="Nama">
                                    {participant.name}
                                </DataDisplayItem>
                                <DataDisplayItem keyName="Email">
                                    {participant.email}
                                </DataDisplayItem>
                                <DataDisplayItem keyName="Bergabung pada">
                                    {formatDate(participant.created_at)}
                                </DataDisplayItem>
                            </DataDisplayContent>
                        </DataDisplay>
                        <DataDisplay>
                            <DataDisplayHeader>
                                <DataDisplayTitle>
                                    Informasi Pribadi
                                </DataDisplayTitle>
                            </DataDisplayHeader>
                            <DataDisplayContent>
                                <DataDisplayItem keyName="NIM/NISN">
                                    {participant.user_profile.student_id_number}
                                </DataDisplayItem>
                                <DataDisplayItem keyName="Institusi">
                                    {participant.user_profile.institution}
                                </DataDisplayItem>
                                <DataDisplayItem keyName="WhatsApp">
                                    {participant.user_profile.whatsapp}
                                </DataDisplayItem>
                                <DataDisplayItem keyName="Line">
                                    {participant.user_profile.line}
                                </DataDisplayItem>
                                <DataDisplayItem keyName="Instagram">
                                    {participant.user_profile.instagram}
                                </DataDisplayItem>
                                <DataDisplayItem keyName="Jenis kelamin">
                                    {participant.user_profile.gender == 1 &&
                                        "Laki-laki"}
                                    {participant.user_profile.gender == 2 &&
                                        "Perempuan"}
                                </DataDisplayItem>
                            </DataDisplayContent>
                        </DataDisplay>
                        <DataDisplay>
                            <DataDisplayHeader>
                                <DataDisplayTitle>
                                    Informasi Event
                                </DataDisplayTitle>
                            </DataDisplayHeader>
                            <DataDisplayContent>
                                <div className="space-y-2">
                                    {participant.event_registrations.map(
                                        (eventRegistration) => (
                                            <Card key={eventRegistration.id}>
                                                <CardHeader>
                                                    <CardTitle>
                                                        {
                                                            eventRegistration
                                                                .event.name
                                                        }
                                                    </CardTitle>
                                                </CardHeader>
                                            </Card>
                                        )
                                    )}
                                </div>
                            </DataDisplayContent>
                        </DataDisplay>
                    </ListItem>
                </ListContent>
            </List>
        </FestivalLayout>
    );
}
