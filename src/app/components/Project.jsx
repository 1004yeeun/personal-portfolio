import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function Project({ name, description }) {
    return (
        <div className="rounded-2xl shadow-md p-6 bg-white hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{name}</h2>
            <h2 className="text-black">{description}</h2>
        </div>
    );
};