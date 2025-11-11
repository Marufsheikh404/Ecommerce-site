import { useState } from "react";
import ProductCard from "../../Components/SharedComponents/ProductCard";
import useData from "../../Hooks/useData";


const Shop = () => {
    const { products, categories } = useData();
    const [id, setId] = useState();

    const handleClick =(id)=>{
        setId(id)
    }

    const filterID = id? products.filter(p => p.categoryId== id) : products;
    return (
        <div className="container mx-auto px-4">
            <div className='grid grid-cols-12'>
                <div className='col-span-2 p-5 my-3 bg-[#ffffff] shadow-xl rounded-sm'>
                    <div className="flex flex-col gap-5 ">
                        <h1 className="text-lg font-semibold border-2 border-gray-200 px-2">Category</h1>
                        {
                            categories.map(item => (
                                <div onClick={()=>handleClick(item.id)} className="flex items-center gap-3 px-2 shadow-2xl text-xs  rounded-md text-[#5CAF90] font-semibold">
                                    <input type="checkbox" />
                                    {item.name}
                                </div>
                            ))
                        }
                    </div>

                </div>
                <div className='col-span-10'>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-5">
                        {
                            filterID
                            .map(d=> <ProductCard key={d.id} products={d}></ProductCard>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Shop;