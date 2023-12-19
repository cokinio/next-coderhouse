import { NextRequest, NextResponse } from "next/server";
import cartsModel from "@/app/models/cart.model";
import productsModel from "@/app/models/products.model";
import { mongoInstance } from "@/lib/mongoDB";

export async function GET(_,{ params }) {
	console.log(params.id)
	try {
		mongoInstance();
		const { id } = params;
		let cart = await cartsModel.find({ _id: id }).populate("products.pid");
		return NextResponse.json(cart)
	} catch (error) {
		console.error(error);
		return NextResponse.json({ error: error  }, { status: 500 });
	}
}