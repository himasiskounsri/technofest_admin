"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

import { Button } from "@/Components/Ui/Button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/Components/Ui/Command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/Ui/Popover";
import { cn } from "@/lib/utils";
import { Festival } from "@/types";
import { router, useForm, usePage } from "@inertiajs/react";

interface PeriodSwitcherProps {
    className: string;
}

export default function PeriodSwitcher({ className }: PeriodSwitcherProps) {
    const { flash, festivals } = usePage().props as unknown as {
        flash: { current_festival: Festival };
        festivals: Festival[];
    };

    function submit(selected_festival: Festival) {
        router.patch(route("festival_period.update"), {
            festival_id: selected_festival.id,
        });
    }

    const [open, setOpen] = React.useState(false);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    role="combobox"
                    aria-expanded={open}
                    aria-label="Select a team"
                    className={cn("w-[200px] justify-between", className)}
                >
                    Periode {flash.current_festival.period}
                    <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandList>
                        <CommandInput placeholder="Cari periode..." />
                        <CommandEmpty>Tidak ditemukan.</CommandEmpty>
                        <CommandGroup
                            key="Periode Festival"
                            heading="Periode Festival"
                        >
                            {festivals.map((festival) => (
                                <CommandItem
                                    key={festival.id}
                                    onSelect={() => {
                                        submit(festival);
                                        setOpen(false);
                                    }}
                                    className="text-sm"
                                >
                                    <div className="flex flex-col">
                                        <p>{festival.period}</p>
                                        <p className="text-xs text-muted-foreground">
                                            {festival.name}
                                        </p>
                                    </div>
                                    <Check
                                        className={cn(
                                            "ml-auto h-4 w-4",
                                            flash.current_festival.id ===
                                                festival.id
                                                ? "opacity-100"
                                                : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}