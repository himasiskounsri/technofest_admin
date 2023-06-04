import Authenticated from "@/Layouts/Authenticated/Layout";
import { PageProps } from "@/types";
import SettingsLayout from "./layout";

export default function SettingIndex({ auth }: PageProps) {
    return (
        <Authenticated title="Pengaturan">
            <SettingsLayout>
                <h1>Hello World</h1>
            </SettingsLayout>
        </Authenticated>
    );
}
