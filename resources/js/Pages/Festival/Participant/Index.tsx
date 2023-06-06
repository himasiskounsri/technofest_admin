import { Alert, AlertDescription, AlertTitle } from "@/Components/Ui/Alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/Ui/Avatar";
import { DropdownMenuItem } from "@/Components/Ui/DropdownMenu";
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
import { useToast } from "@/Components/Ui/use-toast";
import SectionTitle from "@/Layouts/SidebarLayout/SectionTitle";
import { formatDate, getFirstLetters } from "@/lib/utils";
import { PageProps } from "@/types";
import { router, usePage } from "@inertiajs/react";
import { Clock, Fan, Terminal } from "lucide-react";
import { useEffect } from "react";
import FestivalLayout from "../Layout";

export default function FestivalIndex({ auth, participants }: PageProps) {
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
                title="Partisipan"
                description="Kelola partisipan festival."
            />
            <List className="max-w-3xl">
                <ListHeader>
                    <ListTitle>Data Partisipan</ListTitle>
                </ListHeader>
                <ListContent>
                    {participants.map((participan) => (
                        <ListItem
                            key={participan.id}
                            className="flex items-center space-x-2"
                        >
                            <div>
                                <Avatar className="h-8 w-8 rounded-full">
                                    <AvatarImage
                                        className="bg-slate-200"
                                        src={participan.avatar.image}
                                        alt={participan.name}
                                    />
                                    <AvatarFallback>
                                        {getFirstLetters(
                                            participan.name
                                        ).toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                            </div>
                            <div>
                                <ListItemTitle>{participan.name}</ListItemTitle>
                                <ListItemDescription>
                                    <ListItemDescriptionItem
                                        icon={Fan}
                                        value={`${participan.event_registrations_count} event diikuti`}
                                    />
                                    <ListItemDescriptionItem
                                        icon={Clock}
                                        value={`Bergabung: ${formatDate(
                                            participan.created_at
                                        )}`}
                                    />
                                </ListItemDescription>
                            </div>

                            <ListItemDropdown>
                                {/* <Link
                                    href={route("participants.destroy")}
                                    method="delete"
                                    data={"1"}
                                > */}
                                <DropdownMenuItem
                                    onClick={() => {
                                        router.delete(
                                            route("participants.destroy", {
                                                id: participan.id,
                                            }),
                                            { preserveScroll: true }
                                        );
                                    }}
                                    className="text-danger focus:text-danger focus:bg-danger-foreground/50"
                                >
                                    Hapus
                                </DropdownMenuItem>
                                {/* </Link> */}
                            </ListItemDropdown>
                        </ListItem>
                    ))}

                    {participants.length == 0 && (
                        <ListItem className="flex items-center justify-center py-10">
                            <p className="text-muted-foreground">
                                Tidak ada partisipan😌
                            </p>
                        </ListItem>
                    )}
                </ListContent>
            </List>
        </FestivalLayout>
    );
}
