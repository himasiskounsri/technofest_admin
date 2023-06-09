import { Festival } from "@/types";
import { usePage } from "@inertiajs/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge classNames from list of classNames
 *
 * @param {ClassValue[]} inputs List of classNames
 * @returns {string} Merged classNames
 */
export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}

/**
 * return the initial letter of each word from the given string.
 *
 * @param str String to convert
 * @returns Converted string
 */
export function getFirstLetters(str: string): string {
    const firstLetters = str
        .split(" ")
        .map((word, index) => (index >= 2 ? "" : word.charAt(0)))
        .join("");

    return firstLetters;
}

export function formatDate(
    date: string,
    option: "date" | "time" | "datetime" = "date"
): string {
    const new_date = new Date(date);
    const locale: Intl.LocalesArgument = "id-ID";
    const dateFormatOptions: Intl.DateTimeFormatOptions = {
        // weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    const timeFormatOptions: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    };

    if (option == "date") {
        return new_date.toLocaleDateString(locale, dateFormatOptions);
    } else if (option == "time") {
        return new_date.toLocaleTimeString(locale, timeFormatOptions);
    }

    return new_date.toLocaleString(locale, {
        ...dateFormatOptions,
        ...timeFormatOptions,
    });
}

export function currentFestival(): Festival {
    const { current_festival_id, festivals }: any = usePage().props;

    return festivals.filter(
        (festival: Festival) => festival.id == current_festival_id
    )[0];
}

export function activeFestival(): Festival {
    const { festivals }: any = usePage().props;

    return festivals.filter((festival: Festival) => festival.is_active)[0];
}

export default function formatPrice(price: number): string {
    return `Rp${price.toLocaleString("id-ID")}`;
}
