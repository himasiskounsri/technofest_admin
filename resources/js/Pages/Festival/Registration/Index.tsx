import SectionTitle from "@/Layouts/SidebarLayout/SectionTitle";
import { PageProps } from "@/types";
import FestivalLayout from "../Layout";

export default function FaqIndex({ auth }: PageProps) {
    return (
        <FestivalLayout>
            <SectionTitle
                title="Pendaftaran"
                description="Kelola pendaftaran event."
            />
        </FestivalLayout>
    );
}
