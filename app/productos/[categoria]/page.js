import CategoriesMenu from "@/components/products/CategoriesMenu"
import ProductsList from "@/components/products/ProductsList"
import { Skeleton } from "@/components/ui/skeleton"

export async function generateMetadata({params, searchParams}, parent) {

    return {
        title: `Dietetica Store - ${params.categoria}`,
    }
}

const Productos = ({params}) => {
    const { categoria } = params

    return (
        <main className="container m-auto">
            <h2 className="text-2xl my-10 border-b pb-4">Productos</h2>

            <div className="flex gap-10">
                <CategoriesMenu />

                <Suspense fallback={<Skeleton className="w-[100px] h-[20px] rounded-full" />}>
                    <ProductsList categoria={categoria}/>
                </Suspense>
            </div>
        </main>
    )
}

export default Productos