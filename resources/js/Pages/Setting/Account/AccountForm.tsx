"use client";

// import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns";
import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react";
// import { useForm } from "react-hook-form"
// import * as z from "zod"

import { cn } from "@/lib/utils";
import { Button } from "@/Components/Ui/Button";
import { Calendar } from "@/Components/Ui/Calendar";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/Components/Ui/Command";
import { Input } from "@/Components/Ui/Input";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/Ui/Popover";
import { toast } from "@/Components/Ui/use-toast";
import { Label } from "@/Components/Ui/Label";
import InputError from "@/Components/Ui/InputError";
// import {
//     Form,
//     FormControl,
//     FormDescription,
//     FormField,
//     FormItem,
//     Label,
//     InputError,
// } from "@/components/react-hook-form/form";

const languages = [
    { label: "English", value: "en" },
    { label: "French", value: "fr" },
    { label: "German", value: "de" },
    { label: "Spanish", value: "es" },
    { label: "Portuguese", value: "pt" },
    { label: "Russian", value: "ru" },
    { label: "Japanese", value: "ja" },
    { label: "Korean", value: "ko" },
    { label: "Chinese", value: "zh" },
] as const;

// const accountFormSchema = z.object({
//     name: z
//         .string()
//         .min(2, {
//             message: "Name must be at least 2 characters.",
//         })
//         .max(30, {
//             message: "Name must not be longer than 30 characters.",
//         }),
//     dob: z.date({
//         required_error: "A date of birth is required.",
//     }),
//     language: z.string({
//         required_error: "Please select a language.",
//     }),
// });

// type AccountFormValues = z.infer<typeof accountFormSchema>;

// This can come from your database or API.
// const defaultValues: Partial<AccountFormValues> = {
// name: "Your name",
// dob: new Date("2023-01-23"),
// };

export function AccountForm() {
    // const form = useForm<AccountFormValues>({
    //     resolver: zodResolver(accountFormSchema),
    //     defaultValues,
    // });

    // function onSubmit(data: AccountFormValues) {
    //     toast({
    //         title: "You submitted the following values:",
    //         description: (
    //             <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //                 <code className="text-white">
    //                     {JSON.stringify(data, null, 2)}
    //                 </code>
    //             </pre>
    //         ),
    //     });
    // }

    return (
        <form className="space-y-8">
            <Label>Name</Label>
            <Input placeholder="Your name" />

            <InputError />

            <Label>Date of birth</Label>
            <Popover>
                <PopoverTrigger asChild>
                    {/* <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-[240px] pl-3 text-left font-normal",
                                            !field.value &&
                                                "text-muted-foreground"
                                        )}
                                    >
                                        {field.value ? (
                                            format(field.value, "PPP")
                                        ) : (
                                            <span>Pick a date</span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button> */}
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    {/* <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) =>
                                        date > new Date() ||
                                        date < new Date("1900-01-01")
                                    }
                                    initialFocus
                                /> */}
                </PopoverContent>
            </Popover>
            <InputError />

            <Label>Language</Label>
            <Popover>
                <PopoverTrigger asChild>
                    {/* <Button
                                        variant="outline"
                                        role="combobox"
                                        className={cn(
                                            "w-[200px] justify-between",
                                            !field.value &&
                                                "text-muted-foreground"
                                        )}
                                    >
                                        {field.value
                                            ? languages.find(
                                                  (language) =>
                                                      language.value ===
                                                      field.value
                                              )?.label
                                            : "Select language"}
                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button> */}
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                        <CommandInput placeholder="Search language..." />
                        <CommandEmpty>No language found.</CommandEmpty>
                        <CommandGroup>
                            {/* {languages.map((language) => (
                                            <CommandItem
                                                value={language.value}
                                                key={language.value}
                                                onSelect={(value) => {
                                                    form.setValue(
                                                        "language",
                                                        value
                                                    );
                                                }}
                                            >
                                                <Check
                                                    className={cn(
                                                        "mr-2 h-4 w-4",
                                                        language.value ===
                                                            field.value
                                                            ? "opacity-100"
                                                            : "opacity-0"
                                                    )}
                                                />
                                                {language.label}
                                            </CommandItem>
                                        ))} */}
                        </CommandGroup>
                    </Command>
                </PopoverContent>
            </Popover>

            <InputError />
            <Button type="submit">Update account</Button>
        </form>
    );
}
