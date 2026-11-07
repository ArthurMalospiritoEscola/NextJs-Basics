'use client'

import { useEffect, useState } from "react"

export default function LoadingComponent() {
    const [dots,setDots] = useState<string>("")

    useEffect(()=> {
        const interval = setInterval(()=> {
            setDots(current => (current.length >= 3 ? "." : current+'.'))
        },1000)
        return ()=> clearInterval(interval)
    },[])
    return (
        <h1 className="text-3xl">Carregando{dots}</h1>
    )
}