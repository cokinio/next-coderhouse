import { mockData } from "@/data/diet"
import Image from "next/image"
import QuantSel from "./QuantSel"
import GoBack from "../ui/GoBack"



const ProductDetail = ({ slug }) => {

    let fixedSlug=decodeURI(slug)
    const item = mockData.find(p => p.Title1 === fixedSlug)
    console.log(item)
    return (
        <div className="max-w-4xl m-auto">
            <GoBack className="text-sm text-blue-500 underline mb-6"/>
            <section className="flex gap-6">
                <div className="relative basis-1/2">
                    <Image
                        src={item.Image1}
                        alt={item.Title1}
                        width={860}
                        height={860}
                    />
                </div>
                <div className="basis-1/2">
                    <h2 className="text-2xl font-semibold border-b border-gray-200 pb-4 mb-4">{item.Title1}</h2>
                    <p className="text-4xl"> {item.Price1}</p>

                    <QuantSel item={item}/>
                </div>
            </section>
            <section className="mt-12">
                <h3 className="text-xl font-semibold border-b border-gray-200 pb-4 my-4">Descripcion</h3>
                <p className="text-gray-600">{item.Field3}</p>
            </section>
        </div>
    )
}

export default ProductDetail