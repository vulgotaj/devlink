import { Link } from 'react-router'

export function ErrorPage() {
    return(
        <div className="flex flex-col w-full justify-center items-center text-white min-h-screen">
            <h1 className="font-bold text-5xl mb-2">ERROR 404</h1>
            <h1 className="font-bold text-4xl mb-4">Ops... Página não encontrada!</h1>
            <p className="italic text-xl mb-4">O link que você acessou é inválido, não existe</p>

            <Link className="bg-blue-600 py-1 px-4 rounded-md font-medium" to="/">
                Voltar para home
            </Link>
        </div>
    )
}