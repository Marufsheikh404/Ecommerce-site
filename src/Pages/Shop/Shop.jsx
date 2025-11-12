import { useState } from "react";
import ProductCard from "../../Components/SharedComponents/ProductCard";
import useData from "../../Hooks/useData";
import { Link } from "react-router";

const Shop = () => {
    const { products, categories } = useData();
    const [id, setId] = useState();
    const [width, setWidth] = useState();

    const handleClick = (id) => {
        setId(id);
    };

    const handleWidth = (p) => {
        setWidth(p);
    };

    const filterID = products.filter((p) => {
        const matchCategory = id ? p.categoryId == id : products;
        const matchWidth = width ? p.width == width : products;
        return matchCategory && matchWidth;
    });

    return (
        <div className="container mx-auto px-4">
          
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
               
                <div className="lg:col-span-2 p-5 my-3 bg-white shadow-xl rounded-sm">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-lg font-semibold border-2 border-gray-200 px-2">
                            Category
                        </h1>
                        {categories.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => handleClick(item.id)}
                                className="flex items-center gap-3 px-2 shadow-2xl text-xs rounded-md text-[#5CAF90] font-semibold cursor-pointer"
                            >
                                <input type="checkbox" />
                                {item.name}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-5 mt-8">
                        <h1 className="text-lg font-semibold border-2 border-gray-200 px-2">
                            Width
                        </h1>
                        {[...new Set(products.map((p) => p.width))].map((p) => (
                            <div
                                key={p}
                                onClick={() => handleWidth(p)}
                                className="flex items-center gap-3 px-2 shadow-2xl text-xs rounded-md text-[#5CAF90] font-semibold cursor-pointer"
                            >
                                <input type="checkbox" />
                                {p}
                            </div>
                        ))}
                    </div>
                </div>


                <div className="lg:col-span-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6">
                        {filterID.map((d) => (
                            <ProductCard key={d.id} products={d}></ProductCard>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
