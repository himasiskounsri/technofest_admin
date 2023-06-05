import Authenticated from "@/Layouts/AuthenticatedLayout/Layout";
import { PageProps } from "@/types";

export default function UserEdit({ auth }: PageProps) {
    return (
        <Authenticated title="Pengguna">
            <h1>Hello World</h1>
        </Authenticated>
    );
}
