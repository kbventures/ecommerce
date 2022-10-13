import mongoose from 'mongoose';

export interface IProduct extends mongoose.Document {
    id: string,
    inventory:Number,
    title: string,
    desc: string,
    longDesc: string,
    fullDesc: string,
    price:Number,
    src:string,
    promo:string
    createdAt: Date,
    updatedAt: Date,
}

const ProductSchema = new mongoose.Schema({

    id: {
        type: String,
        required: true
    },

    inventory: {
        type: Number,
        required: true
    },

    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },

    longDesc: {
        type: String,
        required: true
    },
    fullDesc: {
        type: String,
    },

    price: {
        type: Number,
        required: true
    },

    src: {
        type: String,
        required: true,
    },
    promo: {
        type: String,
        default: ""
    },
}, {
    timestamps: true
});

const Product = mongoose.model<IProduct>("Product", ProductSchema);

export default Product;