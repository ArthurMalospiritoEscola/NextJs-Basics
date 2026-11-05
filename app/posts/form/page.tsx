import { IPost } from "@/types/post";

interface ResponseProps {
    posts:IPost[];
}

export default function PageForm() {
    async function handleSearchUsers(formData:FormData) {
        'use server'
        
        const userId = formData.get('userId')
        const response = await fetch(`https://dummyjson.com/posts/${userId}`)
        const data:ResponseProps = await response.json()
        console.log(data)
    }

    return (
        <div>
            <div className="flex flex-row justify-center mt-5">
                <form action={handleSearchUsers} className="flex flex-col gap-2 w-3xs">
                    <label htmlFor="userId">User ID</label>
                    <input type="text" name="userId" id="userId" placeholder="Digite o id do usuário" className="bg-white text-black"/>
                    <button type="submit" className="bg-sky-500">Buscar usuário</button>
                </form>
            </div>
        </div>


    )
}