import { Suspense } from "react";
import AuthGate from "./_components/authGate";

export default async function Layout({children}:{children:React.ReactNode}) {


    return <Suspense fallback="Carregando...">
        <AuthGate>{children}</AuthGate>
    </Suspense>
}