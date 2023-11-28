import { NextResponse } from "next/server"
import productsModel from "@/app/models/products.model";
import {mongoInstance} from "@/lib/mongoDB"

export async function GET(_, { params }) {
    mongoInstance();
    const { slug } = params;
    let product = await productsModel.find({title:slug})
    return NextResponse.json(product)
}


