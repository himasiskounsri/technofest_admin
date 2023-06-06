import SectionTitle from "@/Layouts/SidebarLayout/SectionTitle";
import FestivalLayout from "../Layout";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/Ui/Card";
import { Badge } from "@/Components/Ui/Badge";

export default function FestivalIndex({ auth, festivals }) {
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
        </FestivalLayout>
    );
}
