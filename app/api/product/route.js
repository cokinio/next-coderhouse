import { NextRequest, NextResponse } from "next/server";
import productsModel from "@/app/models/products.model";
import { mongoInstance } from "@/lib/mongoDB";

export async function POST(req) {
	try {
		mongoInstance();
		let product = await req.json();
		console.log(product);
		let { title, image, price, category, stock } = product;

		if (!title || !image || !price || !category || !stock) {
			return NextResponse.json(
				{ error: "Error: fatan datos para crear producto" },
				{ status: 400 }
			);
		}

		let wasProductAddedSuccesfully = await productsModel.create(product);
		return NextResponse.json({
			status: "Success",
			message: `Producto agregado con exito con ID:${wasProductAddedSuccesfully}`,
		});
	} catch (error) {
		console.error(error);
		return NextResponse.json({ error: "Error" }, { status: 500 });
	}
}

