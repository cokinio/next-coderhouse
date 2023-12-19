"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useCartContext } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

function CartTable() {
	const { cart,removeItem, itemsInCart, totalCart } = useCartContext();

	return (
		<div className="rounded-t-xl overflow-hidden p-10">
			<h1 className="text-3xl font-bold text-center uppercase mb-4">Tu carrito</h1>
			<table className='table-auto w-full text-center border border-collapse'>
				<thead className="bg-gray-700">
					<tr>
						<th className="px-4 py-2 text-white border" >#</th>
						<th className="px-4 py-2 text-white border" >Producto</th>
						<th className="px-4 py-2 text-white border">Imagen</th>
						<th className="px-4 py-2 text-white border">Cantidad</th>
						<th className="px-4 py-2 text-white border">Precio</th>
						<th className="px-4 py-2 text-white border">Subtotal</th>
						<th className="px-4 py-2 text-white border">Borrar producto</th>
					</tr>
				</thead>
				<tbody className="table-auto">
					{cart.map((item, index) => {
						return (
							<React.Fragment key={index}>
								<tr>
									<th className="px-4 py-2 font-medium border">{index}</th>
									<td className="px-4 py-2 font-medium border">
										<Link href={`/productos/detail/${item.title}`}>
											{item.title}
										</Link>
									</td>
									<td className="px-4 py-2 font-medium border">
										<Image
											alt={item.title}
											src={item.image}
											width={50}
											height={50}
											style={{ objectFit: "contain" }}
										/>
									</td>
									<td className="px-4 py-2 font-medium border">{item.quantity}</td>
									<td className="px-4 py-2 font-medium border">{item.price}</td>
									<td className="px-4 py-2 font-medium border">{item.subtotal1}</td>
									<td className="px-4 py-2 font-medium border">
										<button onClick={() => removeItem(item._id)} className="text-bold bg-red-600 text-white p-2 rounded">X</button>
									</td>
								</tr>
							</React.Fragment>
						);
					})}
					<tr>
						<th></th>
						<td className="px-4 py-2 font-medium border"></td>
						<td className="px-4 py-2 font-medium border"></td>
						<td className="px-4 py-2 font-medium border">Cantidad productos: {itemsInCart()}</td>
						<td className="px-4 py-2 font-medium border"></td>
						<td className="px-4 py-2 font-medium border">Total: ${totalCart()}</td>
						<td className="px-4 py-2 font-medium border"></td>
					</tr>
				</tbody>
			</table>
			<div className="flex justify-center">
				<Button className="mt-9" ><Link href={`/buy`}>Comprar</Link></Button>
			</div>
		</div>
	);
}

export default CartTable;
