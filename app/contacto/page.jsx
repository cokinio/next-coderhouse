import React from 'react'

const page = () => {
  return (
    <div>
        <h1 className='text-center font-bold uppercase text-3xl my-5'>Contactanos</h1>
        <p className='text-center text-xl my-10'>Podes contactarnos a nuestros telefonos +549114567895220 o a nuestros correo dietetica@dietitca-store.com. 
        Sino nos podes encontrar en corrientes 1550, Buenos Aires. </p>
        <div className='container mx-auto my-5'>
            <iframe className="w-full h-96"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.9955400204426!2d-58.39354151377405!3d-34.604274287777734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac6aa4800f7%3A0x58efe4ee7226ad85!2sAv.%20Corrientes%201550%2C%20C1048%20CABA!5e0!3m2!1ses!2sar!4v1699799427149!5m2!1ses!2sar" ></iframe>

        </div>
    </div>
  )
}

export default page