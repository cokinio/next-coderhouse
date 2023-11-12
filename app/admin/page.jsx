import React from "react";
import {mockData} from "@/data/diet";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div className="rounded-t-xl overflow-hidden p-10">
            <h1 className="font-7xl font-bold uppercase text-center my-2"> Panel de administración</h1>
            <div className="flex justify-end my-3">
                <button className="m-5 bg-green-400 font-xl p-3 rounded-xl ">+ Nuevo producto</button>
            </div>
			<table className='table-auto w-full text-center border border-collapse'>
				<thead className="bg-gray-700">
					<tr>
						<th className="px-4 py-2 text-white border" >#</th>
						<th className="px-4 py-2 text-white border" >Producto</th>
						<th className="px-4 py-2 text-white border">categoria</th>
						<th className="px-4 py-2 text-white border">stock</th>
						<th className="px-4 py-2 text-white border">Precio</th>
                        <th className="px-4 py-2 text-white border">Imagen</th>
						<th className="px-4 py-2 text-white border">Panel</th>
					</tr>
				</thead>
				<tbody className="table-auto">
					{mockData.map((item, index) => {
						return (
							<React.Fragment key={index}>
								<tr>
									<th className="px-4 py-2 font-medium border">{index}</th>
									<td className="px-4 py-2 font-medium border">
										<Link href={`/productos/detail/${item.Title1}`}>
											{item.Title1}
										</Link>
									</td>
                                    <td className="px-4 py-2 font-medium border">{item.Field3}</td>
									<td className="px-4 py-2 font-medium border">50</td>
									<td className="px-4 py-2 font-medium border">{item.Price1}</td>
                                    <td className="px-4 py-2 font-medium border">
                                        <div className="flex items-center justify-center">
                                            <Image
                                                alt={item.Title1}
                                                src={item.Image1}
                                                width={50}
                                                height={50}
                                                style={{ objectFit: "contain" }}
                                            />
                                        </div>
									</td>
									<td className="px-4 py-2 font-medium border flex justify-items-center justify-around">
										<button className="text-bold bg-red-700 text-white p-2 rounded">Borrar</button>
                                        <button className="text-bold bg-slate-700 text-white p-2 rounded">Editar</button>
									</td>
								</tr>
							</React.Fragment>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}


export default page