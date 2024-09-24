import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="mr-28 px-6 hover:bg-violet-400" key={route.id}>
            <a href={`route.path`}> {route.name}</a>

        </li>)
    
};
//prototypes

Link.propTypes = {
    route: PropTypes.object
}


export default Link;