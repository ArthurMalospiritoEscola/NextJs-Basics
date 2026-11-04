import Link from "next/link";

//Página padrão para rotas Not_found
export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center mt-9">
            <h1 className="text-center font-bold">Erro 404, Página não encontrada</h1>
            <p>Essa página que você tentou acessar não existe!</p>
            <Link href={"/"}>Voltar para Home</Link>
        </div>
    )
}