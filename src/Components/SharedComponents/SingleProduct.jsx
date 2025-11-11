import { IoIosStarHalf } from 'react-icons/io';
import useData from '../../Hooks/useData';
import { useLocation } from 'react-router';

const SingleProduct = () => {
    const location = useLocation();
    const id = location.state;
    const { products } = useData();
    const findProducts = products.find(p => p.id == id)
    return (
        <div>
            <div className='container mx-auto px-4'>
                <div className="card lg:card-side bg-base-100 shadow-sm">
                    <figure className='h-120'>
                        <img
                            src={findProducts?.image}
                            alt={findProducts?.name}
                        />
                    </figure>
                    <div className="card-body ml-20 mt-15">
                        <h2 className="card-title text-xl text-[#4B5966]">{findProducts?.name}</h2>
                        <div className='flex items-center w-45'>
                            <p className='text-orange-300 flex items-center'> <IoIosStarHalf />
                                <IoIosStarHalf />
                                <IoIosStarHalf />
                                <IoIosStarHalf />
                            </p>
                            <p>|</p>
                            <p className='ct'>{findProducts?.ratings} Rating</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='flex items-center justify-between w-full'>
                                <h1 className='text-lg text-[#4B5966] font-semibold'>${findProducts?.price}</h1>
                                <h1 className='cts line-through mr-88'>${findProducts?.mrp}</h1>
                                <h1 className='text-lg text-[#4B5966] font-semibold'>SKU#:WH12</h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='cts'>M.R.P: <span className='line-through'>$2999.0</span></p>
                            <p className='text-[#5CAF90] ml-83'>{findProducts?.stock}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;