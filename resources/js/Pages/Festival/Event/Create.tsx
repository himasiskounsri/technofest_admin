import Authenticated from "@/Layouts/AuthenticatedLayout/Layout";
import { PageProps } from "@/types";
import FestivalLayout from "../Layout";

export default function EventCreate({ auth }: PageProps) {
    return (
        <FestivalLayout>
            <h1>Hello World</h1>
        </FestivalLayout>
    );
}
