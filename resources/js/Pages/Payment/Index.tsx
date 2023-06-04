import Authenticated from "@/Layouts/Authenticated/Layout";
import { PageProps } from "@/types";

export default function PaymentIndex({ auth }: PageProps) {
    return (
        <Authenticated title="Pembayaran">
            <h1>Hello World</h1>
        </Authenticated>
    );
}
