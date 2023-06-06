import SectionTitle from "@/Layouts/SidebarLayout/SectionTitle";
import UserLayout from "../Layout";
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
import { DropdownMenuItem } from "@/Components/Ui/DropdownMenu";
import { PageProps } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/Ui/Avatar";
import { formatDate, getFirstLetters } from "@/lib/utils";
import { Clock } from "lucide-react";

export default function ({ auth, managers }: PageProps) {
    return (
        <UserLayout>
            <SectionTitle title="Manajer" description="Kelola manajer." />
            <List className="max-w-3xl">
                <ListHeader>
                    <ListTitle>Data Manajer</ListTitle>
                </ListHeader>
                <ListContent>
                    {managers.map((manager) => (
                        <ListItem
                            key={manager.id}
                            className="flex items-center space-x-2"
                        >
                            <div>
                                <Avatar className="h-8 w-8 rounded-full">
                                    <AvatarImage
                                        className="bg-slate-200"
                                        src={manager.avatar.image}
                                        alt={manager.name}
                                    />
                                    <AvatarFallback>
                                        {getFirstLetters(
                                            manager.name
                                        ).toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                            </div>
                            <div>
                                <ListItemTitle>{manager.name}</ListItemTitle>
                                <ListItemDescription>
                                    <ListItemDescriptionItem
                                        icon={Clock}
                                        value={`Bergabung: ${formatDate(
                                            manager.created_at
                                        )}`}
                                    />
                                </ListItemDescription>
                            </div>

                            <ListItemDropdown>
                                <DropdownMenuItem className="text-danger focus:text-danger focus:bg-danger-foreground/50">
                                    Hapus
                                </DropdownMenuItem>
                            </ListItemDropdown>
                        </ListItem>
                    ))}

                    {managers.length == 0 && (
                        <ListItem className="flex items-center justify-center py-10">
                            <p className="text-muted-foreground">
                                Tidak ada manajer🫤
                            </p>
                        </ListItem>
                    )}
                </ListContent>
            </List>
        </UserLayout>
    );
}
