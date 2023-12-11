"use client"

import { useState } from "react"
import Boton from "../ui/Boton"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storage } from "@/firebase/config"

const createProduct = async (values, file) => {
    let id=Date.now().toString()+values.title.trim();
    const storageRef = ref(storage,id )
    const fileSnapshot = await uploadBytes(storageRef,file)
    const fileURL = await getDownloadURL(fileSnapshot.ref)
    console.log(fileURL)
    let _datos={
        title:values.title,
        image: fileURL,
        price:"$"+`${values.price.toString()},00`,
        category:values.category,
        stock:values.stock,
        description:values.description
    }
    let productCreated = await fetch(`http://localhost:3000/api/product/`, {
        method: "POST",
        body: JSON.stringify(_datos),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then(res => res.json())
    console.log(productCreated)
}

const CreateForm = () => {
    const [values, setValues] = useState({ 
        title: '', 
        description: '', 
        stock: 0,
        price: 0, 
        type: '',
        category:''
    })
    const [file, setFile] = useState(null)

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await createProduct(values, file)
    }

    return (
        <div className="container m-auto mt-6 max-w-lg">
            <form onSubmit={handleSubmit} className="my-12">
                {/* <label>Slug: </label>
                <input
                    type="text"
                    value={values.slug}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="slug"
                    onChange={handleChange}
                /> */}

                
                <label>Nombre: </label>
                <input
                    type="text"
                    value={values.title}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="title"
                    onChange={handleChange}
                />

                <label>Imagen: </label>
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                />

                <label>Precio: </label>
                <input
                    type="number"
                    value={values.price}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="price"
                    onChange={handleChange}
                />

                <label>Stock: </label>
                <input
                    type="number"
                    value={values.stock}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="stock"
                    onChange={handleChange}
                />

                <label>Categoria: </label>
                <input
                    type="text"
                    value={values.category}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="category"
                    onChange={handleChange}
                />

                <label>Descripción: </label>
                <textarea
                    value={values.description}
                    className="resize-none w-full h-24 p-2 rounded border block border-blue-100 my-4"
                    name="description"
                    onChange={handleChange}
                />

                <Boton type="submit">Enviar</Boton>
            </form>
        </div>
    )
}


export default CreateForm