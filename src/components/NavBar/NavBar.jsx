import { useState } from "react";
import Link from "../DaisyNav/Link";
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";


const NavBar = () => {

    const [open, setOpen] = useState(false);


    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/contact", name: "Contact" },
        { id: 4, path: "/blog", name: "Blog" },
        { id: 5, path: "*", name: "NotFound" }
    ];


    return (
        <nav className="text-black bg-yellow-200 p-8">
            <div className="md:hidden text-2xl" onClick={()=>setOpen(!open)}>

                {
                    open === true ? <AiOutlineClose/> : <IoMenu/>
                   
                }
               
            </div>
            <ul className={`md:flex duration-1000 absolute md:static
                
                ${open ? 'top-16' : '-top-60'}

                bg-yellow-200 px-8`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }

            </ul>
        </nav>
    );
};

export default NavBar;