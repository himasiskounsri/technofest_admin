import Authenticated from "@/Layouts/Authenticated/Layout";
import { PageProps } from "@/types";

export default function FaqShow({ auth }: PageProps) {
    return (
        <Authenticated title="Faq">
            <h1>Hello World</h1>
        </Authenticated>
    );
}
