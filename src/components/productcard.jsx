// write product card here
// eslint-disable-next-line no-unused-vars
import React from "react";
import ViewProductButton from "../components/button";

const Productcard = () => {
    // Static product details
    const productImage = "https://via.placeholder.com/150";
    const productName = "Sample Product";
    const productPrice = "$29.99";

    return (
        <div className="border rounded-lg shadow-md p-4 w-60 bg-white">
            <img src={productImage} alt={productName} className="w-full h-40 object-cover rounded-md" />
            <h2 className="text-lg font-semibold mt-2">{productName}</h2>
            <p className="text-gray-700 font-medium">{productPrice}</p>
            <div className="mt-3">
                <ViewProductButton />
            </div>
        </div>
    );
};

export default Productcard;

