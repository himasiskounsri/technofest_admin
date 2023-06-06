import { Badge } from "@/Components/Ui/Badge";
import { Separator } from "@/Components/Ui/Separator";
import PeriodSwitcher from "@/Layouts/AuthenticatedLayout/PeriodSwitcher";
import { activeFestival } from "@/lib/utils";
import { User } from "@/types";
import { CheckCheck } from "lucide-react";
import { MainNav } from "./MainNav";
import { UserNav } from "./UserNav";

export default function Header({ user }: { user: User }) {
    return (
        <header className="border-b">
            <div className="flex h-16 items-center px-4">
                <p className="font-medium mr-4">Technofest Admin</p>
                <Separator orientation="vertical" className="h-12" />
                <PeriodSwitcher className="ml-6" />
                <MainNav className="ml-6" />
                <div className="ml-auto flex items-center space-x-4">
                    <Badge
                        // variant="outline"
                        className="flex items-center space-x-1 cursor-pointer bg-success text-success-foreground hover:bg-success/90"
                    >
                        <CheckCheck />
                        <span className="font-normal">
                            Periode {activeFestival().period}
                        </span>
                        : Aktif
                    </Badge>
                    <UserNav user={user} />
                </div>
            </div>
        </header>
    );
}
