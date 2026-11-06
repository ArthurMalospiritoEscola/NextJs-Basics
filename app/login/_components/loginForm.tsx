'use client'

import { useRouter } from "next/navigation";
import {SubmitEvent, useState } from "react";

interface LoginResponse {
    success:boolean;
    message:string;
    data:unknown|null;
    code:unknown|null;
}

export default function LoginForm() {
    const [showMessage,setshowMessage] = useState<boolean>(false)
    const [error,setError] = useState<boolean>(false)
    const [message,setMessage] = useState<string>("")
    const router = useRouter()

    async function handleSubmit(event:SubmitEvent<HTMLFormElement>) {
        event.preventDefault()
        setshowMessage(false)
        setError(false)

        const formData = new FormData(event.currentTarget);
        const body = {
            email:formData.get("email"),
            password:formData.get("password")
        }
        try {
            const request = await fetch('http://localhost:8000/auth/login', {
                method:'POST',
                credentials: 'include',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(body)
            }) 
            const requestData : LoginResponse= await request.json()

            if (!requestData.success) {
                setshowMessage(true)
                setError(true)
                setMessage(requestData.message)
                console.log(request.status)
                return
            }
            setshowMessage(true)
            setError(false)
            setMessage(requestData.message)
            router.replace("/profile");
            

        }
        catch (error) {
            setError(true)
            setMessage(String(error))
            console.log(error)
        }
    }

    return (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 items-center justify-center min-w-1/3 p-6 min-h-2/3 bg-amber-50 rounded-2xl ">
                <div className="flex flex-col w-full">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" required className="w-full border rounded my-3 p-1" placeholder="Digite seu email..."/>
                </div>
                <div className="flex flex-col w-full"> 
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" required className="w-full border rounded my-3 p-1"  placeholder="Digite sua senha..."/>
                </div>

                <button className="w-1/3 border rounded bg-green-400 p-2">Login</button>
                {error && <h3 className="text-red-400 mt-5">ERROR</h3>}
                {showMessage && <p className="">{message}</p> }
            </form>
    )
}