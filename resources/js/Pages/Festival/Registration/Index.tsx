import SectionTitle from "@/Layouts/SidebarLayout/SectionTitle";
import { PageProps } from "@/types";
import FestivalLayout from "../Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/Ui/Tabs";
import {
    List,
    ListContent,
    ListHeader,
    ListItem,
    ListItemContent,
    ListItemDescription,
    ListItemDescriptionItem,
    ListItemTitle,
    ListTitle,
} from "@/Components/Ui/List";
import { Badge } from "@/Components/Ui/Badge";
import { usePage } from "@inertiajs/react";
import { Flag, Users } from "lucide-react";

export default function RegistrationIndex({ auth, registrations }: PageProps) {
    const { constants }: any = usePage().props;

    const registrationCompetitions = registrations.filter(
        (registrations) =>
            registrations.event.type == constants.event_type.competition
    );
    const registrationSeminars = registrations.filter(
        (registration) =>
            registration.event.type != constants.event_type.seminar
    );

    const registration_list = [
        { name: "all", items: registrations },
        { name: "competitions", items: registrationCompetitions },
        { name: "seminars", items: registrationSeminars },
    ];

    return (
        <FestivalLayout>
            <SectionTitle
                title="Pendaftaran"
                description="Kelola pendaftaran event."
            />
            <Tabs defaultValue="all" className="space-y-4 mt-4 max-w-3xl">
                <TabsList>
                    <TabsTrigger value="all">Semua</TabsTrigger>
                    <TabsTrigger value="competitions">Kompetisi</TabsTrigger>
                    <TabsTrigger value="seminars">Seminar</TabsTrigger>
                </TabsList>
                {registration_list.map((registrations) => (
                    <TabsContent
                        value={registrations.name}
                        className="space-y-4"
                    >
                        <List>
                            <ListHeader>
                                <ListTitle>Daftar Pendaftaran</ListTitle>
                            </ListHeader>
                            <ListContent>
                                {registrations.items.map((registration) => (
                                    <ListItem>
                                        <ListItemTitle>
                                            ID:&nbsp;{registration.uid}
                                            {registration.name &&
                                                ` | ${registration.name}`}
                                        </ListItemTitle>
                                        <ListItemDescription>
                                            <ListItemDescriptionItem
                                                icon={Flag}
                                                value={`${registration.event.name}`}
                                            />
                                            <ListItemDescriptionItem
                                                icon={Users}
                                                value={`${registration.users.length} orang`}
                                            />
                                        </ListItemDescription>
                                        <ListItemContent>
                                            {/* <span>
                                                {competition.event.is_opened ? (
                                                    <Badge variant="success">
                                                        Buka
                                                    </Badge>
                                                ) : (
                                                    <Badge variant="danger">
                                                        Tutup
                                                    </Badge>
                                                )}
                                            </span>
                                            <span>
                                                <Badge>
                                                    {competition.max_participants ==
                                                    1 ? (
                                                        <span>Individual</span>
                                                    ) : (
                                                        <span>
                                                            Maks peserta:{" "}
                                                            {
                                                                competition.max_participants
                                                            }
                                                        </span>
                                                    )}
                                                </Badge>
                                            </span> */}
                                        </ListItemContent>
                                    </ListItem>
                                ))}

                                {registrations.items.length == 0 && (
                                    <ListItem className="flex items-center justify-center py-10">
                                        <p className="text-muted-foreground">
                                            Tidak ada pendaftaran🤔
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
