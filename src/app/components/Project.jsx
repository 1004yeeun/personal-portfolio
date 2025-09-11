import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function Project({ name, description, image, tech = [], skill = [] }) {
    return (
        <div className="rounded-2xl shadow-md p-4 bg-white hover:shadow-xl transition">
            <div className="flex flex-col items-center md:flex-row md:items-center gap-3">
                <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-1 text-black">{name}</h2>
                    <p className="text-black">{description}</p>

                    <div className="flex flex-wrap gap-1 mb-1 pt-4">
                        {tech.map((t, i) => (
                            <span
                                key={i}
                                className="px-2 py-1 text-sm bg-[#e7e6e4] text-[#353433bd] rounded-full"
                            >
                                {t}
                            </span>
                        ))}
                        {skill.map((s, j) => (
                            <span
                                key={j}
                                className="px-2 py-1 text-sm bg-[#cfcdc8] text-[#5a5956bd] rounded-full"
                            >
                                {s}
                            </span>
                        ))}
                    </div>
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