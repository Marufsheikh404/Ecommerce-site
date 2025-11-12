
import useData from '../../../Hooks/useData';

const HomoCategory = () => {
    const {categories} = useData();
    return (
        <div className='flex flex-col lg:flex-row items-center gap-5 my-4 container mx-auto px-4'>
            {
                categories.map(category => (
                    <div key={category.id} className="bg-gray-200 lg:w-96 w-90 shadow-sm rounded-lg">
                        <figure className="lg:px-10 lg:pt-10 mt-4 lg:mt-0">
                            <img
                                src={category.image}
                                alt="Shoes"
                                className="rounded-xl w-16 lg:h-10 h-8 translate-x-38 lg:translate-x-0 object-cover lg:object-contain hover:-translate-y-3 transition-all duration-300" />
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