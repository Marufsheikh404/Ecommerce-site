
import useData from '../../../Hooks/useData';

const HomoCategory = () => {
    const {categories} = useData();
    return (
        <div className='flex items-center gap-5 my-4 container mx-auto px-4'>
            {
                categories.map(category => (
                    <div key={category.id} className="bg-gray-200 w-96 shadow-sm rounded-lg">
                        <figure className="px-10 pt-10">
                            <img
                                src={category.image}
                                alt="Shoes"
                                className="rounded-xl w-16 h-10 object-contain hover:-translate-y-3 transition-all duration-300" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-sm">{category.name}</h2>
                            <p className='ct'>{category.items} Items</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default HomoCategory;