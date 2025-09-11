import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function Project({ name, description, image }) {
    return (
        <div className="rounded-2xl shadow-md p-4 bg-white hover:shadow-xl transition">
            <div className="flex flex-col items-center md:flex-row md:items-center gap-3">
                <div className="flex-1">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <h2 className="text-black">{description}</h2>
                </div>
                <div className="md:ml-2 shrink-0">
                    <div className="relative w-50 h-50 md:w-60 md:h-60 rounded-xl overflow-hidden">
                        <Image
                            src={image}
                            alt={name}
                            width={400}
                            height={400}
                            className="rounded-lg object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};