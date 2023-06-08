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
    ListItemDropdown,
    ListItemTitle,
    ListTitle,
} from "@/Components/Ui/List";
import { Badge } from "@/Components/Ui/Badge";
import { PlusCircle, User, Youtube } from "lucide-react";
import {
    DropdownMenuCheckboxItem,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuSeparator,
} from "@/Components/Ui/DropdownMenu";
import {
    DropdownMenuArrow,
    DropdownMenuItemIndicator,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/Components/Ui/Button";
import { useToast } from "@/Components/Ui/use-toast";
import { usePage, router } from "@inertiajs/react";
import { useEffect } from "react";

export default function FaqIndex({ auth, faqs }: PageProps) {
    console.log(faqs);

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
                title="Faq"
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
                    <ListTitle>Data Faq</ListTitle>
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
                                    className="text-danger focus:text-danger focus:bg-danger-foreground/50">
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
