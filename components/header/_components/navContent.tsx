import { getCurrentUser } from "@/lib/server-api";
import Link from "next/link";
import LogoutButton from "./logoutButton";


export default async function NavContent() {
    const user = await getCurrentUser();
    return (
        <>
        <li>
            <Link href="/posts" className="hover:underline">Posts</Link>
        </li>
        {
            user && 
            <>
                <li>
                    <Link href="/dashboards" className="hover:underline">Dashboards</Link>
                </li>
                <li>
                    <Link href="/profile" className="hover:underline">Profile</Link>
                </li>
            </>
        }
        {
            !user &&
            <li>
                <Link href="/login" className="hover:underline">Login</Link>
            </li>
        }

        {
            user &&
            <li>
                <LogoutButton/>
            </li>
        }
        </>
    )
}