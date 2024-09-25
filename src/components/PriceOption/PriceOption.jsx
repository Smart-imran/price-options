import PropTypes from "prop-types";


const PriceOption = ({ option }) => {

      const {name,price,features} = option;
    return (
        <div>
           <h1>
            <span className="text-7xl">{price}</span>
            <span className="text-3xl">/mon</span>
           </h1>
        </div>
    );
};


PriceOption.protoTypes = {

    option: PropTypes.object
}

export default PriceOption;