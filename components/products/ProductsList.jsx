import { mockData }  from "@/data/diet"
import ProductCard from "./ProductCard"

const ProductsList = ({ categoria }) => {

    const items = categoria === 'todos' ? mockData : mockData.filter(item => item.Field3 === categoria)

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