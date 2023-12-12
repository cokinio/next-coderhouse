"use client"
import React from 'react'

const eliminarProducto = async (product) =>{
	let deleted=await fetch(`/api/product/${product}`, {
		method: "DELETE",
		headers: {"Content-type": "application/json; charset=UTF-8"}
	}).then(res => res.json())
	console.log(deleted)
    window.location.href = "/admin";
} 

const BotonEliminar = ({children, item}) => {
  return (
    <button onClick={()=>eliminarProducto(item.title)} className="text-bold bg-red-700 text-white p-2 rounded">{children}</button>
  )
}

export default BotonEliminar