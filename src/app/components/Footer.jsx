import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="flex justify-center gap-6 mb-8 text-3xl pt-3 pb-10">
            <a href="https://github.com/1004yeeun" target="_blank" className="text-black hover:text-[#93908c] transition">
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/joycejeoung" target="_blank" className="text-black hover:text-[#93908c] transition">
                <FaLinkedin />
            </a>
            <a href="mailto:joycejeoung@ucla.edu" className="text-black hover:text-[#93908c] transition">
                <FaEnvelope />
            </a>
        </div>
    );
};

export default Footer;