import { Separator } from "@/Components/Ui/Separator";

interface Props {
    title: string;
    description?: string;
}

export default function SectionTitle({ title, description }: Props) {
    return (
        <>
            <div className="space-y-6 mb-6">
                <div>
                    <h3 className="text-lg font-medium">{title}</h3>
                    <p className="text-sm text-muted-foreground">
                        {description}
                    </p>
                </div>
                <Separator />
            </div>
        </>
    );
}
