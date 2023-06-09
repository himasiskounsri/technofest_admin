import { Badge } from "@/Components/Ui/Badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/Ui/Card";
import {
    Tabs,
    TabsContent,
    TabsHeader,
    TabsList,
    TabsTrigger,
} from "@/Components/Ui/Tabs";
import Authenticated from "@/Layouts/AuthenticatedLayout/Layout";
import { PageProps } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import FestivalLayout from "../Layout";
import { Separator } from "@/Components/Ui/Separator";
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
import SectionTitle from "@/Layouts/SidebarLayout/SectionTitle";
import { DropdownMenuItem } from "@/Components/Ui/DropdownMenu";
import { Button } from "@/Components/Ui/Button";
import { PlusCircle } from "lucide-react";

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
                <TabsHeader>
                    <TabsList>
                        <TabsTrigger value="seminars">Seminar</TabsTrigger>
                        <TabsTrigger value="competitions">
                            Kompetisi
                        </TabsTrigger>
                    </TabsList>
                    <Button size="sm" variant="success">
                        <PlusCircle />
                        &nbsp;Tambah
                    </Button>
                </TabsHeader>
                <TabsContent value="competitions" className="space-y-4">
                    <List>
                        <ListHeader>
                            <ListTitle>Data Kompetisi</ListTitle>
                        </ListHeader>
                        <ListContent>
                            {competitions.map((competition) => (
                                <ListItem>
                                    <ListItemTitle>
                                        <Link
                                            href={route(
                                                "events.show",
                                                competition.id
                                            )}
                                            method="get"
                                            className="hover:underline"
                                        >
                                            {competition.event.name}
                                        </Link>
                                    </ListItemTitle>
                                    <ListItemDescription>
                                        {competition.event.description || (
                                            <ListItemDescriptionItem value="Tanpa deskripsi" />
                                        )}
                                    </ListItemDescription>
                                    <ListItemContent>
                                        <span>
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
                                        </span>
                                    </ListItemContent>

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
                            <ListTitle>Data Seminar</ListTitle>
                        </ListHeader>
                        <ListContent>
                            {seminars.map((seminar) => (
                                <ListItem>
                                    <ListItemTitle>
                                        <Link
                                            href={route(
                                                "events.show",
                                                seminar.id
                                            )}
                                            method="get"
                                            className="hover:underline"
                                        >
                                            {seminar.event.name}
                                        </Link>
                                    </ListItemTitle>
                                    <ListItemDescription>
                                        {seminar.event.description || (
                                            <ListItemDescriptionItem value="Tanpa deskripsi" />
                                        )}
                                    </ListItemDescription>
                                    <ListItemContent>
                                        <span>
                                            {seminar.event.is_opened ? (
                                                <Badge variant="success">
                                                    Buka
                                                </Badge>
                                            ) : (
                                                <Badge variant="danger">
                                                    Tutup
                                                </Badge>
                                            )}
                                        </span>
                                    </ListItemContent>

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
