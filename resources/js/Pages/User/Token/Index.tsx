import SectionTitle from "@/Layouts/SidebarLayout/SectionTitle";
import UserLayout from "../Layout";
import { Input } from "@/Components/Ui/Input";
import { Button } from "@/Components/Ui/Button";
import { Label } from "@/Components/Ui/Label";
import { useEffect, useState } from "react";
import { Copy, Eye, EyeOff } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/Ui/Card";

export default function () {
    const [token, setToken] = useState("378c0632-ce91-40be-a117-b51ed6315d4c");
    const [copied, setCopied] = useState(false);
    const [showToken, setShowToken] = useState<"text" | "password">("password");

    useEffect(() => {
        setTimeout(() => {
            setCopied(false);
        }, 1000);
    }, [copied]);

    return (
        <UserLayout>
            <SectionTitle
                title="Token"
                description="Token pendaftaran manajer."
            />
            <Card>
                <CardHeader>
                    <CardTitle>Token</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <Input
                            id="token"
                            type={showToken}
                            value={token}
                            className="flex-1 disabled:cursor-default"
                            disabled
                        />
                        <Button
                            variant="secondary"
                            onClick={() =>
                                showToken == "password"
                                    ? setShowToken("text")
                                    : setShowToken("password")
                            }
                        >
                            {showToken == "password" && <EyeOff size={16} />}
                            {showToken == "text" && <Eye size={16} />}
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={() => {
                                navigator.clipboard.writeText(token);
                                setCopied(true);
                            }}
                            className="w-24"
                        >
                            <Copy size={16} />
                            &nbsp;{copied ? "Disalin" : "Salin"}
                        </Button>
                    </div>
                    <div>
                        <p className="text-muted-foreground text-sm">
                            Gunakan token ini untuk pendaftaran manajer
                            Technofest Admin.
                        </p>
                    </div>
                    <div>
                        <Button variant="success">Generate ulang</Button>
                    </div>
                </CardContent>
            </Card>
        </UserLayout>
    );
}
