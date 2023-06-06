import SectionTitle from "@/Layouts/SidebarLayout/SectionTitle";
import FestivalLayout from "../Layout";
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
import { PageProps } from "@/types";
import { Clock } from "lucide-react";

export default function FestivalIndex({ auth, participants }: PageProps) {
    return (
        <FestivalLayout>
            <SectionTitle
                title="Partisipan"
                description="Kelola partisipan festival."
            />
            <List className="max-w-3xl">
                <ListHeader>
                    <ListTitle>Daftar Partisipan</ListTitle>
                </ListHeader>
                <ListContent>
                    {participants.map((participan) => (
                        <ListItem key={participan.id}>
                            <ListItemTitle>{participan.name}</ListItemTitle>
                            <ListItemDescription>
                                <ListItemDescriptionItem
                                    icon={Clock}
                                    value={`Bergabung pada ${participan.created_at}`}
                                />
                            </ListItemDescription>
                            {/* <ListItemContent></ListItemContent> */}
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
