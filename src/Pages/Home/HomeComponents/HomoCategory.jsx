
import Marquee from "react-fast-marquee";
import useData from "../../../Hooks/useData";

const HomoCategory = () => {
    const { categories } = useData();

    return (
        <div className="my-4 container mx-auto px-4">
            
            <Marquee
                pauseOnHover={true}
                speed={40}
                gradient={true}
                gradientWidth={50}
                className="py-4"
            >
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="flex-none bg-gray-100 w-56 lg:w-72 shadow-sm rounded-lg mx-4 p-4"
                    >
                        <figure className="flex justify-center items-center">
                            <img
                                src={category.image}
                                alt={category.name}
                                className="rounded-xl w-16 h-16 lg:w-20 lg:h-20 object-cover hover:-translate-y-2 transition-transform duration-300"
                            />
                        </figure>

                        <div className="text-center mt-3">
                            <h2 className="text-sm font-medium">{category.name}</h2>
                            <p className="text-xs text-gray-600 mt-1">{category.items} Items</p>
                        </div>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default HomoCategory;
