import Authenticated from "@/Layouts/AuthenticatedLayout/Layout";
import { PageProps } from "@/types";
import FestivalLayout from "../Layout";
import SectionTitle from "@/Layouts/SidebarLayout/SectionTitle";
import { Button } from "@/Components/Ui/Button";
import { ArrowRight, MoveLeft } from "lucide-react";
import {
    List,
    ListContent,
    ListHeader,
    ListItem,
    ListTitle,
} from "@/Components/Ui/List";
import { Avatar, AvatarImage } from "@/Components/Ui/Avatar";
import {
    DataDisplay,
    DataDisplayContent,
    DataDisplayHeader,
    DataDisplayItem,
    DataDisplayTitle,
} from "@/Components/Ui/DataDisplay";
import { formatDate } from "@/lib/utils";
import { Link } from "@inertiajs/react";

export default function FaqShow({ auth, faq }: PageProps) {
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
                        <ListTitle>{faq.question}</ListTitle>
                    </div>
                </ListHeader>
                <ListContent>
                    <ListItem className="space-y-8">
                        <DataDisplay>
                            <DataDisplayHeader>
                                <DataDisplayTitle>
                                    Informasi Faq
                                </DataDisplayTitle>
                            </DataDisplayHeader>
                            <DataDisplayContent>
                                <DataDisplayItem keyName="Pertanyaan">
                                    {faq.question}
                                </DataDisplayItem>
                                <DataDisplayItem keyName="Jawaban">
                                    {faq.answer}
                                </DataDisplayItem>
                                <DataDisplayItem keyName="Highlighted">
                                    {faq.is_highlighted ? "Ya" : "Tidak"}
                                </DataDisplayItem>
                                <DataDisplayItem keyName="Dibuat oleh">
                                    <Link
                                        href={route(
                                            "managers.show",
                                            faq.user.id
                                        )}
                                        method="get"
                                        className="hover:underline"
                                    >
                                        {faq.user.name}
                                    </Link>
                                </DataDisplayItem>
                                <DataDisplayItem keyName="Dibuat pada">
                                    {formatDate(faq.created_at)}
                                </DataDisplayItem>
                            </DataDisplayContent>
                        </DataDisplay>
                    </ListItem>
                </ListContent>
            </List>
        </FestivalLayout>
    );
}
