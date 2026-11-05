import { Suspense } from "react";
import { PostInfo } from "./_components/postInfo";

export default async function DetailPost({params}: {params:Promise<{id:string}>}) {
    const {id} = await params;
    return (
        <div>
            <h1 className="text-5xl font-serif text-center">Post de id {id}</h1>
            <Suspense fallback={<h1>Carregando...</h1>}>
                <PostInfo id={id}/>
            </Suspense>
        </div>
    )
}