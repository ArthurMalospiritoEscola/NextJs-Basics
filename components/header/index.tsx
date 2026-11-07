import Link from "next/link";
import NavContent from "./_components/navContent";
import { Suspense } from "react";

//Componente React comum para Header
export default async function Header() {
    return (
        <header className="flex, px-2, py-4 bg-zinc-700 text-white">
            <div className="flex  items-center justify-between w-full mx-auto px-5">
                <div className="justify-self-start">
                    <h1 className="font-bold text-2xl hover:underline"><Link href={"/"}>NextJS</Link></h1>
                </div>
                <nav>
                    <ul className="flex items-center justify-center gap-3">
                        <Suspense fallback="Carregando...">
                            <NavContent/>
                        </Suspense>
                    </ul>
                </nav>
            </div>
        </header>
    )
}