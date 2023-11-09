import Image from "next/image"
import Link from "next/link"

const ProductCard = ({ item }) => {

    return (
        <article className="basis-72 shadow-lg rounded">
            <Link href={`/productos/detail/${item.Title1}`}
                className="flex flex-col"
            >
                <Image
                    alt={item.Title1}
                    src={item.Image1}
                    width={288}
                    height={288}
                    style={{objectFit: "contain"}}
                />

                <div className="px-4 border-t border-gray-200">
                    <h4 className="text-sm my-4">{item.Title1}</h4>
                    <p className="text-2xl font-semibold mb-6">$ {item.Price1}</p>
                </div>
            </Link>
        </article>
    )
}

export default ProductCard