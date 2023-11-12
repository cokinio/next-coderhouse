import React from "react";
import {mockCart} from "@/data/cart";
import Link from "next/link";
import Image from "next/image";

function CartTable() {
   
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
					{mockCart.map((item, index) => {
						return (
							<React.Fragment key={index}>
								<tr>
									<th className="px-4 py-2 font-medium border">{index}</th>
									<td className="px-4 py-2 font-medium border">
										<Link href={`/productos/detail/${item.Title1}`}>
											{item.Title1}
										</Link>
									</td>
									<td className="px-4 py-2 font-medium border">
										<Image
											alt={item.Title1}
											src={item.Image1}
											width={50}
											height={50}
											style={{ objectFit: "contain" }}
										/>
									</td>
									<td className="px-4 py-2 font-medium border">{item.cant}</td>
									<td className="px-4 py-2 font-medium border">{item.Price1}</td>
									<td className="px-4 py-2 font-medium border"></td>
									<td className="px-4 py-2 font-medium border">
										<button className="text-bold bg-red-600 text-white p-2 rounded">X</button>
									</td>
								</tr>
							</React.Fragment>
						);
					})}
					<tr>
						<th></th>
						<td className="px-4 py-2 font-medium border"></td>
						<td className="px-4 py-2 font-medium border"></td>
						<td className="px-4 py-2 font-medium border">Cantidad productos:</td>
						<td className="px-4 py-2 font-medium border"></td>
						<td className="px-4 py-2 font-medium border">Total: $</td>
						<td className="px-4 py-2 font-medium border"></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default CartTable;
