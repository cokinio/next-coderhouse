import React from "react";
import Link from "next/link";
import Image from "next/image";
import BotonEliminar from "@/components/admin/BotonEliminar";
import BotonLogouot from "@/components/admin/BotonLogout";


const page = async () => {

	let items=[{}];
	
	try{
		let res = await fetch(`http://localhost:3000/api/productos/todos`, {
			cache: 'no-store'
		})
		items= await res.json()
	}catch(error){
		console.log(error)
	}

  return (
    <div className="rounded-t-xl overflow-hidden p-10">
            <h1 className="font-7xl font-bold uppercase text-center my-2"> Panel de administración</h1>
            <div className="flex justify-end my-3">
			<BotonLogouot>Logout</BotonLogouot>
			<Link href={`/admin/create`} > <button className="m-5 bg-green-400 font-xl p-3 rounded-xl ">+ Nuevo producto</button></Link>
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
					{items.map((item, index) => {
						return (
							<React.Fragment key={index}>
								<tr>
									<th className="px-4 py-2 font-medium border">{index}</th>
									<td className="px-4 py-2 font-medium border">
										<Link href={`/productos/detail/${item.title}`}>
											{item.title}
										</Link>
									</td>
                                    <td className="px-4 py-2 font-medium border">{item.category}</td>
									<td className="px-4 py-2 font-medium border">{item.stock}</td>
									<td className="px-4 py-2 font-medium border">{item.price}</td>
                                    <td className="px-4 py-2 font-medium border">
                                        <div className="flex items-center justify-center">
                                            <Image
                                                alt={item.title}
                                                src={item.image}
                                                width={50}
                                                height={50}
                                                style={{ objectFit: "contain" }}
                                            />
                                        </div>
									</td>
									<td className="px-4 py-2 font-medium border flex justify-items-center justify-around">
										<BotonEliminar item={item}>Borrar</BotonEliminar>
                                        <Link href={`/admin/edit/${item.title}`}>  <button className="text-bold bg-slate-700 text-white p-2 rounded">Editar</button></Link>
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