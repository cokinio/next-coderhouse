import mongoose from "mongoose";

const cartsCollection = "carts";

const stringTypeSchemaNonUniqueNonRequired = {
	type: String
};

const numberTypeSchemaNonUniqueNonRequired = {
	type: Number
};

const typePid ={
	pid:{
	   type:mongoose.Schema.Types.ObjectId,
		ref:"products",
	},
	quantity:numberTypeSchemaNonUniqueNonRequired
}

const cartsSchema = new mongoose.Schema({
	apellido:String,
	nombre: String,
	email: String,
	products: [
        {
        type:typePid,
        }
    ]
});

cartsSchema.pre('findOne', function() {
    this.populate('products.pid');
});

export default mongoose.models[cartsCollection] ||
	mongoose.model(cartsCollection, cartsSchema);
