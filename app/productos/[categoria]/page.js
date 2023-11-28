import CategoriesMenu from "@/components/products/CategoriesMenu"
import ProductsList from "@/components/products/ProductsList"
import { Skeleton } from "@/components/ui/skeleton"
import { Suspense } from "react"

export async function generateMetadata({params, searchParams}, parent) {

    return {
        title: `Dietetica Store - ${params.categoria}`,
    }
}

export async function generateStaticParams() {
    return [
        { categoria: 'todos' },
        { categoria: 'Frutos-Secos' },
        { categoria: 'Mix-de-Frutos-Secos' },
        { categoria: 'Frutas-Desecadas' },
        { categoria: 'Semillas' },
        { categoria: 'Harinas-Feculas-Avenas' },
        { categoria: 'Legumbres-Arroz' },
        { categoria: 'Chocolatoso' },
        { categoria: 'Repostería' },
        { categoria: 'Envasados' },
        { categoria: 'Cereales' },
        { categoria: 'Especias' },
        { categoria: 'Otros' },
    ]
}

const Productos = ({params}) => {
    const { categoria } = params

    return (
        <main className="container m-auto">
            <h2 className="text-2xl my-10 border-b pb-4">Productos</h2>

            <div className="flex gap-10">
                <CategoriesMenu />
                <Suspense fallback={
                        <Skeleton className="w-2/3 mx-auto h-[200px] rounded-full"/>
                    }>
                    <ProductsList categoria={categoria}/>
                </Suspense>
            </div>
        </main>
    )
}

export default Productos