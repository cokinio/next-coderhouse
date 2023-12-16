import ProductCard from "./ProductCard"

const ProductsList = async ({ categoria }) => {
    let items=[{}];

    try{
        let res = await fetch(`${process.env.HOST}/api/productos/${categoria}`, {
            // cache: 'force-cache',
            //cache: 'no-store',
            next: { revalidate: 3600 } 
        })
        items= await res.json()
    }catch(error){
        console.log(error)
    }


    return (
        <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
            {
                items.map((item,index) => <ProductCard key={index} item={item}/>)
            }
        </section>
    )
}

export default ProductsList