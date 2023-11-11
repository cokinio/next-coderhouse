import SubHeader from "@/components/ui/SubHeader"
import Cuadrito from "@/components/ui/Cuadrito"
import CategoriesMainPage from "@/components/products/CategoriesMainPage"

export default function Home() {
  return (
    <main className="container m-auto">
    <SubHeader/>
    <hr className="my-2"/>
    <div className="bg-gray-200 flex">
      <Cuadrito 
        src="/delivery.svg" 
        alt="delivery" 
        title="¡Comprá Online!" 
        description="Hacé tu pedido y nosotros te lo llevamos. Comé rico, natural y práctico sin moverte" 
      />
      <Cuadrito 
        src="/credit-card.svg" 
        alt="credit card" 
        title="Todos los medios de pago" 
        description="Hasta 12 cuotas sin interés" 
      />
      <Cuadrito 
        src="/check.svg" 
        alt="check" 
        title="Comprá con tranquilidad" 
        description="Tus datos están protegidos" 
      />
       <Cuadrito 
        src="/whatsapp.svg" 
        alt="whatsapp" 
        title="WhatsApp Mayorista" 
        description="Lunes a Viernes de 8.00 a 16 hs" 
      />
    </div>
    <hr className="my-2"/>
    <div className="h-16">
      <h2 className="bg-black text-white uppercase text-3xl text-center font-bold p-2 my-5">Categorias</h2>
    </div>
    <CategoriesMainPage/>
    </main>
  )
}
