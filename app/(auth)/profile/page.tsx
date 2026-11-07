import { Suspense } from "react";
import ShowUser from "./_components/showUser";
import LoadingComponent from "@/components/loading/loadingComponent";

export default function ProfilePage() {
    return (
        <div>
            <h1 className="text-5xl font-serif">Profile Page</h1>
            <Suspense fallback={<LoadingComponent/>}>
                <ShowUser/>
            </Suspense>
        </div>
    )
}