import dotenv from 'dotenv';

const environment = "development";

dotenv.config({
    path: environment === "production" ? "../config/.env.production" : "../config/.env.development"
});

export default {
    environment:environment,
    mongoUrl: process.env.MONGO_URL
};