import SectionTitle from "@/Layouts/SidebarLayout/SectionTitle";
import FestivalLayout from "../Layout";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/Ui/Card";
import { Badge } from "@/Components/Ui/Badge";
import { PageProps } from "@/types";
import { usePage } from "@inertiajs/react";
import { currentFestival } from "@/lib/utils";
import { log } from "console";

export default function FestivalIndex({ auth, festivals }: PageProps) {
    return (
        <FestivalLayout>
            <SectionTitle
                title="Festival"
                description="Kelola periode dan pengaturan Festival."
            />
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center">
                        <span>Periode Festival:</span>&nbsp;
                        <Badge variant="success">2023</Badge>
                    </CardTitle>
                    <CardDescription>Periode festival saat ini</CardDescription>
                </CardHeader>
            </Card>
            <SectionTitle
                title="Narahubung"
                description="Kelola narahubung Festival."
            />
            <SectionTitle
                title="Linimasa"
                description="Kelola linimasa Festival."
            />
            <SectionTitle
                title="Sponsor"
                description="Kelola sponsor Festival."
            />
            <SectionTitle
                title="Media Partner"
                description="Kelola media partner Festival."
            />
        </FestivalLayout>
    );
}
