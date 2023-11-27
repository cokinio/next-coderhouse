import CategoriesMenu from "@/components/products/CategoriesMenu"
import ProductsList from "@/components/products/ProductsList"
import { Skeleton } from "@/components/ui/skeleton"
import { Suspense } from "react"
import Image from "next/image"

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

                <Suspense fallback={<Image  src="./spinner.gif"
                        alt="spinner"
                        width={860}
                        height={860}/>}>
                    <ProductsList categoria={categoria}/>
                </Suspense>
            </div>
        </main>
    )
}

export default Productos