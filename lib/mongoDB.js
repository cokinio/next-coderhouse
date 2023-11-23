import mongoose from 'mongoose';

export default class MongoSingleton {
    static #instance;

    constructor() {
        this.#connectMongoDB();
    }

    static getInstance() {
        if (this.#instance) {
           console.log("Ya se ha generado una conexion con Mongo!!");
        } else {
            this.#instance = new MongoSingleton();
        }
        return this.#instance;
    }

    #connectMongoDB = async () => {
        try {
            //await mongoose.connect(config.mongoUrl);
            await mongoose.connect(process.env.MONGO_URL);
            console.log("Conectado con exito a la DB");
        } catch (error) {
            console.log("No se pudo conectar a la BD usando Moongose: " + error)
        }
    }
}

export const mongoInstance = async () => {
    try {
        await MongoSingleton.getInstance();
    } catch (error) {
        console.log(error);
    }
};
