import PropTypes from "prop-types";
import Feature from "../Feature/Feature";


const PriceOption = ({ option }) => {

    const { name, price, features } = option;
    return (

        <div className="bg-blue-600 rounded-md p-2 flex flex-col text-white font-bold text-center2">
            <h1 className="text-center">
                <span className="text-5xl">{price}</span>
                <span className="text-2xl">/mon</span>
            </h1>
            <h4 className="text-3xl text-center my-8">{name}</h4>
            <div className="pl-6 flex-grow">
                {
                    features.map((feature, index) => <Feature key={index} featureParam={feature}></Feature>)
                }
            </div>

            <button className="mt-12 bg-red-500 w-full font-bold rounded-lg py-2 hover:bg-red-300">Buy Now</button>

        </div>
    );
};


PriceOption.protoTypes = {

    option: PropTypes.object
}

export default PriceOption;