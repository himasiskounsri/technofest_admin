import { Badge } from "@/Components/Ui/Badge";
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
import { Separator } from "@/Components/Ui/Separator";
import {
    List,
    ListContent,
    ListHeader,
    ListItem,
    ListTitle,
} from "@/Components/Ui/List";
import SectionTitle from "@/Layouts/SidebarLayout/SectionTitle";

export default function EventIndex({
    auth,
    competitions,
    seminars,
}: PageProps) {
    const { constants }: any = usePage().props;

    return (
        <FestivalLayout>
            <SectionTitle
                title="Event"
                description="Kelola kompetisi dan seminar."
            />
            <Tabs
                defaultValue="competitions"
                className="space-y-4 mt-4 max-w-3xl"
            >
                <TabsList>
                    <TabsTrigger value="competitions">Kompetisi</TabsTrigger>
                    <TabsTrigger value="seminars">Seminar</TabsTrigger>
                </TabsList>
                <TabsContent value="competitions" className="space-y-4">
                    <List>
                        <ListHeader>
                            <ListTitle>Daftar Kompetisi</ListTitle>
                        </ListHeader>
                        <ListContent>
                            {competitions.map((competition) => (
                                <ListItem>
                                    <p className="font-medium">
                                        {competition.name}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        {competition.description ||
                                            "Tanpa deskripsi"}
                                    </p>
                                    <div className="flex space-x-1 items-center mt-1">
                                        <span>
                                            {competition.is_opened ? (
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
                                        </span>
                                        <span>
                                            {/* <Badge>{competition.price}</Badge> */}
                                        </span>
                                    </div>
                                </ListItem>
                            ))}

                            {competitions.length == 0 && (
                                <ListItem className="flex items-center justify-center py-10">
                                    <p className="text-muted-foreground">
                                        Tidak ada kompetisi🙄
                                    </p>
                                </ListItem>
                            )}
                        </ListContent>
                    </List>
                </TabsContent>
                <TabsContent value="seminars" className="space-y-4">
                    <List>
                        <ListHeader>
                            <ListTitle>Daftar Seminar</ListTitle>
                        </ListHeader>
                        <ListContent>
                            {seminars.map((seminar) => (
                                <ListItem>
                                    <p className="font-medium">
                                        {seminar.name}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        {seminar.description ||
                                            "Tanpa deskripsi"}
                                    </p>
                                    <div className="flex space-x-1 items-center mt-1">
                                        <span>
                                            {seminar.is_opened ? (
                                                <Badge variant="success">
                                                    Buka
                                                </Badge>
                                            ) : (
                                                <Badge variant="danger">
                                                    Tutup
                                                </Badge>
                                            )}
                                        </span>
                                    </div>
                                </ListItem>
                            ))}

                            {competitions.length == 0 && (
                                <ListItem className="flex items-center justify-center py-10">
                                    <p className="text-muted-foreground">
                                        Tidak ada seminar😒
                                    </p>
                                </ListItem>
                            )}
                        </ListContent>
                    </List>
                </TabsContent>
            </Tabs>
        </FestivalLayout>
    );
}
