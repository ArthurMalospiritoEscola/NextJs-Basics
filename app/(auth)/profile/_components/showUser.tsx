import { getCurrentUser } from "@/lib/server-api"

export default async function ShowUser() {
    const user = await getCurrentUser();
    if (!user) return (<h1>Erro</h1>)
    return (
        <div className="border rounded2xl  m-5 p-4">
            <h1><b>Nome:</b> {user.name}</h1>
            <h3><b>Id:</b> {user.id}</h3>
            <h3><b>Email:</b> {user.email}</h3>
            <h3><b>Nível de acesso:</b> {String(user.access_level)}</h3>
        </div>
    )
}