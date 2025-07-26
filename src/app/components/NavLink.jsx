const { default: Link } = require("next/link");

const NavLink = ({ href, title }) => {
    return (
        <Link
            href={href}
            className="block py-1 pl-3 pr-3 text-black rounded-3xl text-1xl hover:text-white hover:bg-black"
        >
            {title}
        </Link>
    );
};

export default NavLink;