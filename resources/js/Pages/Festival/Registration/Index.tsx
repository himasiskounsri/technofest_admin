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
    ListItemDropdown,
    ListItemTitle,
    ListTitle,
} from "@/Components/Ui/List";
import { Badge } from "@/Components/Ui/Badge";
import { Link, usePage } from "@inertiajs/react";
import { Flag, Users } from "lucide-react";
import { DropdownMenuItem } from "@/Components/Ui/DropdownMenu";

export default function RegistrationIndex({ auth, registrations }: PageProps) {
    const { constants }: any = usePage().props;

    const registrationCompetitions = registrations.filter(
        (registration) =>
            registration.event.type == constants.event_type.competition
    );
    const registrationSeminars = registrations.filter((registration) => {
        return registration.event.type == constants.event_type.seminar;
    });

    const registration_list = [
        { name: "all", items: registrations },
        { name: "competitions", items: registrationCompetitions },
        { name: "seminars", items: registrationSeminars },
    ];

    console.log(registration_list);

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
                        key={registrations.name}
                        value={registrations.name}
                        className="space-y-4"
                    >
                        <List>
                            <ListHeader>
                                <ListTitle>Data Pendaftaran</ListTitle>
                            </ListHeader>
                            <ListContent>
                                {registrations.items.map((registration) => (
                                    <ListItem key={registration.id}>
                                        <ListItemTitle>
                                            <Link
                                                href={route(
                                                    "registrations.show",
                                                    registration.id
                                                )}
                                                method="get"
                                                className="hover:underline"
                                            >
                                                ID:&nbsp;{registration.uid}
                                                {registration.name &&
                                                    ` | ${registration.name}`}
                                            </Link>
                                        </ListItemTitle>
                                        <ListItemDescription>
                                            <ListItemDescriptionItem
                                                icon={Flag}
                                                value={`${registration.event.name}`}
                                            />
                                            <ListItemDescriptionItem
                                                icon={Users}
                                                value={`${registration.participants.length} orang`}
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

                                        <ListItemDropdown>
                                            <DropdownMenuItem className="text-danger focus:text-danger focus:bg-danger-foreground/50">
                                                Hapus
                                            </DropdownMenuItem>
                                        </ListItemDropdown>
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
