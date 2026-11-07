'use client'

import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const router = useRouter();

    async function  handleOnClick() {
        try {
            const response = await fetch ('http://localhost:8000/auth/logout', {
                method: 'POST',
                credentials:'include'
            })
            const data = await response.json();
    
            if (!data.success) {
                console.log("ERRO AO FAZER LOGOUT: ", data.message)
            }
            router.push("/");
            router.refresh();
        } catch (error) {
            console.log("Erro ao fazer logout: ", error)
        }
    }

    return (
        <button onClick={handleOnClick} className="text-red-400 hover:underline hover:text-red-500 hover:cursor-pointer">Logout</button>
    )
}