import mongoose from 'mongoose';

const productsCollection = 'products';

const stringTypeSchemaUniqueRequired = {
    type: String,
    unique: true,
    required: true
};

const stringTypeSchemaNonUniqueRequired = {
    type: String,
    required: true
};

const stringTypeSchemaNonUniqueNonRequired = {
    type: String
};

const stringTypeSchemaNonUniqueNonRequiredDefault = {
    type: String,
    default: "/"
};


const numberTypeSchemaNonUniqueRequired = {
    type: Number,
    required: true
};
const booleanTypeSchemaNonUniqueRequired = {
    type: Boolean,
    required: true
};

const productSchema = new mongoose.Schema({
    Title1: stringTypeSchemaNonUniqueRequired,
    Image1:stringTypeSchemaNonUniqueRequired,
    Price1: stringTypeSchemaNonUniqueRequired,
    Field3:stringTypeSchemaNonUniqueRequired,
});

export default mongoose.models[productsCollection] || mongoose.model(productsCollection,productSchema);