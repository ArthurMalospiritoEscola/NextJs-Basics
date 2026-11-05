import { IPost } from "@/types/post"

export async function PostInfo({id}:{id:string}) {
    //Demora alguns segundos para responder para testar o loading
    await new Promise(resolve => setTimeout(resolve, 3000))

    //A cada 3600 segundos (1 hora) recarrega as informações do fetch
    const response = await fetch(`https://dummyjson.com/posts/${id}`, {
        cache: 'force-cache',
        next:{
            revalidate:3600
        }
    })
    if (!response.ok) {
        return (
            <div>
                <h1 className="m-9 text-5xl font-serif text-center text-red-500">Post de id {id} não encontrado</h1>
            </div>
        )
    }
    const data:IPost = await response.json()
    
    return (
        <div className="border-zinc-900 border-2 rounded-2xl p-2 m-2">
            <h3 className="font-bold text-2xl">{data.title}</h3>
            <p>{data.body}</p>
        </div>
    )
}