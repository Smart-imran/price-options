import PropTypes from "prop-types";
import { FaCircleCheck } from "react-icons/fa6";

const Feature = ({featureParam}) => {
    return (
        <div>
            <p className="flex items-center "> <FaCircleCheck className="text-orange-600 mr-4" />{featureParam}</p>
        </div>
    );
};

Feature.protoTypes = {

    Feature: PropTypes.string
}

export default Feature;