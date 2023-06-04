import Authenticated from "@/Layouts/Authenticated/Layout";
import { PageProps } from "@/types";

export default function EventCreate({ auth }: PageProps) {
    return (
        <Authenticated title="Event">
            <h1>Hello World</h1>
        </Authenticated>
    );
}
