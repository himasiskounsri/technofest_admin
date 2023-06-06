import Authenticated from "@/Layouts/AuthenticatedLayout/Layout";
import { PageProps } from "@/types";
import FestivalLayout from "../Layout";
import SectionTitle from "@/Layouts/SidebarLayout/SectionTitle";
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
import { User, Youtube } from "lucide-react";

export default function FaqIndex({ auth, faqs }: PageProps) {
    console.log(faqs);

    return (
        <FestivalLayout>
            <SectionTitle
                title="Faq"
                description="Kelola pertanyaan dan jawaban yang sering muncul."
            />
            <List className="max-w-3xl">
                <ListHeader>
                    <ListTitle>Daftar Faq</ListTitle>
                </ListHeader>
                <ListContent>
                    {faqs.map((faq) => (
                        <ListItem>
                            <ListItemTitle>{faq.question}</ListItemTitle>
                            <ListItemDescription>
                                <ListItemDescriptionItem
                                    icon={User}
                                    value={faq.user.name}
                                />
                            </ListItemDescription>
                            <ListItemContent>
                                {faq.is_highlighted == true && (
                                    <Badge>Highlighted</Badge>
                                )}
                            </ListItemContent>
                        </ListItem>
                    ))}

                    {faqs.length == 0 && (
                        <ListItem className="flex items-center justify-center py-10">
                            <p className="text-muted-foreground">
                                Tidak ada Faqs😅
                            </p>
                        </ListItem>
                    )}
                </ListContent>
            </List>
        </FestivalLayout>
    );
}
