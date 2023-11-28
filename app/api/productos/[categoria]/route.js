import { NextResponse } from "next/server"
import productsModel from "@/app/models/products.model";
import {mongoInstance} from "@/lib/mongoDB"

export async function GET(_, { params }) {
    mongoInstance();
    const { categoria } = params;
    let products={};
    if (categoria === 'todos') {
        products = await productsModel.find()
    }else{
        products = await productsModel.find({category:categoria})
    }

    return NextResponse.json(products)
}

