import Authenticated from "@/Layouts/Authenticated/Layout";
import SettingsLayout from "../layout";

export default function FestivalIndex() {
    return (
        <Authenticated title="Pengaturan">
            <SettingsLayout>
                <div>FESTIVAL</div>
            </SettingsLayout>
        </Authenticated>
    );
}
