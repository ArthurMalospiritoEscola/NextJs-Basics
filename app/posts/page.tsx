import { Suspense } from "react"
import ShowPosts from "./_components/showPosts"

export default function PostsPage() {

    return (
        <div>
            <h1 className="text-5xl font-serif text-center">Página de Posts</h1>
            <Suspense fallback={<h1>Loading...</h1>}>
                <ShowPosts/>
            </Suspense>
        </div>
    )
}