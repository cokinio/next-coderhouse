import { NextResponse } from "next/server"
import productsModel from "@/app/models/products.model";
import {mongoInstance} from "@/lib/mongoDB"

export async function GET(_, { params }) {
    mongoInstance();
    const { slug } = params;
    let product = await productsModel.find({title:slug})
    return NextResponse.json(product)
}

export async function PUT(req,{ params }) {
	try {
		mongoInstance();
		const { slug } = params;
		let product = await req.json();
        console.log(product)
		let searchedObject = await productsModel.find({title:slug});
        console.log(searchedObject)
		if (searchedObject != undefined) {
			await productsModel.updateOne({ title:slug }, product);
            return NextResponse.json({
				status: "Success",
			    message: "Producto modicado exito"
        });
		} else {
			return NextResponse.json(
				{ error: "Error:producto no encontrado" },
				{ status: 500 }
			);
		}
	} catch (error) {
		console.error(error);
		return NextResponse.json({ error: "Error" }, { status: 500 });
	}
}


export async function DELETE(req,{ params }) {
	try {
		mongoInstance();
		const { slug } = params;
		let deletedObject = await productsModel.deleteOne({title:slug});
		if (deletedObject != undefined) {
            return NextResponse.json({
				status: "Success",
			    message: "Producto eliminado exito"
        });
		} else {
			return NextResponse.json(
				{ error: "Error:producto no encontrado" },
				{ status: 500 }
			);
		}
	} catch (error) {
		console.error(error);
		return NextResponse.json({ error: "Error" }, { status: 500 });
	}
}