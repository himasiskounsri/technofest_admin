import { Separator } from "@/Components/Ui/Separator";
import Authenticated from "@/Layouts/AuthenticatedLayout/Layout";
import { AccountForm } from "@/Pages/Setting/Account/AccountForm";
import SidebarLayout from "@/Layouts/SidebarLayout/Layout";
import SettingLayout from "@/Pages/Setting/Layout";

export default function SettingsAccountPage() {
    return (
        <SettingLayout>
            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-medium">Account</h3>
                    <p className="text-sm text-muted-foreground">
                        Update your account settings. Set your preferred
                        language and timezone.
                    </p>
                </div>
                <Separator />
                <AccountForm />
            </div>
        </SettingLayout>
    );
}
