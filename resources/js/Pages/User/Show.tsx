import Authenticated from "@/Layouts/Authenticated/Layout";
import { PageProps } from "@/types";

export default function UserShow({ auth }: PageProps) {
    return (
        <Authenticated title="Pengguna">
            <h1>Hello World</h1>
        </Authenticated>
    );
}
