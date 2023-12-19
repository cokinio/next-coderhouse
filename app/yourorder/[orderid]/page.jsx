import React from "react";
import Link from "next/link";
import Image from "next/image";

const page = async ({ params }) => {
	let orderId = params.orderid;
	let carrito;
	try {
		let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/cart/${orderId}`);
		let cart = await res.json();
		carrito = cart[0];
		console.log(cart);
	} catch (error) {
		console.log(error);
	}

	return (
		<div>
			<h1 className="mt-6 text-center text-2xl font-bold">
				Estimado {carrito.nombre} {carrito.apellido} su número de orden
				es {orderId} y posee los siguientes productos:
			</h1>

			<div className="rounded-t-xl overflow-hidden p-10">
				<table className="table-auto w-full text-center border border-collapse">
					<thead className="bg-gray-700">
						<tr>
							<th className="px-4 py-2 text-white border">#</th>
							<th className="px-4 py-2 text-white border">
								Producto
							</th>
							<th className="px-4 py-2 text-white border">
								Imagen
							</th>
							<th className="px-4 py-2 text-white border">
								Cantidad
							</th>
							<th className="px-4 py-2 text-white border">
								Precio
							</th>
						</tr>
					</thead>
					<tbody className="table-auto">
						{carrito.products.map((item, index) => {
                            console.log(item.pid)
							return (
								<React.Fragment key={index}>
									<tr>
										<th className="px-4 py-2 font-medium border">
											{index}
										</th>
										<td className="px-4 py-2 font-medium border">
											<Link
												href={`/productos/detail/${item.pid.title}`}
											>
												{item.pid.title}
											</Link>
										</td>
										<td className="px-4 py-2 font-medium border">
											<Image
												alt={item.pid.title}
												src={item.pid.image}
												width={50}
												height={50}
												style={{ objectFit: "contain" }}
											/>
										</td>
										<td className="px-4 py-2 font-medium border">
											{item.quantity}
										</td>
										<td className="px-4 py-2 font-medium border">
											{item.pid.price}
										</td>
									</tr>
								</React.Fragment>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default page;
