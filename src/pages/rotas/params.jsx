import { useRouter } from "next/router"
import Link from "next/link"

export default function params() {

    const router = useRouter()

    const id = router.query.id
    const nome = router.query.nome

    return (
        <div>
            <h2>Parametros Rotas:</h2>
            <p>nome: {nome}</p>
            <p>id: {id}</p>

            <Link href="/rotas">
                <button>Voltar</button>
            </Link>
        </div>
    )
}
