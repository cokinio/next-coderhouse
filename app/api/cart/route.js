import { NextRequest, NextResponse } from "next/server";
import cartsModel from "@/app/models/cart.model";
import { mongoInstance } from "@/lib/mongoDB";

export async function POST(req) {
	try {
		mongoInstance();

        
		let buyOrder = await req.json();
		console.log(buyOrder);
		let { apellido, nombre, email,products } = buyOrder;

		if (!apellido || !nombre || !email || !products) {
			return NextResponse.json(
				{ error: "Error: fatan datos para crear producto" },
				{ status: 400 }
			);
		}

		let wasCartAddedSuccesfully = await cartsModel.create(buyOrder);
		console.log(wasCartAddedSuccesfully)
		return NextResponse.json({
			status: "Success",
			message: `Producto agregado con exito con ID: ${wasCartAddedSuccesfully._id}`,
			id:  `${wasCartAddedSuccesfully._id}`
		});
	} catch (error) {
		console.error(error);
		return NextResponse.json({ error: error  }, { status: 500 });
	}
}

