import { Separator } from "@/Components/Ui/Separator";
import { MainNav } from "./MainNav";
import { UserNav } from "./UserNav";
import { Festival, User } from "@/types";
import PeriodSwitcher from "@/Layouts/Authenticated/PeriodSwitcher";
import { Badge } from "@/Components/Ui/Badge";
import { usePage } from "@inertiajs/react";
import { BadgeCheck, CheckCheck } from "lucide-react";

export default function Header({ user }: { user: User }) {
    const { festivals } = usePage().props as unknown as {
        festivals: Festival[];
    };

    const activeFestival = festivals.filter(
        (festival) => festival.is_active
    )[0];

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
                        className="flex items-center  space-x-1 cursor-pointer"
                    >
                        <CheckCheck />{" "}
                        <span className="font-normal">
                            {" "}
                            Periode {activeFestival.period}
                        </span>
                        : Aktif
                    </Badge>
                    <UserNav user={user} />
                </div>
            </div>
        </header>
    );
}
