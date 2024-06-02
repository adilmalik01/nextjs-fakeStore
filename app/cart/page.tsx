"use client";
import { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import Navbar from "../../app/component/navbar";
import { CounterContext } from "@/context/cartContext";

const CartPage: NextPage = () => {
    const { state, dispatch } = useContext(CounterContext);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const removeFromCart = (productId: string) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: { id: productId } });
    };

    if (!mounted) {
        return null; // Or a loading spinner
    }

    let totalPrice = state.cart.reduce((total: number, item: any) => {
        return total + item.price;
    }, 0);
    console.log(totalPrice);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
                {state.cart.length === 0 ? (
                    <div className="text-center text-gray-500">
                        Your cart is empty.
                    </div>
                ) : (
                    <div className="bg-white min-h-[64vh] flex flex-col justify-between shadow sm:rounded-lg">
                        <div className="relative overflow-auto">
                            <ul className="divide-y divide-gray-200">
                                {state.cart.map((product: any, _index) => (
                                    <li key={product.id} className="px-4 py-5 sm:px-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <img
                                                    className="h-16 w-16 rounded-md object-cover"
                                                    src={product.image} // Adjust the image URL accordingly
                                                    alt={product.title}
                                                />
                                                <div className="ml-4">
                                                    <div className="text-lg font-medium text-gray-900">
                                                        {product.title}
                                                    </div>
                                                    <div className="text-sm text-gray-500">${product.price}</div>
                                                </div>
                                            </div>
                                            <div>
                                                <button
                                                    onClick={() => removeFromCart(product.id)}
                                                    className="text-red-600 hover:text-red-900"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="px-4 py-4  sm:px-6 flex justify-between  items-center">
                            <div className="flex items-center gap-1">
                                <h1 className=" text-2xl font-semibold">
                                    Total  Price :
                                </h1>
                                <span className=" text-red-900">
                                    <h1 className="text-2xl font-semibold">
                                        ${totalPrice}
                                    </h1>
                                </span>
                            </div>
                            <div className="">
                                <button className="bg-blue-600 w-[300px] text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700">
                                    <a href="/checkout">Details</a>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default CartPage;
