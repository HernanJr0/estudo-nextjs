import Link from "next/link"
import { useRouter } from "next/router"

function rotas() {
  const router = useRouter()

  function navegaParams(id, nome) {
    router.push({
      pathname: "/rotas/params",
      query: {
        id: 155,
        nome: "Pedro"
      }
    })
  }

  return (
    <div>
      <h2>Rotas Index</h2>
      <ul>
        <Link href="/rotas/params?id=12&nome=hernan">
          <li>Params</li>
        </Link>
        <Link href="/rotas/123/buscar">
          <li>Buscar</li>
        </Link>
        <Link href="/rotas/1234/Luis">
          <li>Buscar 2</li>
        </Link>
      </ul>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <button onClick={() => { router.push("/rotas/123/buscar") }}>Buscar</button>
        <button onClick={() => { router.push("/rotas/params?id=12&nome=hernan") }}>Hernan</button>
        <button onClick={() => { router.push("/rotas/1234/Luis") }}>Luis</button>
        <button onClick={navegaParams}>Params</button>
      </div>
    </div>
  )
}

export default rotas