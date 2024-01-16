import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const currentYear = () => {
    let currentTime = new Date();
    return currentTime.getFullYear();
};

const Footer = () => {
    return (
        <footer className="bg-body-tertiary text-center py-3 footer">
            <div>
                <p className="mb-0 text-muted">
                    &copy; {currentYear()} Youssef Mohamed
                </p>
            </div>
            <div className="mt-2">
                <a
                    href="https://www.linkedin.com/in/youssefmo7amed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted me-3"
                >
                    <FaLinkedin size={24} />
                </a>
                <a
                    href="https://github.com/youssefmo7amed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted"
                >
                    <FaGithub size={24} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
