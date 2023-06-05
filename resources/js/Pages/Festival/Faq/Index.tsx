import Authenticated from "@/Layouts/AuthenticatedLayout/Layout";
import { PageProps } from "@/types";
import FestivalLayout from "../Layout";
import SectionTitle from "@/Layouts/SidebarLayout/SectionTitle";
import {
    List,
    ListContent,
    ListHeader,
    ListItem,
    ListTitle,
} from "@/Components/Ui/List";
import { Badge } from "@/Components/Ui/Badge";

export default function FaqIndex({ auth, faqs }: PageProps) {
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
                            <p className="font-medium">ID: {faq.question}</p>
                            <p className="text-xs text-muted-foreground">
                                Dibuat oleh: {faq.created_by.name}
                            </p>
                            <div className="flex space-x-1 items-center mt-1">
                                {faq.is_highlighted && (
                                    <Badge>Highlighted</Badge>
                                )}
                            </div>
                        </ListItem>
                    ))}

                    {faqs.length == 0 && (
                        <ListItem className="flex items-center justify-center py-10">
                            <p className="text-muted-foreground">
                                Tidak ada Faq😅
                            </p>
                        </ListItem>
                    )}
                </ListContent>
            </List>
        </FestivalLayout>
    );
}
