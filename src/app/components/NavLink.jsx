import useClickSound from "../hooks/useClickSound"; 

const { default: Link } = require("next/link");

const NavLink = ({ href, title }) => {
    const playClick = useClickSound();
    
    return (
        <Link
            href={href}
            onClick={playClick}
            className="block py-1 pl-3 pr-3 text-black rounded-3xl text-1xl hover:text-white hover:bg-black"
        >
            {title}
        </Link>
    );
};

export default NavLink;