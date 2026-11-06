import Link from "next/link";
import LogoutButton from "./_components/logoutButton";

//Componente React comum para Header
export default function Header() {
    return (
        <header className="felx, px-2, py-4 bg-zinc-700 text-white">
            <div className="flex  items-center justify-between w-full mx-auto px-5">
                <div className="justify-self-start">
                    <h1 className="font-bold text-2xl hover:underline"><Link href={"/"}>NextJS</Link></h1>
                </div>
                <nav>
                    <ul className="flex items-center justify-center gap-3">
                        <li>
                            <Link href="/posts" className="hover:underline">Posts</Link>
                        </li>
                        <li>
                            <Link href="/dashboards" className="hover:underline">Dashboards</Link>
                        </li>
                        <li>
                            <Link href="/profile" className="hover:underline">Profile</Link>
                        </li>
                        <li>
                            <Link href="/login" className="hover:underline">Login</Link>
                        </li>
                        <li>
                            <LogoutButton/>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}