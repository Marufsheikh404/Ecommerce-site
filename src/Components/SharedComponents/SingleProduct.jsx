import { IoIosStarHalf } from 'react-icons/io';
import useData from '../../Hooks/useData';
import { useLocation } from 'react-router';
import { GiSelfLove } from 'react-icons/gi';
import { IoEyeOutline } from 'react-icons/io5';
import useAuth from '../../Hook/useAuth';
import toast, { Toaster } from 'react-hot-toast';

const SingleProduct = () => {
    const { handleAddCard, ProductCount, handleIncrease, handleDecrease, handleWish } = useAuth();
    const location = useLocation();
    const id = location.state;
    const { products } = useData();
    const findProducts = products.find(p => p.id == id)
    const notify = () => toast.success('Your Card is Added', {
        style: {
            background: '#5CAF90',
            color: '#fff',          
        },
        icon: '✅',
    });
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
                    <div className="card-body ml-20 mt-10">
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
                                <h1 className='text-lg text-[#4B5966] font-semibold'>SKU#:{findProducts?.sku}</h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='cts'>M.R.P: <span className='line-through'>$2999.0</span></p>
                            <p className='text-[#5CAF90] ml-83'>{findProducts?.stock}</p>
                        </div>
                        <div className='my-3 cts'>
                            <p>{findProducts?.description}</p>
                        </div>
                        <div className='-mt-4'>
                            <div className='ct ml-5'>
                                <li>closure : {findProducts?.closure}</li>
                                <li>sole : {findProducts?.sole}</li>
                                <li>width : {findProducts?.width}</li>
                                <li>outerMaterial : {findProducts?.outerMaterial}</li>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-[#202020] font-semibold'>Weight</h1>
                            <div className='flex items-center gap-3 mt-1'>
                                {
                                    findProducts?.weightOptions?.map((w, inx) => (
                                        <div key={inx}>
                                            <button className='btn btn-xs bg-[#5CAF90]'>{w}</button>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='flex items-center justify-between w-80 my-4'>
                            <div className='flex items-center gap-3  px-6 py-1'>
                                <button className='btn btn-xs' onClick={() => handleDecrease(findProducts.id)}>-</button>
                                <p>{ProductCount}</p>
                                <button className='btn btn-xs' onClick={() => handleIncrease(findProducts.id)}>+</button>
                            </div>
                            <div>
                                <button onClick={() => { handleAddCard(findProducts); notify(); }} className='btn btn-xs bg-[#4B5966] text-white hover:bg-[#449a7b] transition duration-300 ease-in-out'>ADD TO CARD</button>
                                <Toaster />
                            </div>
                            <div className='flex items-center gap-5'>
                                <p onClick={() => handleWish(findProducts.id)} className='hover:bg-[#5CAF90] rounded-md px-2 py-2 transition duration-300 ease in'> <GiSelfLove /></p>
                                <p className='hover:bg-[#5CAF90] rounded-md px-2 py-2 transition duration-300 ease in'><IoEyeOutline /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;