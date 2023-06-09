import { Badge } from "@/Components/Ui/Badge";
import { Button } from "@/Components/Ui/Button";
import { DropdownMenuItem } from "@/Components/Ui/DropdownMenu";
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
import { useToast } from "@/Components/Ui/use-toast";
import SectionTitle from "@/Layouts/SidebarLayout/SectionTitle";
import { PageProps } from "@/types";
import { Link, router, usePage } from "@inertiajs/react";
import { PlusCircle, User } from "lucide-react";
import { useEffect } from "react";
import FestivalLayout from "../Layout";

export default function FaqIndex({ auth, faqs }: PageProps) {
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
                title="Faqs"
                description="Kelola pertanyaan dan jawaban yang sering muncul."
            />
            <div className="mb-4 flex justify-end">
                <Button size="sm" variant="success">
                    <PlusCircle />
                    &nbsp;Tambah
                </Button>
            </div>
            <List className="max-w-3xl">
                <ListHeader>
                    <ListTitle>Data Faqs</ListTitle>
                </ListHeader>
                <ListContent>
                    {faqs.map((faq) => (
                        <ListItem key={faq.id}>
                            <ListItemTitle>
                                <Link
                                    href={route("faqs.show", faq.id)}
                                    method="get"
                                    className="hover:underline"
                                >
                                    {faq.question}
                                </Link>
                            </ListItemTitle>
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

                            <ListItemDropdown>
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => {
                                        router.delete(
                                            route("faqs.destroy", {
                                                id: faq.id,
                                            }),
                                            { preserveScroll: true }
                                        );
                                    }}
                                    className="text-danger focus:text-danger focus:bg-danger-foreground/50"
                                >
                                    Hapus
                                </DropdownMenuItem>
                            </ListItemDropdown>
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
