import { getCurrentUser } from "@/lib/server-api"
import { redirect } from "next/navigation";

export default async function AuthGate({children}:{children:React.ReactNode}) {
    const user = await getCurrentUser();
    if (!user) redirect("/login");
    return (
        <>{children}</>
    )
}