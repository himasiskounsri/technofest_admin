import { LogOut, User as UserIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/Components/Ui/Avatar";
import { Button } from "@/Components/Ui/Button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/Ui/DropdownMenu";
import { User } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import { getFirstLetters } from "@/lib/utils";

interface Props {
    user: User;
}

export function UserNav({ user }: Props) {
    const { constants }: any = usePage().props;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex space-x-2 select-none">
                    <div className="flex flex-col items-end -space-y-1">
                        <p className="text-sm font-medium">{user.name}</p>
                        <p className="text-xs">
                            {user.role == constants.user_role.admin &&
                                "Administrator"}
                            {user.role == constants.user_role.manager &&
                                "Manager"}
                        </p>
                    </div>
                    <Avatar className="h-8 w-8 rounded-full">
                        <AvatarImage
                            className="bg-slate-200"
                            src={user.avatar.image}
                            alt={user.name}
                        />
                        <AvatarFallback>
                            {getFirstLetters(user.name).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <UserIcon className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <Link href={route("logout")} method="post">
                    <DropdownMenuItem>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                    </DropdownMenuItem>
                </Link>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
