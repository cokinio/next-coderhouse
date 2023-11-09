import Boton from "@/components/ui/Boton"
import Counter from "@/components/ui/Counter"

export default function Home() {
  return (
    <main className="container m-auto">
        <h1 className="text-4xl font-bold text-blue-600 my-4">Hola mundo</h1>
    <p className="text-base mt-4">Bienvenidos</p>
    <Boton>Hola</Boton>
    <Counter/>
    </main>

  )
}
