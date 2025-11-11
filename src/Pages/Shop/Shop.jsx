import { useState } from "react";
import ProductCard from "../../Components/SharedComponents/ProductCard";
import useData from "../../Hooks/useData";


const Shop = () => {
    const { products, categories } = useData();
    const [id, setId] = useState();
    const [width, setWidth] = useState();

    const handleClick = (id) => {
        setId(id)
    }

    const handleWidth = (p) => {
        setWidth(p)
    }

    const filterID = products.filter(p =>{
        const matchCategory = id? p.categoryId == id : products;
        const matchWidth = width ? p.width == width : products;
        return matchCategory && matchWidth
    });
    return (
        <div className="container mx-auto px-4">
            <div className='grid grid-cols-12'>
                <div className='col-span-2 p-5 my-3 bg-[#ffffff] shadow-xl rounded-sm'>
                    <div className="flex flex-col gap-5 ">
                        <h1 className="text-lg font-semibold border-2 border-gray-200 px-2">Category</h1>
                        {
                            categories.map(item => (
                                <div onClick={() => handleClick(item.id)} className="flex items-center gap-3 px-2 shadow-2xl text-xs  rounded-md text-[#5CAF90] font-semibold">
                                    <input type="checkbox" />
                                    {item.name}
                                </div>
                            ))
                        }
                    </div>

                    <div className="flex flex-col gap-5 ">
                        <h1 className="text-lg font-semibold border-2 border-gray-200 px-2 mt-18">Width</h1>
                        {
                            [...new Set(products.map(p => p.width))].map(p => (
                                <div onClick={() => handleWidth(p)} className="flex items-center gap-3 px-2 shadow-2xl text-xs  rounded-md text-[#5CAF90] font-semibold">
                                    <input type="checkbox" />
                                    {p}
                                </div>
                            ))
                        }
                    </div>

                </div>
                <div className='col-span-10 '>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-10 ml-10 gap-5">
                        {
                            filterID
                                .map(d => <ProductCard key={d.id} products={d}></ProductCard>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Shop;