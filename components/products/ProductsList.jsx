import { mockData }  from "@/data/diet"
import ProductCard from "./ProductCard"

const ProductsList = async ({ categoria }) => {

    const items = await fetch(`http://localhost:3000/api/productos/${categoria}`, {
        cache: 'force-cache',
    }).then(r => r.json())

    console.log(categoria)
    return (
        <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
            {
                items.map((item,index) => <ProductCard key={index} item={item}/>)
            }
        </section>
    )
}

export default ProductsList