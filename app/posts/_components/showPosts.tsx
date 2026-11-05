import { IPost } from "@/types/post"
import Link from "next/link"

interface ResponseProps {
    posts:[IPost]
}

interface ShowPostsProps {
    userId?:number;
};

export default async function ShowPosts({userId}:ShowPostsProps) {

    let URL = ""
    if (!userId) {
        URL = `https://dummyjson.com/posts`
    } else {
        URL = `https://dummyjson.com/posts/${userId}`
    }
    const response = await fetch(URL)
    if (!response.ok) {
        return (
            <div>
                <h1>Erro ao encontrar dados {response.status}</h1>
            </div>
        )
    }
    const data:ResponseProps = await response.json()

    return (
            <div className="flex flex-col gap-4">
                {data.posts.map(post=> (
                    <div key={post.id} className="border-zinc-900 border-2 rounded-2xl p-2 m-2">
                        <h3 className="font-bold text-2xl">{post.title}</h3>
                        <p>{post.body}</p>
                        <Link href={`/posts/${post.id}`} className="hover:underline text-sky-700 font-bold">Acessar detalhes</Link>
                    </div>
                ))}
            </div>
    )
}