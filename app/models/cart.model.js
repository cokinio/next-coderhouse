import mongoose from "mongoose";

const cartsCollection = "carts";

const stringTypeSchemaNonUniqueRequired = {
	type: String,
	required: true,
};

const numberTypeSchemaNonUniqueRequired = {
	type: Number,
	required: true,
};

const typePid ={
	pid:{
	   type:mongoose.Schema.Types.ObjectId,
		ref:"products",
	},
	quantity:numberTypeSchemaNonUniqueRequired
}

const cartsSchema = new mongoose.Schema({
	apellido: stringTypeSchemaNonUniqueRequired,
	nombre: stringTypeSchemaNonUniqueRequired,
	email: stringTypeSchemaNonUniqueRequired,
	products: [
        {
        type:typePid,
        }
    ]
});

export default mongoose.models[cartsCollection] ||
	mongoose.model(cartsCollection, cartsSchema);
